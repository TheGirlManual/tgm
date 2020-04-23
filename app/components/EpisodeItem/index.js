/**
 *
 * EpisodeItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Link, Card, Box, Heading, Text } from 'rebass';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify as Spotify } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight as Arrow } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from 'react-device-detect';

import { spotifyUrlBuilder } from 'components/SpotifyPlayer';

const typesWithDetail = ['episode', 'bonus-episode'];

const buildPrefix = episode => {
  const episodeChar = episode.type === 'episode' ? 'E' : 'B';

  const episodeLabel = episode.episode
    ? `${episodeChar}${episode.episode}`
    : ``;
  const seasonLabel = episode.season ? `S${episode.season}` : ``;

  const prefix = seasonLabel + episodeLabel;

  const headingLabel = episode.title ? `${prefix}: ${episode.title}` : prefix;

  return [episodeLabel, seasonLabel, headingLabel];
};

const makeLabels = episode => {
  const authors =
    episode.author && episode.author.map(v => v.label || v).join(', ');
  const date = moment.unix(episode.releaseDate);

  const [episodeLabel, seasonLabel, headingLabel] = buildPrefix(episode);

  const dateLabel = (date.isValid()
    ? date
    : moment(episode.releaseDate || 'error')
  ).format('DD/MM/YY');

  return {
    date: dateLabel,
    episode: episodeLabel,
    season: seasonLabel,
    authors: authors ? `by ${authors}` : `by TGM`,
    heading: headingLabel,
  };
};

export function EpisodeItem({ episode }) {
  const location = useLocation();
  const labels = makeLabels(episode);

  return (
    <Card
      sx={{
        position: 'relative',
        borderRadius: 10,
        transition: 'all 0.3s ease',
        ':hover': !isMobile && {
          transform: 'translateX(5px)',
          backgroundColor: '#f3f3f3',
          boxShadow: '#0000002b -2px 2px 15px 2px',
        },
      }}
      fontSize={[4, 5]}
      m={3}
      p={4}
    >
      <Box
        as={typesWithDetail.includes(episode.type) ? RouterLink : 'span'}
        to={`${location.pathname}/${episode.id}/${episode.slug}`}
        sx={{ textDecoration: 'inherit', color: 'inherit' }}
      >
        <Text fontSize="0.5em" color="#666">
          {labels.date}
        </Text>
        <Heading fontSize="1.5em" color="secondary">
          {labels.heading}
        </Heading>
        <Text fontSize="0.5em" ml={3} mt={1} color="#666">
          {labels.authors}
        </Text>
        <Text fontSize="0.6em" mt={3}>
          {episode.description}
        </Text>
      </Box>
      <Link
        sx={{
          position: 'absolute',
          top: 2,
          right: 2,
          transition: 'all 0.3s ease',
          ':hover': isMobile && { transform: 'scale(1.1)' },
        }}
        p={2}
        href={spotifyUrlBuilder(episode.type, episode.spotifyId)}
      >
        <FontAwesomeIcon color="#1db954" icon={Spotify} />
      </Link>
      {typesWithDetail.includes(episode.type) && (
        <Box
          as={RouterLink}
          to={`${location.pathname}/${episode.id}/${episode.slug}`}
          sx={{
            textDecoration: 'inherit',
            color: 'inherit',
            position: 'absolute',
            bottom: 2,
            right: 2,
            transition: 'all 0.3s ease',
            ':hover': { transform: 'translateX(4px)' },
          }}
          p={2}
          fontSize="0.8em"
          color="secondary"
        >
          <FontAwesomeIcon icon={Arrow} />
        </Box>
      )}
    </Card>
  );
}

EpisodeItem.propTypes = {
  episode: PropTypes.object.isRequired,
};

export default EpisodeItem;
