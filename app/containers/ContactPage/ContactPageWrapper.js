import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import HeadTags from 'components/HeadTags';

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
      <HeadTags
        title="Contact"
        description="If you have notes, feedback, jokes, or experiences you want to share with us, send us an email to contact@thegirlmanual.com or tweet us @girlmanualpod We can’t wait to hear your stories!"
      />
      {children}
    </Flex>
  );
}

ContactPageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ContactPageWrapper;
