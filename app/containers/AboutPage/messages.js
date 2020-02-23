/*
 * AboutPage Messages
 *
 * This contains all the text for the AboutPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AboutPage';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Our mission',
  },
  mission: {
    id: `${scope}.mission`,
    defaultMessage:
      'It is only through human interaction and collective thinking that we can achieve our greatest potential, free from egotistical or selfish actions that damage the rest who have and will undoubtedly suffer the consequences to no accountability of the perpetrators. It is our goal to offer accurate information based on knowledge and verifiable facts to give the people the tools to see the reality of our world and dream for a better future.',
  },
});
