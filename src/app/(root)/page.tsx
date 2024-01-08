import styles from "./page.module.scss";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`m-container ${styles.home}`}>
      <section
        id="home"
        aria-labelledby="home"
        className="flex max-w-[56rem] flex-col gap-4 mt-5 md:my-20 mx-auto"
      >
        <h1 className="text-4xl text-gray-800 underline underline-offset-[3px] dark:text-slate-200">
          I'M Mohammed Benkhattab.
        </h1>
        <div className="flex flex-col gap-1 font-semibold leading-6 text-gray-600 lg:leading-8 dark:text-slate-400">
          <p>
            A Software developer, designer and tech enthusiast specialized in
            web development.
          </p>
          <p>
            Currently I'm studying Software engineering at{" "}
            <a
              className="text-red-500 underline hover:text-red-400"
              href="https://1337.ma/1337.ma"
            >
              1337 FIL
            </a>{" "}
            ,a Computer Science School located in Khouribga, part of 42 Network
            and Um6p University.
          </p>
          <p>
            I like building things using{" "}
            <span className="text-red-500">Python</span>,{" "}
            <span className="text-red-500">TypeScript</span> and{" "}
            <span className="text-red-500">React</span>.
          </p>
          <p>
            When I’m not coding you’ll find me building robots, designing
            interfaces, or learning something new.
          </p>
          <div>
            Sounds Intersting, checkout out{" "}
            <Link
              className="text-red-500 underline hover:text-red-400"
              href={"#projects"}
            >
              Projects
            </Link>{" "}
            or{" "}
            <Link
              className="text-red-500 underline hover:text-red-400"
              href={"#contact"}
            >
              Contact me
            </Link>{" "}
            and let's talk about your project.
          </div>
        </div>
        <Link
          className="font-semibold text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-300"
          href={"/about"}
        >
          See more about me
          <HiArrowNarrowRight className="ml-2 inline-block" />
        </Link>
      </section>
    </main>
  );
}
