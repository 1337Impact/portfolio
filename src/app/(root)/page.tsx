import styles from "./page.module.scss";
import { RxChevronDown } from "react-icons/rx";

export default function Home() {
  return (
    <main className="px-2 lg:w-[60%] lg:mx-auto">
      <section
        id="home"
        aria-labelledby="home"
        className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center gap-24"
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-lg text-center text-gray-700">
            Hello I'm Mohammed Benkhattab
          </h1>
          <p className="mt-1 max-w-4xl text-center text-4xl leading-[3rem] text-foreground lg:text-5xl lg:leading-[4rem]">
            I'm a full-stack developer, I love building things with
            <div className={`${styles.placeholder} pl-1 text-red-500`}></div>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-red-500 gap-2 hover:text-red-400">
          <h2 className="text-lg lg:text-xl">Projects</h2>
          <div className="animate-bounce w-[1.7rem] lg:w-[2rem]">
            <RxChevronDown size="100%" />
          </div>
        </div>
      </section>
      <section id="tmp" aria-labelledby="tmp" className="bg-red-400 h-screen">

      </section>
    </main>
  );
}
