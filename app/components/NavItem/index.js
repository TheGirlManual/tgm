/**
 *
 * NavItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Text, Box } from 'rebass';

function NavItem({ to, title, onClick }) {
  return (
    <Box
      sx={{ textDecoration: 'none' }}
      mx={3}
      as={NavLink}
      to={to}
      onClick={onClick}
      exact
    >
      <Text
        as="span"
        sx={{
          color: 'black',
          '.active &': { textDecoration: 'underline' },
          '* > :not(.active) > &:hover': {
            textDecoration: 'underline',
          },
        }}
        fontSize={3}
        fontFamily="serif"
      >
        {title}
      </Text>
    </Box>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default NavItem;
