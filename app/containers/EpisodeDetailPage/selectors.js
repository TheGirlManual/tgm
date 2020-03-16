import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the episodeDetailPage state domain
 */

const selectEpisodeDetailPageDomain = state =>
  state.episodeDetailPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectContentId = () =>
  createSelector(
    selectEpisodeDetailPageDomain,
    state => state.contentId,
  );

const makeSelectTranscriptData = () =>
  createSelector(
    selectEpisodeDetailPageDomain,
    state => state.transcriptData,
  );

const makeSelectEpisodeData = () =>
  createSelector(
    selectEpisodeDetailPageDomain,
    state => state.episodeData,
  );

/**
 * Default selector used by EpisodeDetailPage
 */

const makeSelectEpisodeDetailPage = () =>
  createSelector(
    selectEpisodeDetailPageDomain,
    substate => substate,
  );

export default makeSelectEpisodeDetailPage;
export {
  makeSelectTranscriptData,
  makeSelectEpisodeData,
  makeSelectContentId,
  selectEpisodeDetailPageDomain,
};
