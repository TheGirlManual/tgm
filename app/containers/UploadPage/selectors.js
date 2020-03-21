import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the uploadPage state domain
 */

const selectUploadPageDomain = state => state.uploadPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UploadPage
 */

const makeSelectUploadPage = () =>
  createSelector(
    selectUploadPageDomain,
    substate => substate,
  );

export default makeSelectUploadPage;
export { selectUploadPageDomain };
