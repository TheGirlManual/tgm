const admin = require('firebase-admin');
const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const client = require('@sendgrid/client');
const yup = require('yup');

sgMail.setApiKey(functions.config().sendgrid.key);
client.setApiKey(functions.config().sendgrid.key);

const firestore = admin.firestore();

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const uuidSchema = yup.string().matches(uuidRegex);

/**
 * Update an email subscription with a token and add to SendGrid list
 */
const acceptConfirmation = async (request, response) => {
  const { token } = request.query;

  try {
    await uuidSchema.isValid(token);

    const subRequestRef = firestore
      .collection('the-girl-manual-auth')
      .doc(`tgm:sub-request:${token}`);

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

    const [result, ] = await client.request(sgRequest);
    
    console.log(result.body);

    response.status(301).redirect('/confirmation');
  } catch (err) {
    console.error(err.toString());

    response.status(500).end();
  }
}

module.exports = acceptConfirmation;
