/**
 *
 * SpotifyPlayer
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { css } from '@emotion/core';
import { Box, Flex } from 'rebass';
import ScaleLoader from 'react-spinners/ScaleLoader';

const baseUrl = 'https://open.spotify.com';
const spinnerCss = css`
  display: block;
  margin: 0 auto;
`;

export function spotifyUrlBuilder(type, spotifyId, embed = false) {
  const url = baseUrl + (embed ? '/embed-podcast' : '');

  switch (type) {
    case 'show':
      return `${url}/${type}/${spotifyId}`;
    case 'episode':
      return `${url}/${type}/${spotifyId}`;
    default:
      return `${url}/show/7jwdjqGaFHQeQoly9ByCzP`;
  }
}

function SpotifyPlayer({ type, spotifyId }) {
  const [playerLoaded, setLoaded] = useState(false);
  const theme = useTheme();

  const style = playerLoaded
    ? { opacity: 1, display: 'block', height: 232, width: '100%' }
    : { opacity: 0, display: 'block', height: 0, width: 0 };

  return (
    <Flex height={232} width="auto" minHeight={232} minWidth={150}>
      <Flex m="auto" width="100%">
        <Box mx="auto">
          <ScaleLoader
            height={70}
            width={10}
            margin={10}
            css={spinnerCss}
            color={theme.colors.secondary}
            loading={!playerLoaded}
          />
        </Box>
        {spotifyId && (
          <iframe
            title="spotify-player"
            src={spotifyUrlBuilder(type, spotifyId, true)}
            width="100%"
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            onLoad={() => setLoaded(true)}
            style={{
              transition: 'opacity 1s ease',
              ...style,
            }}
          />
        )}
      </Flex>
    </Flex>
  );
}

SpotifyPlayer.propTypes = {
  type: PropTypes.string,
  spotifyId: PropTypes.string,
};

SpotifyPlayer.defaultProps = {
  type: 'show',
  spotifyId: '7jwdjqGaFHQeQoly9ByCzP',
};

export default SpotifyPlayer;
