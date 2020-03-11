/**
 *
 * Asynchronously loads the component for SpotifyPlayer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
