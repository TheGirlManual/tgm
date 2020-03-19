import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the contactPage state domain
 */

const selectContactPageDomain = state => state.contactPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectEmail = () =>
  createSelector(
    selectContactPageDomain,
    substate => substate.email,
  );

const makeSelectSubRequest = () =>
  createSelector(
    selectContactPageDomain,
    substate => substate.subRequest,
  );

const makeSelectContactRequest = () =>
  createSelector(
    selectContactPageDomain,
    substate => substate.contactRequest,
  );

/**
 * Default selector used by ContactPage
 */

const makeSelectContactPage = () =>
  createSelector(
    selectContactPageDomain,
    substate => substate,
  );

export default makeSelectContactPage;
export {
  makeSelectSubRequest,
  makeSelectContactRequest,
  makeSelectEmail,
  selectContactPageDomain,
};
