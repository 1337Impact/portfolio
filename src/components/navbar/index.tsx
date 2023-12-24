"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const toogleMenue = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toogleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("Theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const localTheme = localStorage.getItem("Theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("max-md:overflow-y-hidden");
    } else {
      document.body.classList.remove("max-md:overflow-y-hidden");
    }
  }, [isMenuOpen]);

  return (
    <nav className="mx-auto h-[80px] w-[90%] text-slate-900 lg:w-[80%] xl:w-[70%] dark:text-slate-300">
      <div className="flex h-full w-full items-center justify-between">
        <Link href="/">
          <h1 className="cursor-pointer text-center font-pacifico text-xl hover:text-gray-400 md:text-[1.35rem]">
            Benkhattab.me
          </h1>
        </Link>
        <div
          className={`${
            !isMenuOpen && "max-md:hidden"
          }  z-30 max-md:absolute max-md:left-0 max-md:top-[80px] max-md:h-[calc(100vh-80px)] max-md:w-full max-md:backdrop-blur-xl`}
        >
          <ul className="flex h-full items-center justify-around font-semibold max-md:flex-col max-md:text-3xl md:gap-10">
            <Link href="/about">
              <li
                onClick={() => setIsMenuOpen(false)}
                className={
                  "cursor-pointer hover:text-slate-600 hover:underline hover:underline-offset-4"
                }
              >
                Whoami
              </li>
            </Link>
            <Link href="projects">
              <li
                onClick={() => setIsMenuOpen(false)}
                className={
                  "cursor-pointer hover:text-slate-600 hover:underline hover:underline-offset-4"
                }
              >
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li
                onClick={() => setIsMenuOpen(false)}
                className={
                  "cursor-pointer hover:text-slate-600 hover:underline hover:underline-offset-4"
                }
              >
                Contact
              </li>
            </Link>
            <li>
              <ul className="flex justify-end gap-8 max-md:flex-1 md:hidden">
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
          <button
            className="text-2xl hover:text-gray-600"
            type="button"
            onClick={toogleTheme}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className={`${styles.hamburger} md:hidden`}
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
}
