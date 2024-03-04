"use client";
import React from "react";
import { Button } from "@/components/ui/button";

function BidCards() {
  const [comment, setComment] = React.useState("");

  return (
    <>
      <div
        className={`${
          comment !== "" ? "rounded-t-md" : "rounded-md"
        } w-full flex flex-col lg:flex-row gap-2 h-fit p-2 bg-secondary`}>
        <div className="w-full lg:w-3/4 pl-2 lg:p-4">
          <p className="font-bold text-2xl flex">
            Investor Name: <span className="ml-1">{` ${"John"}`}</span>
          </p>
          <p className="capitalize font-semibold">
            Status : <span>{`${"Hold"}`}</span>
          </p>
          <p className="text-justify py-2 lg:py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum libero
            debitis provident, voluptatum nesciunt eligendi dolores doloremque
            modi placeat, praesentium saepe dolor aspernatur? Rerum facere
            consequatur corrupti voluptatibus, quisquam fuga velit
            reprehenderit?
          </p>
          <p className="font-semibold">
            Date Time : <span>{}</span>
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 h-auto lg:h-[90%] font-semibold lg:p-4 justify-between text-xl">
          <span className="flex flex-col gap-2 lg:gap-4 items-end">
            <p className="w-full lg:w-48">
              Deal Amount : <span className="font-bold">{`₹${200}`}</span>{" "}
            </p>
            <p className="w-full lg:w-48">
              Deal Equity : <span className="font-bold">{`${200}%`}</span>{" "}
            </p>
            <p className="w-full lg:w-48">
              Deal Debt : <span className="font-bold">{`₹${200}`}</span>{" "}
            </p>
          </span>
          <span className="flex w-full justify-evenly gap-4 mt-2 md:mt-4">
            <Button className="bg-slate-700">
              {comment !== "" ? "Counter Bid" : "Comment"}
            </Button>
            <Button className="bg-red-500">Decline</Button>
            <Button className="bg-primary-200">Accept</Button>
          </span>
        </div>
      </div>
      {comment !== "" && (
        <div className="bg-primary-100 h-fit p-4 rounded-b-md">
          <p className="font-semibold">Comment: </p>
          <p className="font-light text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            doloremque voluptates minima vel magni sit nobis, quo voluptatibus
            et fugit. Culpa eum voluptate similique sapiente non dolor incidunt
            ad nisi.
          </p>
        </div>
      )}
    </>
  );
}

export default BidCards;
