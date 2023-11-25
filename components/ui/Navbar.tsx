import React from "react";
import Container from "./Container";
import { AiOutlineMenu } from "react-icons/ai";
import { menuData } from "@/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b p-2 ">
      <Container>
        <nav className="md:py-0 flex items-center justify-between">
          <div>
            <p className="text-2xl md:text-4xl">{`Nishath...`}</p>
          </div>
          <div>
            <ul className="hidden md:flex md:gap-10">
              {menuData.map(({ title, path }) => (
                <li key={path}>
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
            <AiOutlineMenu className="text-3xl md:hidden" />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
