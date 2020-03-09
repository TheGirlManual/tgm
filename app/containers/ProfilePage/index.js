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
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fkiiski-essi-nobg.png?alt=media&token=ca296b24-db27-4ad0-b415-29834070c816',
};

const fer = {
  name: 'Fernanda Zamora',
  title: messages.fernandaTitle,
  location: messages.fernandaLocation,
  bio: messages.fernandaBio,
  photo:
    'https://firebasestorage.googleapis.com/v0/b/interactive-coolture.appspot.com/o/assets%2Fimg%2Fprofile-photos%2Fzamora-fernanda-nobg.png?alt=media&token=29a0d375-20f9-4eff-a153-5c9eb37972ec',
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
