/**
 *
 * CmsDateInput
 *
 */

import React from 'react';
import TextInput from 'components/CmsTextInput';

function CmsDateInput({ ...props }) {
  return <TextInput {...props} multiline={false} type="date" />;
}

CmsDateInput.propTypes = {};

export default CmsDateInput;
