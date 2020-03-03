import React from 'react';
import { Box } from 'rebass';
import Profile from './Profile';
import ProfileSectionWrapper from './ProfileSectionWrapper';
import messages from '../messages';

const essi =
  'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fkiiski-essi.jpg?alt=media&token=cb763b31-dfa7-4990-91f0-8acd07e45538';

const fer =
  'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fzamora-fernanda.jpg?alt=media&token=625624cb-ed69-4e17-92d8-0d2c82c554bd';

export default function ProfileSection() {
  return (
    <ProfileSectionWrapper>
      <Box width={[0.8, 0.8, 0.8]}>
        <Profile name="Essi Kiiski" image={essi} title={messages.essiTitle} />
      </Box>
      <Box width={[0.8, 0.8, 0.8]}>
        <Profile
          name="Fernanda Zamora"
          image={fer}
          title={messages.fernandaTitle}
        />
      </Box>
    </ProfileSectionWrapper>
  );
}
