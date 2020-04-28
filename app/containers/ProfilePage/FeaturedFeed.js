/**
 *
 * ProfileCard
 *
 */

import React from 'react';
import { Box } from 'rebass';
import InstagramEmbed from 'react-instagram-embed';

export function FeaturedFeed() {
  return (
    <Box p={3}>
      <InstagramEmbed
        url="https://www.instagram.com/p/B_ZwOZiow_B"
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
      />
    </Box>
  );
}

FeaturedFeed.propTypes = {};

export default FeaturedFeed;
