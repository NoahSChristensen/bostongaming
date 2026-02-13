import React from "react";
import { CiStar } from "react-icons/ci";

const TitleCards = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-12 text-center">
      <article>
        <h3 className="text-main-col font-bold text-6xl uppercase">{title}</h3>
        <div className="flex flex-row gap-4 justify-center items-center w-full ">
          <div className="h-2 w-full bg-main-col"></div>
          <CiStar className="text-8xl flex justify-center items-center text-main-col" />
          <div className="h-2 w-full bg-main-col"></div>
        </div>
      </article>
    </div>
  );
};

export default TitleCards;
