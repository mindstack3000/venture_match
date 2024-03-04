import Features from '@/components/Common/Features';
import Footer from '@/components/Common/Footer';
import InvestmentsCard from '@/components/Common/InvestmentsCard';
import Navbar from '@/components/Common/Navbar';
import React from 'react';

type Props = {};

function HomePage({}: Props) {
  return (
    <main>
      <Navbar />
      <Features/>
      <Footer/>
      <InvestmentsCard equity='30%'/>
    </main>
  );
}

export default HomePage;
