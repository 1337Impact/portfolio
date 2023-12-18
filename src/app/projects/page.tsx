"use client";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";
import projectsData from "./data";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Projects() {
  const [selected, setSelected] = useState<string>("all");
  const [data, setData] = useState(projectsData);
  useEffect(() => {
    setData(
      projectsData.filter((project) => {
        if (selected === "all") return true;
        else return project.type.indexOf(selected) !== -1;
      }),
    );
  }, [selected]);

  return (
    <main className="mx-4 my-7 md:mx-auto md:my-20 md:w-[90%] lg:w-[80%] xl:w-[70%]">
      <h1 className="text-4xl font-semibold text-gray-700 underline decoration-current decoration-2 underline-offset-4 dark:text-gray-100">
        Projects.
      </h1>
      <div className="mt-4 flex items-center gap-3">
        <button
          className={`rounded-lg border-2 border-gray-600 px-3 py-[1px] text-sm font-semibold dark:border-gray-200 ${
            selected === "all"
              ? "bg-gray-600 text-gray-100 dark:bg-gray-100 dark:text-gray-800"
              : "text-gray-600 dark:text-gray-200"
          }`}
          onClick={() => setSelected("all")}
        >
          All
        </button>
        <button
          className={`rounded-lg border-2 border-gray-600 px-3 py-[1px] text-sm font-semibold dark:border-gray-200 ${
            selected === "school"
              ? "bg-gray-600 text-gray-100 dark:bg-gray-100 dark:text-gray-800"
              : "text-gray-600 dark:text-gray-200"
          }`}
          onClick={() => setSelected("school")}
        >
          School
        </button>
        <button
          className={`rounded-lg border-2 border-gray-600 px-3 py-[1px] text-sm font-semibold dark:border-gray-200 ${
            selected === "personal"
              ? "bg-gray-600 text-gray-100 dark:bg-gray-100 dark:text-gray-800"
              : "text-gray-600 dark:text-gray-200"
          }`}
          onClick={() => setSelected("personal")}
        >
          Personal
        </button>
      </div>
      <div className="mt-6 gap-8 lg:columns-2">
        {data.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <h2 className="text-md cursor-pointer items-center justify-start gap-3 font-medium text-gray-600 dark:text-gray-300">
        Checkout my{" "}
        <Link
          href="https://github.com/1337Impact"
          className="underline underline-offset-2 hover:text-gray-500 dark:hover:text-gray-400"
        >
          github
        </Link>{" "}
        page for more projects.
      </h2>
    </main>
  );
}
