import React from 'react';
import Image from 'next/image';
import InvestorDash from '../../assets/InvestorDash.jpg';
import Company_Profile from '../../assets/Company_Profile.jpg';
import Data_Analytics from '../../assets/Data_Analytics.jpg';

const Features = () => {
  return (
    <div className="md:h-screen">
      <h2
        className="text-5xl md:text-6xl font-bold md:text-left text-center mt-20 mx-10"
        id="features">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4">
        <div className="lg:p-4 md:w-full flex justify-center mt-40">
          <div className="bg-white max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={InvestorDash}
              alt=""
              height={500}
              className="h-56 w-full object-cover object-center"
            />
            <div className="px-6 py-4 lg:h-44">
              <div className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
                Investor Dashboard
              </div>
              <div className="title-font text-lg font-medium mb-2"></div>
              <p className="text-gray-700 text-base">
                Provide investors with a dashboard to track their investments,
                view potential opportunities, and manage their portfolios.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>
        </div>

        <div className="lg:p-4 md:w-full flex justify-center mt-40 ">
          <div className="bg-white max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={Company_Profile}
              alt=""
              height={500}
              className="h-56 w-full object-cover object-center"
            />
            <div className="px-6 py-4 lg:h-44">
              <div className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
                Company Profile
              </div>
              <div className="title-font text-lg font-medium mb-2">
                <a href="#" className="no underline text-gray-900"></a>
              </div>
              <p className="text-gray-700 text-base">
                Allow companies to create detailed profiles showcasing their
                business, financials, growth potential, and investment
                requirements.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>
        </div>

        <div className="lg:p-4 md:w-full flex justify-center mt-40 ">
          <div className="bg-white max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={Data_Analytics}
              alt=""
              height={500}
              className="h-56 w-full object-cover object-center"
            />
            <div className="px-6 py-4 lg:h-44">
              <div className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
                Data Analytics
              </div>
              <div className="title-font text-lg font-medium mb-2">
                <a href="#" className="no underline text-gray-900"></a>
              </div>
              <p className="text-gray-700 text-base">
                Provide data analytics and insights to help investors make
                informed decisions and companies understand investor interests.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
