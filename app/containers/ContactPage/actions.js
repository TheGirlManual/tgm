/*
 *
 * ContactPage actions
 *
 */

import {
  REQUEST_SUB,
  REQUEST_SUB_SUCCESS,
  REQUEST_SUB_ERROR,
} from './constants';

export function requestSub(email) {
  return {
    type: REQUEST_SUB,
    email,
  };
}

export function requestedSub() {
  return {
    type: REQUEST_SUB_SUCCESS,
  };
}

export function requestSubError() {
  return {
    type: REQUEST_SUB_ERROR,
  };
}
