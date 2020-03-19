/*
 *
 * App actions
 *
 */

import { toast } from 'react-toastify';
import { SHOW_MODAL, HIDE_MODAL, TOGGLE_MODAL, NOTIFY } from './constants';

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

export function notify(message, options) {
  toast(message, options);

  return {
    type: NOTIFY,
  };
}
