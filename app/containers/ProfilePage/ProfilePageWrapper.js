import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

function ProfilePageWrapper({ children }) {
  return (
    <Flex
      height="auto"
      justifyContent="space-evenly"
      alignItems="flex-start"
      flexWrap="wrap"
      px={[4]}
    >
      {children}
    </Flex>
  );
}

ProfilePageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ProfilePageWrapper;
