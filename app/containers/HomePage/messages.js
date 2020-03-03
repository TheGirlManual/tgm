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
    defaultMessage: 'The Girl Manual',
  },
  headline: {
    id: `${scope}.headline`,
    defaultMessage:
      'Feminism, friendship, equality and other girl stuff. Breaking down the patriarchy one conversation at a time.',
  },
  listenCta: {
    id: `${scope}.listenCta`,
    defaultMessage: 'Listen now',
  },
  hostsHeadline: {
    id: `${scope}.hostsHeadline`,
    defaultMessage:
      '“The Girl Manual” podcast is hosted by Fernanda Zamora and Essi Kiiski.',
  },
  meetTheHosts: {
    id: `${scope}.meetTheHosts`,
    defaultMessage: 'Meet the hosts',
  },
  essiTitle: {
    id: `${scope}.essi.title`,
    defaultMessage: `Political Scientist`,
  },
  fernandaTitle: {
    id: `${scope}.fernanda.title`,
    defaultMessage: `Researcher`,
  },
});
