/**
 *
 * Spacer
 *
 */

import React from 'react';
import { Box } from 'rebass';
import PropTypes from 'prop-types';

function Spacer({ horizontal, size }) {
  return <Box {...{ [horizontal ? 'px' : 'py']: size }} />;
}

Spacer.propTypes = {
  horizontal: PropTypes.bool,
  size: PropTypes.number,
};

Spacer.defaultProps = {
  horizontal: false,
  size: 1,
};

export default Spacer;
