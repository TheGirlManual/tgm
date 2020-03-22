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
  GET_EPISODE,
  GET_EPISODE_SUCCESS,
  GET_EPISODE_ERROR,
} from './constants';

export const initialState = {
  transcriptData: {},
  episodeData: {},
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const episodeDetailPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_EPISODE_TRANSCRIPT:
        draft.contentId = action.contentId;
        draft.loading = true;
        break;
      case GET_EPISODE_TRANSCRIPT_SUCCESS:
        draft.transcriptData = action.transcriptData;
        draft.loading = false;
        break;
      case GET_EPISODE_TRANSCRIPT_ERROR:
        draft.loading = false;
        break;
      case GET_EPISODE:
        draft.contentId = action.contentId;
        break;
      case GET_EPISODE_SUCCESS:
        draft.episodeData = action.episodeData;
        break;
      case GET_EPISODE_ERROR:
        break;
    }
  });

export default episodeDetailPageReducer;
