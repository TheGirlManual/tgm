/*
 *
 * ContactPage reducer
 *
 */
import produce from 'immer';
import {
  REQUEST_SUB,
  REQUEST_SUB_SUCCESS,
  REQUEST_SUB_ERROR,
} from './constants';

export const initialState = {
  subRequest: {},
  contactRequest: {},
};

/* eslint-disable default-case, no-param-reassign */
const contactPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_SUB:
        draft.email = action.email;
        draft.subRequest.loading = true;
        break;
      case REQUEST_SUB_SUCCESS:
        draft.subRequest.success = true;
        draft.subRequest.loading = false;
        break;
      case REQUEST_SUB_ERROR:
        draft.subRequest.success = false;
        draft.subRequest.loading = false;
        break;
    }
  });

export default contactPageReducer;
