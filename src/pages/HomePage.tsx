import Features from '@/components/Common/Features';
import HeroSection from '@/components/Common/HeroSection';
import Navbar from '@/components/Common/Navbar';
import React from 'react';

type Props = {};

function HomePage({}: Props) {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Features />
    </main>
  );
}

export default HomePage;
