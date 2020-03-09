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
  <Flex mt={3} alignItems="center" color="secondary" sx={{ fontSize: 10 }}>
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
      height="20vh"
      justifyContent="center"
      alignItems="center"
      width="80vw"
      py={3}
      mx="auto"
    >
      <Flex
        width="50%"
        maxWidth={400}
        justifyContent="space-around"
        sx={{ fontSize: 32 }}
      >
        <FontAwesomeIcon color="#1da1f2" icon={Twitter} />
        <FontAwesomeIcon color="#c13584" icon={IG} />
        <FontAwesomeIcon color="#3b5998" icon={FB} />
        <FontAwesomeIcon color="#f96854" icon={Patreon} />
      </Flex>
      <MadeWithLove />
      <Text
        mt={4}
        as="b"
        sx={{ textAlign: 'center', fontFamily: 'sans-serif' }}
      >
        <FontAwesomeIcon
          style={{ marginRight: '0.5em' }}
          color="black"
          icon={Copyright}
        />
        <FormattedMessage {...messages.footerMessage} />
      </Text>
    </Flex>
  );
}

Footer.propTypes = {};

export default Footer;
