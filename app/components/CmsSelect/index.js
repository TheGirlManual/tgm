/**
 *
 * CmsSelect
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import Select from 'react-select';
import { Label } from '@rebass/forms';
import { camelCase } from 'lodash';
import { Controller } from 'react-hook-form';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function CmsSelect({ control, name, ...props }) {
  const id = camelCase(name);

  return (
    <Box>
      <Label htmlFor={id}>{name}</Label>
      <Controller
        as={Select}
        control={control}
        id={id}
        name={name}
        options={options}
        {...props}
      />
    </Box>
  );
}

CmsSelect.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
};

CmsSelect.propTypes = {};

export default CmsSelect;
