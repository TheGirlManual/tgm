import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

const img =
  'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fshutterstock%2Fwomen.jpg?alt=media&token=4a4fba44-9122-4321-9015-2cb612429436';

function IntroSectionWrapper({ children }) {
  return (
    <Flex
      height="70vh"
      width={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        ':before': {
          position: 'absolute',
          top: 'inherit',
          left: 'inherit',
          width: '100%',
          height: 'inherit',
          backgroundImage: `linear-gradient(to bottom, #ffffffdd, #ffffffdd), url(${img})`,
          backgroundSize: 'cover',
          filter: 'hue-rotate(-35deg)',
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
  children: PropTypes.element,
};

export default IntroSectionWrapper;
