import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectsData from "./data";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen pt-7">
      <Link href={"#projects"}>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-700 underline decoration-current decoration-2 underline-offset-4 dark:text-gray-100">
          Projects.
        </h1>
      </Link>
      <p className="mt-1 text-sm text-gray-600 opacity-80 dark:text-gray-200">
        A selection of my most recent{" "}
        <Link
          className="font-medium underline hover:text-gray-700"
          href="/projects"
        >
          projects
        </Link>
        .
      </p>
      <div className="mt-10 gap-10 lg:columns-2">
        {ProjectsData.slice(0, 6).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <Link
        href="projects"
        className="flex max-w-[600px] cursor-pointer items-center justify-start gap-3 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
      >
        <h2 className="text-md font-medium">More Project</h2>
        <div className="w-4 translate-y-[1px] animate-pulse">
          <FaArrowRightLong size="100%" />
        </div>
      </Link>
    </section>
  );
}
