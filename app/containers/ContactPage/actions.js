/*
 *
 * ContactPage actions
 *
 */

import notify from 'utils/notify';
import {
  PROCESSING_REQUEST,
  EMAIL_CHECK,
  EMAIL_ERROR,
} from 'components/Notification/constants';
import {
  REQUEST_SUB,
  REQUEST_SUB_SUCCESS,
  REQUEST_SUB_ERROR,
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
