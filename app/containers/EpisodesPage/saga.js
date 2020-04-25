import { takeLatest, call, put } from 'redux-saga/effects';
import rsf from 'utils/firebase';
import firebase from 'firebase/app';
import { GET_EPISODES } from './constants';
import { gotEpisodes } from './actions';

const collection = process.env.DB_COLLECTION;

export function* getEpisodes() {
  const snapshot = yield call(
    rsf.firestore.getCollection,
    firebase
      .firestore()
      .collection(collection)
      .where('type', 'in', ['episode', 'bonus-episode', 'trailer'])
      .orderBy('placement', 'desc'),
  );

  let items = {};

  snapshot.forEach(item => {
    items = { ...items, [item.id]: item.data() };
  });

  yield put(gotEpisodes(items));
}

export default function* episodesData() {
  yield takeLatest(GET_EPISODES, getEpisodes);
}
