/*
 *
 * App reducer
 *
 */
import produce from 'immer';

import { SHOW_MODAL, HIDE_MODAL, TOGGLE_MODAL, NOTIFY } from './constants';

export const initialState = {
  modalIsOpen: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_MODAL:
        draft.modalIsOpen = true;
        break;
      case HIDE_MODAL:
        draft.modalIsOpen = false;
        break;
      case TOGGLE_MODAL:
        draft.modalIsOpen = !draft.modalIsOpen;
        break;
      case NOTIFY:
        break;
    }
  });

export default appReducer;
