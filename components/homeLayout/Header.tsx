import React from "react";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full bg-main-col shadow-md">
      <section className="py-8 flex flex-row max-w-7xl mx-auto w-full justify-between">
        <section className="flex flex-row">
          <Link href={"/"}>
            <Image
              src={"/assets/images/logo.png"}
              width={85}
              height={85}
              alt="Logo"
            />
          </Link>
          <article className="flex text-center justify-center px-4 py-2">
            <h1 className="font-bold text-main-accent text-4xl">Boston Gaming</h1>
          </article>
        </section>
        <Navbar />
      </section>
    </header>
  );
};

export default Header;
