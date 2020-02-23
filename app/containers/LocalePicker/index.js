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

export function LocalePicker(props) {
  return (
    <Box>
      <Select
        id="country"
        name="country"
        value={props.locale}
        onChange={props.onLocaleChange}
      >
        {Object.entries(appLocales).map(([key, locale]) => (
          <option key={key}>{locale}</option>
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
