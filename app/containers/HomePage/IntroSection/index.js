import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading, Button } from 'rebass';
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

      <Button
        color="primary"
        bg="secondary"
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
