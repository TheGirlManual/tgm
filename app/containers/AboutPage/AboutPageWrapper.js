import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import HeadTags from 'components/HeadTags';

function AboutPageWrapper({ children }) {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
      m="auto"
      width="90vw"
      flexWrap="wrap"
    >
      <HeadTags
        title="About"
        description="The Girl Manual is a safe space to discuss all of those things that come with being a woman."
      />
      {children}
    </Flex>
  );
}

AboutPageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default AboutPageWrapper;
