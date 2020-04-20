import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import HeadTags from 'components/HeadTags';

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
      <HeadTags
        title="Donate"
        description="And if you love the Girl Manual as much as we do, you can be a part of it as a sponsor, donor or contributor. We will be happy to receive any questions you might have on sponsorships, donations, or any other inquiries at contact@thegirlmanual.com."
      />
      {children}
    </Flex>
  );
}

DonatePageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default DonatePageWrapper;
