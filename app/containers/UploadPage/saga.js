import { takeLatest, call, put } from 'redux-saga/effects';
import rsf from 'utils/firebase';
import firebase from 'firebase/app';
import { SIGN_IN, SIGN_IN_CHECK } from './constants';
import { setStatus } from './actions';

const authProvider = new firebase.auth.GoogleAuthProvider();

export function* signIn() {
  yield call(rsf.auth.signInWithRedirect, authProvider);
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

// Individual exports for testing
export default function* uploadPagePageSaga() {
  yield takeLatest(SIGN_IN, signIn);
  yield takeLatest(SIGN_IN_CHECK, checkSignInStatus);
}
