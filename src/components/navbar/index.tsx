"use client";
import { useState } from "react";
import HamBurgerMenu from "./HamBurgerMenu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toogle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="h-[80px] mx-3 flex justify-between items-center md:w-[90%] lg:w-[80%] xl:w-[70%] md:mx-auto">
      <HamBurgerMenu />
      <h1 className="font-pacifico text-xl hover:text-red-500 lg:text-[1.35rem] text-center">
        Benkhattab
      </h1>
      <ul className="flex gap-4 flex-1 justify-end">
        <li className="">
          <FaGithub class="text-xl lg:text-2xl" />
        </li>
        <li>
          <FaLinkedin class="text-xl lg:text-2xl" />
        </li>
        <li>
          <FaXTwitter class="text-xl lg:text-2xl" />
        </li>
      </ul>
    </nav>
  );
};
