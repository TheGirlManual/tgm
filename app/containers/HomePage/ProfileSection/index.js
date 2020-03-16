import React from 'react';
import { Heading, Box } from 'rebass';
import { FormattedMessage } from 'react-intl';
import Profile from './Profile';
import ProfileSectionWrapper from './ProfileSectionWrapper';
import messages from '../messages';

const essi = {
  front:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fkiiski-essi-neutral.webp?alt=media&token=b4843854-ad1b-4ea8-a0fd-14d9eb0ad429',
  back:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fkiiski-essi-smile.webp?alt=media&token=f64e1aeb-a7ad-4480-8d28-016334d24f77',
};

const fer = {
  front:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fzamora-fernanda-netural.webp?alt=media&token=37512215-27d1-4056-9e81-3090652b5ca8',
  back:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fzamora-fernanda-smile.webp?alt=media&token=ce56fe1c-620d-4db0-b1c7-2c4c6b6fa85e',
};

export default function ProfileSection() {
  return (
    <ProfileSectionWrapper>
      <Heading mb={2} textAlign="center" fontSize={[4, 5]}>
        <FormattedMessage {...messages.hostsHeadline} />
      </Heading>

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

      <Box width={[0, 0.2]} />

      <Box width={[0, 0.2]} />

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
    </ProfileSectionWrapper>
  );
}
