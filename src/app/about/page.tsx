import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function About() {
  return (
    <main className="mx-4 my-7 md:mx-auto md:my-20 md:w-[90%] lg:w-[80%] xl:w-[70%]">
      <h1 className="text-4xl font-semibold text-gray-700 underline decoration-current decoration-2 underline-offset-4 dark:text-gray-100">
        About me.
      </h1>
      <section className="mt-7 max-w-[500px] text-gray-700 dark:text-gray-400 tracking-wider">
        <h2 className="text-lg font-bold dark:text-gray-200 underline underline-offset-2">Whoami.</h2>
        <p className="mt-2">
          My name is Mohammed Benkhattab, I am 22 years old, I am a software
          engneering student at 1337 school (42 Network) and a full stack
          developer.
        </p>
      </section>
      <section className="mt-4 max-w-[500px] text-gray-700 dark:text-gray-400 tracking-wider">
        <h2 className="text-lg font-bold dark:text-gray-200 underline underline-offset-2">Journey.</h2>
        <p className="ml-1 mt-2">
          I started learning programming in 2020, I've started with Python and
          later got into web development with JavaScript and Django. Till this
          point It was all fun, working on project and learning new things. This
          will change when I joined 1337 school in 2021. Started working on
          project that where challenging and not all fun. memory leaks,
          segfaults and hiting your head to the wall for hours till you remember
          that you forgot a semi-colon in line 232. But looking back at it, it
          was worth it and I'll do it again if I have to.
        </p>
        <p className="ml-1 mt-2">
          Currently, I just finished my common core at 1337 school. I'm focusing
          on learning new technologies and taking new challanges.
        </p>
      </section>
      {/* <section className="mt-3 text-gray-700 dark:text-gray-400 tracking-wider max-w-[500px]">
        <h2 className="text-lg font-bold dark:text-gray-200 underline underline-offset-2">Skills.</h2>
        <p className="ml-1 mt-1">
          
        </p>
        <p className="ml-1 mt-1">
          Currently, I just finished my common core at 1337 school. I'm focusing
          on learning new technologies and taking new challanges.
        </p>
      </section> */}
    </main>
  );
}
