/**
 *
 * Footer
 *
 */
/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter as Twitter,
  faInstagram as IG,
  faFacebookSquare as FB,
  faPatreon as Patreon,
  faSpotify as Spotify,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFemale as Woman,
  faMale as Man,
  faPlus as Plus,
  faHeart as Love,
} from '@fortawesome/free-solid-svg-icons';
import { faCopyright as Copyright } from '@fortawesome/free-regular-svg-icons';
import { Flex, Box, Text } from 'rebass';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const MadeWithLove = () => (
  <Flex alignItems="center" color="secondary" sx={{ fontSize: 13 }}>
    <Text mx={1}>Made with</Text>
    <FontAwesomeIcon icon={Love} />
    <Text mx={1}>by</Text>
    <FontAwesomeIcon icon={Woman} />
    <FontAwesomeIcon
      style={{ fontSize: '0.5em', marginRight: 2, marginLeft: 2 }}
      icon={Plus}
    />
    <FontAwesomeIcon icon={Man} />
    <Text mx={1}>
      from
      <Box as="span" mx={1} role="img" aria-label="mexico">
        🇲🇽
      </Box>
      &
      <Box as="span" ml={1} role="img" aria-label="finland">
        🇫🇮
      </Box>
    </Text>
  </Flex>
);

function Footer() {
  return (
    <Flex
      flexDirection="column"
      height="30vh"
      justifyContent="space-evenly"
      alignItems="center"
      width="80vw"
      py={3}
      mx="auto"
    >
      <Box />
      <MadeWithLove />
      <Flex
        width="60%"
        maxWidth={400}
        minWidth={300}
        justifyContent="space-around"
        sx={{ fontSize: 29 }}
      >
        <a className="sm-link" href="https://twitter.com/Girlmanualpod">
          <FontAwesomeIcon color="#1da1f2" icon={Twitter} />
        </a>
        <a
          className="sm-link"
          href="https://www.instagram.com/thegirlmanualpodcast"
        >
          <FontAwesomeIcon color="#c13584" icon={IG} />
        </a>
        <a className="sm-link" href="https://facebook.com/thegirlmanual">
          <FontAwesomeIcon color="#3b5998" icon={FB} />
        </a>
        <a
          className="sm-link"
          href="https://www.patreon.com/bePatron?u=31577164"
        >
          <FontAwesomeIcon color="#f96854" icon={Patreon} />
        </a>
        <a href="https://open.spotify.com/show/7jwdjqGaFHQeQoly9ByCzP">
          <FontAwesomeIcon color="#1db954" icon={Spotify} />
        </a>
      </Flex>
      <Text
        as="b"
        sx={{
          fontSize: '0.7rem',
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <FontAwesomeIcon
          style={{ marginRight: '0.5em' }}
          color="black"
          icon={Copyright}
        />
        <FormattedMessage {...messages.footerMessage} />
        <br />
        <Box
          as="a"
          color="secondary"
          href="https://www.gdprprivacynotice.com/live.php?token=JNtHXlJlDcWkwl7QlwFL1yEa98z7hKnp"
        >
          Privacy Policy
        </Box>
      </Text>
    </Flex>
  );
}

Footer.propTypes = {};

export default Footer;
