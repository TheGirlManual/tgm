/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import ProfileCard from './ProfileCard';
import ProfilePageWrapper from './ProfilePageWrapper';
import messages from '../HomePage/messages';

const essi = {
  name: 'Essi Kiiski',
  title: messages.essiTitle,
  location: messages.essiLocation,
  bio: messages.essiBio,
  photo:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fkiiski-essi-nobg.webp?alt=media&token=98797616-88d6-45f1-8348-00b0d0e8770d',
};

const fer = {
  name: 'Fernanda Zamora',
  title: messages.fernandaTitle,
  location: messages.fernandaLocation,
  bio: messages.fernandaBio,
  photo:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fzamora-fernanda-nobg.webp?alt=media&token=bcb27d3d-8543-4a62-83c4-75843a664dff',
};

export function ProfilePage() {
  return (
    <ProfilePageWrapper>
      <ProfileCard {...fer} />
      <ProfileCard {...essi} />
    </ProfilePageWrapper>
  );
}

export default ProfilePage;
