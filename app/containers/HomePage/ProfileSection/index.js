import React from 'react';
import { Heading, Box } from 'rebass';
import { FormattedMessage } from 'react-intl';
import Profile from './Profile';
import ProfileSectionWrapper from './ProfileSectionWrapper';
import messages from '../messages';

const essi = {
  front:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fkiiski-essi-neutral.jpg?alt=media&token=bbafc926-46ea-4d79-b25a-8c14f23699ec',
  back:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fkiiski-essi-smile.jpg?alt=media&token=bd0b899b-c211-4eb7-828b-7beaab545201',
};

const fer = {
  front:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fzamora-fernanda-netural.jpg?alt=media&token=a7f737ce-4c17-442f-a0ca-8ebf59d7cbc2',
  back:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fzamora-fernanda-smile.jpg?alt=media&token=b4f5f652-4b6e-4743-8039-2cd782e6cda0',
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
