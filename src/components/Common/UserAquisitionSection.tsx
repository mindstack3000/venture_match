import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

type Props = {};

function UserAquisitionSection({}: Props) {
  return (
    <div className="w-screen flex items-center justify-center h-screen relative mt-10">
      <Image
        alt="circle1"
        src={'/images/circle1.svg'}
        className="absolute top-1/3 -translate-x-1/2 -translate-y-1/2  right-1/3"
        width={200}
        height={200}
      />
      <Image
        alt="circle2"
        src={'/images/circle2.svg'}
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2  right-1/2"
        width={300}
        height={300}
      />
      <Image
        alt="side1"
        src={'/images/side1.svg'}
        className="absolute bottom-0 right-0"
        width={300}
        height={300}
      />
      <Image
        alt="side2"
        src={'/images/side2.svg'}
        className="absolute bottom-0 left-0"
        width={300}
        height={300}
      />
      <div
        className="relative flex flex-col items-center justify-center text-center w-[90%] h-[80%] bg-white/30 bg-opacity-50 backdrop-blur-lg rounded-3xl "
        style={{ zIndex: 1 }}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold ">
          Risk is what keeps <br /> us young.
        </h1>

        <Button className="text-xl md:text-3xl p-8 md:py-8 md:px-16 mt-10">
          INVEST NOW
        </Button>
      </div>
    </div>
  );
}

export default UserAquisitionSection;
