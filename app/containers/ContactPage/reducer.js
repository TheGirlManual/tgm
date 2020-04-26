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
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
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
      case SEND_MESSAGE:
        draft.data = action.data;
        draft.contactRequest.loading = true;
        break;
      case SEND_MESSAGE_SUCCESS:
        draft.contactRequest.success = true;
        draft.contactRequest.loading = false;
        break;
      case SEND_MESSAGE_ERROR:
        draft.contactRequest.success = false;
        draft.contactRequest.loading = false;
        break;
    }
  });

export default contactPageReducer;
