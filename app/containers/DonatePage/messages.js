/*
 * DonatePage Messages
 *
 * This contains all the text for the DonatePage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.DonatePage';

export default defineMessages({
  helpUs: {
    id: `${scope}.helpUs.header`,
    defaultMessage: 'Help us write The Girl Manual',
  },
  helpUsText: {
    id: `${scope}.helpUs.text`,
    defaultMessage:
      'If you have notes, feedback, jokes, or experiences you want to share with us, send us an email to <a href="mailto:contact@thegirlmanual.com">contact@thegirlmanual.com</a> or tweet us <a href="https://twitter.com/intent/tweet?screen_name=girlmanualpod">@girlmanualpod</a> We can’t wait to hear your stories!',
  },
  donate: {
    id: `${scope}.donate.header`,
    defaultMessage: 'Be part of The Girl Manual',
  },
  donateText: {
    id: `${scope}.donate.text`,
    defaultMessage:
      'We are Essi and Fernanda, two girls trying to understand the social dynamics around womanhood, through the best way we could think of… over coffee. We wanted to talk about all those common experiences that come from being a girl, a woman, a human being, in this culturally complex, evolving, digital world. With a background in public policy, we might not be the most experienced academics in gender theory and, as all human beings, we are full of contradictions; but we are two feminists, that are deeply passionate about equality and frankly quite tired of being told that girls should be nice, pretty and quiet. So join us in the creation of The Girl Manual while having fun, important, and sometimes awkward conversations. And if you love the Girl Manual as much as we do, you can be a part of it as a sponsor, donor or contributor. We will be happy to receive any questions you might have on sponsorships, donations, or any other inquiries at <a href="mailto:contact@thegirlmanual.com">contact@thegirlmanual.com</a>.',
  },
  donateCta: {
    id: `${scope}.donate.cta`,
    defaultMessage: 'Donate here',
  },
});
