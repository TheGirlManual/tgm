/*
 *
 * App actions
 *
 */

import { SHOW_MODAL, HIDE_MODAL, TOGGLE_MODAL } from './constants';

export function showModal() {
  return {
    type: SHOW_MODAL,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}

export function toggleModal() {
  return {
    type: TOGGLE_MODAL,
  };
}
