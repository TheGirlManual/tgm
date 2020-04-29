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
import { useSpring, animated, config } from 'react-spring';
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

  .back {
    background: #fff;
    color: #ce1a5d;
    box-shadow: inset 0px 0px 0px 3px #ce1a5d;
    font-size: 1.618rem;
    overflow: hidden;
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
};

function CardFace({ front, name, title, powers, type, loves, image, spring }) {
  const side = front ? 'front' : 'back';

  // prettier-ignore
  const headingProps = front
    ? {
      sx: {
        position: 'relative',
        fontWeight: 'bolder',
      },
    } : {
      sx: {
        position: 'relative',
        fontFamily: 'sans-serif',
        fontWeight: 400,
      },
    };
  const middleTextProps = front ? { as: 'p', sx: { fontFamily: 'serif' } } : {};
  const middleTextContent = front ? title : type;
  const bottomTextContent = front ? powers : loves;

  // prettier-ignore
  const animation = front
    ? {
      opacity: spring.opacity.interpolate(o => 1 - o),
      transform: spring.transform,
    } : {
      opacity: spring.opacity,
      transform: spring.transform.interpolate(t => `${t} rotateY(180deg)`),
    };

  return (
    <Flex
      as={animated.div}
      flexDirection={['column', 'row']}
      bg="secondary"
      className={side}
      sx={cardFaceStyle}
      style={animation}
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
        <Heading
          flex={2}
          fontSize={[5, 6]}
          mb={2}
          lineHeight="1"
          {...headingProps}
        >
          <Box
            width={1}
            sx={{ wordSpacing: '9999em', position: 'absolute', bottom: 0 }}
          >
            {name}
          </Box>
        </Heading>

        <Text lineHeight="1" {...middleTextProps}>
          <FormattedMessage {...middleTextContent} />
        </Text>

        <br />

        <Text flex={2} as="small" sx={{ fontFamily: 'sans-serif' }}>
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
  spring: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
};

function Profile(props) {
  const [flipped, setFlip] = useState(false);

  const spring = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(2000px) rotateY(${flipped ? 180 : 0}deg)`,
    config: config.wobbly,
  });

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
        <CardFace {...props} spring={spring} front />
        <CardFace {...props} spring={spring} />
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
