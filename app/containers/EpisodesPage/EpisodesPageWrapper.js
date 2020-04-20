import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import HeadTags from 'components/HeadTags';

function EpisodesPageWrapper({ children }) {
  return (
    <Flex
      mx="auto"
      width={1}
      px={[null, 3, '20%']}
      justifyContent="center"
      flexDirection="column"
    >
      <HeadTags
        title="Episode List"
        description="The Girl Manual's fact-based feminism podcast selection"
      />
      {children}
    </Flex>
  );
}

EpisodesPageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default EpisodesPageWrapper;
