import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

function ProfileSectionWrapper({ children }) {
  return (
    <Flex
      height="auto"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width={0.8}
      mx="auto"
    >
      {children}
    </Flex>
  );
}

ProfileSectionWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ProfileSectionWrapper;
