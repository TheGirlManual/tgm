/**
 *
 * CmsConstant
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { Input, Label } from '@rebass/forms';
import { Controller } from 'react-hook-form';
import { camelCase } from 'lodash';

function CmsConstant({ control, name, fixedValue, ...props }) {
  const id = camelCase(name);

  return (
    <Box>
      <Label htmlFor={id}>{name}</Label>
      <Controller
        as={Input}
        control={control}
        id={id}
        name={id}
        defaultValue={fixedValue}
        {...props}
        disabled
      />
    </Box>
  );
}

CmsConstant.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  fixedValue: PropTypes.string.isRequired,
};

CmsConstant.propTypes = {};

export default CmsConstant;
