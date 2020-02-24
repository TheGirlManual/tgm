/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Image, Heading, Button, Text, Flex, Box } from 'rebass';
import messages from './messages';

const img =
  'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fshutterstock%2Fwomen.jpg?alt=media&token=4a4fba44-9122-4321-9015-2cb612429436';

const essi =
  'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fkiiski-essi-circle.png?alt=media&token=c39141e0-fa2b-42de-81a4-6f6b4223cfd4';
const fer =
  'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fzamora-fernanda-circle.png?alt=media&token=e932f1b8-0d22-466b-b47e-f79a8c2aa3f6';

function SectionWrapper({ children }) {
  return (
    <Flex
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `linear-gradient(to bottom, #FDF0E6D9, #FDF0E6D9), url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </Flex>
  );
}

SectionWrapper.propTypes = {
  children: PropTypes.element,
};

export default function HomePage() {
  return (
    <Box height="100%">
      <SectionWrapper>
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
      </SectionWrapper>

      <Heading
        my={5}
        px={3}
        sx={{ textAlign: 'center' }}
        fontSize={5}
        variant="primary"
      >
        <FormattedMessage {...messages.hostsHeadline} />
      </Heading>

      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="flex-start"
        width={[0.9, 0.8]}
        px={4}
        mx="auto"
      >
        <hr
          style={{
            backgroundColor: 'black',
            width: '100%',
            margin: 'auto auto 0 0',
          }}
        />

        <Image
          width={[null, 1, 0.5]}
          px={5}
          py={4}
          pb={[0, null]}
          maxWidth="350px"
          src={fer}
        />

        <Text
          lineHeight={1.6}
          width={[null, 1, 0.5]}
          fontSize={[null, null, 3]}
          py={4}
          my="auto"
          color="secondary"
        >
          Fernanda Zamora is a Master in Public Policy and has worked doing
          research in innovation policies, social policies, restorative justice,
          amongst other topics. As a consultant of communication she has
          participad in the design and implementation of communication
          strategies for NGOs, public and private sector. Passionate in gender
          equality, social innovation and development. Voracious reader,
          frustrated ballerina, addicted to podcasts. Supports: Feminism,
          empowerment and innovation. Against: Injustice, intolerance.
        </Text>

        <hr
          style={{
            backgroundColor: 'black',
            width: '100%',
            margin: 'auto auto 0 0',
          }}
        />

        <Image
          width={[null, 1, 0.5]}
          px={5}
          py={4}
          pb={[0, null]}
          maxWidth="350px"
          src={essi}
        />

        <Text
          lineHeight={1.6}
          width={[null, 1, 0.5]}
          fontSize={[null, null, 3]}
          py={4}
          my="auto"
          color="secondary"
        >
          Essi Kiiski is a Bachelor of Political Science and Master in Violin
          Performance. She is currently working as an APA at the European
          parliament for a Finnish MEP (views in this website represent her own
          opinion). Always looking for growth, and ways to contribute positively
          to the society. Passionate in equality, human rights, sustainable
          development, education, and wellbeing. Music lover, runner, addicted
          to puzzles. Supports: Feminism, equality, and sustainability. Against:
          Prejudice.
        </Text>
      </Flex>
    </Box>
  );
}
