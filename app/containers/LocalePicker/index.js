/**
 *
 * LocalePicker
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from 'rebass';
import { Select } from '@rebass/forms';
import { createSelector } from 'reselect';
import { compose } from 'redux';

import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

const Option = props => <option value={props.locale}>{props.value}</option>;

Option.propTypes = {
  locale: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export function LocalePicker(props) {
  return (
    <Box>
      <Select
        id="country"
        name="country"
        value={props.locale}
        sx={{
          fontFamiliy: 'monospace',
        }}
        onChange={props.onLocaleChange}
      >
        {appLocales.map(locale => (
          <Option key={locale} locale={locale} value={locale.toUpperCase()} />
        ))}
      </Select>
    </Box>
  );
}

LocalePicker.propTypes = {
  onLocaleChange: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

function mapDispatchToProps(dispatch) {
  return {
    onLocaleChange: e => dispatch(changeLocale(e.target.value)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LocalePicker);
