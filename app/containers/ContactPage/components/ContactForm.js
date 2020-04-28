/**
 *
 * ContactForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Flex, Text, Heading, Box } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { css, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import messages from '../messages';

function ContactForm({ handleMessage }) {
  const theme = useTheme();

  const handleSubmit = event => {
    const data = new FormData(event.target);

    handleMessage(data);
    event.preventDefault();
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      flexWrap="wrap"
      mx="auto"
      px={2}
      flex="1"
      fontSize={[3, 3]}
      minWidth="20vw"
      maxWidth="600px"
    >
      <Global
        styles={css`
          a {
            color: ${theme.colors.secondary};
          }
        `}
      />
      <Heading color="secondary" fontSize={[6, 6]}>
        <FormattedMessage {...messages.helpUs} />
      </Heading>
      <Text mt={2} lineHeight="1.4" fontSize={[2, 3]} textAlign="center">
        <FormattedHTMLMessage {...messages.helpUsText} />
      </Text>

      <Box width={0.8}>
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
      </Box>
    </Flex>
  );
}

ContactForm.propTypes = {
  handleMessage: PropTypes.func.isRequired,
};

export default ContactForm;
