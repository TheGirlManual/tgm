import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading, Link } from 'rebass';
import IntroSectionWrapper from './IntroSectionWrapper';
import messages from '../messages';

export default function IntroSection() {
  return (
    <IntroSectionWrapper>
      <Heading
        px={3}
        sx={{ textAlign: 'center' }}
        fontSize={[5, 7]}
        variant="primary"
      >
        <FormattedMessage {...messages.headline} />
      </Heading>

      <Link
        href="https://open.spotify.com/show/7jwdjqGaFHQeQoly9ByCzP"
        sx={{ textDecoration: 'none', textAlign: 'center' }}
        color="primary"
        bg="secondary"
        mt={4}
        fontSize={[3, 4]}
        width={0.4}
        maxWidth={200}
        p={3}
      >
        <FormattedMessage {...messages.listenCta} />
      </Link>
    </IntroSectionWrapper>
  );
}
