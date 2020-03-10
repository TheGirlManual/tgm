/**
 *
 * NavModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome as Home } from '@fortawesome/free-solid-svg-icons';
import { Flex } from 'rebass';
import { useTheme } from 'emotion-theming';
import Modal from 'react-modal';

import NavItem, { navItems } from 'components/NavItem';

Modal.setAppElement('#app');

const modalStyle = theme => ({
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
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: '700px',
    marginLeft: 'calc(-50%)',
    marginBottom: 'calc(-70%)',
    position: 'fixed',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: theme.colors.secondary,
  },
});

function NavModal({ modalIsOpen, hideModal }) {
  const style = modalStyle(useTheme());

  const [home, ...rest] = navItems;

  return (
    <Modal
      closeTimeoutMS={200}
      shouldCloseOnOverlayClick
      onRequestClose={hideModal}
      style={style}
      isOpen={modalIsOpen}
    >
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        px={3}
        m="auto"
        sx={{
          width: '100vw',
          height: 'calc(50%)',
          fontSize: 12,
        }}
      >
        <NavItem
          {...home}
          sx={{ padding: 2, flex: '1 0 100%', fontSize: '6vw' }}
          textColor="white"
          title="home"
          onClick={hideModal}
          render={() => (
            <span>
              <FontAwesomeIcon icon={Home} />
            </span>
          )}
        />

        {rest.map(values => (
          <NavItem
            {...values}
            sx={{ padding: 2, flex: '1 0 100%', fontSize: '5vw' }}
            key={values.to}
            textColor="white"
            onClick={hideModal}
          />
        ))}
      </Flex>
    </Modal>
  );
}

NavModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default NavModal;
