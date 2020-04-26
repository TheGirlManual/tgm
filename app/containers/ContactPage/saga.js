import { takeLatest, call, put, select } from 'redux-saga/effects';
import api from 'utils/api';
import { makeSelectData, makeSelectEmail } from './selectors';
import { SEND_MESSAGE, REQUEST_SUB } from './constants';
import {
  sentMessage,
  sendMessageError,
  requestedSub,
  requestSubError,
} from './actions';

export function* requestSub() {
  const email = yield select(makeSelectEmail());

  try {
    yield call(api, `handleSendConfirmation`, { email }, 'POST');

    yield put(requestedSub());
  } catch (error) {
    yield put(requestSubError());
  }
}

export function* sendMessage() {
  const data = yield select(makeSelectData());

  const name = data.get('name');
  const email = data.get('email');
  const subject = data.get('subject');
  const message = data.get('message');

  try {
    yield call(
      api,
      `handleSendMessage`,
      { name, email, subject, message },
      'POST',
    );

    yield put(sentMessage());
  } catch (error) {
    yield put(sendMessageError());
  }
}

// Individual exports for testing
export default function* contactPageSaga() {
  yield takeLatest(REQUEST_SUB, requestSub);
  yield takeLatest(SEND_MESSAGE, sendMessage);
}
