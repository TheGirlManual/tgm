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
    defaultMessage: 'Feminism, friendship, equality and other girl stuff.',
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
  essiPowers: {
    id: `${scope}.essi.powers`,
    defaultMessage: `Powers: Bachelor in Political Science + Master in Violin Performance`,
  },
  essiType: {
    id: `${scope}.essi.type`,
    defaultMessage: `Early Riser ☀️`,
  },
  essiLoves: {
    id: `${scope}.essi.loves`,
    defaultMessage: `Loves: Music + Dancing + Chocolate`,
  },
  essiLocation: {
    id: `${scope}.essi.location`,
    defaultMessage: `Brussels`,
  },
  essiBio: {
    id: `${scope}.essi.bio`,
    defaultMessage: `Essi Kiiski is a Bachelor of Political Science and Master in Violin Performance. She currently works in Brussels at the heart of EU decision-making and has followed topics from social and health policy to equality and women's rights. Before her career change she worked as a freelancer violinist with the London Philharmonic Orchestra and as a violin teacher.`,
  },
  fernandaTitle: {
    id: `${scope}.fernanda.title`,
    defaultMessage: `Writer`,
  },
  fernandaPowers: {
    id: `${scope}.fernanda.powers`,
    defaultMessage: `Powers: Master in Public Policy + Bachelor in Communications`,
  },
  fernandaType: {
    id: `${scope}.fernanda.type`,
    defaultMessage: `Night Owl 🦉`,
  },
  fernandaLoves: {
    id: `${scope}.fernanda.loves`,
    defaultMessage: `Loves: Literature + French fries + Ballet`,
  },
  fernandaLocation: {
    id: `${scope}.fernanda.location`,
    defaultMessage: `Paris`,
  },
  fernandaBio: {
    id: `${scope}.fernanda.bio`,
    defaultMessage: `Master in Public Policy by Sciences Po (Paris), and BA in Communications by Universidad Iberoamericana (CDMX). Has been part of multiple projects as communication consultant and doing research on innovation policy, restorative justice, and gender.`,
  },
});
