/**
 *
 * ProfileCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Heading, Text, Box, Flex } from 'rebass';
import { FormattedMessage, intlShape } from 'react-intl';

export function ProfileCard({ name, title, location, bio, photo }) {
  return (
    <Flex
      as={Card}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="80vh"
      width="50%"
      maxHeight="140vw"
      sx={{ zoom: 0.5 }}
      p={0}
      m="auto"
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
        <Heading color="black" sx={{ fontSize: ['8vw'] }}>
          {name}
        </Heading>
        <Heading color="#444" sx={{ fontSize: ['3vw'] }}>
          <FormattedMessage {...title} />
        </Heading>
        <Heading color="#555" sx={{ fontSize: ['3vw'] }}>
          <FormattedMessage {...location} />
        </Heading>
      </Box>
      <Flex
        width={1}
        flex="1"
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
          width="70%"
          fontSize={['3vw', '2.5vw', '1.8vw']}
          lineHeight={1.8}
        >
          <FormattedMessage {...bio} />
        </Text>
        <Image
          sx={{
            zIndex: 2,
            position: 'absolute',
            bottom: 0,
            right: 0,
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
  title: intlShape.isRequired,
  location: intlShape.isRequired,
  bio: intlShape.isRequired,
  photo: PropTypes.string.isRequired,
};

export default ProfileCard;
