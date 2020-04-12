/*
 *
 * UploadPage actions
 *
 */

import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_IN_CHECK,
  SET_SIGN_IN_STATUS,
  CRUD_OPERATION,
  CRUD_OPERATION_SUCCESS,
  CRUD_OPERATION_ERROR,
} from './constants';

export function signIn() {
  return {
    type: SIGN_IN,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
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

export function addDocument(doc, id) {
  return {
    type: CRUD_OPERATION,
    operation: 'add',
    id,
    doc,
  };
}

export function operationSuccess(id) {
  return {
    type: CRUD_OPERATION_SUCCESS,
    id,
  };
}

export function operationError(id) {
  return {
    type: CRUD_OPERATION_ERROR,
    id,
  };
}
