import React from 'react';
import { Button } from '../ui/button';
import heroImg from '/images/heroImg.svg';

const HeroSection = () => {
  return (
    <div className="relative w-full my-3 bg-slate-200">
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-200"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl">Fuel the change</h1>
        <h1 className="text-4xl">you want to see</h1>
        <Button className="bg-primary-100 mt-4">Get Started</Button>
      </div>
    </div>
  );
};

export default HeroSection;
