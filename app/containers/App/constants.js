/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SHOW_MODAL = 'app/App/SHOW_MODAL';
export const HIDE_MODAL = 'app/App/HIDE_MODAL';
export const TOGGLE_MODAL = 'app/App/TOGGLE_MODAL';
export const NOTIFY = 'app/App/NOTIFY';
