/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Text, Flex } from 'rebass';
import messages from './messages';

const img =
  'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fshutterstock%2Fwomen.jpg?alt=media&token=4a4fba44-9122-4321-9015-2cb612429436';

export default function HomePage() {
  return (
    <Flex
      flexDirection="column"
      height="100%"
      sx={{
        backgroundImage: `linear-gradient(to bottom, #FDF0E6D9, #FDF0E6D9), url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flex="1 1 auto"
      >
        <Text
          px={3}
          sx={{ textAlign: 'center' }}
          fontSize={5}
          variant="primary"
        >
          <FormattedMessage {...messages.headline} />
        </Text>

        <Button mt={4} py={3} width={0.4} maxWidth={200}>
          <FormattedMessage {...messages.listenCta} />
        </Button>
      </Flex>
    </Flex>
  );
}
