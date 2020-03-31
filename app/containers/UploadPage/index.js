/**
 *
 * UploadPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex, Button, Box } from 'rebass';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useTheme } from 'emotion-theming';
import RingLoader from 'react-spinners/RingLoader';
import NumberInput from 'components/CmsNumberInput';
import TextInput from 'components/CmsTextInput';
import Select from 'components/CmsSelect';
import DateInput from 'components/CmsDateInput';
import Constant from 'components/CmsConstant';
import Spacer from 'components/Spacer';
import EpisodeItem from 'components/EpisodeItem';
import { useForm } from 'react-hook-form';
import { values } from 'lodash';
import { makeSchema, makeResolver } from 'utils/form';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUploadPage from './selectors';
import { signIn, signInStatus } from './actions';
import { fields } from './form';
import reducer from './reducer';
import saga from './saga';

const typeToField = {
  string: TextInput,
  date: DateInput,
  number: NumberInput,
  select: Select,
  constant: Constant,
};

const resolver = makeResolver(makeSchema(fields));

export function UploadPage({ dispatch, uploadPage }) {
  const theme = useTheme();

  useInjectReducer({ key: 'uploadPage', reducer });
  useInjectSaga({ key: 'uploadPage', saga });

  useEffect(() => {
    dispatch(signInStatus());
  }, [dispatch]);

  const { control, handleSubmit, formState, watch } = useForm({
    validationResolver: resolver,
  });

  const [, setEpisodePreview] = useState({});

  const buttonAction = uploadPage.login.success ? console.log : signIn;
  const buttonLabel = uploadPage.login.success ? 'Sign Out' : 'Sign In';

  const actionButton = (
    <Button ml="auto" mr={2} onClick={() => dispatch(buttonAction())}>
      {buttonLabel}
    </Button>
  );

  const formComponents = values(fields).map(({ type, label, ...reqs }) => {
    const Component = typeToField[type];

    return (
      <>
        <Component key={label} name={label} control={control} {...reqs} />
        <Spacer key={`${label}_spacer`} size={2} />
      </>
    );
  });

  const form = (
    <Box as="form" onSubmit={handleSubmit(setEpisodePreview)} width="100%">
      {formComponents}
      <Spacer size={2} />
      <Button disabled={!formState.isValid}>Upload</Button>
    </Box>
  );

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      width="90vw"
      p={2}
      mx="auto"
    >
      {!uploadPage.loading && <Box width="100%">{actionButton}</Box>}
      <Flex justifyContent="center" minWidth={300} flex="1" p={3}>
        <RingLoader
          color={theme.colors.secondary}
          loading={uploadPage.loading}
        />
        {form}
      </Flex>
      <Flex justifyContent="center" flex="2" p={3}>
        <EpisodeItem episode={watch()} />
      </Flex>
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
