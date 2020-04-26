/*
 *
 * ContactPage actions
 *
 */

import notify from 'utils/notify';
import {
  PROCESSING_REQUEST,
  MESSAGE_SENT,
  EMAIL_CHECK,
  EMAIL_ERROR,
} from 'components/Notification/constants';
import {
  REQUEST_SUB,
  REQUEST_SUB_SUCCESS,
  REQUEST_SUB_ERROR,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from './constants';

export function requestSub(email) {
  notify(PROCESSING_REQUEST);

  return {
    type: REQUEST_SUB,
    email,
  };
}

export function requestedSub() {
  notify(EMAIL_CHECK);

  return {
    type: REQUEST_SUB_SUCCESS,
  };
}

export function requestSubError() {
  notify(EMAIL_ERROR);

  return {
    type: REQUEST_SUB_ERROR,
  };
}

export function sendMessage(data) {
  return {
    type: SEND_MESSAGE,
    data,
  };
}

export function sentMessage() {
  notify(MESSAGE_SENT);

  return {
    type: SEND_MESSAGE_SUCCESS,
  };
}

export function sendMessageError() {
  return {
    type: SEND_MESSAGE_ERROR,
  };
}
