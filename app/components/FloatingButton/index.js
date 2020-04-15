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

function FloatingButton({ showModal }) {
  return (
    <Box
      width="4rem"
      height="4rem"
      bg="secondary"
      color="primary"
      display={['flex', 'none']}
      alignItems="center"
      justifyContent="center"
      onClick={showModal}
      sx={{
        borderRadius: '50%',
        borderColor: 'secondaryLight',
        borderWidth: 2,
        borderStyle: 'solid',
        position: 'fixed',
        bottom: 25,
        right: 25,
        zIndex: 9999,
        fontSize: 22,
      }}
    >
      <FontAwesomeIcon icon={Bars} />
    </Box>
  );
}

FloatingButton.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default FloatingButton;
