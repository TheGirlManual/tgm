/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import { imagePathForFile } from 'utils/image';
import FeaturedFeed from './FeaturedFeed';
import ProfileCard from './ProfileCard';
import ProfilePageWrapper from './ProfilePageWrapper';
import messages from '../HomePage/messages';

const essi = {
  name: 'Essi Kiiski',
  title: messages.essiTitle,
  location: messages.essiLocation,
  bio: messages.essiBio,
  photo: imagePathForFile({ path: ['profile-photos', 'kiiski-essi-square'] }),
};

const fer = {
  name: 'Fernanda Zamora',
  title: messages.fernandaTitle,
  location: messages.fernandaLocation,
  bio: messages.fernandaBio,
  photo: imagePathForFile({
    path: ['profile-photos', 'zamora-fernanda-square'],
  }),
};

export function ProfilePage() {
  return (
    <ProfilePageWrapper>
      <ProfileCard {...fer} />
      <ProfileCard {...essi} />
      <FeaturedFeed />
    </ProfilePageWrapper>
  );
}

export default ProfilePage;
