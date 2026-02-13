"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRequest } from "@/lib/hooks/useRequest";
import { FooterProps } from "@/lib/util/type";

const Footer = () => {
  const { data, isLoading } = useQuery<FooterProps>({
    queryKey: [`queryData`],
    queryFn: () => useRequest(`${process.env.NEXT_PUBLIC_SERVER_HOST}/footer`),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <footer className="bg-seconday-col w-full text-main-col">
      <section className="grid grid-col-1 md:grid-cols-3 justify-between max-w-250 mx-auto text-center py-8">
        <article className="flex flex-col gap-4 w- ">
          <span className="text-2xl font-bold uppercase">Location</span>
          <p className="font-thin"> {data?.location} </p>
        </article>
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold uppercase">Around The Web</span>
          <div>Socials</div>
        </div>
        <article className="flex flex-col gap-4">
          <span className="text-2xl font-bold uppercase">About Boston Gaming</span>
          <p className="font-thin"> {data?.about}  </p>
        </article>
      </section>
      <section className="bg-main-accent text-center flex justify-center items-center py-2 text-sm font-thin">
        <p>Copyright &copy; Boston Gaming - Web Development: Noah Schmidt Christensen</p>
      </section>
    </footer>
  );
};

export default Footer;
