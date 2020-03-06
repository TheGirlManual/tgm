/**
 *
 * Nav
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Heading } from 'rebass';
import { FormattedMessage } from 'react-intl';
import NavItem, { navItems } from 'components/NavItem';
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
      fontSize={[3, 4, 5, 6]}
    >
      <FormattedMessage {...messages.header} />
    </Heading>
  );
}

function Nav() {
  const [, ...rest] = navItems;

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
          {rest.map(values => (
            <NavItem {...values} />
          ))}
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
