/**
 *
 * Notification
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelopeOpenText as Mail,
  faDizzy as Fail,
  faPaperPlane as Sent,
} from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

import { PROCESSING_REQUEST, EMAIL_CHECK, EMAIL_ERROR } from './constants';
import messages from './messages';

const icon = {
  [PROCESSING_REQUEST]: Sent,
  [EMAIL_CHECK]: Mail,
  [EMAIL_ERROR]: Fail,
};

function Notification({ type }) {
  return (
    <div>
      <FontAwesomeIcon
        style={{ marginRight: '1em', marginLeft: '1em' }}
        icon={icon[type]}
      />
      <FormattedMessage {...messages[type]} />
    </div>
  );
}

Notification.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Notification;
