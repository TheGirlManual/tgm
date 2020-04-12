const admin = require('firebase-admin');
const yup = require('yup');
const { v4 } = require('uuid');

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
  episode: yup.number().positive().integer().required(),
  season: yup.number().positive().integer().required(),
  id: contentIdSchema.required(),
  body: yup.string().required(),
  language: yup.string().default('en').required(),
  type: yup.mixed().oneOf(types).required(),
});

/**
 * Upload new episode to Firestore
 */
const uploadTranscript = async (request, response) => {
  const body = request.body;
  body.id = `tgm:${body.type}:${v4()}`;
    
  const validated = await contentSchema.validate(body);
  
  const fetchResult = await firestore
    .collection('the-girl-manual')
    .where('episode', '==', validated.episode)
    .where('season', '==', validated.season)
    .get();

  if (fetchResult.empty) {
    response.status(400).send(`No existing document for season ${body.season} episode ${body.episode}`)
  } else {
    const contentId = fetchResult.docs[0].get('id');

    validated.contentId = contentId;

    await firestore.collection('the-girl-manual').doc(validated.id).set(validated);

    response.status(200).json(validated);
  }
}

module.exports = uploadTranscript;
