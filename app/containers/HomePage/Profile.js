import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Box, Flex, Image } from 'rebass';
import { FormattedMessage } from 'react-intl';

function Profile({ name, image, profile }) {
  return (
    <Flex
      flexWrap="wrap"
      width={1}
      justifyContent="center"
      alignItems="flex-start"
    >
      <Box
        width={[1, 1, 0.5]}
        px={[4, 5]}
        py={4}
        pb={[0, null]}
        maxWidth="300px"
        sx={{}}
      >
        <Image
          sx={{
            filter: 'grayscale(1) sepia(1) hue-rotate(-35deg) saturate(0.5)',
          }}
          src={image}
        />
      </Box>

      <Box
        lineHeight={1.8}
        width={[null, 1, 0.5]}
        fontSize={[null, null, 3]}
        py={4}
        my="auto"
        color="secondary"
      >
        <Heading fontSize={[4, 5]} color="black">
          {name}
        </Heading>
        <Heading mt={1} fontSize={[3, 4]} color="#222">
          Political Scientist
        </Heading>
        <Text mt={3}>
          <FormattedMessage {...profile} />
        </Text>
      </Box>
    </Flex>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
};

export default Profile;
