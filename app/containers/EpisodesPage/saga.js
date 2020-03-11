import { takeLatest, call, put } from 'redux-saga/effects';
import rsf from 'firestore';
import { GET_EPISODES } from './constants';
import { gotEpisodes } from './actions';

export function* getEpisodes() {
  const snapshot = yield call(rsf.firestore.getCollection, 'the-girl-manual');
  let items = [];

  snapshot.forEach(item => {
    items = [...items, item.data()];
  });

  yield put(gotEpisodes(items));
}

export default function* episodesData() {
  yield takeLatest(GET_EPISODES, getEpisodes);
}
