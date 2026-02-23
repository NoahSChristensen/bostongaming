import React from "react";
import Image from "next/image";
import Login from "@/components/Login";

const page = () => {
  return (
    <section className="w-full h-screen flex flex-row bg-main-col bg-linear-to-r from-seconday-col to-main-accent">
      <section className="w-full flex justify-center items-center">
        <div className="loginBackground flex flex-row justify-center items-center h-120 w-full ml-12">
        </div>
      </section>
      <section className="w-full flex justify-center items-center">
        <div className="bg-seconday-col h-120 w-full p-4 text-main-col mr-12 flex flex-col justify-center items-center">
          <article className="text-center flex flex-col gap-4 text-main-col">
            <h2 className="font-bold text-4xl">Welcome</h2>
            <p className="text-2xl font-semibold italic">Type in your password to log in.</p>
            <Login />
          </article>
        </div>
      </section>
    </section>
  );
};

export default page;
