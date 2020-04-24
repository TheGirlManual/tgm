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

const validate = (data, schema, partial = false) =>
  schema.validateAsync(data, {abortEarly: false, stripUnknown: true, allowUnknown: false, context: {partial: !!partial}});

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  res.json({ message: error });
}

const setPlacement = (type) => (req, res, next) => {
  const data = req.body[type];
  const common = req.body.common;
  const {episode, season, afterEpisode} = merge({}, data, common);
  let placement = '';

  placement += `S${season}`;

  switch(type) {
    case 'episode':
      placement += `E${episode}`;
      break;
    case 'bonus-episode':
      placement += `E${afterEpisode}B${episode}`;
      break;
    case 'trailer':
      placement += '';
      break;
    default:
      placement = null;
      break;
  }

  res.locals.injected.placement = placement;

  next();
}

const setRelatedContentFromLastDoc = (prop, as) => (req, res, next) => {
  merge(res.locals.injected.relatedContent, {[as]: res.locals.lastDoc[prop]});

  next();
}

const clearRelatedContent = () => (req, res, next) => {
  res.locals.relatedContent = {};

  next();
}

const updateDocument = (type) => async (req, res, next) => {
  const data = req.body[type];
  const common = req.body.common || {};
  const injected = res.locals.injected;
  const batch = res.locals.batch;

  data.id = req.params.id;

  const syntheticDoc = merge({}, data, common, injected);
  const doc = await validatePartial(syntheticDoc, schemas[type]);

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

  const syntheticDoc = merge({}, data, common, injected);
  const doc = await validate(syntheticDoc, schemas[type]);

  res.locals.lastDoc = doc;

  add(collection, doc, batch);

  next();
}

const addTypeWithTranscript = type => [
  setPlacement(type),
  addDocument(type),
  setRelatedContentFromLastDoc('id', 'episodeId'),
  addDocument('transcript'),
  clearRelatedContent(),
]

app.use(initTransactionData);

app.post('/episode', ...addTypeWithTranscript('episode'));
app.post('/bonus-episode', ...addTypeWithTranscript('bonus-episode'));

app.put('/episode/:id', updateDocument('episode'));
app.put('/bonus-episode/:id', updateDocument('bonus-episode'));
app.put('/transcript/:id', updateDocument('transcript'));

app.use(commitBatch);

app.use(errorHandler)

module.exports = app;
