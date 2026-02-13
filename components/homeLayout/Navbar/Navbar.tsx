import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="hidden md:flex flex-row gap-8 justify-center items-center">
      <NavbarItem name="Products" href="/" />
      <NavbarItem name="Design your own" href="/" />
      <NavbarItem name="About" href="/" />
      <NavbarItem name="Contact" href="/" />
    </nav>
  );
};

export default Navbar;
