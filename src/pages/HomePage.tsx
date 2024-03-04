import Feature from '@/components/Common/Feature';
import HeroSection from '@/components/Common/HeroSection';
import Navbar from '@/components/Common/Navbar';
import React from 'react';

type Props = {};

function HomePage({}: Props) {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Feature />
    </main>
  );
}

export default HomePage;
