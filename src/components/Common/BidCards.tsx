import React from "react";
import { Button } from "@/components/ui/button";

function BidCards() {
  return (
    <div className="w-full flex gap-2 h-fit rounded-md p-2 bg-secondary">
      <div className="w-1/2">
        <p className="font-bold text-2xl flex">
          <span>Investor Name:</span> <span>John Doe</span>
        </p>
        <p className="capitalize font-semibold">
          Status : <span>Hold</span>
        </p>
        <p className="text-justify py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum libero
          debitis provident, voluptatum nesciunt eligendi dolores doloremque
          modi placeat, praesentium saepe dolor aspernatur? Rerum facere
          consequatur corrupti voluptatibus, quisquam fuga velit reprehenderit?
        </p>
        <p>
          Date Time :{" "}
          <span>
            {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
          </span>
        </p>
      </div>
      <div className="flex flex-col w-1/2 font-semibold text-xl">
        <p>
          Deal Amount : <span className="font-bold">{`₹${200}`}</span>{" "}
        </p>
        <p>
          Deal Equity : <span className="font-bold">{`${200}%`}</span>{" "}
        </p>
        <p>
          Deal Debt : <span className="font-bold">{`₹${200}`}</span>{" "}
        </p>
        <span>
        <Button></Button>
        </span>
      </div>
    </div>
  );
}

export default BidCards;
