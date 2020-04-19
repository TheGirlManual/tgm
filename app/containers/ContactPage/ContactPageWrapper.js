import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

function ContactPageWrapper({ children }) {
  return (
    <Flex
      height="auto"
      width="80vw"
      justifyContent="space-between"
      alignItems="flex-start"
      flexWrap="wrap"
      m="auto"
      py={5}
    >
      {children}
    </Flex>
  );
}

ContactPageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ContactPageWrapper;
