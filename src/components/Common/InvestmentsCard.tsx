import React from 'react';
import Image from 'next/image';
import Reliance from "../../assets/Reliance.png"
interface InvestmentCardProps {
  equity: string;
}

const InvestmentsCard: React.FC<InvestmentCardProps> = ({ equity }) => {
  return (
    <div className=" bg-slate-200 p-2 flex space-x-4  rounded-3xl max-w-md mx-auto relative  items-center">
      <Image src={Reliance} alt="" className="flex w-[60px] h-[60px] border-gray-400"/>
      <div className=" space-x-4">
        <div>
          <h3 className="text-lg font-medium flex-shrink mx-4 ">Reliance Industries</h3>
          <p className="bg-yellow-300 rounded-3xl w-fit px-2 text-base mt-1">{equity}   Equity</p>
        </div>
      </div>
      <div>
        $1234
      </div>
    </div>
  );
};

export default InvestmentsCard;