import React from "react";
import NavbarItem from "./NavbarItem";

const MobileMenu: React.FC<any> = ({ visible }) => {
  if (!visible) return null;

  return (
    <nav className=" w-full absolute top-35 right-0 py-5 flex flex-col border-2 bg-main-col border-main-accent/30 rounded-md shadow-lg z-50 ">
      <div className="text-center flex flex-col gap-8 uppercase">
        <NavbarItem name="Home" href="/" />
        <NavbarItem name="Home" href="/" />
        <NavbarItem name="Home" href="/" />
        <NavbarItem name="Home" href="/" />
        <NavbarItem name="Home" href="/" />
      </div>
    </nav>
  );
};

export default MobileMenu;
