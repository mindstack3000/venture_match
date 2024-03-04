import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <div className="w-full my-3 bg-slate-200 ">
      <div className="w-full h-96 bg-gradient-to-r from-primary-100 to-primary-200">
        <Image
          alt="hero"
          src={'/images/heroImg.svg'}
          width={100}
          height={100}
          className=" object-cover w-full h-96"
        />
      </div>
      <h1 className="text-4xl text-white">Fuel the change </h1>
      <h1 className="text-4xl text-white">you want to see</h1>
      <button className="bg-primary-100 text-white font-bold px-4 py-2 my-4">
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;
