import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMouse as Mouse,
  faHandPointUp as Hand,
} from '@fortawesome/free-solid-svg-icons';
import { Heading, Text, Box, Flex } from 'rebass';
import { FormattedMessage } from 'react-intl';
import { css, keyframes } from '@emotion/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { isMobile } from 'react-device-detect';
import 'react-lazy-load-image-component/src/effects/blur.css';

const nudge = keyframes`
  from, 75%, to {
    transform: scale(1);
  }
  
  85% {
    transform: scale(1.2);
  }
`;

const CardConditionalStyle = css`
  .front {
    font-size: 1.618rem;
    color: #fff;
    overflow: hidden;
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
    overflow: hidden;
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

  const headingProps = front
    ? { sx: { fontWeight: 'bolder' } }
    : { sx: { fontFamily: 'sans-serif', fontWeight: 400 } };
  const middleTextProps = front ? { as: 'p', sx: { fontFamily: 'serif' } } : {};

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
        css={css`
          animation: ${nudge} 2s linear infinite;
        `}
      >
        <FontAwesomeIcon icon={isMobile ? Hand : Mouse} />
      </Box>
      <Box
        flex="3"
        sx={{ objectFit: 'cover' }}
        width="100%"
        height={['40%', '100%']}
      >
        <LazyLoadImage
          style={{ objectFit: 'cover' }}
          src={image[side][0]}
          placeholderSrc={image[side][1]}
          alt={image[side][1]}
          width="100%"
          height="100%"
          effect="blur"
        />
      </Box>

      <Flex
        flex="3"
        className="text"
        flexDirection="column"
        justifyContent="center"
        p={4}
        height={['auto', '100%']}
      >
        <Heading fontSize={[5, 6]} mb={2} lineHeight="1" {...headingProps}>
          {name}
        </Heading>

        <Text lineHeight="1" {...middleTextProps}>
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
    <Box width={1} css={CardConditionalStyle}>
      <Flex
        sx={{
          position: 'relative',
          cursor: 'pointer',
          perspective: 4000,
        }}
        minHeight={[450, 400]}
        maxHeight={[450, null, null]}
        width={1}
        maxWidth={600}
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
