import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

function DonatePageWrapper({ children }) {
  return (
    <Flex
      height="auto"
      width="90vw"
      maxWidth="600px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      m="auto"
      py={5}
    >
      {children}
    </Flex>
  );
}

DonatePageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default DonatePageWrapper;
