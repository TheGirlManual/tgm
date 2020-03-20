/**
 *
 * ContactPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Flex, Heading, Box } from 'rebass';
import { Input } from '@rebass/forms';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function NewsletterSignup({ handleRequestSub }) {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);

    handleRequestSub(data.get('email'));
  };

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

export default NewsletterSignup;
