const admin = require('firebase-admin');
const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const client = require('@sendgrid/client');
const yup = require('yup');
const { v4 } = require('uuid');

sgMail.setApiKey(functions.config().sendgrid.key);
client.setApiKey(functions.config().sendgrid.key);

const firestore = admin.firestore();

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const uuidSchema = yup.string().matches(uuidRegex);

const subscriberSchema = yup.object().shape({
  email: yup.string().email().required(),
  token: uuidSchema.required(),
  listIds: yup.array().of(yup.string()).default([]),
});

const createEmailFor = ({email, token}) => ({
  personalizations: [{
    to: [{ email: email }],
    dynamic_template_data: { token: token },
  }],
  from: {
    email: 'no-reply@thegirlmanual.com',
    name: 'Essi'
  },
  reply_to: {
    email: 'no-reply@thegirlmanual.com',
    name: 'Essi'
  },
  template_id: 'd-f281431782f54701a7ea64404ec08ea8',
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

    await firestore
      .collection('the-girl-manual-auth')
      .doc(`tgm:sub-request:${token}`)
      .set(subRequest);

    const message = createEmailFor(subRequest);

    await sgMail.send(message);

    console.log({email, token, message});

    response.status(200).end();
  } catch (err) {
    console.error(err.toString());

    response.status(500).end();
  }
}

module.exports = sendConfirmation;
