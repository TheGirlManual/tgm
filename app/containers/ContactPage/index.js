/**
 *
 * ContactPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, Flex, Heading, Box } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import ContactPageWrapper from './ContactPageWrapper';
import makeSelectContactPage, {
  makeSelectSubRequest,
  makeSelectContactRequest,
} from './selectors';
import { requestSub } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

function NewsletterSignup({ success, loading, handleRequestSub }) {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);

    handleRequestSub(data.get('email'));
  };

  console.log(success, loading);

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      flexWrap="wrap"
      maxWidth="600px"
      mx="auto"
      px={2}
      textAlign="center"
      fontSize={[3, 4]}
    >
      <Heading color="secondary" fontSize={[5, 6]}>
        <FormattedMessage {...messages.subHeader} />
      </Heading>
      <Text mt={3} width={1}>
        <FormattedMessage {...messages.subMessage} />
      </Text>
      <Box mt={4} width={1}>
        <Input
          placeholder="Your email address"
          type="email"
          id="email"
          name="email"
        />
      </Box>
      <Button type="submit" width={1} mt={3} py={3}>
        <FormattedMessage {...messages.subButton} />
      </Button>
      <Text as="small" mt={4}>
        <FormattedMessage {...messages.subDisclaimer} />
      </Text>
    </Flex>
  );
}

NewsletterSignup.propTypes = {
  handleRequestSub: PropTypes.func.isRequired,
  success: PropTypes.bool,
  loading: PropTypes.bool,
};

function ContactForm() {
  return (
    <Flex
      as="form"
      onSubmit={e => e.preventDefault()}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      flexWrap="wrap"
      mx="auto"
      px={2}
      flex="1"
      fontSize={[3, 3]}
      minWidth="20vw"
    >
      <Heading color="secondary" fontSize={[5, 6]}>
        <FormattedMessage {...messages.contactHeader} />
      </Heading>
      <Box mt={3} width={1}>
        <Label htmlFor="name">
          <FormattedMessage {...messages.contactName} />
        </Label>
        <Input type="text" id="name" name="name" />
      </Box>
      <Box mt={3} width={1}>
        <Label htmlFor="email">
          <FormattedMessage {...messages.contactEmail} />
        </Label>
        <Input type="email" id="email" name="email" />
      </Box>
      <Box mt={3} width={1}>
        <Label htmlFor="subject">
          <FormattedMessage {...messages.contactSubject} />
        </Label>
        <Input type="text" id="subject" name="subject" />
      </Box>
      <Box mt={3} width={1}>
        <Label htmlFor="message">
          <FormattedMessage {...messages.contactMessage} />
        </Label>
        <Textarea type="text" id="message" name="message" />
      </Box>
      <Button width={1} mt={4} py={3} bg="secondary" color="primary">
        <FormattedMessage {...messages.contactSend} />
      </Button>
    </Flex>
  );
}

export function ContactPage({ subRequest, contactRequest, handleRequestSub }) {
  useInjectReducer({ key: 'contactPage', reducer });
  useInjectSaga({ key: 'contactPage', saga });

  return (
    <ContactPageWrapper>
      <Flex mb={4} width={[1, 1, 1, 'max-content']}>
        <NewsletterSignup {...subRequest} handleRequestSub={handleRequestSub} />
      </Flex>
      <Flex width={[1, 1, 1, 'max-content']}>
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
