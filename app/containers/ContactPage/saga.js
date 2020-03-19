import { takeLatest, call, put, select } from 'redux-saga/effects';
import api from 'utils/api';
import { makeSelectEmail } from './selectors';
import { REQUEST_SUB } from './constants';
import { requestedSub, requestSubError } from './actions';

export function* requestSub() {
  const email = yield select(makeSelectEmail());

  try {
    yield call(api, `handleSendConfirmation`, { email }, 'POST');

    yield put(requestedSub());
  } catch (error) {
    yield put(requestSubError());
  }
}

// Individual exports for testing
export default function* contactPageSaga() {
  yield takeLatest(REQUEST_SUB, requestSub);
}
