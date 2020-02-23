/**
 *
 * LocalePicker
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { compose } from 'redux';
import Picker from 'components/Picker';

import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import messages from './messages';

export function LocalePicker(props) {
  return (
    <Picker
      id="locale"
      name="locale"
      value={props.locale}
      onChange={props.onChange}
      values={appLocales}
      messages={messages}
    />
  );
}

LocalePicker.propTypes = {
  onChange: PropTypes.func,
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
    onChange: e => dispatch(changeLocale(e.target.value)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LocalePicker);
