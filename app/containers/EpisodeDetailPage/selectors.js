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

const makeSelectTranscriptId = () =>
  createSelector(
    selectEpisodeDetailPageDomain,
    state => state.id,
  );

const makeSelectTranscriptData = () =>
  createSelector(
    selectEpisodeDetailPageDomain,
    state => state.data,
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
  makeSelectTranscriptId,
  selectEpisodeDetailPageDomain,
};
