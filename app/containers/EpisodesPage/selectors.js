import { createSelector } from 'reselect';
import { get } from 'lodash';
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

const makeSelectEpisode = contentId =>
  createSelector(
    selectEpisodesPageDomain,
    pageState => get(pageState.episodes, contentId),
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
export { selectEpisodesPageDomain, makeSelectEpisodes, makeSelectEpisode };
