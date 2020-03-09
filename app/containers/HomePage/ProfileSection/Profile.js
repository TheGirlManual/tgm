import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouse as CornerIcon } from '@fortawesome/free-solid-svg-icons';
import { Heading, Text, Box, Flex, Image } from 'rebass';
import { FormattedMessage } from 'react-intl';
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
    box-shadow: inset 0px 0px 0px 3px #ce1a5d;
    transform: rotateY(-180deg);
    font-size: 1.618rem;
    font-weight: 600;
    overflow: hidden;
    font-family: sans-serif;
  }
  .card.flipped > .back {
    transform: rotateY(0deg);
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

function CardFace({ front, name, title, powers, type, loves, image }) {
  const side = front ? 'front' : 'back';

  const headingProps = front ? {} : { sx: { fontFamily: 'sans-serif' } };
  const middleTextProps = front
    ? { as: 'em', sx: { fontFamily: 'serif' } }
    : {};

  const middleTextContent = front ? title : type;
  const bottomTextContent = front ? powers : loves;

  return (
    <Flex
      flexDirection={['column', 'row']}
      bg="secondary"
      className={side}
      sx={cardFaceStyle}
    >
      <Box
        m={3}
        fontSize={3}
        sx={{
          border: 'inherit',
          position: 'absolute',
          top: ['unset', 0],
          bottom: [0, 'unset'],
          right: 0,
        }}
      >
        <FontAwesomeIcon icon={CornerIcon} />
      </Box>
      <Image
        flex="1 1 40%"
        sx={{ objectFit: 'cover' }}
        src={image[side]}
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
        <Heading fontSize={6} mb={2} {...headingProps}>
          {name}
        </Heading>

        <Text {...middleTextProps}>
          <FormattedMessage {...middleTextContent} />
        </Text>

        <br />

        <Text as="small" sx={{ fontFamily: 'sans-serif' }}>
          <FormattedMessage {...bottomTextContent} />
        </Text>
      </Flex>
    </Flex>
  );
}

CardFace.propTypes = {
  front: PropTypes.bool,
  name: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
  powers: PropTypes.object.isRequired,
  type: PropTypes.object.isRequired,
  loves: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
};

function Profile(props) {
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
        my={3}
        mx="auto"
      >
        <CardFace {...props} front />
        <CardFace {...props} />
      </Flex>
    </Box>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
  powers: PropTypes.object.isRequired,
  type: PropTypes.object.isRequired,
  loves: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
};

export default Profile;
