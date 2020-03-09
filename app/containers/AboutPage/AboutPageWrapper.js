import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

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
      {children}
    </Flex>
  );
}

AboutPageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default AboutPageWrapper;
