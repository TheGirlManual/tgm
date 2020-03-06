import React from 'react';
import { Heading, Box } from 'rebass';
import { FormattedMessage } from 'react-intl';
import Profile from './Profile';
import ProfileSectionWrapper from './ProfileSectionWrapper';
import messages from '../messages';

const essi = {
  front:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fkiiski-essi-neutral.jpg?alt=media&token=56959a9e-866b-4985-9d15-40e782e2e2ed',
  back:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fkiiski-essi-smile.jpg?alt=media&token=ef1c1313-0a8e-4399-913f-1aee7ad3cf87',
};

const fer = {
  front:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fzamora-fernanda-neutral.jpg?alt=media&token=83da4f16-2c4e-4dca-b14b-cf6ab210cee1',
  back:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fzamora-fernanda-smile.jpg?alt=media&token=41927eb9-8613-4b88-8f54-5be51dea0b69',
};

export default function ProfileSection() {
  return (
    <ProfileSectionWrapper>
      <Heading mb={2} textAlign="center" fontSize={[4, 5]}>
        <FormattedMessage {...messages.hostsHeadline} />
      </Heading>

      <Box width={[1, 0.8]}>
        <Profile
          name="Essi Kiiski"
          title={messages.essiTitle}
          powers={messages.essiPowers}
          type={messages.essiType}
          loves={messages.essiLoves}
          image={essi}
        />
      </Box>

      <Box width={[0, 0.2]} />

      <Box width={[0, 0.2]} />

      <Box width={[1, 0.8]}>
        <Profile
          name="Fernanda Zamora"
          title={messages.fernandaTitle}
          powers={messages.fernandaPowers}
          type={messages.fernandaType}
          loves={messages.fernandaLoves}
          image={fer}
        />
      </Box>
    </ProfileSectionWrapper>
  );
}
