import React from "react";
import Image from "next/image";
import Reliance from "../../assets/Reliance.png";

function InvestmentsCard ()  {
    return(
        <>
        <div>
            <div className="bg-slate-900 lg:p-4 md:w-full flex justify-center mt-40">
                <div className="bg-slate-300 flex space-x-4 max-w-sm rounded-2xl overflow-hidden shadow-lg">
                    <Image  src={Reliance} alt=""  className="w-full"/>
                    <div className="px-6 py-4 lg:h-44">
                        <div className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            Reliance Industries
                        </div>
                        <p className="bg-yellow-500 text-gray-700 text-base">
                            3% Equity
                        </p>
                        <p className="text-gray-700 text-base">
                            $1244
                        </p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default InvestmentsCard;
// import React from 'react';

// interface InvestmentsCardProps {
//   name: string;
//   equity: string;
//   investment: string;
//   isProfit: boolean;
// }

// const InvestmentsCard: React.FC<InvestmentsCardProps> = ({
//   name,
//   equity,
//   investment,
//   isProfit,
// }) => {
//   const profitLossIndicator = isProfit ? '●' : 'Loss';
//   const profitLossColor = isProfit ? 'text-green-500' : 'text-red-500';

//   return (
//     <div className={`border p-4 mb-4 ${profitLossColor}`}>
//       <div className="flex justify-between mb-2">
//         <h2 className="text-xl font-semibold">{name}</h2>
//         <span>{equity}</span>
//       </div>
//       <div className="flex justify-between">
//         <span>{investment}</span>
//         <span className={profitLossColor}>{profitLossIndicator}</span>
//       </div>
//     </div>
//   );
// };

// export default InvestmentsCard;