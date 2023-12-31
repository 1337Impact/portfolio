"use client";
import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import MediaLinks from "../MediaLinks";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("max-md:overflow-y-hidden");
    } else {
      document.body.classList.remove("max-md:overflow-y-hidden");
    }
  }, [isMenuOpen]);

  return (
    <nav className="m-container h-[80px] md:h-[100px] text-slate-900 dark:text-slate-300">
      <div className="flex h-full w-full items-center justify-between">
        <Link href="/">
          <h1 className="relative z-20 cursor-pointer text-center font-pacifico text-xl md:text-[1.35rem]">
            Benkhattab.me
          </h1>
        </Link>
        <div
          className={`${
            !isMenuOpen && "max-md:hidden"
          } z-10 max-md:absolute max-md:left-0 max-md:top-0 max-md:h-[100dvh] max-md:w-full max-md:backdrop-blur-xl`}
        >
          <ul className="flex h-full items-center justify-around font-semibold max-md:pt-20 max-md:flex-col max-md:text-3xl md:gap-10">
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
            <Link href="/projects">
              <li
                onClick={() => setIsMenuOpen(false)}
                className={
                  "cursor-pointer hover:text-slate-600 hover:underline hover:underline-offset-4"
                }
              >
                Projects
              </li>
            </Link>
            <Link href="/contact">
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
              <div className="md:hidden">
                <MediaLinks size="2xl" />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <ThemeButton />
          <button
            className={`${styles.hamburger} md:hidden z-20`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
