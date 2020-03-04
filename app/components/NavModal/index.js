/**
 *
 * NavModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome as Home } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

import NavItem, { navItems } from 'components/NavItem';

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
  const [home, ...rest] = navItems;

  return (
    <Modal
      closeTimeoutMS={200}
      shouldCloseOnOverlayClick
      onRequestClose={hideModal}
      style={modalStyle}
      isOpen={modalIsOpen}
    >
      <Box
        sx={{
          position: 'fixed',
          top: '33%',
          left: '50%',
        }}
      >
        <NavItem
          {...home}
          textColor="white"
          title={
            <span>
              <FontAwesomeIcon style={{ marginRight: 8 }} icon={Home} />
              Home
            </span>
          }
          onClick={hideModal}
        />

        {rest.map(values => (
          <NavItem
            {...values}
            key={values.to}
            textColor="white"
            onClick={hideModal}
          />
        ))}
      </Box>
    </Modal>
  );
}

NavModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default NavModal;
