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
    </ProfileSectionWrapper>
  );
}
