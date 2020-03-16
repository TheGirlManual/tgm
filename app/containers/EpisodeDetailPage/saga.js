import { takeLatest, call, put, select } from 'redux-saga/effects';
import rsf from 'firestore';
import { makeSelectEpisode } from 'containers/EpisodesPage/selectors';
import { makeSelectContentId } from './selectors';
import { GET_EPISODE, GET_EPISODE_TRANSCRIPT } from './constants';
import { gotEpisode, gotTranscript } from './actions';

export function* getTranscriptData() {
  let episodeData;

  const contentId = yield select(makeSelectContentId());

  episodeData = yield select(makeSelectEpisode(contentId));

  if (!episodeData) {
    const snapshot = yield call(
      rsf.firestore.getDocument,
      `the-girl-manual/${contentId}`,
    );

    episodeData = snapshot.data();

    yield put(gotEpisode(episodeData));
  }

  const snapshot = yield call(
    rsf.firestore.getDocument,
    `the-girl-manual/${episodeData.transcriptId}`,
  );

  const transcriptData = snapshot.data() || {};

  yield put(gotTranscript(transcriptData));
}

export function* getEpisodeData() {
  const contentId = yield select(makeSelectContentId());

  const snapshot = yield call(
    rsf.firestore.getDocument,
    `the-girl-manual/${contentId}`,
  );

  const episodeData = snapshot.data() || {};

  yield put(gotEpisode(episodeData));
}

// Individual exports for testing
export default function* episodeDetailPageSaga() {
  yield takeLatest(GET_EPISODE_TRANSCRIPT, getTranscriptData);
  yield takeLatest(GET_EPISODE, getEpisodeData);
}
