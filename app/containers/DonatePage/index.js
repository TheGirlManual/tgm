/**
 *
 * DonatePage
 *
 */

import React from 'react';
import { Link, Image, Text, Flex, Heading } from 'rebass';
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
      <Flex flexDirection="column" textAlign="center" lineHeight={1.5} m="auto">
        <Heading color="secondary" fontSize={[6, 6]}>
          <FormattedMessage {...messages.donate} />
        </Heading>
        <Text mt={2} fontSize={[2, 3]}>
          <FormattedHTMLMessage {...messages.donateText} />
        </Text>
        <Link href="https://www.patreon.com/bePatron?u=31577164">
          <Image
            mt={3}
            mx="auto"
            width={0.4}
            minWidth={200}
            maxWidth={400}
            src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png"
          />
        </Link>
      </Flex>
    </DonatePageWrapper>
  );
}

export default DonatePage;
