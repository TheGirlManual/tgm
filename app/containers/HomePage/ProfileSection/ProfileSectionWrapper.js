import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

function ProfileSectionWrapper({ children }) {
  return (
    <Flex
      height="auto"
      width={1}
      justifyContent="space-evenly"
      alignItems="center"
      flexWrap="wrap"
    >
      {children}
    </Flex>
  );
}

ProfileSectionWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ProfileSectionWrapper;
