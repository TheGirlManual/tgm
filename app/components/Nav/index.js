/**
 *
 * Nav
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Image } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify as Spotify } from '@fortawesome/free-brands-svg-icons';
import NavItem, { navItems } from 'components/NavItem';
import logo from 'images/logo.png';
import logoStacked from 'images/logo-stacked.png';
import LocalePickerWrapper from './LocalePickerWrapper';

function PageTitle() {
  return (
    <Box
      display="flex"
      maxWidth={300}
      height="100%"
      as={Link}
      to="/"
      py={2}
      px={[0, 3]}
    >
      <Image
        display={['block', 'none', null, 'block']}
        src={logo}
        alt="the-girl-manual-logo"
        minHeight={20}
        sx={{ objectPosition: '0% 50%', objectFit: 'contain' }}
      />
      <Image
        display={['none', 'block', null, 'none']}
        src={logoStacked}
        alt="the-girl-manual-logo"
        minHeight={20}
        sx={{ objectPosition: '0% 50%', objectFit: 'contain' }}
      />
    </Box>
  );
}

function Nav() {
  return (
    <Flex
      as="nav"
      p={3}
      bg="white"
      height="10vh"
      maxHeight="200px"
      minHeight="70px"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        top: 0,
        boxShadow: '6px 4px 10px 0px #33333311',
        zIndex: 100,
        maxHeight: '120px',
        position: 'sticky',
      }}
    >
      <Box minWidth={150} height="100%" flex="1" mr="auto">
        <PageTitle />
      </Box>

      <Box ml="auto" display={['none', 'inline-block']} textAlign="center">
        {navItems.map(values => (
          <NavItem
            key={values.to}
            sx={{ fontSize: [1, 1, 2, 3] }}
            {...values}
          />
        ))}
      </Box>

      <Box mx={3} px={2} alignItems="center" justifyContent="center">
        <LocalePickerWrapper />
      </Box>
      <Box fontSize={5} alignItems="center" justifyContent="center">
        <a href="https://open.spotify.com/show/7jwdjqGaFHQeQoly9ByCzP">
          <FontAwesomeIcon color="#1db954" icon={Spotify} />
        </a>
      </Box>
    </Flex>
  );
}

Nav.propTypes = {};

export default Nav;
