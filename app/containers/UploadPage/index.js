/**
 *
 * UploadPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex, Button } from 'rebass';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useTheme } from 'emotion-theming';
import RingLoader from 'react-spinners/RingLoader';
import 'utils/firebase';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUploadPage from './selectors';
import { signIn, signInStatus } from './actions';
import reducer from './reducer';
import saga from './saga';

export function UploadPage({ dispatch, uploadPage }) {
  const theme = useTheme();
  useInjectReducer({ key: 'uploadPage', reducer });
  useInjectSaga({ key: 'uploadPage', saga });

  useEffect(() => {
    dispatch(signInStatus());
  }, [dispatch]);

  const actionButton = uploadPage.login.success ? (
    <Button onClick={() => {}}>Sign out</Button>
  ) : (
    <Button onClick={() => dispatch(signIn())}>Sign in</Button>
  );

  return (
    <Flex m="auto">
      <RingLoader color={theme.colors.secondary} loading={uploadPage.loading} />
      {!uploadPage.loading && actionButton}
    </Flex>
  );
}

UploadPage.propTypes = {
  uploadPage: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  uploadPage: makeSelectUploadPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UploadPage);
