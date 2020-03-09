import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

const img =
  'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fshutterstock%2Fwomen.jpg?alt=media&token=4a4fba44-9122-4321-9015-2cb612429436';

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
