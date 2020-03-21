/*
 *
 * UploadPage reducer
 *
 */
import produce from 'immer';
import { SIGN_IN, SIGN_IN_CHECK, SET_SIGN_IN_STATUS } from './constants';

export const initialState = {
  loading: true,
  login: {
    success: null,
    token: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const uploadPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGN_IN:
        break;
      case SIGN_IN_CHECK:
        draft.loading = true;
        break;
      case SET_SIGN_IN_STATUS:
        draft.login = action.status;
        draft.loading = false;
        break;
    }
  });

export default uploadPageReducer;
