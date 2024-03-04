import React from "react";
import { Command, Settings } from "lucide-react";
function page() {
  return (
    <div className="h-full">
      <div className=" flex items-center p-4 justify-between text-white capitalize text-xl w-full bg-primary">
        <span className="flex flex-col p-2">
          <p className="font-semibold">welcome back,</p>
          <p className="font-bold text-4xl">{`${"Elon Musk"}`}</p>
          <p className="font-light text-xl">{`${"elommusk@mail.com"}`}</p>
        </span>
        <p className="uppercase text-nowrap p-2">
          <span>total companies : </span>
          <span className="font-bold text-3xl">{`${2}`}</span>
        </p>
      </div>

      <div className="flex justify-center items-center w-full h-full">
        <div className="border-2 border-black w-[95%] h-full">
          {/* SideNav */}
          <div className="w-[15%] flex flex-col bg-primary-100">
            <p className="ml-auto mr-auto">
              <Command />
              Companies
            </p>
            <p className="flex justify-center items-center">
              <Settings />
              Settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
