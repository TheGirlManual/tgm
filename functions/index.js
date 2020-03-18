const functions = require('firebase-functions');
const {sendConfirmation, acceptConfirmation} = require('./handlers');

exports.handleSendConfirmation = functions.https.onRequest(sendConfirmation);
exports.handleAcceptConfirmation = functions.https.onRequest(acceptConfirmation);
