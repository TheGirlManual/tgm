/**
 *
 * NavModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
import Modal from 'react-modal';

import NavItem from 'components/NavItem';

Modal.setAppElement('#app');

const modalStyle = {
  overlay: {
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    zIndex: 9999,
    backgroundColor: '#3d3d3d99',
  },
  content: {
    top: '55%',
    left: '0',
    right: '0',
    bottom: '30%',
    minHeight: 100,
    padding: 6,
    marginRight: -50,
    marginLeft: -50,
    borderRadius: 0,
    border: 'none',
  },
};

function NavModal({ modalIsOpen, hideModal }) {
  return (
    <Modal
      closeTimeoutMS={200}
      shouldCloseOnOverlayClick
      onRequestClose={hideModal}
      style={modalStyle}
      isOpen={modalIsOpen}
    >
      <Flex
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box width={1} textAlign="center">
          <NavItem to="/" title="Home" onClick={hideModal} />
          <NavItem to="/about" title="About" onClick={hideModal} />
        </Box>
      </Flex>
    </Modal>
  );
}

NavModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default NavModal;
