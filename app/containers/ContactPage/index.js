/**
 *
 * ContactPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Flex } from 'rebass';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import ContactPageWrapper from './ContactPageWrapper';
import NewsletterSignup from './NewsletterSignup';
import ContactForm from './ContactForm';
import makeSelectContactPage, {
  makeSelectSubRequest,
  makeSelectContactRequest,
} from './selectors';
import { requestSub } from './actions';
import reducer from './reducer';
import saga from './saga';

export function ContactPage({ subRequest, contactRequest, handleRequestSub }) {
  useInjectReducer({ key: 'contactPage', reducer });
  useInjectSaga({ key: 'contactPage', saga });

  return (
    <ContactPageWrapper>
      <Flex mb={4} width={[1, 1, 1, 0.5]}>
        <NewsletterSignup {...subRequest} handleRequestSub={handleRequestSub} />
      </Flex>
      <Flex width={[1, 1, 1, 0.5]}>
        <ContactForm {...contactRequest} />
      </Flex>
    </ContactPageWrapper>
  );
}

ContactPage.propTypes = {
  handleRequestSub: PropTypes.func.isRequired,
  subRequest: PropTypes.object.isRequired,
  contactRequest: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contactPage: makeSelectContactPage(),
  subRequest: makeSelectSubRequest(),
  contactRequest: makeSelectContactRequest(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleRequestSub: email => dispatch(requestSub(email)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ContactPage);
