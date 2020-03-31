/**
 *
 * EpisodeItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Link, Box, Heading, Text } from 'rebass';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify as Spotify } from '@fortawesome/free-brands-svg-icons';

import { spotifyUrlBuilder } from 'components/SpotifyPlayer';

export function EpisodeItem({ episode }) {
  const location = useLocation();
  const authors =
    episode.author && episode.author.map(v => v.label || v).join(', ');
  const date = moment.unix(episode.releaseDate);

  const dateLabel = (date.isValid()
    ? date
    : moment(episode.releaseDate || 'error')
  ).format('DD/MM/YY');
  const episodeLabel = episode.episode ? `Ep. ${episode.episode}` : `Ep`;
  const seasonLabel = episode.season ? `Season ${episode.season}` : ``;
  const headingPrefix = `${seasonLabel} ${episodeLabel}`;
  const headingLabel = `${headingPrefix}: ${episode.title || ''}`;
  const authorsLabel = authors ? `by ${authors}` : `by TGM`;

  return (
    <Box
      sx={{ position: 'relative', border: '2px solid #666' }}
      fontSize={[4, 5]}
      m={3}
      p={4}
    >
      <Box
        as={episode.type === 'episode' ? RouterLink : 'span'}
        to={`${location.pathname}/${episode.id}/${episode.slug}`}
        sx={{ textDecoration: 'inherit', color: 'inherit' }}
      >
        <Text fontSize="0.5em" color="#666">
          {dateLabel}
        </Text>
        <Heading fontSize="1.5em" color="secondary">
          {headingLabel}
        </Heading>
        <Text fontSize="0.5em" ml={3} mt={1} color="#666">
          {authorsLabel}
        </Text>
        <Text fontSize="0.6em" mt={3}>
          {episode.description}
        </Text>
      </Box>
      <Link
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          transition: 'all 0.3s ease',
          ':hover': { transform: 'scale(1.1)' },
        }}
        p={2}
        href={spotifyUrlBuilder(episode.type, episode.spotifyId)}
      >
        <FontAwesomeIcon color="#1db954" icon={Spotify} />
      </Link>
    </Box>
  );
}

EpisodeItem.propTypes = {
  episode: PropTypes.object.isRequired,
};

export default EpisodeItem;
