import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

type EnterpreneurDashboardProps = {
  // Define props
  data: {
    company_name: string;
    business_idea: string;
    image: string;
    total_bid: number;
    description: string;
    pe_ratio: number;
    de_ratio: number;
    equity: number;
  };
};

function EnterpreneurDashboardCard({ data }: EnterpreneurDashboardProps) {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[75%] lg:w-[65%] m-4 gap-4 p-5  border-4 border-black rounded-md">
      <div className="flex flex-col items-center justify-between gap-2 md:items-start">
        <Image
          src={data.image}
          className="rounded-full object-cover items-start"
          alt="logo"
          width={100}
          height={100}
        />
        <span>
          <p className="font-extrabold text-3xl">{`₹${data.total_bid}Cr`}</p>
          <h3 className="text-nowrap font-semibold">{`for ${data.equity}% equity`}</h3>
        </span>
        <span className="flex flex-col justify-center items-center md:items-start">
          <p className="text-nowrap pl-2 font-bold">Total Bids</p>
          <p className="font-extrabold ml-auto mr-auto text-xl">{`${data.total_bid}`}</p>
        </span>
      </div>
      <div className="flex flex-col gap-4 w-full md:ml-4">
        <p className="font-extrabold text-2xl">{`${data.company_name}`}</p>
        <p className="bg-territory w-fit rounded-xl px-2 py-1 font-bold">
          #{`${data.business_idea}`}
        </p>
        <p className="text-secondary">Description</p>
        <p className="pb-4">{`${data.description}`}</p>
        <div className="flex justify-evenly">
          <Button className="w-24 uppercase bg-primary-200">see Bids</Button>
          <Button className="w-24 bg-secondary-100">More</Button>
        </div>
      </div>
    </div>
  );
}

export default EnterpreneurDashboardCard;
