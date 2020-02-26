/**
 *
 * FloatingButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as Bars } from '@fortawesome/free-solid-svg-icons';

function FloatingButton({ toggleModal }) {
  return (
    <Box
      width="4rem"
      height="4rem"
      bg="secondary"
      color="white"
      display={['flex', 'none']}
      alignItems="center"
      justifyContent="center"
      onClick={() => toggleModal(true)}
      sx={{
        borderRadius: '50%',
        position: 'fixed',
        bottom: 25,
        left: 25,
        zIndex: 9999,
        fontSize: 22,
      }}
    >
      <FontAwesomeIcon icon={Bars} />
    </Box>
  );
}

FloatingButton.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default FloatingButton;
