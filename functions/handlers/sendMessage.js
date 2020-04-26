const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const yup = require('yup');

sgMail.setApiKey(functions.config().sendgrid.key);

const requestSchema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

const createMessageEmail = ({ name, email, subject, message }) => ({
  personalizations: [{
    to: [{ email: 'contact@thegirlmanual.com' }],
    dynamic_template_data: { name, email, subject, message },
  }],
  from: {
    email: email,
    name: name
  },
  reply_to: {
    email: email,
    name: name
  },
  template_id: 'd-d9e1669f36f5416eaced9b7e2d658c4a',
});

/**
 * Receive an email, create a Firestore item with the token and email,
 * then send out a SendGrid email with the token
 */
const sendConfirmation = async (request, response) => {
  response.header('Access-Control-Allow-Origin', '*');

console.log(request.body)
  const message = JSON.parse(request.body || '{}');

  try {
    const messageRequest = await requestSchema.validate(message);

    const contactRequest = createMessageEmail(messageRequest);

    await sgMail.send(contactRequest);

    console.log(contactRequest);

    response.status(200).end();
  } catch (err) {
    console.error(err.toString());

    response.status(500).end();
  }
}

module.exports = sendConfirmation;
