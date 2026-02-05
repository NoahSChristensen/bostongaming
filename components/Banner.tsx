"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBannerData } from "@/lib/util/data";
import { BannerDataProps } from "@/lib/util/type";
import { CiStar } from "react-icons/ci";
import { useRequest } from "@/lib/hooks/useRequest";

const Banner = () => {
  const { data: heroData, isLoading: bannerLoading } = useQuery<
    BannerDataProps[]
  >({
    queryKey: [`bannerData`],
    queryFn: () => useRequest(`${process.env.NEXT_PUBLIC_SERVER_HOST}/slider`),
  });

  const bannerData = heroData ?? [];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (bannerData.length === 0) return;

    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % bannerData.length);
    }, 3000);

    return () => clearInterval(id);
  }, [bannerData.length]);

  return (
    <section className="text-center w-full relative h-175 overflow hiddden">
      {bannerData.map((item: BannerDataProps, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-500 ease-in-out bg-center bg-cover h-full
            ${index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"}`}
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_SERVER_HOST}/images/slider/${item.sliderimage})`,
          }}
        >
          <article className=" w-full flex flex-col justify-center items-center text-main-col mt-24 ">
            <div className="bg-main-accent/95 p-12">
              <h2 className="text-8xl font-bold">Boston Gaming</h2>
              <div className="flex flex-row gap-4 justify-center items-center">
                <div className="h-2 w-full bg-main-col"></div>
                <CiStar className="text-8xl flex justify-center items-center text-main-col" />
                <div className="h-2 w-full bg-main-col"></div>
              </div>
              <p className="text-2xl font-thin ">
                Affordable - Professionel - Aesthetic <br />
                Let us build your next rig
              </p>
            </div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Banner;
