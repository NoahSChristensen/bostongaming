import React from "react";
import { GearDataProps } from "@/lib/util/type";

type SummaryProps = {
  summary: Record<string, string>;
  gearData?: GearDataProps[];
  priceMap: Record<string, number>;
  totalPrice: number;
};

const Summary = ({ summary, gearData, priceMap, totalPrice }: SummaryProps) => {
  console.log("Summary Props:", { summary, gearData, priceMap, totalPrice });

  return (
    <article className="w-full flex flex-col justify-center items-center max-w-600 px-4 h-full">
      <h6 className="text-main-col uppercase text-2xl py-4 text-center font-bold underline underline-offset-4">
        Summary
      </h6>
      <div className="mt-4 p-4 bg-main-col w-full rounded-md text-main-accent">
        <article className="font-bold text-xl flex flex-row justify-between items-center">
          <span>Price:</span>
          <p className="bg-main-accent rounded-4xl text-main-col p-2">{totalPrice}.kr</p>
        </article>
      </div>
      <ul className="text-main-col mt-4">
        {Object.entries(summary).map(([category, gearId]) => {
          const gear = gearData?.find((g) => g._id === gearId);
          return (
            <li
              key={category}
              className="py-2 bg-seconday-col w-full rounded-md px-4 mb-2 flex flex-col justify-between items-center"
            >
              <p className="font-bold">
                {gear?.gearcategory?.gearcategorytitle || "Unknown Category"}:
              </p>
              <p>
                {gear?.geartitle || "None"} —{" "}
                <span className="font-bold">{priceMap[gearId] || 0} kr</span>
              </p>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Summary;
