/*
 * NavItem Messages
 *
 * This contains all the text for the NavItem component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.NavItem';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
  meet: {
    id: `${scope}.meet`,
    defaultMessage: 'Meet Us',
  },
});
