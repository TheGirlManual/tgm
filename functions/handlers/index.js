const admin = require('firebase-admin');
const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const client = require('@sendgrid/client');
const yup = require('yup');
const { v4 } = require('uuid');

admin.initializeApp();
sgMail.setApiKey(functions.config().sendgrid.key);
client.setApiKey(functions.config().sendgrid.key);

const authCollection = admin.firestore().collection('the-girl-manual-auth');

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const uuidSchema = yup.string().matches(uuidRegex);

const subscriberSchema = yup.object().shape({
  email: yup.string().email().required(),
  token: uuidSchema.required(),
  listIds: yup.array().of(yup.string()).default([]),
});

const createEmailFor = ({email, token}) => ({
  from: 'no-reply@thegirlmanual.com',
  to: email,
  subject: 'Confirm your sub',
  html: `<a href="https://interactive-coolture.firebaseapp.com/confirm?token=${token}">Confirm your subscription to The Girl Manual :)</a>`  ,
});

/**
 * Receive an email, create a Firestore item with the token and email,
 * then send out a SendGrid email with the token
 */
const sendConfirmation = async (request, response) => {
  response.header('Access-Control-Allow-Origin', '*');

  const { email } = JSON.parse(request.body || '{}');
  const token = v4();

  try {
    const subRequest = await subscriberSchema.validate({email, token});

    const res = await authCollection.doc(`tgm:sub-request:${token}`).set(subRequest);
    const message = createEmailFor(subRequest);

    await sgMail.send(message);

    console.log({email, token, message});

    response.status(200).end();
  } catch (err) {
    console.error(err.toString());

    response.status(500).end();
  }
}

/**
 * Update an email subscription with a token and add to SendGrid list
 */
const acceptConfirmation = async (request, response) => {
  const { token } = request.query;

  try {
    await uuidSchema.isValid(token);

    const subRequestRef = authCollection.doc(`tgm:sub-request:${token}`);

    // DocumentReference.update fails if the document doesn't exist
    await subRequestRef.update({confirmed: true}); 
    
    const subRequest = await subRequestRef.get(); 

    const sgRequest = {
      body: {
        list_ids: subRequest.get('listIds'),
        contacts:[{ email: subRequest.get('email') }],
      },
      method: 'PUT',
      url: '/v3/marketing/contacts'
    };

    const [result, body] = await client.request(sgRequest);
    
    console.log(result.body);

    response.status(result.statusCode).end();
  } catch (err) {
    console.error(err.toString());

    response.status(500).end();
  }
}

module.exports = {
  sendConfirmation,
  acceptConfirmation
};
