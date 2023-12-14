"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./navbar.module.scss";

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
    <nav className="h-[80px] w-[90%] mx-auto lg:w-[80%] xl:w-[70%] text-slate-900 dark:text-slate-300">
      <div className="w-full h-full flex justify-between items-center">
        <h1 className="font-pacifico text-xl cursor-pointer hover:text-teal-200 lg:text-[1.35rem] text-center">
          Benkhattab
        </h1>
        <div
          className={`${!isMenuOpen && "max-lg:hidden"
            }  max-lg:absolute max-lg:w-full max-lg:h-[calc(100vh-80px)] max-lg:left-0 max-lg:top-[80px] max-lg:backdrop-blur-xl z-30`}
        >
          <ul className="flex justify-around items-center h-full font-semibold max-lg:flex-col max-lg:text-3xl lg:gap-8">
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
        <div className="flex items-center gap-3">
          <button
            className="text-2xl"
            type="button"
            onClick={toogleTheme}
          >
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
