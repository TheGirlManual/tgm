/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Footer';

export default defineMessages({
  patreonCta: {
    id: `${scope}.patreonCta`,
    defaultMessage: 'Become a Patreon',
  },
  footerMessage: {
    id: `${scope}.footerMessage`,
    defaultMessage: '2020 Interactive Coolture Ltd. - The Girl Manual.',
  },
});
