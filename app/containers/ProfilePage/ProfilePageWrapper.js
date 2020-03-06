import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

function ProfilePageWrapper({ children }) {
  return (
    <Flex
      height="auto"
      width={1}
      justifyContent="space-evenly"
      alignItems="center"
      flexWrap="wrap"
      px={4}
    >
      {children}
    </Flex>
  );
}

ProfilePageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ProfilePageWrapper;
