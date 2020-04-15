import React from 'react';
import { Heading, Box } from 'rebass';
import { FormattedMessage } from 'react-intl';
import { imagePathForFile } from 'utils/image';
import Profile from './Profile';
import ProfileSectionWrapper from './ProfileSectionWrapper';
import messages from '../messages';

const essi = {
  front: imagePathForFile({
    path: ['profile-photos', 'kiiski-essi-neutral'],
    token: 'b4843854-ad1b-4ea8-a0fd-14d9eb0ad429',
  }),
  back: imagePathForFile({
    path: ['profile-photos', 'kiiski-essi-smile'],
    token: 'f64e1aeb-a7ad-4480-8d28-016334d24f77',
  }),
};

const fer = {
  front: imagePathForFile({
    path: ['profile-photos', 'zamora-fernanda-neutral'],
    token: '37512215-27d1-4056-9e81-3090652b5ca8',
  }),
  back: imagePathForFile({
    path: ['profile-photos', 'zamora-fernanda-smile'],
    token: 'ce56fe1c-620d-4db0-b1c7-2c4c6b6fa85e',
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
    </ProfileSectionWrapper>
  );
}
