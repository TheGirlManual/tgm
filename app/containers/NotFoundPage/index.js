/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from 'rebass';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export default function NotFound() {
  return (
    <Flex
      width={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </Flex>
  );
}
