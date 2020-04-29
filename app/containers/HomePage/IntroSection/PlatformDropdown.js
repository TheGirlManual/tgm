import React from 'react';
import PropTypes from 'prop-types';
import { Text, Flex, Box, Image } from 'rebass';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown as Show } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated, config } from 'react-spring';
import onClickOutside from 'react-onclickoutside';

import Overcast from 'images/overcast.png';
import ApplePodcasts from 'images/apple_podcasts.png';
import Breaker from 'images/breaker.png';
import Castbox from 'images/castbox.png';
import PocketCasts from 'images/pocket_casts.png';
import RadioPublic from 'images/radiopublic.png';

const platformData = [
  [
    Overcast,
    'https://overcast.fm/itunes1502453646/the-girl-manual',
    'Overcast',
  ],
  [
    ApplePodcasts,
    'https://podcasts.apple.com/mx/podcast/the-girl-manual/id1502453646',
    'Apple Podcasts',
  ],
  [Breaker, 'https://www.breaker.audio/the-girl-manual', 'Breaker'],
  [Castbox, 'https://castbox.fm/channel/id2702074', 'Castbox'],
  [PocketCasts, 'https://pca.st/3qwwjld3', 'Pocket Casts'],
  [
    RadioPublic,
    'https://radiopublic.com/the-girl-manual-WDN9e9',
    'RadioPublic',
  ],
];

function PlatformIcon({ platform, index, expand }) {
  const [props, set] = useSpring(() => ({
    top: 0,
    opacity: 0,
    config: config.stiff,
  }));

  set({
    opacity: expand ? 1 : 0,
    top: expand ? (index + 1) * 65 : 0,
  });

  return (
    <Box
      as={animated.a}
      href={platform[1]}
      sx={{
        display: 'flex',
        position: 'fixed',
        right: '50%',
        transform: 'translate(50%, 15vh)',
        zIndex: 2,
        borderRadius: '3px',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 0px 5px 5px #ffffff33',
        textAlign: 'center',
        textDecoration: 'none',
      }}
      bg="primary"
      width={expand ? '50vw' : 0}
      minWidth={expand ? '300px' : 0}
      maxWidth={expand ? '400px' : 0}
      height={expand ? 50 : 0}
      style={props}
    >
      <Image m={1} mr={2} p={2} height="100%" width="auto" src={platform[0]} />
      <Text as="p" sx={{ color: 'black' }}>
        {expand ? platform[2] : ''}
      </Text>
      <Box mr="auto" />
    </Box>
  );
}

PlatformIcon.propTypes = {
  index: PropTypes.number.isRequired,
  expand: PropTypes.bool.isRequired,
  platform: PropTypes.array.isRequired,
};

function PlatformDropdown({ setShowPlatforms, showPlatforms }) {
  PlatformDropdown.handleClickOutside = () => setShowPlatforms(false);
  const ref = React.useRef();

  return (
    <Flex
      as={animated.div}
      ref={ref}
      onClick={() => {
        window.scrollTo({
          top: ref.current.offsetTop - 20,
          behavior: 'smooth',
        });
        setShowPlatforms(!showPlatforms);
      }}
      width={60}
      bg={isMobile ? 'primary' : 'secondary'}
      color={isMobile ? 'secondary' : 'primary'}
      justifyContent="center"
      alignItems="center"
      sx={{
        userSelect: 'none',
        position: 'relative',
        borderRadius: '0px 5px 5px 0px',
        borderLeft: '1px solid white',
        borderColor: 'secondaryLight',
        zIndex: 4,
      }}
    >
      <FontAwesomeIcon style={{ zIndex: 4 }} icon={Show} />
      {platformData.map((data, index) => (
        <PlatformIcon
          expand={showPlatforms}
          index={index}
          platform={data}
          key={data[1]}
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

export default onClickOutside(PlatformDropdown, clickOutsideConfig);
