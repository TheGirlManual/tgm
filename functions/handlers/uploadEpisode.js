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

const contentIdSchema = yup.mixed().test({
    name: 'contentId',
    test: function(value) {
      const [scope, type, uuid] = value.split(':');
      return scope === 'tgm' && types.includes(type) && uuidRegex.test(uuid);
    },
    message: '${path} ${value} needs to be a valid id',
  });

const types = ['episode', 'trailer', 'transcript'];

const contentSchema = yup.object().shape({
  author: yup.array().of(yup.string()).min(1).required(),
  description: yup.string().required(),
  episode: yup.number().positive().integer().required(),
  season: yup.number().positive().integer().required(),
  id: contentIdSchema.required(),
  releaseDate: yup.mixed().transform(function(value) { return (admin.firestore.Timestamp.fromMillis(value)); } ).required(),
  slug: yup.string().required(),
  spotifyId: yup.string(),
  title: yup.string().required(),
  type: yup.mixed().oneOf(types).required(),
});

/**
 * Upload new episode to Firestore
 */
const uploadEpisode = async (request, response) => {
  const body = request.body;
  body.id = `tgm:${body.type}:${v4()}`;

  const validated = await contentSchema.validate(body);

  const fetchResult = await firestore 
    .collection('the-girl-manual')
    .where('season', '==', validated.season)
    .where('episode', '==', validated.episode)
    .get();

  if (!fetchResult.empty) {
    response.status(400).send(`There is already an item for sesaon ${body.season} episode ${body.episode}`);
  } else {
    await firestore
      .collection('the-girl-manual')
      .doc(validated.id)
      .set(validated);

    response.status(200).json(validated);
  }
}

module.exports = uploadEpisode;
