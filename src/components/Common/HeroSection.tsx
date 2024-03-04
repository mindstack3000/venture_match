import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <>
      <div className="w-full my-3 bg-slate-200 flex flex-col justify-center items-center relative h-[700px]">
        <div className="w-full h-full bg-gradient-l-to-r from-primary-200 to-primary-100 absolute top-0 left-0">
          <Image
            alt="hero"
            src={"/images/heroImg.svg"}
            layout="fill"
            className="object-cover"
          />
        </div>
        <h1 className="text-9xl text-primary-100 font-semibold text-center absolute top-28">
          <span className="text-9xl text-primary ">Fuel </span>The Change{" "}
        </h1>
        <h1 className="text-9xl text-primary-100 font-semibold text-center absolute">
          You Want To <span className="text-secondary-100">See</span>
        </h1>
        <Button variant="outline" size="lg" className="absolute bg-primary-200 text-white text-3xl font-bold px-10 py-10 my-4 bottom-28">
          Get Started
        </Button>
      </div>
    </>
  );
};

export default HeroSection;
