/**
 *
 * Nav
 *
 */

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Text, Flex, Box, Heading } from 'rebass';
import { FormattedMessage } from 'react-intl';
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
      fontSize={[4, 5]}
    >
      <FormattedMessage {...messages.header} />
    </Heading>
  );
}

function NavItem() {
  return (
    <Box
      sx={{
        textDecoration: 'none',
      }}
      as={NavLink}
      to="/about"
    >
      <Text
        as="span"
        sx={{
          color: 'black',
          '.active &': { textDecoration: 'underline' },
          '* > :not(.active) > &:hover': {
            textDecoration: 'underline',
          },
        }}
        fontSize={[2, 3]}
      >
        About
      </Text>
    </Box>
  );
}

function Nav() {
  return (
    <Box
      as="nav"
      px={3}
      py={3}
      bg="white"
      style={{
        top: 0,
        zIndex: 100,
      }}
      sx={{
        position: 'sticky',
        boxShadow: `
          -webkit-box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.3);
          -moz-box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.3);
          box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.3);
        `,
      }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box width={1 / 3} mr="auto">
          <PageTitle />
        </Box>

        <Box width={1 / 3} textAlign="center">
          <NavItem />
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
