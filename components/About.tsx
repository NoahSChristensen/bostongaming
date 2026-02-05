import React from "react";
import { CiStar } from "react-icons/ci";

const About = () => {
  return (
    <section className="w-full bg-seconday-col text-main-col h-full py-24">
      <div className="h-1 w-full bg-main-accent"></div>
      <div className="flex flex-col justify-center items-center mt-12">
        <article>
          <h3 className="text-main-col font-bold text-6xl uppercase text-center">
            About
          </h3>
          <div className="flex flex-row gap-4 justify-center items-center w-75">
            <div className="h-2 w-full bg-main-col"></div>
            <CiStar className="text-8xl flex justify-center items-center text-main-col" />
            <div className="h-2 w-full bg-main-col"></div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
