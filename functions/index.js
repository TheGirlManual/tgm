const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(functions.config().sendgrid.key);

exports.sendTest = functions.https.onRequest(async (request, response) => {
  const msg = {
    to: 'contact@thegirlmanual.com',
    from: 'no-reply@thegirlmanual.com',
    subject: 'SendGrid Test',
    text: 'Test email for sanity checking',
    html: '<strong>Test email for sanity checking</strong>',
  };

  const res = await sgMail.send(msg);

  return response.json(res)
});
