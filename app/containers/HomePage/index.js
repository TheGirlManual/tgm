/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Flex } from 'rebass';
import IntroSection from './IntroSection';
import ProfileSection from './ProfileSection';

export default function HomePage() {
  return (
    <Flex width={1} flexDirection="column">
      <IntroSection />
      <ProfileSection />
    </Flex>
  );
}
