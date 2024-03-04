"use client";
import React, { useState } from "react";
import { Command, Settings, Filter } from "lucide-react";
import EnterpreneurDashboardCard from "@/components/Common/EnterpreneurDashboardCard";
import Data from "@/app/marketplace/data";
import { Button } from "@/components/ui/button";
import EnterpreneurForm from "@/components/Form/EntrepreneurForm";

type Props = {};

function EntrepreneurDashboard({}: Props) {
  const [type, setType] = useState(
    "Enterpreneur" as "Enterpreneur" | "Investor" | null
  );

  return (
    <>
      <div className="h-screen">
        {/* <div className=" flex items-center p-4 justify-between text-white text-xl w-full bg-primary">
          <span className="flex flex-col p-2">
            <p className="font-semibold capitalize">welcome back,</p>
            <p className="font-bold text-4xl capitalize">{`${'Elon Musk'}`}</p>
            <p className="font-light text-xl">{`${'elommusk@mail.com'}`}</p>
          </span>
          {type === 'Enterpreneur' ? (
            <p className="uppercase text-nowrap p-2">
              <span>total companies : </span>
              <span className="font-bold text-3xl">{`${Data.length}`}</span>
            </p>
          ) : null}
        </div>

        <div className="flex justify-center items-center w-full h-full">
          <div className="border-2 flex md:flex-row flex-col border-black w-[95%] py-2 h-full">
            <div className="md:w-[20%] w-full h-fit md:rounded-md md:h-full flex md:p-0 p-3 justify-between md:justify-evenly md:flex-col md:ml-2 bg-primary-100 ">
              <div className="flex flex-col gap-4">
                <p className="flex w-32 ml-auto mr-auto">
                  <Command />
                  <span className="pl-2 font-bold">Companies</span>
                </p>
                <p className="flex w-32 ml-auto mr-auto">
                  <Settings />
                  <span className="pl-2 font-bold">Settings</span>
                </p>
              </div>
              <div className="w-full transform -translate-x-2 bg-black border-2 h-[1px] border-black hidden md:flex"></div>
              <div>
                <p className="flex w-32 ml-auto mr-auto">
                  <Filter />
                  <span className="pl-2 font-bold">Filter</span>
                </p>
              </div>
            </div>

            <div className="overflow-auto m-4">
              <h1 className="uppercase text-3xl font-semibold">companies</h1>
              <div className="w-full md:w-[90%] flex items-center flex-col">

                {type === 'Enterpreneur' &&
                  Data.map((item, index) => (
                    <EnterpreneurDashboardCard key={index} data={item} />
                  ))}
              </div>
            </div>
          </div>
        </div>*/}
        <EnterpreneurForm />
      </div>
    </>
  );
}

export default EntrepreneurDashboard;
