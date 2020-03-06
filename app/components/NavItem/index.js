/**
 *
 * NavItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Text, Box } from 'rebass';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const navItems = [
  {
    to: '/',
    title: 'home',
  },
  {
    to: 'about',
    title: 'about',
  },
  {
    to: 'meet',
    title: 'meet',
  },
];

function NavItem({ to, title, onClick, sx, textColor }) {
  return (
    <Box
      sx={{ textDecoration: 'none', ...sx }}
      mx={3}
      as={NavLink}
      to={to}
      onClick={onClick}
      exact
    >
      <Text
        as="span"
        sx={{
          color: textColor,
          '.active &': { textDecoration: 'underline' },
          '* > :not(.active) > &:hover': {
            textDecoration: 'underline',
          },
        }}
        fontFamily="sans-serif"
      >
        <FormattedMessage {...messages[title]} />
      </Text>
    </Box>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  sx: PropTypes.object,
  textColor: PropTypes.string,
};

NavItem.defaultProps = {
  sx: {},
  textColor: 'black',
};

export default NavItem;
