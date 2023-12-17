import Link from "next/link";
import ProjectCard from "./projectCard";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen pt-7">
      <Link href={"#projects"}>
        <h1 className="text-4xl font-semibold text-gray-700 underline decoration-gray-700 decoration-2 underline-offset-4 dark:text-gray-100 dark:decoration-gray-100">
          Projects.
        </h1>
      </Link>
      <p className="mt-1 text-gray-500 dark:text-gray-300">
        A selection of most recent <Link href="/projects">projects</Link>.
      </p>
      <div className="mt-6 grid gap-5 md:gap-4 lg:grid-cols-2 xl:gap-6 2xl:grid-cols-3">
        <ProjectCard
          title="Ft_trascendence"
          date="Sep - 2023"
          demo="/demo/ft_transcendence_demo.mp4"
          isVideo={true}
          link="https://github.com/1337Impact/ft_transcendence"
          tech={["TypeScript", "Next.js", "Nest.js", "Prisma", "PostgreSQL"]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, cumque.
        </ProjectCard>
        <ProjectCard
          title="Leetbooks"
          date="Nov - 2023"
          demo="/demo/leetbooks_demo.mp4"
          isVideo={true}
          link="https://github.com/1337Impact/LeetBooks"
          tech={["TypeScript", "Next.js", "Prisma", "PostgreSQL", "MantainUi"]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, cumque.
        </ProjectCard>
        <ProjectCard
          title="TaskSpace"
          date="Nov - 2023"
          demo="/demo/taskspace_demo.mp4"
          isVideo={true}
          link="https://github.com/1337Impact/TaskSpace"
          tech={["TypeScript", "Next.js", "prisma", "Trpc", "NextAuth.js"]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, cumque.
        </ProjectCard>
        <ProjectCard
          title="Ft_irc"
          date="Apr - 2023"
          demo="/demo/ft_irc.webp"
          isVideo={false}
          link="https://github.com/1337Impact/TaskSpace"
          tech={["C++", "Linux Socket", "Networking", "IRC Protocol"]}
        >
          ft_irc is a group project which, as its name suggests, makes us
          recreate an IRC server (from scratch, in C++). The server follows the
          RFC 2812 specification and can therefore be used with existing IRC
          clients.
        </ProjectCard>
      </div>
    </section>
  );
}
