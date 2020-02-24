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
  hostsHeadline: {
    id: `${scope}.hostsHeadline`,
    defaultMessage:
      '“Girl Talk” podcast is hosted by Fernanda Zamora and Essi Kiiski.',
  },
  meetTheHosts: {
    id: `${scope}.meetTheHosts`,
    defaultMessage: 'Meet the hosts',
  },
  essi: {
    id: `${scope}.essi`,
    defaultMessage: `Essi Kiiski is a Bachelor of Political Science and Master in Violin Performance. She is currently working as an APA at the European parliament for a Finnish MEP (views in this website represent her own opinion). Always looking for growth, and ways to contribute positively to the society. Passionate in equality, human rights, sustainable development, education, and wellbeing. Music lover, runner, addicted to puzzles. Supports: Feminism, equality, and sustainability. Against: Prejudice.`,
  },
  fernanda: {
    id: `${scope}.fernanda`,
    defaultMessage: `Fernanda Zamora is a Master in Public Policy and has worked doing research in innovation policies, social policies, restorative justice, amongst other topics. As a consultant of communication she has participad in the design and implementation of communication strategies for NGOs, public and private sector. Passionate in gender equality, social innovation and development. Voracious reader, frustrated ballerina, addicted to podcasts. Supports: Feminism, empowerment and innovation. Against: Injustice, intolerance.`,
  },
});
