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
  motivation: {
    id: `${scope}.motivation`,
    defaultMessage:
      'We are Essi and Fernanda, two girls trying to understand the social dynamics around womanhood, through the best way we could think of… over coffee. We wanted to talk about all those common experiences that come from being a girl, a woman, a human being, in this culturally complex, evolving, digital world. With a background in public policy, we might not be the most experienced academics in gender theory and, as all human beings, we are full of contradictions; but we are two feminists, that are deeply passionate about equality and frankly quite tired of being told that girls should be nice, pretty and quiet. So join us in the creation of The Girl Manual while having fun, important, and sometimes awkward conversations.',
  },
});
