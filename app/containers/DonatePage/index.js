/**
 *
 * DonatePage
 *
 */

import React from 'react';
import { Link, Image, Button, Text, Flex, Heading } from 'rebass';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { css, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import DonatePageWrapper from './DonatePageWrapper';
import messages from './messages';

export function DonatePage() {
  const theme = useTheme();

  return (
    <DonatePageWrapper>
      <Global
        styles={css`
          a {
            color: ${theme.colors.secondary};
          }
        `}
      />
      <Flex flexDirection="column" textAlign="center" lineHeight={1.8} m="auto">
        <Heading>
          <FormattedMessage {...messages.helpUs} />
        </Heading>
        <Text mt={2}>
          <FormattedHTMLMessage {...messages.helpUsText} />
        </Text>

        <Heading sx={{ fontStyle: 'bold' }} mt={4}>
          <FormattedMessage {...messages.donate} />
        </Heading>
        <Text mt={2}>
          <FormattedHTMLMessage {...messages.donateText} />
        </Text>
        <Button
          mt={3}
          mx="auto"
          width={0.4}
          maxWidth={400}
          color="primary"
          bg="secondary"
        >
          <FormattedHTMLMessage {...messages.donateCta} />
        </Button>
        <Link href="https://www.patreon.com/bePatron?u=31577164">
          <Image
            mt={3}
            mx="auto"
            width={0.4}
            maxWidth={400}
            src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png"
          />
        </Link>
      </Flex>
    </DonatePageWrapper>
  );
}

export default DonatePage;
