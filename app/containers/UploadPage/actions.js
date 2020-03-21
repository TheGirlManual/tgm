/*
 *
 * UploadPage actions
 *
 */

import { SIGN_IN, SIGN_IN_CHECK, SET_SIGN_IN_STATUS } from './constants';

export function signIn() {
  return {
    type: SIGN_IN,
  };
}

export function signInStatus() {
  return {
    type: SIGN_IN_CHECK,
  };
}

export function setStatus(status) {
  return {
    type: SET_SIGN_IN_STATUS,
    status,
  };
}
