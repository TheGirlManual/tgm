/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Box, Flex } from 'rebass';
import { Global, css } from '@emotion/core';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Nav from 'components/Nav';
import NavModal from 'components/NavModal';
import FloatingButton from 'components/FloatingButton';

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
    opacity: 0;
    transition: all 200ms ease-in-out;
    transform: translateX(-50px);
  }

  .ReactModal__Content--after-open {
    opacity: 1;
    transform: translateX(0);
  }

  .ReactModal__Content--before-close {
    opacity: 0;
    transform: translateX(50px);
  }
`;

export default function App() {
  const [modalIsOpen, toggleModal] = React.useState(false);

  return (
    <Flex flexDirection="column">
      <Global styles={ModalOverlayStyles} />
      <Global styles={ModalContentStyles} />
      <NavModal modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
      <FloatingButton toggleModal={toggleModal} />
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Box height="70px" width="100%" />
    </Flex>
  );
}
