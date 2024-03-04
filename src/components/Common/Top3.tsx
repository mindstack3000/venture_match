import React from 'react';
import Marketdata from '@/app/marketplace/data';
import MarketPlaceCard from '@/components/Common/MarketPlaceCard';

type Props = {};

function TopThree({}: Props) {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-5xl md:text-6xl font-bold md:text-left text-center mx-20 text-white pt-10">
          Highlights
        </h2>

        <div className="flex flex-col items-center justify-center mt-20">
          {Marketdata.slice(0, 3).map((data, index) => (
            <MarketPlaceCard key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TopThree;
