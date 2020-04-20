import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import HeadTags from 'components/HeadTags';

function EpisodeDetailPageWrapper({ children }) {
  return (
    <Flex
      sx={{ width: '80vh' }}
      mx="auto"
      px={3}
      justifyContent="center"
      alignItems="center"
      textAlign={['left', 'justify']}
      lineHeight="1.4"
    >
      <HeadTags title="Episode" description="The Girl Manual's best content" />
      {children}
    </Flex>
  );
}

EpisodeDetailPageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default EpisodeDetailPageWrapper;
