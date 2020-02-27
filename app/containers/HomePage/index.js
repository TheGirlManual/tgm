/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading, Button, Text, Flex, Box } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown as Arrow } from '@fortawesome/free-solid-svg-icons';
import IntroSectionWrapper from './IntroSectionWrapper';
import ProfileSectionWrapper from './ProfileSectionWrapper';
import Profile from './Profile';
import Divider from './Divider';
import messages from './messages';

const essi =
  'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fkiiski-essi-circle.png?alt=media&token=c39141e0-fa2b-42de-81a4-6f6b4223cfd4';

const fer =
  'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fzamora-fernanda-circle.png?alt=media&token=e932f1b8-0d22-466b-b47e-f79a8c2aa3f6';

export default function HomePage() {
  return (
    <Flex flexDirection="column">
      <IntroSectionWrapper>
        <Heading
          px={3}
          sx={{ textAlign: 'center' }}
          fontSize={[5, 6]}
          variant="primary"
        >
          <FormattedMessage {...messages.headline} />
        </Heading>

        <Button
          color="primary"
          bg="secondary"
          mt={4}
          py={3}
          width={0.4}
          maxWidth={200}
        >
          <FormattedMessage {...messages.listenCta} />
        </Button>
      </IntroSectionWrapper>

      <ProfileSectionWrapper>
        <Flex
          mt={3}
          flexDirection="column"
          height="30vh"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            flex="2"
            my="auto"
            textAlign="center"
            fontSize={[4, 5]}
            variant="primary"
            sx={{ display: 'flex', alignItems: 'flex-end' }}
          >
            <FormattedMessage {...messages.hostsHeadline} />
          </Heading>

          <Box
            flex="1"
            fontSize={[3, 4]}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Text as="em">
              <FormattedMessage {...messages.meetTheHosts} />
            </Text>
          </Box>

          <Box
            flex="1"
            fontSize={[3, 4]}
            sx={{ display: 'flex', alignItems: 'flex-start' }}
          >
            <FontAwesomeIcon icon={Arrow} />
          </Box>
        </Flex>

        <Flex
          flexWrap="wrap"
          justifyContent="center"
          width={[0.9, 0.8]}
          mx="auto"
        >
          <Divider />

          <Profile
            name="Fernanda Zamora"
            image={fer}
            profile={messages.fernanda}
          />

          <Divider />

          <Profile name="Essi Kiiski" image={essi} profile={messages.essi} />
        </Flex>
      </ProfileSectionWrapper>
    </Flex>
  );
}
