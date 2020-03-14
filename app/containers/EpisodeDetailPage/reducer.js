/*
 *
 * EpisodeDetailPage reducer
 *
 */
import produce from 'immer';
import {
  GET_EPISODE_TRANSCRIPT,
  GET_EPISODE_TRANSCRIPT_SUCCESS,
  GET_EPISODE_TRANSCRIPT_ERROR,
} from './constants';

export const initialState = {
  data: {},
};

/* eslint-disable default-case, no-param-reassign */
const episodeDetailPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_EPISODE_TRANSCRIPT:
        draft.id = action.id;
        break;
      case GET_EPISODE_TRANSCRIPT_SUCCESS:
        draft.data = action.data;
        break;
      case GET_EPISODE_TRANSCRIPT_ERROR:
        break;
    }
  });

export default episodeDetailPageReducer;
