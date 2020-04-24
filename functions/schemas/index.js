const Joi = require('@hapi/joi');

const types = ['episode', 'bonus-episode', 'trailer', 'transcript'];

const regexComponents = {
  scope: 'tgm',
  contentType: '(' + types.join('|') + ')',
  uuid: '[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}',
}

const idRegex = new RegExp(`^${regexComponents.scope}:${regexComponents.contentType}:${regexComponents.uuid}$`, 'm');

const episode = Joi.object({
  author: Joi.array().items(Joi.string()).min(1),
  description: Joi.string(),
  episode: Joi.number().positive().integer(),
  season: Joi.number().positive().integer(),
  id: Joi.string().regex(idRegex),
  releaseDate: Joi.date().timestamp('unix'),
  slug: Joi.string().regex(/^[a-z0-9-]+$/m),
  spotifyId: Joi.string().regex(/[a-z0-9]+/im),
  title: Joi.string(),
  type: 'episode',
  placement: Joi.string().regex(/(S[0-9]+)(E[0-9]+)?(B[0-9]+)?/),
})

const bonusEpisode = Joi.object({
  author: Joi.array().items(Joi.string()).min(1),
  description: Joi.string(),
  episode: Joi.number().positive().integer(),
  season: Joi.number().positive().integer(),
  id: Joi.string().regex(idRegex),
  releaseDate: Joi.number(),
  slug: Joi.string(),
  spotifyId: Joi.string(),
  title: Joi.string(),
  type: 'bonus-episode',
  afterEpisode: Joi.number().positive().integer(),
  placement: Joi.string().regex(/(S[0-9]+)(E[0-9]+)?(B[0-9]+)?/),
});

const transcript = Joi.object({
  episode: Joi.number().positive().integer(),
  season: Joi.number().positive().integer(),
  id: Joi.string().regex(idRegex),
  relatedContent: Joi.object({
    episodeId: Joi.string().regex(idRegex),
  }),
  body: Joi.string(),
  language: Joi.string().default('en'),
  type: Joi.string().valid(...types),
});

module.exports = {
  episode,
  transcript,
  'bonus-episode': bonusEpisode,
}
