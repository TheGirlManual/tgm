import React, { useState } from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { Flex, Box, Button, Heading } from 'rebass';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify as Spotify } from '@fortawesome/free-brands-svg-icons';
import IntroSectionWrapper from './IntroSectionWrapper';
import PlatformDropdown from './PlatformDropdown';
import messages from '../messages';

export default function IntroSection() {
  const [showPlatforms, setShowPlatforms] = useState(false);

  return (
    <IntroSectionWrapper>
      <Heading
        as="h1"
        px={3}
        sx={{ color: isMobile ? 'primary' : '#555', textAlign: 'center' }}
        fontSize={[5, 7]}
        fontWeight="400"
      >
        <FormattedHTMLMessage {...messages.headline} />
      </Heading>

      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          bg: 'black',
          transition: 'opacity 200ms, z-index 200ms',
          opacity: showPlatforms ? 0.6 : 0,
          zIndex: showPlatforms ? 3 : -1,
        }}
      />

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
          <FontAwesomeIcon
            style={{ marginRight: '0.5em', zIndex: 4 }}
            icon={Spotify}
          />
          <FormattedMessage {...messages.listenCta} />
        </Button>

        <PlatformDropdown
          eventTypes={['click', 'touchstart']}
          {...{ showPlatforms, setShowPlatforms }}
        />
      </Flex>
    </IntroSectionWrapper>
  );
}
