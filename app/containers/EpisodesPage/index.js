/**
 *
 * EpisodesPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Flex } from 'rebass';
import { values } from 'lodash';
import EpisodeItem from 'components/EpisodeItem';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { getEpisodes } from './actions';
import makeSelectEpisodesPage, { makeSelectEpisodes } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function EpisodesPage({ dispatch, episodes }) {
  useInjectReducer({ key: 'episodesPage', reducer });
  useInjectSaga({ key: 'episodesPage', saga });

  useEffect(() => {
    dispatch(getEpisodes());
  }, [dispatch]);

  return (
    <Flex
      mx="auto"
      width={1}
      px={[null, 3, '20%']}
      justifyContent="center"
      flexDirection="column"
    >
      {values(episodes).map(episode => (
        <EpisodeItem key={episode.id} episode={episode} />
      ))}
    </Flex>
  );
}

EpisodesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  episodes: PropTypes.object.isRequired,
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
