/**
 *
 * ContactPage
 *
 */

import React from 'react';
import { Button, Text, Flex, Heading, Box } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import ContactPageWrapper from './ContactPageWrapper';

function NewsletterSignup() {
  return (
    <Flex
      as="form"
      onSubmit={e => e.preventDefault()}
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
        Subscribe to our newsletter
      </Heading>
      <Text mt={3} width={1}>
        Sign up with your email address to receive monthly insights into “The
        Girl Manual”
      </Text>
      <Box mt={4} width={1}>
        <Input
          placeholder="Your email address"
          type="email"
          id="email"
          name="email"
        />
      </Box>
      <Button width={1} mt={3} py={3} bg="secondary" color="primary">
        Sign Up
      </Button>
      <Text as="small" mt={4}>
        We may use your Personal Information to contact you with newsletters and
        other information that may be of interest to you. You may opt out of
        receiving any, or all, of these communications from us by following the
        unsubscribe link. We will never share your Personal Information with
        Third Parties.
      </Text>
    </Flex>
  );
}

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
        Reach Out
      </Heading>
      <Box mt={3} width={1}>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" />
      </Box>
      <Box mt={3} width={1}>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" />
      </Box>
      <Box mt={3} width={1}>
        <Label htmlFor="subject">Subject</Label>
        <Input type="text" id="subject" name="subject" />
      </Box>
      <Box mt={3} width={1}>
        <Label htmlFor="message">Message</Label>
        <Textarea type="text" id="message" name="message" />
      </Box>
      <Button width={1} mt={4} py={3} bg="secondary" color="primary">
        Send
      </Button>
    </Flex>
  );
}

export function ContactPage() {
  return (
    <ContactPageWrapper>
      <Flex mb={4} width={[1, 1, 1, 'max-content']}>
        <NewsletterSignup />
      </Flex>
      <Flex width={[1, 1, 1, 'max-content']}>
        <ContactForm />
      </Flex>
    </ContactPageWrapper>
  );
}

export default ContactPage;
