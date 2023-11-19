import styles from "./page.module.scss";
import { RxChevronDown } from "react-icons/rx";
import ProjectCard from "./projectCard";

export default function Home() {
  return (
    <main className={`px-2 md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto ${styles.home}`}>
      <section
        id="home"
        aria-labelledby="home"
        className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-24"
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-lg text-center text-gray-700">
            Hello I'm <span className="font-pacifico">Mohammed Benkhattab</span>
          </h1>
          <p className="mt-1 max-w-4xl text-center text-4xl text-gray-800 leading-[3.2rem] text-foreground lg:text-5xl lg:leading-[4rem]">
            I'm a full-stack developer, I love building things with
            <span
              className={`${styles.placeholder} block pl-1 text-red-500`}
            ></span>
          </p>
        </div>
        <a href="/#projects">
          <div className="flex flex-col justify-center items-center text-red-500 gap-1 hover:text-red-400">
            <h2 className="text-lg lg:text-xl">Projects</h2>
            <div className="animate-bounce w-[1.7rem] lg:w-[2rem]">
              <RxChevronDown size="100%" />
            </div>
          </div>
        </a>
      </section>
      <section id="projects" className="min-h-screen pt-7">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 xl:gap-6 mx-1">
          <ProjectCard title="Ft_trascendence" date="Sep - 2023" tech={["React", "TypeScript", "Next.js"]} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, cumque, voluptatem, quas quod quia voluptatum
              consequatur quibusdam voluptas doloribus voluptate. Quisquam
              voluptates, cumque, voluptatem, quas quod quia voluptatum
              consequatur quibusdam voluptas doloribus voluptate.
          </ProjectCard>
          <ProjectCard title="Ft_irc" date="Sep - 2023" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, cumque, voluptatem, quas quod quia voluptatum
              consequatur quibusdam voluptas doloribus voluptate.
          </ProjectCard>
          <ProjectCard title="Cub3d" date="Sep - 2023" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, cumque, voluptatem, quas quod quia voluptatum
              consequatur quibusdam voluptas doloribus voluptate. Quisquam
              voluptates, cumque, voluptatem, quas quod quia voluptatum
              consequatur quibusdam voluptas doloribus voluptate.
          </ProjectCard>
          </div>
      </section>
      <section id="contact" className="min-h-screen pt-7">
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Full name" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Full name" />
          </div>
          <div>
            <label>Subject</label>
            <input type="text" placeholder="Full name" />
          </div>
          <div>
            <label>Message</label>
            <input type="text" placeholder="Full name" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
  
  
}
