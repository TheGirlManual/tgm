/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';
import { Box, Flex } from 'rebass';
import { Global, css } from '@emotion/core';
import CookieBanner from 'react-cookie-banner';
import { Howl } from 'howler';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Nav from 'components/Nav';
import NavModal from 'components/NavModal';
import FloatingButton from 'components/FloatingButton';
import { useInjectReducer } from 'utils/injectReducer';

import { showModal, hideModal } from './actions';
import { makeSelectModalState } from './selectors';
import reducer from './reducer';

const ModalOverlayStyles = css`
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;

const ModalContentStyles = css`
  .ReactModal__Content {
    width: 120vh;
    height: 40vh;
    bottom: 50px;
    left: 50px;
    transform: translate(calc(-50%), calc(50%));
    transition: all 150ms ease-in-out;
  }

  .ReactModal__Content--after-open {
    width: 150vh;
    height: 50vh;
  }

  .ReactModal__Content--before-close {
    width: 120vh;
    height: 40vh;
  }
`;

function App(props) {
  useInjectReducer({ key: 'modal', reducer });
  const sound = new Howl({
    src: [
      'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Faudio%2Fep1.wav?alt=media&token=7c1a8ab0-6e7c-4a78-88fa-d48dba992008',
    ],
    html5: true,
  });

  sound.play();

  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
    >
      <CookieBanner
        styles={{
          banner: {
            backgroundColor: 'black',
          },
          button: {
            display: 'none',
          },
        }}
        message="We need to use cookies, so if you stay, you consent. Thanks!"
        cookie="user-has-accepted-cookies"
      />
      <Global styles={ModalOverlayStyles} />
      <Global styles={ModalContentStyles} />
      <NavModal
        modalIsOpen={props.modalIsOpen}
        hideModal={() => props.dispatch(hideModal())}
      />
      <FloatingButton showModal={() => props.dispatch(showModal())} />
      <Nav />
      <Flex flex="1">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/meet" component={ProfilePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Flex>
      <Box height="70px" width="100%" />
    </Flex>
  );
}

App.propTypes = {
  modalIsOpen: PropTypes.bool,
  dispatch: PropTypes.func,
};

const mapStateToProps = createSelector(
  makeSelectModalState(),
  modalIsOpen => ({
    modalIsOpen,
  }),
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
