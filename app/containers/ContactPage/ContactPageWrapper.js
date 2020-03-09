import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

function ContactPageWrapper({ children }) {
  return (
    <Flex
      height="auto"
      width="90vw"
      justifyContent="space-evenly"
      alignItems="flex-start"
      flexWrap="wrap"
      m="auto"
      p={3}
    >
      {children}
    </Flex>
  );
}

ContactPageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ContactPageWrapper;
