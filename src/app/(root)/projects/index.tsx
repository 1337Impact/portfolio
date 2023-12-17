import Link from "next/link";
import ProjectCard from "./projectCard";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen pt-7">
      <Link href={"#projects"}>
        <h1 className="text-4xl font-semibold text-gray-700 underline decoration-current decoration-2 underline-offset-4 dark:text-gray-100">
          Projects.
        </h1>
      </Link>
      <p className="mt-1 text-sm text-gray-600 opacity-80 dark:text-gray-200">
        A selection of my most recent{" "}
        <Link className="underline hover:text-gray-700" href="/projects">
          projects
        </Link>
        .
      </p>
      <div className="mt-6 gap-8 lg:columns-2">
        <ProjectCard
          h="h-[320px]"
          title="Ft_trascendence"
          date="Sep - 2023"
          demo="/demo/ft_transcendence_demo.mp4"
          isVideo={true}
          link="https://github.com/1337Impact/ft_transcendence"
          tech={["TypeScript", "Next.js", "Nest.js", "Prisma", "PostgreSQL"]}
        >
          Online multiplayer Pong with features like user authentication,
          matchmaking, chat, and leaderboards.
        </ProjectCard>
        <ProjectCard
          h="h-[400px]"
          title="Leetbooks"
          date="Nov - 2023"
          demo="/demo/leetbooks_demo.mp4"
          isVideo={true}
          link="https://github.com/1337Impact/LeetBooks"
          tech={["TypeScript", "Next.js", "Prisma", "PostgreSQL", "MantainUi"]}
        >
          A platform for sharing and exchanging books. Built using Next.js and
          Prisma.
        </ProjectCard>
        <ProjectCard
          h="h-[360px]"
          title="Ft_irc"
          date="Apr - 2023"
          demo="/demo/ft_irc.webp"
          isVideo={false}
          link="https://github.com/1337Impact/ft_irc"
          tech={["C++", "Linux Socket", "Networking", "IRC Protocol"]}
        >
          An IRC server built from scratch in C++. The server follows the RFC
          2812 specification and can be used with existing IRC clients.
        </ProjectCard>
        <ProjectCard
          h="h-[400px]"
          title="TaskSpace"
          date="Nov - 2023"
          demo="/demo/taskspace_demo.mp4"
          isVideo={true}
          link="https://github.com/1337Impact/TaskSpace"
          tech={["TypeScript", "Next.js", "prisma", "Trpc", "NextAuth.js"]}
        >
          A simple task management app built using Next.js and Trpc.
        </ProjectCard>
        <ProjectCard
          h="h-[360px]"
          title="Incpetion"
          date="Mar - 2023"
          demo="/demo/inception.webp"
          isVideo={false}
          link="https://github.com/1337Impact/42-Inception"
          tech={[
            "Docker",
            "Docker Compose",
            "Network",
            "System Administration",
          ]}
        >
          The project aims to create several docker containers from scratch,
          then orchestrate them with docker compose.
        </ProjectCard>
        <ProjectCard
          h="h-[320px]"
          title="Cub3d"
          date="Nov - 2022"
          demo="/demo/cub3d_demo.mp4"
          isVideo={true}
          link="https://github.com/1337Impact/42-cub3d"
          tech={["C", "MinilibX", "Ray-casting"]}
        >
          A minimalist recreation the world-famous Wolfenstein 3D game in C
          using Ray-casting, and the MinilibX graphics library.
        </ProjectCard>
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
