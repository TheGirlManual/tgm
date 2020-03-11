/**
 *
 * EpisodesPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify as Spotify } from '@fortawesome/free-brands-svg-icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Flex, Link, Box, Heading, Text } from 'rebass';
import moment from 'moment';

import { spotifyUrlBuilder } from 'components/SpotifyPlayer';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { getEpisodes } from './actions';
import makeSelectEpisodesPage, { makeSelectEpisodes } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function EpisodeItem({ episode }) {
  const heading =
    episode.type === 'episode'
      ? `Ep. ${episode.episode}`
      : `Season ${episode.season}`;

  return (
    <Box
      sx={{ position: 'relative', border: '2px solid #666' }}
      fontSize={[4, 5]}
      m={3}
      p={4}
    >
      <Text fontSize="0.5em" color="#666">
        {moment.unix(episode.releaseDate.seconds).format('MM/DD/YY')}
      </Text>
      <Heading fontSize="1.5em" color="secondary">
        {heading}: {episode.title}
      </Heading>
      <Text fontSize="0.4em" ml={3} mt={1} color="#666">
        by {episode.author.join(', ')}
      </Text>
      <Text fontSize="0.6em" mt={3}>
        {episode.description}
      </Text>
      <Link
        sx={{ position: 'absolute', top: 0, right: 0 }}
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

export function EpisodesPage({ dispatch, episodes }) {
  useInjectReducer({ key: 'episodesPage', reducer });
  useInjectSaga({ key: 'episodesPage', saga });

  useEffect(() => {
    dispatch(getEpisodes());
  }, [dispatch]);

  return (
    <Flex mx="auto" width="90vw" justifyContent="center" flexDirection="column">
      {episodes.map(episode => (
        <EpisodeItem key={episode.id} episode={episode} />
      ))}
    </Flex>
  );
}

EpisodesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  episodes: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  episodesPage: makeSelectEpisodesPage(),
  episodes: makeSelectEpisodes(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(EpisodesPage);
