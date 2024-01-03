import styles from "./page.module.scss";
import { RxChevronDown } from "react-icons/rx";
import Projects from "./projects";
import Link from "next/link";
import Contact from "./contact";

export default function Home() {
  return (
    <main className={`m-container w-[90%] ${styles.home}`}>
      <section
        id="home"
        aria-labelledby="home"
        className="flex min-h-[calc(100vh-80px)] scroll-m-[80px] flex-col items-center justify-center gap-24"
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-xl text-gray-700 dark:text-slate-300">
            Hello I{"'"}m{" "}
            <span className="font-pacifico">Mohammed Benkhattab</span>
          </h1>
          <p className="text-foreground mt-1 max-w-4xl text-center text-4xl font-medium leading-[3.2rem] text-gray-800 lg:text-5xl lg:leading-[4rem] dark:text-slate-300">
            I{"'"}m a full-stack developer, I love building things with
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
      <Contact />
    </main>
  );
}
