/**
 *
 * ArticleLoader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import ContentLoader from 'react-content-loader';

const ArticleLoader = ({ loading }) => (
  <Box display={loading ? 'inline' : 'none'}>
    <ContentLoader
      speed={2}
      style={{ width: '100%' }}
      viewBox="0 0 600 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect rx="10" height="222.000005" width="499" y="150.453125" x="57.5" />
      <rect rx="10" height="48" width="336" y="33.453125" x="132" />
      <rect rx="10" height="24" width="271" y="108.453125" x="57.5" />
    </ContentLoader>
  </Box>
);

ArticleLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default ArticleLoader;
