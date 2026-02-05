"use client";
import { getProductData } from "@/lib/util/data";
import { ProductProps } from "@/lib/util/type";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CiStar } from "react-icons/ci";
import Image from "next/image";
import { useRequest } from "@/lib/hooks/useRequest";

const Products = () => {
  const { data: productsData, isLoading: productLoading } = useQuery({
    queryKey: [`productData`],
    queryFn: () => useRequest<any>(`${process.env.NEXT_PUBLIC_SERVER_HOST}/product`),
  });

  if (productLoading) return <p>Loading...</p>;

 console.log(
  `${process.env.NEXT_PUBLIC_SERVER_HOST}/images/product/${productsData?.[0]?.productimage}`
);



  return (
    <section className="w-full bg-main-accent py-16">
      <div className="flex flex-col justify-center items-center">
        <article>
          <h3 className="text-main-col font-bold text-6xl">Products</h3>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="h-2 w-full bg-main-col"></div>
            <CiStar className="text-8xl flex justify-center items-center text-main-col" />
            <div className="h-2 w-full bg-main-col"></div>
          </div>
        </article>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-350 w-full">
          {productsData?.map((product: ProductProps) => (
            <div key={product._id}>
              <div className="bg-seconday-col py-4 rounded-2xl px-8 w-full h-full flex flex-col justify-center items-center gap-4">
                <article className="text-main-col text-2xl font-bold text-center flex justify-center items-center ">
                  <h4> {product.title} </h4>
                </article>
                <figure className="py-4">
                  <Image className="rounded-2xl"
                    src={`${process.env.NEXT_PUBLIC_SERVER_HOST}/images/product/${product.productimage}`}
                    width={500}
                    height={500}
                    alt={product.title}
                  />
                </figure>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Products;
