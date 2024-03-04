import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BidCards from "@/components/Common/BidCards";

function page() {
  return (
    <div className="h-screen">
      <div className=" flex items-center p-4 justify-between text-white text-xl w-full bg-primary">
        <span className="flex justify-center gap-2 items-center p-2">
          <Image
            src={`${"/cardLogo.jpg"}`}
            className="bg-primary rounded-full object-cover items-start"
            alt="logo"
            width={100}
            height={100}
          />
          <p className="font-semibold uppercase">{`${"Reliance Industries"}`}</p>
        </span>
        <span className="p-2 gap-2 flex flex-col">
          <p className="font-semibold">
            Total bids : <span className="text-2xl">{`${250}`}</span>
          </p>
          <Button className="bg-primary-100 uppercase text-black">
            + Add Bid
          </Button>
        </span>
      </div>

      <div className="flex justify-center items-center w-full h-full">
        <div className="border-2 flex justify-center border-black w-[95%] py-2 h-full">
          <div className="flex  w-[60%] m-4">
            <BidCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
