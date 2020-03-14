import { takeLatest, call, put, select } from 'redux-saga/effects';
import rsf from 'firestore';
import { GET_EPISODE_TRANSCRIPT } from './constants';
import { makeSelectTranscriptId } from './selectors';
import { gotTranscript } from './actions';

export function* getEpisodeData() {
  const id = yield select(makeSelectTranscriptId());

  const snapshot = yield call(
    rsf.firestore.getDocument,
    `the-girl-manual/${id}`,
  );

  const episodeData = snapshot.data();

  yield put(gotTranscript(episodeData));
}

// Individual exports for testing
export default function* episodeDetailPageSaga() {
  yield takeLatest(GET_EPISODE_TRANSCRIPT, getEpisodeData);
}
