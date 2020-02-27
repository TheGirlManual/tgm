/*
 *
 * AboutPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading, Text, Flex } from 'rebass';
import messages from './messages';

export default function AboutPage() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      m="auto"
      width={[0.8, 0.7]}
    >
      <Heading
        px={3}
        my={3}
        sx={{ textAlign: 'right' }}
        fontSize={[5, 6]}
        color="secondary"
        width={1}
        textAlign={['center', 'left']}
      >
        <FormattedMessage {...messages.title} />
      </Heading>

      <Text
        sx={{
          lineHeight: 1.6,
        }}
        pb={5}
        fontSize={[2, 3]}
        textAlign="center"
      >
        <FormattedMessage {...messages.mission} />
      </Text>
    </Flex>
  );
}
