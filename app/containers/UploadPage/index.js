/**
 *
 * UploadPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Flex, Button } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
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
      <Box as="form">
        <Box width={1} px={2}>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" />
        </Box>
        <Box width={1} px={2}>
          <Label htmlFor="authors">Author(s)</Label>
          <Input id="authors" name="authors" />
        </Box>
        <Box width={0.5} px={2}>
          <Label htmlFor="episode">Episode</Label>
          <Input type="number" min="1" id="episode" name="episode" />
        </Box>
        <Box width={0.5} px={2}>
          <Label htmlFor="season">Season</Label>
          <Input type="number" min="1" id="season" name="season" />
        </Box>
        <Box width={1} px={2}>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" />
        </Box>
        <Box width={1} px={2}>
          <Label htmlFor="releaseDate">Release Date</Label>
          <Input type="date" id="releaseDate" name="releaseDate" />
        </Box>
        <Box width={1} px={2}>
          <Label htmlFor="slug">Slug</Label>
          <Input id="slug" name="slug" />
        </Box>
        <Box width={1} px={2}>
          <Label htmlFor="spotifyId">Spotify ID</Label>
          <Input id="spotifyId" name="spotifyId" />
        </Box>
      </Box>
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
