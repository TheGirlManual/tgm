/**
 *
 * UploadPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from 'rebass';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useTheme } from 'emotion-theming';
import RingLoader from 'react-spinners/RingLoader';
import NumberInput from 'components/CmsNumberInput';
import TextInput from 'components/CmsTextInput';
import { useForm } from 'react-hook-form';
import 'utils/firebase';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUploadPage from './selectors';
import { signInStatus } from './actions';
import reducer from './reducer';
import saga from './saga';

export function UploadPage({ dispatch, uploadPage }) {
  const theme = useTheme();
  const { control, handleSubmit } = useForm();

  useInjectReducer({ key: 'uploadPage', reducer });
  useInjectSaga({ key: 'uploadPage', saga });

  useEffect(() => {
    dispatch(signInStatus());
  }, [dispatch]);

  /*
  const actionButton = uploadPage.login.success ? (
    <Button onClick={() => {}}>Sign out</Button>
  ) : (
    <Button onClick={() => dispatch(signIn())}>Sign in</Button>
  );
  */

  return (
    <Box as="form" onSubmit={handleSubmit(console.log)} m="auto">
      <RingLoader color={theme.colors.secondary} loading={uploadPage.loading} />
      <TextInput control={control} name="Title" />
      <NumberInput control={control} name="Episode" />
      <NumberInput control={control} name="Season" />
      <button type="submit">send</button>
    </Box>
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
