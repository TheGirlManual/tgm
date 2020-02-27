/**
 *
 * Nav
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Heading } from 'rebass';
import { FormattedMessage } from 'react-intl';
import NavItem from 'components/NavItem';
import LocalePickerWrapper from './LocalePickerWrapper';
import messages from './messages';

function PageTitle() {
  return (
    <Heading
      sx={{
        color: 'secondary',
        textDecoration: 'none',
      }}
      as={Link}
      to="/"
      px={[0, 3]}
      fontSize={[4, 6]}
    >
      <FormattedMessage {...messages.header} />
    </Heading>
  );
}

function Nav() {
  return (
    <Box
      as="nav"
      px={3}
      py={[3, 4]}
      bg="white"
      style={{
        top: 0,
        zIndex: 100,
      }}
      sx={{
        position: 'sticky',
      }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box width={[2 / 3, 1 / 3]} mr="auto">
          <PageTitle />
        </Box>

        <Box
          width={1 / 3}
          display={['none', 'inline-block']}
          textAlign="center"
        >
          <NavItem to="/about" title="About" />
        </Box>

        <Box width={1 / 3}>
          <LocalePickerWrapper />
        </Box>
      </Flex>
    </Box>
  );
}

Nav.propTypes = {};

export default Nav;
