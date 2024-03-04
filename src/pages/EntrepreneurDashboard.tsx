'use client'
import React, { useState,useContext } from "react";
import { Command, Settings, Filter } from "lucide-react";
import EnterpreneurDashboardCard from "@/components/Common/EnterpreneurDashboardCard";
import Data from "@/app/marketplace/data";
import { Button } from "@/components/ui/button";
import EnterpreneurForm from "@/components/Form/EntrepreneurForm";
import { UserContext } from "@/provider/userProvider";

type Props = {};

function EntrepreneurDashboard({}: Props) {
  const [type, setType] = useState(
    null as "Enterpreneur" | "Investor" | null
  );
  const [editdata, seteditdata] = useState(false);
  const{user}=useContext(UserContext);
  console.log(user);

  return (
    <>
      <div className="h-screen">
        <div className="flex items-center p-4 justify-between text-white text-xl w-full bg-primary">
          <span className="flex flex-col p-2">
            <p className="font-semibold capitalize">Welcome back,</p>
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
                <Button className="flex w-32 ml-auto mr-auto" onClick={(e) => {
                  seteditdata(false);
                }}>
                  <Command />
                  <span className="pl-2 font-bold">Companies</span>
                </Button>
                <Button className="flex w-32 ml-auto mr-auto" onClick={(e) => {
                  seteditdata(true);
                }}>
                  <Settings />
                  <span className="pl-2 font-bold">Settings</span>
                </Button>
              </div>
              <div className="w-full transform -translate-x-2 bg-black border-2 h-[1px] border-black hidden md:flex"></div>
              <div>
                <Button className="flex w-32 ml-auto mr-auto">
                  <Filter />
                  <span className="pl-2 font-bold">Filter</span>
                </Button>
              </div>
            </div>


            {/* {editdata === false ? (
              <div className="overflow-auto m-4">
                <h1 className="uppercase text-3xl font-semibold">Companies</h1>
                <div className="w-full md:w-[90%] flex items-center flex-col">
                  {type === "Enterpreneur" &&
                    Data.map((item, index) => (
                      <EnterpreneurDashboardCard key={index} data={item} />
                    ))}
                </div>
              </div>
            ) : <EnterpreneurForm />} */}
            {type === null && <EnterpreneurForm />}
          </div>
        </div>
      </div>
    </>
  );
}

export default EntrepreneurDashboard;
