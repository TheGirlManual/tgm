import { select, takeLatest, call, put } from 'redux-saga/effects';
import rsf from 'utils/firebase';
import firebase from 'firebase/app';
import { SIGN_IN, SIGN_OUT, SIGN_IN_CHECK, CRUD_OPERATION } from './constants';
import { setStatus } from './actions';
import makeSelectUploadPage, { makeSelectOperation } from './selectors';

const authProvider = new firebase.auth.GoogleAuthProvider();

export function* signIn() {
  yield call(rsf.auth.signInWithRedirect, authProvider);
}

export function* signOut() {
  try {
    yield call(rsf.auth.signOut, authProvider);
    yield put(setStatus({ success: false, token: null }));
  } catch (err) {
    console.error(err);
  }
}

export function* checkSignInStatus() {
  try {
    const auth = firebase.auth();

    const result = yield call([auth, 'getRedirectResult']);

    const status = result.credential
      ? { success: true, token: result.credential.idToken }
      : { success: false, token: null };

    yield put(setStatus(status));
  } catch (err) {
    console.error(err);
  }
}

export function* performOperation() {
  try {
    const operation = yield select(makeSelectOperation());
    const {
      login: { token },
    } = yield select(makeSelectUploadPage());

    const result = yield call(
      rsf.functions.call,
      'handleUploadEpisode',
      {},
      {
        body: JSON.stringify(operation.doc),
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

// Individual exports for testing
export default function* uploadPagePageSaga() {
  yield takeLatest(SIGN_IN, signIn);
  yield takeLatest(SIGN_OUT, signOut);
  yield takeLatest(SIGN_IN_CHECK, checkSignInStatus);
  yield takeLatest(CRUD_OPERATION, performOperation);
}
