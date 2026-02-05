import React from "react";
import Link from "next/link";
import { NavbarItemProps } from "@/lib/util/type";

const NavbarItem: React.FC<NavbarItemProps> = ({ name, href }) => {
  return (
    <Link className="hover:cursor-pointer hover:text-main-accent/80 transition-all duration-300 ease-in-out font-bold text-2xl text-main-accent" href={href}>
      {name}
    </Link>
  );
};

export default NavbarItem;
