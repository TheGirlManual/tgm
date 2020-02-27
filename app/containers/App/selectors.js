import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectModalState = state => state.modal || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectModalState = () =>
  createSelector(
    selectModalState,
    modalState => modalState.modalIsOpen,
  );

export { makeSelectLocation, makeSelectModalState };
