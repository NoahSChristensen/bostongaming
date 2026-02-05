"use client";
import { CiStar } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { useRequest } from "@/lib/hooks/useRequest";
import { CategoryProps } from "@/lib/util/type";
import { useState, FormEvent } from "react";

const RigDesign = (id: string) => {
  const [summary, setSummary] = useState(0);

  const { data: categoryData, isLoading: categoryLoading } = useQuery<
    CategoryProps[]
  >({
    queryKey: ["categoryData"],
    queryFn: () =>
      useRequest(`${process.env.NEXT_PUBLIC_SERVER_HOST}/gearcategory`),
  });

  const { data: gearCategoryData, isLoading: gearCategoryLoading } = useQuery({
    queryKey: [`gearCategoryData`, id],
    queryFn: () =>
      useRequest(
        `${process.env.NEXT_PUBLIC_SERVER_HOST}/gear/gearcategory/${id}`,
      ),
  });

  console.log(gearCategoryData)

  if (categoryLoading && gearCategoryLoading) return <p>Loading...</p>;

  const handleSummary = (e: any) => {
    e.preventDefault();
    console.log(`Summary: ${summary}`);
  };

  return (
    <section className="w-full bg-main-accent py-12">
      <div className="flex flex-col justify-center items-center">
        <article>
          <h3 className="text-main-col font-bold text-6xl uppercase">
            Design your own rig
          </h3>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="h-2 w-full bg-main-col"></div>
            <CiStar className="text-8xl flex justify-center items-center text-main-col" />
            <div className="h-2 w-full bg-main-col"></div>
          </div>
        </article>
      </div>
      <section className="flex flex-row gap-8 mt-12 max-w-350 mx-auto">
        <div className="w-full flex-flex-col justify-center items-center max-w-600 px-4 h-full">
          <article>
            <h6 className="text-main-col uppercase text-2xl py-4 text-center font-bold">
              Pick your gear
            </h6>
          </article>
          <div className="text-main-col w-full">
            {categoryData?.map((category: CategoryProps) => (
              <div
                key={category._id}
                className="bg-seconday-col text-main-col rounded-2xl px-8 py-4 mb-4"
              >
                <div className="w-full">
                  <span>{category.gearcategorytitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex-flex-col h-full max-w-600 px-4 ">
          <article>
            <h6 className="text-main-col uppercase text-2xl py-4 text-center font-bold">
              Summary
            </h6>
            <div className="w-full flex flex-row justify-between bg-main-col py-2 px-4 rounded-sm text-center items-center ">
              <span>Total</span>
              <span className="bg-main-accent text-main-col rounded-[100%] px-2 py-1 ">
                ${summary}
              </span>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default RigDesign;
