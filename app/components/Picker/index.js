/**
 *
 * Picker
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { Select } from '@rebass/forms';
import { injectIntl, intlShape } from 'react-intl';

function Option(props) {
  return <option value={props.value}>{props.message}</option>;
}

Option.propTypes = {
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

function Picker({ id, name, value, onChange, values, messages, intl }) {
  return (
    <Box
      sx={{
        color: 'secondary',
      }}
    >
      <Select
        sx={{
          border: 'none',
          borderRadius: 0,
          borderBottom: 'solid 2px',
          borderColor: 'secondary',
          color: 'black',
        }}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        {values.map(item => (
          <Option
            key={item}
            value={item}
            message={messages[item] ? intl.formatMessage(messages[item]) : item}
          />
        ))}
      </Select>
    </Box>
  );
}

Picker.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  messages: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(Picker);
