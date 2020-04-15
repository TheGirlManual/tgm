import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

function ProfileSectionWrapper({ children }) {
  return (
    <Flex
      height="auto"
      width={1}
      justifyContent="space-around"
      alignItems="center"
      flexWrap="wrap"
      mt={4}
      px={4}
    >
      {children}
    </Flex>
  );
}

ProfileSectionWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ProfileSectionWrapper;
