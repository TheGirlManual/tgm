/**
 *
 * ProfileCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Heading, Text, Box, Flex } from 'rebass';
import { FormattedMessage } from 'react-intl';

export function ProfileCard({ name, title, location, bio, photo }) {
  return (
    <Flex
      as={Card}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="auto"
      minHeight="80vh"
      width="auto"
      p={0}
      m="auto"
      mt={3}
    >
      <Box
        sx={{
          border: 'solid 2px primary',
        }}
        p={3}
        width={1}
        flex="1"
        bg="primary"
      >
        <Heading color="black" sx={{ fontSize: ['9vw', '7vw'] }}>
          {name}
        </Heading>
        <Heading color="#444" sx={{ fontSize: ['4vw', '3vw'] }}>
          <FormattedMessage {...title} />
        </Heading>
        <Heading color="#555" sx={{ fontSize: ['4vw', '3vw'] }}>
          <FormattedMessage {...location} />
        </Heading>
      </Box>
      <Flex
        width={1}
        height="auto"
        minHeight="50%"
        bg="secondary"
        alignItems="flex-end"
        sx={{ position: 'relative' }}
        mt={3}
        p={3}
      >
        <Text
          sx={{ position: 'relative', zIndex: 3 }}
          mb={3}
          ml={3}
          color="primary"
          width={[0.7, 0.7]}
          fontSize={['4.5vw', '2.7vw', '1.8vw']}
          lineHeight={[1.6, 1.8]}
        >
          <FormattedMessage {...bio} />
        </Text>
        <Image
          sx={{
            zIndex: 2,
            position: 'absolute',
            bottom: 0,
            right: 0,
            height: ['30vh', 'auto'],
            maxHeight: '80vh',
            width: 'auto',
          }}
          src={photo}
        />
      </Flex>
    </Flex>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  bio: PropTypes.object.isRequired,
  photo: PropTypes.string.isRequired,
};

export default ProfileCard;
