"use client";
import { useRequest } from "@/lib/hooks/useRequest";
import { AboutProps } from "@/lib/util/type";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CiStar } from "react-icons/ci";
import TitleCards from "./TitleCards";

const About = () => {

  const {data} = useQuery({
    queryKey: [`aboutData`],
    queryFn: () => useRequest<AboutProps>(`${process.env.NEXT_PUBLIC_SERVER_HOST}/about`)
  });
  return (
    <section className="w-full bg-seconday-col text-main-col h-full py-24 px-4 md:px-0">
      <div className="h-1 w-full bg-main-accent"></div>
      <TitleCards title="About" />
      <article className="flex flex-col md:flex-row mt-12 justify-center items-center gap-8 px-4 max-w-175 mx-auto">
        <p className="text-xl">{data?.content1}</p>
        <p className="text-xl">{data?.content2}</p>
      </article>
    </section>
  );
};

export default About;
