/**
 *
 * UploadPage
 *
 */

import React, { useEffect } from 'react';
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
import Constant from 'components/CmsConstant';
import Spacer from 'components/Spacer';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { camelCase } from 'lodash';
import 'utils/firebase';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUploadPage from './selectors';
import { signIn, signInStatus } from './actions';
import { fields } from './form';
import reducer from './reducer';
import saga from './saga';

const typeToField = {
  string: TextInput,
  number: NumberInput,
  select: Select,
  constant: Constant,
};

const typeToYup = {
  string: yup.string(),
  number: yup.number(),
  select: yup.mixed(),
  constant: yup.string(),
};

const validationSchema = Object.values(fields).reduce(
  (schema, entry) => ({
    ...schema,
    [camelCase(entry.label)]: typeToYup[entry.type],
  }),
  {},
);

const schema = yup.object(validationSchema);

const resolver = data => {
  try {
    return {
      values: schema.validateSync(data),
      errors: {},
    };
  } catch (err) {
    const errors = (err.inner || []).concat(err.inner);

    return {
      values: {},
      errors: errors.reduce((prev, cur) => ({
        ...prev,
        [cur.path]: JSON.stringify(err.message),
      })),
    };
  }
};

export function UploadPage({ dispatch, uploadPage }) {
  const theme = useTheme();
  const { control, handleSubmit } = useForm({
    validationResolver: resolver,
  });

  useInjectReducer({ key: 'uploadPage', reducer });
  useInjectSaga({ key: 'uploadPage', saga });

  useEffect(() => {
    dispatch(signInStatus());
  }, [dispatch]);

  const actionButton = uploadPage.login.success ? (
    <Button ml="auto" mr={2} onClick={() => {}}>
      Sign out
    </Button>
  ) : (
    <Button ml="auto" mr={2} onClick={() => dispatch(signIn())}>
      Sign in
    </Button>
  );

  const formComponents = Object.values(fields).map(
    ({ type, label, ...reqs }) => {
      const Component = typeToField[type];

      return (
        <>
          <Component key={label} name={label} control={control} {...reqs} />
          <Spacer size={2} />
        </>
      );
    },
  );

  const form = (
    <Box as="form" onSubmit={handleSubmit(console.log)} width="100%">
      {formComponents}
      <Button type="submit">Upload</Button>
    </Box>
  );

  return (
    <Flex
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
      width="80vh"
      mx="auto"
    >
      {!uploadPage.loading && actionButton}
      <Flex justifyContent="center" width="100%" mt={5}>
        <RingLoader
          color={theme.colors.secondary}
          loading={uploadPage.loading}
        />
        {form}
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
