import React from 'react';
import { Text, Heading, Box } from 'rebass';
import { FormattedMessage } from 'react-intl';
import { imagePathForFile } from 'utils/image';
import Profile from './Profile';
import ProfileSectionWrapper from './ProfileSectionWrapper';
import messages from '../messages';

const essi = {
  front: imagePathForFile({
    path: ['profile-photos', 'kiiski-essi-neutral'],
  }),
  back: imagePathForFile({
    path: ['profile-photos', 'kiiski-essi-smile'],
  }),
};

const fer = {
  front: imagePathForFile({
    path: ['profile-photos', 'zamora-fernanda-neutral'],
  }),
  back: imagePathForFile({
    path: ['profile-photos', 'zamora-fernanda-smile'],
  }),
};

export default function ProfileSection() {
  return (
    <ProfileSectionWrapper>
      <Heading
        width={1}
        mb={2}
        textAlign="center"
        fontSize={[4, 5]}
        fontWeight="400"
      >
        <FormattedMessage {...messages.hostsHeadline} />
      </Heading>

      <Box width={[1, null, 0.5]} p={2}>
        <Profile
          name="Fernanda Zamora"
          title={messages.fernandaTitle}
          powers={messages.fernandaPowers}
          type={messages.fernandaType}
          loves={messages.fernandaLoves}
          image={fer}
        />
      </Box>

      <Box width={[1, null, 0.5]} p={2}>
        <Profile
          name="Essi Kiiski"
          title={messages.essiTitle}
          powers={messages.essiPowers}
          type={messages.essiType}
          loves={messages.essiLoves}
          image={essi}
        />
      </Box>
      <Box width={600} mt={4}>
        <Box
          p={2}
          sx={{
            width: 90,
            height: 60,
            float: 'left',
            shapeOutside: 'circle(50% at 50%)',
          }}
        />
        <Text
          width={1}
          px={4}
          fontSize={[4, 5]}
          fontFamily="serif"
          sx={{
            position: 'relative',
            textAlign: 'left',
            ':before': {
              content: '"’’"',
              position: 'absolute',
              left: 10,
              top: -40,
              width: 100,
              height: 100,
              pointerEvents: 'none',
              fontSize: '11rem',
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
        <Text mt={3} fontSize={[2, 3]} width={1} color="#555" textAlign="right">
          — Justine Musk
        </Text>
      </Box>
    </ProfileSectionWrapper>
  );
}
