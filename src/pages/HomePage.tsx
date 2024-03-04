import HeroSection from '@/components/Common/HeroSection';
import Navbar from '@/components/Common/Navbar';
import React from 'react';

type Props = {};

function HomePage({}: Props) {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
}

export default HomePage;
