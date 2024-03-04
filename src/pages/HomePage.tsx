import Features from '@/components/Common/Features';
import Footer from '@/components/Common/Footer';
import HeroSection from '@/components/Common/HeroSection';

import Navbar from '@/components/Common/Navbar';
import TopThree from '@/components/Common/Top3';
import UserAquisitionSection from '@/components/Common/UserAquisitionSection';
import React from 'react';

type Props = {};

function HomePage({}: Props) {
  return (
    <main>
      <Navbar />
      <div className="mt-[10vh]">
        <HeroSection />
        <div className="bg-[linear-gradient(#000,#12372A,#FBFADA,#fff)]">
          <Features />
          <TopThree />
        </div>
        <UserAquisitionSection />
      </div>
      <Footer />
    </main>
  );
}

export default HomePage;
