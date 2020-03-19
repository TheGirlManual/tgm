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
import { Flex } from 'rebass';
import { Global, css } from '@emotion/core';
import CookieBanner from 'react-cookie-banner';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import DonatePage from 'containers/DonatePage/Loadable';
import EpisodesPage from 'containers/EpisodesPage/Loadable';
import EpisodeDetailPage from 'containers/EpisodeDetailPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ConfirmationPage from 'containers/ConfirmationPage/Loadable';
import Nav from 'components/Nav';
import NavModal from 'components/NavModal';
import Footer from 'components/Footer';
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
    width: 200vw;
    height: 80vh;
    transition: all 150ms ease-in-out;
  }

  .ReactModal__Content--after-open {
    width: 200vw;
    height: 90vh;
  }

  .ReactModal__Content--before-close {
    width: 200vw;
    height: 80vh;
  }
`;

function App(props) {
  useInjectReducer({ key: 'modal', reducer });

  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
      sx={{ fontFamily: 'body' }}
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
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/donate" component={DonatePage} />
          <Route exact path="/episodes" component={EpisodesPage} />
          <Route
            path="/episodes/:contentId/:slug"
            component={EpisodeDetailPage}
          />
          <Route exact path="/confirmation" component={ConfirmationPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Flex>
      <Footer />
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
