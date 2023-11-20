"use client";
import { useState } from "react";
import HamBurgerMenu from "./HamBurgerMenu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toogle = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="h-[80px] mx-3 flex justify-between items-center md:w-[90%] lg:w-[80%] xl:w-[70%] md:mx-auto">
      <div className="flex gap-2 items-center">
      <HamBurgerMenu />
      <h1 className="font-pacifico text-xl hover:text-red-500">Benkhattab</h1>
      </div>
      <ul className="flex gap-2">
        <li className="">
        <FaGithub size={22}/>
        </li>
        <li>
        <FaLinkedin size={22}/>
        </li>
        <li>
        <FaXTwitter size={22}/>
        </li>
      </ul>
      {/* <ul className="flex flex-row gap-2 text-gray-700 mt-1">
        <li className="">
          <a href="/#contact">contact</a>
        </li>
        <li className="">
          <a href="/#about">about</a>
        </li>
        <li className="">
          <a href="/#projects">Projects</a>
        </li>
      </ul> */}
    </nav>
  );
};
