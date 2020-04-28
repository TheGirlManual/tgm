import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import HeadTags from 'components/HeadTags';

function ProfilePageWrapper({ children }) {
  return (
    <Flex
      height="auto"
      justifyContent="space-evenly"
      alignItems="flex-start"
      flexWrap="wrap"
      mx={[4]}
    >
      <HeadTags
        title="Meet Us"
        description="We are Essi and Fernanda. Nice to meet you!"
      />
      {children}
    </Flex>
  );
}

ProfilePageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ProfilePageWrapper;
