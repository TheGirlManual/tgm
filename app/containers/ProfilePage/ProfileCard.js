/**
 *
 * ProfileCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Heading, Text, Box, Flex } from 'rebass';
import { FormattedMessage } from 'react-intl';

const radius = 10;

export function ProfileCard({ name, title, location, bio }) {
  return (
    <Flex
      as={Card}
      sx={{ borderRadius: radius }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="auto"
      width="auto"
      p={0}
      m="auto"
      mt={3}
    >
      <Box
        sx={{
          border: 'solid 2px primary',
          borderRadius: 10,
        }}
        p={3}
        width={1}
        bg="primary"
      >
        <Heading color="black" sx={{ fontSize: ['9vw', '4vw'] }}>
          {name}
        </Heading>
        <Heading color="#444" sx={{ fontSize: ['4vw', '2vw'] }}>
          <FormattedMessage {...title} />
        </Heading>
        <Heading color="#555" sx={{ fontSize: ['4vw', '2vw'] }}>
          <FormattedMessage {...location} />
        </Heading>
      </Box>

      <Flex
        width={1}
        height="auto"
        minHeight="50%"
        bg="secondary"
        alignItems="flex-end"
        sx={{
          borderRadius: `0px 0px ${radius}px ${radius}px`,
          position: 'relative',
        }}
        mt={3}
        p={3}
      >
        <Text
          sx={{ position: 'relative', zIndex: 3 }}
          mb={3}
          ml={3}
          color="primary"
          width={1}
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
          src=""
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
