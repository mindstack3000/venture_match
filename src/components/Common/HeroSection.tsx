import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full my-3 bg-slate-200 flex flex-col justify-center items-center  h-screen">
        <Image
          alt="hero"
          src={'/images/heroImg.svg'}
          layout="fill"
          objectFit="cover"
          className="w-full h-full absolute top-0 left-0 ob"
        />

        <div className="w-full h-full flex items-center justify-center z-10 flex-col">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-black font-semibold text-center ">
            <span className=" text-primary-200 ">Fuel </span>The Change
            <br />
            You Want To <span className="text-secondary-100">See</span>
          </h1>
          <Button
            variant="outline"
            size="lg"
            className=" bg-primary-200 text-white text-sm  md:text-lg lg:text-2xl font-semibold sm:py-5 sm:px-5 md:py-8 md:px-8  lg:px-10 lg:py-10 my-4 mt-10">
            GET THE INVESTOR NOW
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
