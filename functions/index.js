const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();

const {sendConfirmation, acceptConfirmation, sendMessage, api} = require('./handlers');

exports.api = functions.https.onRequest(api);
exports.handleSendConfirmation = functions.https.onRequest(sendConfirmation);
exports.handleAcceptConfirmation = functions.https.onRequest(acceptConfirmation);
exports.handleSendMessage = functions.https.onRequest(sendMessage);
