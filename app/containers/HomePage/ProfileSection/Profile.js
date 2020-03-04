import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo as Reverse } from '@fortawesome/free-solid-svg-icons';
import { Heading, Text, Box, Flex, Image } from 'rebass';
import { FormattedMessage, intlShape } from 'react-intl';
import { css } from '@emotion/core';

const c = css`
  .front {
    font-size: 1.618rem;
    font-weight: 600;
    color: #fff;
    overflow: hidden;
    font-family: serif;
  }
  .card.flipped > .front {
    transform: rotateY(180deg);
  }

  .back {
    background: #fff;
    color: #ce1a5d;
    border-color: #ce1a5d;
    transform: rotateY(-180deg);
    font-size: 1.618rem;
    font-weight: 600;
    overflow: hidden;
    font-family: Roboto, sans-serif;
  }
  .card.flipped > .back {
    transform: rotateY(0deg);
  }

  .back .text {
    -webkit-transform: rotate(-7deg) skew(-10deg, 0);
    -moz-transform: rotate(-7deg) skew(-10deg, 0);
    -ms-transform: rotate(-7deg) skew(-10deg, 0);
    -o-transform: rotate(-7deg) skew(-10deg, 0);
    transform: rotate(-7deg) skew(-10deg, 0);
  }
`;

const cardFaceStyle = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: 'absolute',
  display: 'flex',
  borderRadius: '1rem',
  textAlign: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
  transition: 'ease-in 400ms',
};

function CardFace({ front, image, name, title }) {
  const className = front ? 'front' : 'back';

  return (
    <Flex
      flexDirection={['column', 'row']}
      bg="secondary"
      className={className}
      sx={cardFaceStyle}
    >
      <Box
        m={3}
        fontSize={3}
        sx={{
          position: 'absolute',
          top: ['unset', 0],
          bottom: [0, 'unset'],
          right: 0,
        }}
      >
        <FontAwesomeIcon icon={Reverse} />
      </Box>
      <Image
        flex="1 1 40%"
        sx={{ objectFit: 'cover' }}
        src={image}
        width="100%"
        height={['40%', '100%']}
      />

      <Flex
        className="text"
        flex="1 1 60%"
        flexDirection="column"
        justifyContent="center"
        p={4}
        height={['60%', '100%']}
      >
        <Heading fontSize={6} mb={2}>
          {name}
        </Heading>
        <Text as="em" sx={{ fontFamily: 'Didot, serif' }}>
          <FormattedMessage {...title} />
        </Text>
        <br />
        <Text as="small" sx={{ fontFamily: 'sans-serif' }}>
          Powers: Bachelor in Political Science + Master in Violin Performance
        </Text>
      </Flex>
    </Flex>
  );
}

CardFace.propTypes = {
  front: PropTypes.bool,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: intlShape.isRequired,
};

function Profile({ name, image, title }) {
  const [flipped, setFlip] = useState(false);

  return (
    <Box width={1} css={c}>
      <Flex
        sx={{
          position: 'relative',
          cursor: 'pointer',
          perspective: 4000,
        }}
        height={['70vh', 400]}
        minHeight={[600, 400]}
        width={1}
        maxWidth={900}
        className={`card${flipped ? ' flipped' : ''}`}
        onClick={() => setFlip(!flipped)}
        on
        my={3}
        mx="auto"
      >
        <CardFace name={name} title={title} image={image} front />
        <CardFace name={name} title={title} image={image} />
      </Flex>
    </Box>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: intlShape.isRequired,
};

export default Profile;
