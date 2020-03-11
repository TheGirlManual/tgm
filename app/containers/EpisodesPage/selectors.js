import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the episodesPage state domain
 */

const selectEpisodesPageDomain = state => state.episodesPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectEpisodes = () =>
  createSelector(
    selectEpisodesPageDomain,
    pageState => pageState.episodes,
  );

/**
 * Default selector used by EpisodesPage
 */

const makeSelectEpisodesPage = () =>
  createSelector(
    selectEpisodesPageDomain,
    substate => substate,
  );

export default makeSelectEpisodesPage;
export { selectEpisodesPageDomain, makeSelectEpisodes };
