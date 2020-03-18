import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { imagePathForFile } from 'utils/image';

const img = imagePathForFile({ path: ['shutterstock', 'women'] });

function IntroSectionWrapper({ children }) {
  return (
    <Flex
      minHeight="30vh"
      width={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py={3}
      sx={{
        position: 'relative',
        ':before': {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(to bottom, #ffffffcc, #ffffffcc), url(${img})`,
          backgroundSize: 'cover',
          filter: 'hue-rotate(-2deg) saturate(1.2)',
          zIndex: -1,
          backgroundPosition: 'center',
          content: '""',
        },
      }}
    >
      {children}
    </Flex>
  );
}

IntroSectionWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default IntroSectionWrapper;
