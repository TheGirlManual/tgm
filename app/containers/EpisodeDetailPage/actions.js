/*
 *
 * EpisodeDetailPage actions
 *
 */

import {
  GET_EPISODE_TRANSCRIPT,
  GET_EPISODE_TRANSCRIPT_SUCCESS,
  GET_EPISODE_TRANSCRIPT_ERROR,
} from './constants';

export function getTranscript(id) {
  return {
    type: GET_EPISODE_TRANSCRIPT,
    id,
  };
}

export function gotTranscript(data) {
  return {
    type: GET_EPISODE_TRANSCRIPT_SUCCESS,
    data,
  };
}

export function getTranscriptError() {
  return {
    type: GET_EPISODE_TRANSCRIPT_ERROR,
  };
}
