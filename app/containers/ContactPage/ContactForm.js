/**
 *
 * ContactForm
 *
 */

import React from 'react';
import { Button, Flex, Heading, Box } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

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

export default ContactForm;
