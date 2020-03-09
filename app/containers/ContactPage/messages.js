/*
 * ContactPage Messages
 *
 * This contains all the text for the ContactPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ContactPage';

export default defineMessages({
  subHeader: {
    id: `${scope}.sub.header`,
    defaultMessage: 'Subscribe to our newsletter',
  },
  subMessage: {
    id: `${scope}.sub.message`,
    defaultMessage:
      'Sign up with your email address to receive monthly insights into “The Girl Manual”',
  },
  subEmail: {
    id: `${scope}.sub.email`,
    defaultMessage: 'Your email address',
  },
  subButton: {
    id: `${scope}.sub.button`,
    defaultMessage: 'Sign Up',
  },
  subDisclaimer: {
    id: `${scope}.sub.disclaimer`,
    defaultMessage:
      'We may use your Personal Information to contact you with newsletters and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link. We will never share your Personal Information with Third Parties.',
  },
  contactHeader: {
    id: `${scope}.contact.header`,
    defaultMessage: 'Reach Out',
  },
  contactName: {
    id: `${scope}.contact.name`,
    defaultMessage: 'Name',
  },
  contactEmail: {
    id: `${scope}.contact.email`,
    defaultMessage: 'Email',
  },
  contactSubject: {
    id: `${scope}.contact.subject`,
    defaultMessage: 'Subject',
  },
  contactMessage: {
    id: `${scope}.contact.message`,
    defaultMessage: 'Message',
  },
  contactSend: {
    id: `${scope}.contact.send`,
    defaultMessage: 'Send',
  },
});
