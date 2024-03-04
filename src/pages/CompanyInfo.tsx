import React from 'react';

type Props = {};

function CompanyInfo({}: Props) {
  return (
    <main>
      <div className=" flex items-center p-4 justify-between text-white text-xl w-full bg-primary">
        <span className="flex flex-col p-2">
          <p className="font-bold text-4xl capitalize"></p>
        </span>

        <p className="uppercase text-nowrap p-2">
          <span>total companies : </span>
          <span className="font-bold text-3xl">{`2`}</span>
        </p>
      </div>
    </main>
  );
}

export default CompanyInfo;
