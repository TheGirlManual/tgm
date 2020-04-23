const express = require('express');
const merge = require('lodash.merge');
const admin = require('firebase-admin');
const { v4 } = require('uuid');
require('express-async-errors');
const schemas = require('../../schemas');

const firestore = admin.firestore();
const app = express();

const collection = 'the-girl-manual';

const initTransactionData = (req, res, next) => {
  res.locals.batch = firestore.batch();
  res.locals.injected = {
    relatedContent: {}
  };

  next();
}

const commitBatch = async (req, res) => {
  const result = await res.locals.batch.commit() 

  res.json(result);
}

const getDocRef = (collection, id) => firestore.collection(collection).doc(id);

const add = (collection, doc, batch) => batch.set(getDocRef(collection, doc.id), doc);

const update = (collection, doc, batch) => batch.update(getDocRef(collection, doc.id), doc);

// const remove = (collection, doc, batch) => batch.deleteset(getDocRef(collection, doc.id), doc);

const validatePartial = (data, schema) => validate(data, schema, true);

const validate = (data, schema, partial) =>
  schema.validate(data, {abortEarly: false, stripUnknown: true, context: {partial: !!partial}});

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  res.json({ message: error.message });
}

const setPlacement = () => (req, res, next) => {
  const {episode, season, afterEpisode, contentType} = res.locals.lastDoc;
  let placement = '';

  placement += `S${season}`;

  switch(contentType) {
    case 'episode':
      placement += `E${episode}`;
      break;
    case 'bonus-episode':
      placement += `E${afterEpisode}B${episode}`;
      break;
    case 'trailer':
      placement += '';
      break;
  }

  res.locals.injected.placement = placement;

  next();
}

const setRelatedContent = (prop, as) => (req, res, next) => {
  merge(res.locals.relatedContent, {[as]: res.locals.lastDoc[prop]});

  next();
}

const clearRelatedContent = () => (req, res, next) => {
  res.locals.relatedContent = {};

  next();
}

const updateDocument = (type) => async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  const batch = res.locals.batch;

  data.id = id;

  const doc = await validatePartial(merge({}, data), schemas[type]);

  res.locals.lastDoc = doc;

  update(collection, doc, batch);

  next();
}

const addDocument = (type) => async (req, res, next) => {
  const data = req.body[type];
  const common = req.body.common || {};
  const injected = res.locals.injected;
  const batch = res.locals.batch;

  data.id = `tgm:${type}:${v4()}`;
  data.type = type;

  const doc = await validate(merge({}, data, common, injected), schemas[type]);

  res.locals.lastDoc = doc;

  add(collection, doc, batch);

  next();
}

const addEpisodeWithTranscript = () => [
  addDocument('episode'),
  setRelatedContent('id', 'episodeId'),
  addDocument('transcript'),
  clearRelatedContent(),
];

const addBonusEpisodeWithTranscript = () => [
  addDocument('bonus-episode'),
  setRelatedContent('id', 'episodeId'),
  addDocument('transcript'),
  clearRelatedContent(),
];

app.use(initTransactionData);

app.post('/episode', ...addEpisodeWithTranscript());
app.post('/bonus-episode', ...addBonusEpisodeWithTranscript());

app.put('/episode/:id', updateDocument('episode'));
app.put('/bonus-episode/:id', updateDocument('bonus-episode'));
app.put('/transcript/:id', updateDocument('transcript'));

app.use(commitBatch);

app.use(errorHandler)

module.exports = app;
