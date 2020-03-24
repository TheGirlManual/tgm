/**
 *
 * CmsNumberInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { Input, Label } from '@rebass/forms';
import { Controller } from 'react-hook-form';
import { camelCase } from 'lodash';

function CmsNumberInput({ control, name, ...props }) {
  const id = camelCase(name);

  return (
    <Box>
      <Label htmlFor={id}>{name}</Label>
      <Controller
        as={Input}
        type="number"
        min={0}
        step={1}
        control={control}
        id={id}
        name={id}
        {...props}
      />
    </Box>
  );
}

CmsNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

CmsNumberInput.propTypes = {
  defaultValue: '',
};

export default CmsNumberInput;
