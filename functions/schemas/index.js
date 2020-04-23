const yup = require('yup');
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const types = ['episode', 'bonus-episode', 'trailer', 'transcript'];

const contentIdSchema = yup.mixed().test({
    name: 'contentId',
    test: function(value) {
      if(!value) return false;

      const [scope, type, uuid] = value.split(':');
      return scope === 'tgm' && types.includes(type) && uuidRegex.test(uuid);
    },
    message: '${path} needs to be a valid uuid',
  });

const episode = yup.object().shape({
  author: yup.array().of(yup.string()).min(1).required(),
  description: yup.string().required(),
  episode: yup.number().positive().integer().required(),
  season: yup.number().positive().integer().required(),
  id: contentIdSchema.required(),
  releaseDate: yup.number().required(),
  slug: yup.string().required(),
  spotifyId: yup.string(),
  title: yup.string().required(),
  type: yup.mixed().oneOf(types).required(),
});

const bonusEpisode = yup.object().shape({
  author: yup.array().of(yup.string()).min(1).required(),
  description: yup.string().required(),
  episode: yup.number().positive().integer().required(),
  season: yup.number().positive().integer().required(),
  id: contentIdSchema.required(),
  releaseDate: yup.number().required(),
  slug: yup.string().required(),
  spotifyId: yup.string(),
  title: yup.string().required(),
  type: yup.mixed().oneOf(types).required(),
  afterEpisode: yup.number().positive().integer().required(),
  placement: yup.number().positive().integer().required(),
});

const transcript = yup.object().shape({
  episode: yup.number().positive().integer().required(),
  season: yup.number().positive().integer().required(),
  id: contentIdSchema.required(),
  relatedContent: yup.object().shape({
    episodeId: contentIdSchema.required(),
  }),
  body: yup.string().required(),
  language: yup.string().default('en').required(),
  type: yup.mixed().oneOf(types).required(),
});

module.exports = {
  episode,
  transcript,
  'bonus-episode': bonusEpisode,
}
