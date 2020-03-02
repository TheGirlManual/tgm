/**
 *
 * NavModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome as Home } from '@fortawesome/free-solid-svg-icons';
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
    top: 'auto',
    right: 'auto',
    position: 'fixed',
    padding: 6,
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#CE1A5D',
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
      <NavItem
        textColor="white"
        sx={{
          position: 'fixed',
          top: '25%',
          left: '50%',
        }}
        to="/"
        title={
          <span>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={Home} />
            Home
          </span>
        }
        onClick={hideModal}
      />
      <NavItem
        textColor="white"
        sx={{
          position: 'fixed',
          top: '25%',
          left: '50%',
          transform: 'translate(calc(200%), calc(200%))',
        }}
        to="/about"
        title="About"
        onClick={hideModal}
      />
    </Modal>
  );
}

NavModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default NavModal;
