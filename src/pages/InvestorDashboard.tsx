// import React from 'react'
// import InvestmentCard from '@/components/Common/InvestmentsCard'

// function InvestorDashboard() {
//   return (
//     <div className=''>
//         <InvestmentCard/>
//     </div>
//   )
// }

// export default InvestorDashboard
import Layout from '../components/Common/Layout';
import InvestmentsCard from '../components/Common/InvestmentsCard';

interface Company {
  name: string;
  equity: string;
  investment: string;
  isProfit: boolean;
}

export default function Home() {
  const companies: Company[] = [
    {
      name: 'Reliance Industries',
      equity: '3 %',
      investment: '₹ 1234',
      isProfit: true,
    },
    {
      name: 'Reliance Industries',
      equity: '3 %',
      investment: '₹ 1234',
      isProfit: true,
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {companies.map((company, index) => (
          <InvestmentsCard key={index} {...company} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <span>TOTAL COMPANIES : 2</span>
        <br />
        <span className="text-green-500">Profit 12354</span>
      </div>
    </Layout>
  );
}