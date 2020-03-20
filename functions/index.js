const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();

const {sendConfirmation, acceptConfirmation, uploadEpisode, uploadTranscript} = require('./handlers');

exports.handleSendConfirmation = functions.https.onRequest(sendConfirmation);
exports.handleAcceptConfirmation = functions.https.onRequest(acceptConfirmation);
exports.handleUploadEpisode = functions.https.onRequest(uploadEpisode);
exports.handleUploadTranscript = functions.https.onRequest(uploadTranscript);
