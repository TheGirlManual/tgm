/*
 *
 * EpisodeDetailPage actions
 *
 */

import {
  GET_EPISODE_TRANSCRIPT,
  GET_EPISODE_TRANSCRIPT_SUCCESS,
  GET_EPISODE_TRANSCRIPT_ERROR,
  GET_EPISODE,
  GET_EPISODE_SUCCESS,
  GET_EPISODE_ERROR,
} from './constants';

export function getTranscript(contentId) {
  return {
    type: GET_EPISODE_TRANSCRIPT,
    contentId,
  };
}

export function gotTranscript(transcriptData) {
  return {
    type: GET_EPISODE_TRANSCRIPT_SUCCESS,
    transcriptData,
  };
}

export function getTranscriptError() {
  return {
    type: GET_EPISODE_TRANSCRIPT_ERROR,
  };
}

export function getEpisode(contentId) {
  return {
    type: GET_EPISODE,
    contentId,
  };
}

export function gotEpisode(episodeData) {
  return {
    type: GET_EPISODE_SUCCESS,
    episodeData,
  };
}

export function getEpisodeError() {
  return {
    type: GET_EPISODE_ERROR,
  };
}
