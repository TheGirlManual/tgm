/**
 *
 * Nav
 *
 */

import React from 'react';
import { Flex, Box, Heading } from 'rebass';
import { FormattedMessage } from 'react-intl';
import LocalePickerWrapper from './LocalePickerWrapper';
import messages from './messages';

function Nav() {
  return (
    <Box
      p={3}
      bg="primary"
      xs={{
        boxShadow: `
        -webkit-box-shadow: 5px 5px 24px -13px rgba(201,134,121,1);
        -moz-box-shadow: 5px 5px 24px -13px rgba(201,134,121,1);
        box-shadow: 5px 5px 24px -13px rgba(201,134,121,1);`,
      }}
    >
      <Flex alignItems="center">
        <Box flex="1 1 auto">
          <Heading px={2} fontSize={[5, 6]}>
            <FormattedMessage {...messages.header} />
          </Heading>
        </Box>

        <LocalePickerWrapper />
      </Flex>
    </Box>
  );
}

Nav.propTypes = {};

export default Nav;
