/**
 *
 * ProfileCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Heading, Text, Box, Flex } from 'rebass';
import { FormattedMessage } from 'react-intl';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const radius = 10;

export function ProfileCard({ name, title, location, bio, photo }) {
  const [base, preview] = photo;

  return (
    <Flex
      as={Card}
      sx={{ borderRadius: radius }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="auto"
      width={[1, 1, 0.4, 0.35]}
      p={0}
      m={3}
    >
      <Flex
        sx={{
          border: 'solid 2px primary',
          borderRadius: 10,
        }}
        justifyContent="space-between"
        p={3}
        width={1}
        bg="primary"
      >
        <Box width={0.8}>
          <Heading
            lineHeight="1"
            color="black"
            sx={{ fontSize: ['9vw', '4vw'] }}
            mb={1}
          >
            {name}
          </Heading>

          <Heading
            lineHeight="1"
            color="#444"
            sx={{ fontSize: ['5vw', '3vw', '2vw'] }}
            mb={1}
          >
            <FormattedMessage {...title} />
          </Heading>

          <Heading
            lineHeight="1"
            color="#666"
            sx={{ fontSize: ['4.5vw', '2.5vw', '1.5vw'] }}
            mb={1}
          >
            <FormattedMessage {...location} />
          </Heading>
        </Box>

        <Box p={2} ml="auto" maxWidth={[100, 100, 200]}>
          <Box
            as={LazyLoadImage}
            effect="blur"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '50%',
            }}
            src={base}
            placeholderSrc={preview}
          />
        </Box>
      </Flex>

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
  photo: PropTypes.array.isRequired,
};

export default ProfileCard;
