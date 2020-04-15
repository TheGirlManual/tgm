import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Heading } from 'rebass';
import IntroSectionWrapper from './IntroSectionWrapper';
import messages from '../messages';

export default function IntroSection() {
  return (
    <IntroSectionWrapper>
      <Heading
        px={3}
        sx={{ textAlign: 'center' }}
        fontSize={[5, 7]}
        fontWeight="400"
      >
        <FormattedMessage {...messages.headline} />
      </Heading>

      <Button
        as="a"
        href="https://open.spotify.com/show/7jwdjqGaFHQeQoly9ByCzP"
        sx={{ textDecoration: 'none', textAlign: 'center' }}
        mt={4}
        fontSize={[3, 4]}
        width={0.4}
        maxWidth={200}
        p={3}
      >
        <FormattedMessage {...messages.listenCta} />
      </Button>
    </IntroSectionWrapper>
  );
}
