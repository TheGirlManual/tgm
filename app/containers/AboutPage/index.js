/*
 *
 * AboutPage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box, Button, Heading, Text, Flex, Image } from 'rebass';
import AboutPageWrapper from './AboutPageWrapper';
import messages from './messages';

export default function AboutPage() {
  return (
    <AboutPageWrapper>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width={[null, 1, 0.4]}
        mb={4}
      >
        <Heading px={3} my={3} fontSize={[5, 6]} color="secondary">
          <FormattedMessage {...messages.title} />
        </Heading>

        <Text
          sx={{
            lineHeight: 1.6,
          }}
          fontSize={[3, 4]}
          textAlign="center"
        >
          <FormattedMessage {...messages.mission} />
        </Text>
        <Button bg="secondary" color="primary" width={0.4} height={50} my={3}>
          Listen now
        </Button>
      </Flex>
      <Flex flexDirection="column" width={[null, 1, 0.4]}>
        <Image
          height={250}
          width={700}
          mx="auto"
          sx={{
            objectFit: 'cover',
            objectPosition: 'top',
          }}
          src="https://images.squarespace-cdn.com/content/v1/5e4f0d241148c71dde86343e/1583383978098-JPGTVPHL8W1DQUUV4LH8/ke17ZwdGBToddI8pDm48kK23xSGZCwT9PKUVTmqpRf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URIqpXCo5scLrcwx9kXsnW8yi9ywV9DuGeOC297H9CUShSY6exqoyBvGMtufB_NDkg/Essi+and+Fer?format=750w"
        />
        <Box
          mt={4}
          sx={{
            position: 'relative',
            fontFamily: 'sans-serif',
            lineHeight: 1.6,
            fontSize: 4,
          }}
        >
          <Box
            sx={{
              width: 90,
              height: 90,
              float: 'left',
              shapeOutside: 'circle(50% at 50%)',
            }}
          />
          <Text
            width={1}
            px={4}
            fontSize={[2, 3]}
            sx={{
              position: 'relative',
              textAlign: 'left',
              ':before': {
                content: '"’’"',
                position: 'absolute',
                left: 0,
                top: -80,
                width: 100,
                height: 100,
                pointerEvents: 'none',
                fontSize: '12rem',
                textAlign: 'left',
                fontFamily: 'Arial',
                letterSpacing: '-16px',
                fontStyle: 'normal',
                fontWeight: 'bold',
                color: 'secondary',
              },
            }}
          >
            The enemy of feminism isn’t men. It’s patriarchy, and patriarchy is
            not men. It is a system, and women can support the system of
            patriarchy just as men can support the fight for gender equality.
          </Text>
          <Text mt={3} width={1} color="#555" textAlign="right">
            — Justine Musk
          </Text>
        </Box>
      </Flex>
    </AboutPageWrapper>
  );
}
