"use client";
import styles from "./page.module.scss";
import { RxChevronDown } from "react-icons/rx";
import ProjectCard from "./projects/projectCard";
import Projects from "./projects";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`mx-auto px-4 md:w-[90%] lg:w-[80%] xl:w-[70%] ${styles.home}`}
    >
      <section
        id="home"
        aria-labelledby="home"
        className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-24"
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-xl text-gray-700 dark:text-slate-300">
            Hello I'm <span className="font-pacifico">Mohammed Benkhattab</span>
          </h1>
          <p className="text-foreground mt-1 max-w-4xl text-center text-4xl font-medium leading-[3.2rem] text-gray-800 dark:text-slate-300 lg:text-5xl lg:leading-[4rem]">
            I'm a full-stack developer, I love building things with
            <span className={`${styles.placeholder} block text-red-500`}></span>
          </p>
        </div>
        <Link
          href="#projects"
          className="flex cursor-pointer flex-col items-center justify-center gap-1 text-red-500 hover:text-red-400"
        >
          <h2 className="text-lg font-medium lg:text-xl">Projects</h2>
          <div className="w-[1.7rem] animate-bounce lg:w-[2rem]">
            <RxChevronDown size="100%" />
          </div>
        </Link>
      </section>
      <Projects />
      <section
        id="contact"
        className="flex min-h-screen flex-col items-center justify-center gap-6 pt-7"
      >
        <h1 className="text-3xl font-semibold text-gray-700 underline decoration-gray-700 decoration-2 underline-offset-4">
          Let's work together:
        </h1>
        <form className="grid w-full gap-4 md:grid-cols-2">
          <div className="grid w-full gap-1">
            <label className="font-semibold text-gray-600">Name</label>
            <input
              type="text"
              className="h-10 rounded-md border-2 border-gray-600 p-2 focus:outline-none"
            />
          </div>
          <div className="flex w-full flex-col gap-1">
            <label className="font-semibold text-gray-600">Email</label>
            <input
              type="text"
              className="h-10 rounded-md border-2 border-gray-600 p-2 focus:outline-none"
            />
          </div>
          <div className="flex w-full flex-col gap-1 md:col-span-2">
            <label className="font-semibold text-gray-600">Subject</label>
            <input
              type="text"
              className="h-10 rounded-md border-2 border-gray-600 p-2 focus:outline-none"
            />
          </div>
          <div className="flex w-full flex-col gap-1 md:col-span-2">
            <label className="font-semibold text-gray-600">Message</label>
            <textarea className="h-32 rounded-md border-2 border-gray-600 p-2 focus:outline-none" />
          </div>
          <button
            type="submit"
            className="mt-2 h-10 w-full rounded-md border-2 border-gray-600 bg-white font-semibold text-gray-600 hover:bg-gray-100 md:col-span-2"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
