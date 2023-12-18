"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./navbar.module.scss";
import Link from "next/link";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const toogleMenue = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toogleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("Theme", newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("Theme");
    localTheme && setTheme(localTheme);
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <nav className="mx-4 h-[80px] w-[90%] text-slate-900 dark:text-slate-300 md:mx-auto lg:w-[80%] xl:w-[70%]">
      <div className="flex h-full w-full items-center justify-between">
        <Link href="/">
          <h1 className="cursor-pointer text-center font-pacifico text-xl hover:text-gray-400 lg:text-[1.35rem]">
            Benkhattab
          </h1>
        </Link>
        <div
          className={`${
            !isMenuOpen && "max-lg:hidden"
          }  z-30 max-lg:absolute max-lg:left-0 max-lg:top-[80px] max-lg:h-[calc(100vh-80px)] max-lg:w-full max-lg:backdrop-blur-xl`}
        >
          <ul className="flex h-full items-center justify-around font-semibold max-lg:flex-col max-lg:text-3xl lg:gap-8">
            <Link href="/about">
              <li className={"cursor-pointer hover:text-slate-600"}>Whoami</li>
            </Link>
            <Link href="projects">
              <li className={"cursor-pointer hover:text-slate-600"}>Projects</li>
            </Link>
            <Link href="/#contact">
              <li className={"cursor-pointer hover:text-slate-600"}>Contact</li>
            </Link>
            <li>
              <ul className="flex justify-end gap-8 max-lg:flex-1 lg:hidden">
                <li className="cursor-pointer text-2xl">
                  <a>
                    <FaGithub />
                  </a>
                </li>
                <li className="cursor-pointer text-2xl">
                  <a>
                    <FaLinkedin />
                  </a>
                </li>
                <li className="cursor-pointer text-2xl">
                  <a>
                    <FaXTwitter />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-2xl" type="button" onClick={toogleTheme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className={`${styles.hamburger} lg:hidden`}
            onClick={toogleMenue}
          >
            <div
              className={`${styles.line} ${isMenuOpen && styles.open}`}
            ></div>
            <div
              className={`${styles.line} ${isMenuOpen && styles.open}`}
            ></div>
            <div
              className={`${styles.line} ${isMenuOpen && styles.open}`}
            ></div>
          </button>
        </div>
      </div>
    </nav>
  );
};
