import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Flex, Box, Image, Button, Heading } from 'rebass';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus as Plus } from '@fortawesome/free-solid-svg-icons';
import onClickOutside from 'react-onclickoutside';

import Overcast from 'images/overcast.png';
import ApplePodcasts from 'images/apple_podcasts.png';
import Breaker from 'images/breaker.png';
import Castbox from 'images/castbox.png';
import PocketCasts from 'images/pocket_casts.png';
import RadioPublic from 'images/radiopublic.png';
import messages from '../messages';
import IntroSectionWrapper from './IntroSectionWrapper';

const platformData = [
  [Overcast, 'https://overcast.fm/itunes1502453646/the-girl-manual'],
  [
    ApplePodcasts,
    'https://podcasts.apple.com/mx/podcast/the-girl-manual/id1502453646',
  ],
  [Breaker, 'https://www.breaker.audio/the-girl-manual'],
  [Castbox, 'https://castbox.fm/channel/id2702074?country=es'],
  [PocketCasts, 'https://pca.st/3qwwjld3'],
  [RadioPublic, 'https://radiopublic.com/the-girl-manual-WDN9e9'],
];

function PlatformIcon({ icon, index, expand, href }) {
  return (
    <Box
      as="a"
      href={href}
      sx={{
        display: 'flex',
        position: 'absolute',
        top: expand ? `${index + 1}00%` : 0,
        right: 0,
        zIndex: 2,
        borderRadius: '25%',
        opacity: expand ? 1 : 0,
        transition: 'opacity 20ms, top 200ms',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      mt={1}
      p={expand ? 10 : 0}
      bg="white"
      width={expand ? '100%' : 0}
      height={expand ? 55 : 0}
    >
      <Image
        height="auto"
        width="100%"
        sx={{ display: expand ? 'block' : 'none', zIndex: 2 }}
        src={icon}
      />
    </Box>
  );
}

PlatformIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  expand: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
};

function PlatformDropdown({ setShowPlatforms, showPlatforms }) {
  PlatformDropdown.handleClickOutside = () => setShowPlatforms(false);

  return (
    <Flex
      onClick={() => setShowPlatforms(!showPlatforms)}
      width={60}
      bg="secondary"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'relative',
        borderRadius: '0px 5px 5px 0px',
        borderLeft: '1px solid white',
        borderColor: 'secondaryLight',
        zIndex: 4,
        boxShadow: showPlatforms ? '0 0 0 2000px rgba(0, 0, 0, 0.6)' : 'none',
      }}
    >
      <FontAwesomeIcon style={{ zIndex: 4 }} color="white" icon={Plus} />
      {platformData.map((data, index) => (
        <PlatformIcon
          icon={data[0]}
          expand={showPlatforms}
          index={index}
          href={data[1]}
        />
      ))}
    </Flex>
  );
}

PlatformDropdown.propTypes = {
  setShowPlatforms: PropTypes.func.isRequired,
  showPlatforms: PropTypes.bool.isRequired,
};

const clickOutsideConfig = {
  handleClickOutside: () => PlatformDropdown.handleClickOutside,
};

const DismissablePlatformDropdown = onClickOutside(
  PlatformDropdown,
  clickOutsideConfig,
);

export default function IntroSection() {
  const [showPlatforms, setShowPlatforms] = useState(false);

  return (
    <IntroSectionWrapper>
      <Heading
        as="h1"
        px={3}
        sx={{ color: isMobile && 'primary', textAlign: 'center' }}
        fontSize={[5, 7]}
        fontWeight="400"
      >
        <FormattedMessage {...messages.headline} />
      </Heading>

      <Flex
        mt={4}
        width={0.6}
        maxWidth={300}
        fontSize={[3, 4]}
        justifyContent="center"
        alignItems="stretch"
      >
        <Button
          as="a"
          width={0.9}
          p={3}
          variant={isMobile ? 'secondary' : 'primary'}
          href="https://open.spotify.com/show/7jwdjqGaFHQeQoly9ByCzP"
          sx={{
            textDecoration: 'none',
            textAlign: 'center',
            borderRadius: '5px 0px 0px 5px',
          }}
        >
          <FormattedMessage {...messages.listenCta} />
        </Button>
        <DismissablePlatformDropdown {...{ showPlatforms, setShowPlatforms }} />
      </Flex>
    </IntroSectionWrapper>
  );
}
