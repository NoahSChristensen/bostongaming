"use client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MobileState } from "@/lib/util/type";
import { useCallback } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./Navbar/MobileMenu";

const Header = () => {
  const [mobileState, setMobileState] = useState<MobileState>({
    showMobile: false,
  });

  const toggleMobileMenu = useCallback(() => {
    setMobileState((current) => ({
      showMobile: !current.showMobile,
    }));
    console.log("Mobile menu has been pressed");
  }, []);

  return (
    <header className="w-full bg-main-col shadow-lg">
      <section className="py-8 flex flex-row max-w-7xl mx-auto w-full justify-center gap-4 md:gap-0 md:justify-between relative">
        <section className="flex flex-row">
          <Link href={"/"}>
            <Image
              src={"/assets/images/logo.png"}
              width={85}
              height={85}
              alt="Logo"
            />
          </Link>
          <article className=" hidden md:flex text-center justify-center px-4 py-2">
            <h1 className="font-bold text-main-accent text-4xl">
              Boston Gaming
            </h1>
          </article>
        </section>
        <Navbar />
        <section
          onClick={toggleMobileMenu}
          className="md:hidden flex justify-center items-center gap-2 cursor-pointer"
        >
          <GiHamburgerMenu
            className={`text-main-accent text-2xl transition-all duration-300 ease-in-out ${
              mobileState.showMobile ? `rotate-180` : `rotate-0`
            }`}
          />
          <MobileMenu visible={mobileState.showMobile} />
        </section>
      </section>
    </header>
  );
};

export default Header;
