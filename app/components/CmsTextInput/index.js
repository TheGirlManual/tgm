/**
 *
 * CmsTextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { Textarea, Input, Label } from '@rebass/forms';
import { Controller } from 'react-hook-form';
import { camelCase } from 'lodash';

function CmsTextInput({ control, name, multiline, ...props }) {
  const id = camelCase(name);
  const Component = multiline ? Textarea : Input;

  return (
    <Box>
      <Label htmlFor={id}>{name}</Label>
      <Controller
        as={Component}
        control={control}
        id={id}
        name={id}
        {...props}
      />
    </Box>
  );
}

CmsTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  multiline: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

CmsTextInput.propTypes = {
  defaultValue: '',
  multiline: false,
};

export default CmsTextInput;
