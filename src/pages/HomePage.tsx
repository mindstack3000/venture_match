import Features from '@/components/Common/Features';
import Footer from '@/components/Common/Footer';
import Navbar from '@/components/Common/Navbar';
import React from 'react';

type Props = {};

function HomePage({}: Props) {
  return (
    <main>
      <Navbar />
      <Features/>
      <Footer/>
    </main>
  );
}

export default HomePage;
