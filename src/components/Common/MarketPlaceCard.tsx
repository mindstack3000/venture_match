import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface MarketData {
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
}

function MarketPlaceCard({ data }: MarketData) {
  return (
    <div
      className="flex flex-col md:flex-row w-[90%] 
     md:w-[800px] rounded-lg m-4 gap-4 p-5 justify-between border-4 border-black bg-white">
      <div className="flex flex-col items-center gap-2 md:items-start">
        <Image
          src={data.image}
          className="rounded-full object-cover items-start"
          alt="logo"
          width={100}
          height={100}
        />
        <span className="flex flex-col justify-center items-center md:items-start">
          <p className="text-nowrap pl-2 font-bold">Total Bids</p>
          <p className="font-extrabold ml-auto mr-auto text-xl">{`${data.total_bid}`}</p>
        </span>
      </div>
      <div className="flex flex-col gap-4 md:ml-4">
        <p className="font-extrabold text-2xl">{`${data.company_name}`}</p>
        <p className="bg-territory w-fit rounded-xl px-2 py-1 font-bold">
          #{`${data.business_idea}`}
        </p>
        <p className="text-secondary-200">Description</p>
        <p className="pb-4">{`${data.description}`}</p>
      </div>
      <div className="flex md:flex-col flex-col sm:flex-row sm:items-center justify-between gap-2 md:items-end">
        <span>
          <p className="font-extrabold text-3xl">{`₹${data.total_bid}Cr`}</p>
          <h3 className="text-nowrap font-semibold">{`for ${data.equity}% equity`}</h3>
        </span>

        <div>
          <span className="flex gap-4 p-2">
            <span>
              <p className="font-medium text-nowrap">P/E Ratio</p>
              <p>{`${data.pe_ratio}`}</p>
            </span>
            <Button className="w-24 bg-primary-200">Bid +</Button>
          </span>
          <span className="flex gap-4 p-2">
            <span>
              <p className="font-medium text-nowrap">D/E Ratio</p>
              <p>{`${data.de_ratio}`}</p>
            </span>
            <Button className="w-24 bg-slate-900">More{'>>'}</Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MarketPlaceCard;
