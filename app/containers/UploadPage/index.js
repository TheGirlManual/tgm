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
import { addDocument, signIn, signOut, signInStatus } from './actions';
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

function Form({ formFields, hookForm, onSubmit }) {
  const formComponents = values(formFields).map(({ type, label, ...reqs }) => {
    const Component = typeToField[type];

    return (
      <>
        <Component
          key={label}
          name={label}
          control={hookForm.control}
          {...reqs}
        />
        <Spacer key={`${label}_spacer`} size={2} />
      </>
    );
  });

  const form = (
    <Box as="form" onSubmit={onSubmit} width="100%">
      {formComponents}
      <Spacer size={2} />
      <Button submit>Upload</Button>
    </Box>
  );

  return form;
}

export function UploadPage({ dispatch, uploadPage }) {
  const theme = useTheme();

  useInjectReducer({ key: 'uploadPage', reducer });
  useInjectSaga({ key: 'uploadPage', saga });

  useEffect(() => {
    dispatch(signInStatus());
  }, [dispatch]);

  // if (uploadPage.login.token) dispatch(addDocument({ d: 1 }));

  const hookForm = useForm({
    validationResolver: resolver,
  });

  const [, setEpisodePreview] = useState({});

  const buttonAction = uploadPage.login.success ? signOut : signIn;
  const buttonLabel = uploadPage.login.success ? 'Sign Out' : 'Sign In';

  const actionButton = (
    <Button ml="auto" mr={2} onClick={() => dispatch(buttonAction())}>
      {buttonLabel}
    </Button>
  );

  const content = (
    <Flex justifyContent="center" minWidth={300} flex="1" p={3}>
      <Form
        formFields={fields}
        hookForm={hookForm}
        onSubmit={hookForm.handleSubmit(console.log)}
      />
    </Flex>
  );

  const preview = (
    <Flex justifyContent="center" flex="2" p={3}>
      <EpisodeItem episode={hookForm.watch()} />
    </Flex>
  );

  const loader = (
    <Flex justifyContent="center" p={3}>
      <RingLoader
        size={150}
        color={theme.colors.secondary}
        loading={uploadPage.loading}
      />
    </Flex>
  );

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      width="90vw"
      p={3}
      mx="auto"
    >
      {!uploadPage.loading && (
        <Flex width="100%" mb="auto">
          {actionButton}
        </Flex>
      )}
      {uploadPage.loading && loader}
      {uploadPage.login.success && content}
      {uploadPage.login.success && preview}
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
