/*
 *
 * ContactPage actions
 *
 */

import { notify } from 'containers/App/actions';
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
  notify('Check your email!', {});

  return {
    type: REQUEST_SUB_SUCCESS,
  };
}

export function requestSubError() {
  notify('Something went wrong! Try subscribing again in a few minutes', {});

  return {
    type: REQUEST_SUB_ERROR,
  };
}
