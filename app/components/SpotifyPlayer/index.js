/**
 *
 * SpotifyPlayer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

const baseUrl = 'https://open.spotify.com';

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
  return (
    <Flex
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
      }}
      m={3}
    >
      <iframe
        title="spotify-player"
        src={spotifyUrlBuilder(type, spotifyId)}
        width="250px"
        height="150px"
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
    </Flex>
  );
}

SpotifyPlayer.propTypes = {
  type: PropTypes.string.isRequired,
  spotifyId: PropTypes.string.isRequired,
};

export default SpotifyPlayer;
