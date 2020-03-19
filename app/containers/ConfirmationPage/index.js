/**
 * ConfirmationPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading } from 'rebass';

import messages from './messages';

export default function Confirmation() {
  return (
    <Heading textAlign="center" p={3} fontSize={[4, 5]} m="auto">
      <FormattedMessage {...messages.header} />
    </Heading>
  );
}
