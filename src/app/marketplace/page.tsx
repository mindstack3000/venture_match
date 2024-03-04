import React from "react";
import MarketPlaceCard from "@/components/Common/MarketPlaceCard";
import Data from "./data";
import { Filter } from "lucide-react";

interface MarketData {
  company_name: string;
  business_idea: string;
  image: string;
  total_bid: number;
  description: string;
  pe_ratio: number;
  de_ratio: number;
  equity: number;
}

function MarketPage() {
  return (
    <div className="w-full flex flex-col md:items-center">
      <h2 className="h-20 w-full flex justify-center items-center uppercase bg-black text-territory text-4xl font-bold text-center p-10 md:text-5xl md:h-24 ">
        Market
      </h2>

      <div className="w-full flex justify-end font-semibold items-center gap-2 p-5">
        <Filter size={24} />
        <p className="text-xl cursor-pointer">Filters</p>
      </div>

       {Data.map(
        (
          {
            company_name,
            business_idea,
            image,
            total_bid,
            description,
            pe_ratio,
            de_ratio,
            equity,
          }: MarketData,
          index
        ) => (
          <MarketPlaceCard
            key={index} // Added key prop to avoid React warning
            company_name={company_name}
            business_idea={business_idea}
            image={image}
            total_bid={total_bid}
            description={description}
            pe_ratio={pe_ratio}
            de_ratio={de_ratio}
            equity={equity}
          />
        )
      )}
    </div>
  );
}

export default MarketPage;
