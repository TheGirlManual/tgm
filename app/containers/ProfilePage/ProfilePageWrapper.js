import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

function ProfilePageWrapper({ children }) {
  return (
    <Flex
      height="auto"
      justifyContent="space-evenly"
      alignItems="center"
      flexWrap="wrap"
      px={[4, null, null, '25%']}
    >
      {children}
    </Flex>
  );
}

ProfilePageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ProfilePageWrapper;
