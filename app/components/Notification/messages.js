/*
 * Notification Messages
 *
 * This contains all the text for the Notification component.
 */

import { defineMessages } from 'react-intl';
import {
  MESSAGE_SENT,
  PROCESSING_REQUEST,
  EMAIL_CHECK,
  EMAIL_ERROR,
} from './constants';

export const scope = 'app.components.Notification';

export default defineMessages({
  [PROCESSING_REQUEST]: {
    id: `${scope}.processingRequest`,
    defaultMessage: 'We are processing your request!',
  },
  [EMAIL_CHECK]: {
    id: `${scope}.emailCheck`,
    defaultMessage: 'Check your email!',
  },
  [EMAIL_ERROR]: {
    id: `${scope}.emailSendError`,
    defaultMessage: 'Something went wrong :(',
  },
  [MESSAGE_SENT]: {
    id: `${scope}.messageSent`,
    defaultMessage: 'Thank you for your message!',
  },
});
