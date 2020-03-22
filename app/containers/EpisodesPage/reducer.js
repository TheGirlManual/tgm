/*
 *
 * EpisodesPage reducer
 *
 */
import produce from 'immer';
import {
  GET_EPISODES,
  GET_EPISODES_SUCCESS,
  GET_EPISODES_FAILURE,
} from './constants';

export const initialState = {
  episodes: {},
};

/* eslint-disable default-case, no-param-reassign */
const episodesPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_EPISODES:
        break;
      case GET_EPISODES_SUCCESS:
        draft.episodes = action.episodes;
        break;
      case GET_EPISODES_FAILURE:
        break;
    }
  });

export default episodesPageReducer;
