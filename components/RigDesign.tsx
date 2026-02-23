"use client";
import { CiStar } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { useRequest } from "@/lib/hooks/useRequest";
import { CategoryProps, GearDataProps } from "@/lib/util/type";
import { useState, FormEvent } from "react";
import TitleCards from "./TitleCards";
import { PRICEBYID } from "@/lib/util/priceMap";
import Summary from "./Summary";

const RigDesign = (id: string) => {
  const [summary, setSummary] = useState<Record<string, string>>({});

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
    const totalPrice = Object.values(summary).reduce((total, gearId) => {
      return total + (PRICEBYID[gearId] ?? 0);
    }, 0);
    console.log(`Total Price: ${totalPrice}`);
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
            <form onSubmit={handleSummary} className="text-main-col">
              {categoryData?.map((category: CategoryProps) => (
                <div
                  key={category._id}
                  className="bg-seconday-col text-main-col rounded-2xl px-8 py-4 mb-4"
                >
                  <div className="w-full flex flex-col justify-between items-center">
                    <span className="font-bold text-2xl">
                      {category.gearcategorytitle} :
                    </span>

                    {gearData?.map((item: GearDataProps) => {
                      if (item.gearcategory._id === category._id) {
                        const price = PRICEBYID[item._id] ?? 0;
                        return (
                          <div className="py-1 text-end" key={item._id}>
                            <label
                              className="space-x-4 cursor-pointer"
                              htmlFor={item._id}
                            >
                              {item.geartitle} — {price} kr
                            </label>
                            <input
                              type="radio"
                              name={category._id}
                              value={item._id}
                              checked={summary[category._id] === item._id}
                              onChange={(e) => {
                                const gearId = e.target.value;
                                setSummary((prev) => ({
                                  ...prev,
                                  [category._id]: gearId,
                                }));
                              }}
                            />
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              ))}
            </form>
          </section>
        </div>
        <div className="w-full flex-flex-col h-full max-w-600 px-4 ">
          <Summary
            summary={summary}
            gearData={gearData}
            priceMap={PRICEBYID}
            totalPrice={Object.values(summary).reduce(
              (total, gearId) => total + (PRICEBYID[gearId] ?? 0),
              0,
            )}
          />
        </div>
      </section>
    </section>
  );
};

export default RigDesign;
