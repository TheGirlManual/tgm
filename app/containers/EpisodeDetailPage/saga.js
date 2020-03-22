import { takeLatest, call, put, select } from 'redux-saga/effects';
import rsf from 'utils/firebase';
import firebase from 'firebase/app';
import { makeSelectEpisode } from 'containers/EpisodesPage/selectors';
import { cloneDeep } from 'lodash';
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
  }

  yield put(gotEpisode(episodeData));

  const collection = yield call(
    rsf.firestore.getCollection,
    firebase
      .firestore()
      .collection('the-girl-manual')
      .where('contentId', '==', cloneDeep(episodeData.id))
      .limit(1),
  );

  if (!collection.empty) {
    const transcriptData = collection.docs[0].data();

    yield put(gotTranscript(transcriptData));
  }
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
