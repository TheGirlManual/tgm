/**
 *
 * ProfileCard
 *
 */

import React from 'react';
import { Flex } from 'rebass';
import InstagramEmbed from 'react-instagram-embed';

export function FeaturedFeed() {
  return (
    <Flex justifyContent="center" p={[0, 3]}>
      <InstagramEmbed
        url="https://www.instagram.com/p/B_ZwOZiow_B"
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
      />
    </Flex>
  );
}

FeaturedFeed.propTypes = {};

export default FeaturedFeed;
