/*
 *
 * UploadPage reducer
 *
 */
import produce from 'immer';
import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_IN_CHECK,
  SET_SIGN_IN_STATUS,
  CRUD_OPERATION,
  CRUD_OPERATION_SUCCESS,
  CRUD_OPERATION_ERROR,
} from './constants';

export const initialState = {
  loading: true,
  login: {
    success: null,
    token: null,
  },
  operation: { type: null, doc: null },
};

/* eslint-disable default-case, no-param-reassign */
const uploadPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGN_IN:
        break;
      case SIGN_OUT:
        break;
      case SIGN_IN_CHECK:
        draft.loading = true;
        break;
      case SET_SIGN_IN_STATUS:
        draft.login = action.status;
        draft.loading = false;
        break;
      case CRUD_OPERATION:
        draft.operation = {
          type: action.operation,
          doc: action.doc,
        };
        break;
      case CRUD_OPERATION_SUCCESS:
        break;
      case CRUD_OPERATION_ERROR:
        break;
    }
  });

export default uploadPageReducer;
