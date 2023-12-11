"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./navbar.module.scss";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toogle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="h-[80px] mx-3 md:w-[90%] lg:w-[80%] xl:w-[70%] md:mx-auto">
      <div className="w-full h-full flex justify-between items-center">
        <h1 className="font-pacifico text-xl cursor-pointer hover:text-teal-200 lg:text-[1.35rem] text-center">
          Benkhattab
        </h1>
        <button className={`${styles.hamburger} lg:hidden`} onClick={toogle}>
          <div className={`${styles.line} ${isMenuOpen && styles.open}`}></div>
          <div className={`${styles.line} ${isMenuOpen && styles.open}`}></div>
          <div className={`${styles.line} ${isMenuOpen && styles.open}`}></div>
        </button>
        <div
          className={`${
            !isMenuOpen && "hidden"
          }  max-lg:absolute max-lg:w-screen max-lg:h-[calc(100vh-80px)] max-lg:left-0 max-lg:top-[80px] max-lg:backdrop-blur-xl z-30`}
        >
          <ul className="flex justify-around items-center h-full text-gray-800 font-semibold max-lg:flex-col max-lg:text-3xl lg:gap-8">
            <li className={"cursor-pointer hover:text-slate-600"}>Home</li>
            <li className={"cursor-pointer hover:text-slate-600"}>About</li>
            <li className={"cursor-pointer hover:text-slate-600"}>Contact</li>
            <li>
              <ul className="flex gap-8 max-lg:flex-1 justify-end lg:hidden">
                <li className="text-2xl cursor-pointer">
                  <a>
                    <FaGithub />
                  </a>
                </li>
                <li className="text-2xl cursor-pointer">
                  <a>
                    <FaLinkedin />
                  </a>
                </li>
                <li className="text-2xl cursor-pointer">
                  <a>
                    <FaXTwitter />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
