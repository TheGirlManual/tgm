/*
 *
 * EpisodesPage actions
 *
 */

import {
  GET_EPISODES,
  GET_EPISODES_SUCCESS,
  GET_EPISODES_FAILURE,
} from './constants';

export function getEpisodes() {
  return {
    type: GET_EPISODES,
  };
}

export function gotEpisodes(episodes) {
  return {
    type: GET_EPISODES_SUCCESS,
    episodes,
  };
}

export function getEpisodesError() {
  return {
    type: GET_EPISODES_FAILURE,
  };
}
