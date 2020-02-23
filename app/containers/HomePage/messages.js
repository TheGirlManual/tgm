/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Girl Talk',
  },
  headline: {
    id: `${scope}.headline`,
    defaultMessage:
      'Thinking out loud about feminism, misogyny, and gender equality.',
  },
  listenCta: {
    id: `${scope}.listenCta`,
    defaultMessage: 'Listen now',
  },
});
