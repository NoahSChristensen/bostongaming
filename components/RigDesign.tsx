"use client";
import { CiStar } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { useRequest } from "@/lib/hooks/useRequest";
import { CategoryProps, GearDataProps } from "@/lib/util/type";
import { useState, FormEvent } from "react";
import TitleCards from "./TitleCards";

const RigDesign = (id: string) => {
  const [summary, setSummary] = useState(0);
  const [radioButton, setRadioButton] = useState(false);

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

  const { data: gearData, isLoading: gearLoading } = useQuery<GearDataProps[]>({
    queryKey: [`gearData`],
    queryFn: () => useRequest(`${process.env.NEXT_PUBLIC_SERVER_HOST}/gear `),
  });

  console.log(gearData);

  if (categoryLoading && gearCategoryLoading && gearLoading)
    return <p>Loading...</p>;

  const handleSummary = (e: any) => {
    e.preventDefault();
    console.log(`Summary: ${summary}`);
  };

  return (
    <section className="w-full bg-main-accent py-12">
      <TitleCards title="Design your own rig" />
      <section className="flex flex-col md:flex-row gap-8 mt-12 max-w-350 mx-auto">
        <div className="w-full flex-flex-col justify-center items-center max-w-600 px-4 h-full">
          <article>
            <h6 className="text-main-col uppercase text-2xl py-4 text-center font-bold">
              Pick your gear
            </h6>
          </article>
          <section className="text-main-col w-full">
            {categoryData?.map((category: CategoryProps) => (
              <div
                key={category._id}
                className="bg-seconday-col text-main-col rounded-2xl px-8 py-4 mb-4"
              >
                <div className="w-full flex flex-row justify-between items-center">
                  <span className="font-bold text-2xl">
                    {category.gearcategorytitle} :
                  </span>
                  <form className="text-main-col">
                    {gearData?.map((item: GearDataProps) => {
                      if (item.gearcategory._id === category._id) {
                        return (
                          <div key={item._id}>
                            <label htmlFor="input"> {item.geartitle} </label>
                            <input
                              id="input"
                              type="radio"
                              checked={radioButton}
                              value={item.geartitle}
                              // LAVER ALT FOR MANGE RE-RENDER SIGER REACT ELLER NEXTJS onChange={setRadioButton(true)}
                            />
                          </div>
                        );
                      }
                      return null;
                    })}
                  </form>
                </div>
              </div>
            ))}
          </section>
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
