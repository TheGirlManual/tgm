/**
 *
 * CmsTextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { Input, Label } from '@rebass/forms';
import { Controller } from 'react-hook-form';
import { camelCase } from 'lodash';

function CmsTextInput({ control, name, ...props }) {
  const id = camelCase(name);

  return (
    <Box>
      <Label htmlFor={id}>{name}</Label>
      <Controller as={Input} control={control} id={id} name={id} {...props} />
    </Box>
  );
}

CmsTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

CmsTextInput.propTypes = {
  defaultValue: '',
};

export default CmsTextInput;
