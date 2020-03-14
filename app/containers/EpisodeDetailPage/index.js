/**
 *
 * EpisodeDetailPage
 *
 */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex, Box } from 'rebass';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ReactMarkdown from 'react-markdown';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectEpisodeDetailPage, {
  makeSelectTranscriptData,
} from './selectors';
import { getTranscript } from './actions';
import reducer from './reducer';
import saga from './saga';

export function EpisodeDetailPage({ dispatch, transcript }) {
  useInjectReducer({ key: 'episodeDetailPage', reducer });
  useInjectSaga({ key: 'episodeDetailPage', saga });
  const theme = useTheme();

  const { transcriptId } = useParams();

  useEffect(() => {
    dispatch(getTranscript(transcriptId));
  }, [dispatch]);

  return (
    <Flex
      sx={{ width: '80vh' }}
      mx="auto"
      px={3}
      justifyContent="center"
      alignItems="center"
      textAlign="justify"
      lineHeight="1.4"
    >
      <Box
        css={css`
          a,
          h1 {
            color: ${theme.colors.secondary};
          }

          h1 {
            text-align: left;
          }

          p,
          ul,
          ol {
            color: #444;
            font-size: larger;
            font-weight: 300;
          }
        `}
      >
        <ReactMarkdown className="transcript" source={transcript.body} />
      </Box>
    </Flex>
  );
}

EpisodeDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  transcript: PropTypes.object.isRequired,
};

EpisodeDetailPage.defaultProps = {};

const mapStateToProps = createStructuredSelector({
  episodeDetailPage: makeSelectEpisodeDetailPage(),
  transcript: makeSelectTranscriptData(),
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

export default compose(withConnect)(EpisodeDetailPage);
