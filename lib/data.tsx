import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuCode } from "react-icons/lu";
import articify from "@/public/articify.png";
import epiphora from "@/public/epiphora.png";
import mozzify from "@/public/mozzify.png";
import aadhiran_ventures from "@/public/aadhiran_ventures.png";
import springreen_main_site from "@/public/springreen_main_site.png";
import cloudtechtiq from "@/public/cloudtechtiq.png";
import rosterly from "@/public/rosterly.png";
import { title } from "process";
import { Icons } from "@/components/icons";
// import { icons } from "react-icons";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Developer (Upwork)",
    location: "Remote",
    description:
      "I currently work as a freelance full stack developer on Upwork, helping clients build custom web apps and digital platforms. My work spans UI/UX implementation, authentication, admin dashboards, and responsive design using React, Next.js, and Tailwind CSS.",
      icon: React.createElement(LuCode),
    date: "2024 - present",
  },
  {
    title: "Full Stack Developer (Kimih Platform)",
    location: "Remote", 
    description:
      "Co-founded Kimih, a platform for booking local beauty and wellness services in the Middle East. I designed and developed key features using modern frontend technologies, contributing to a sleek user experience and a flexible business model with no subscription fees.",
    icon: React.createElement(LuCode),
    date: "2024",
  },
  {
    title: "Full Stack Developer (TeamShifts)",
    location: "Marrakech, Morocco",
    description:
      "Worked as a full stack developer at Marrakech Launchpad, where I built major features for TeamShifts, a CRM platform presented at Gitex Africa 2024. I contributed to the task management system (task table, kanban view), built the full calendar system for managing tasks across clients, teams, and managers, and worked on invoice validation, email integration, and the sidebar. Technologies used include React, Next.js, TypeScript, Supabase, and Tailwind CSS.",
    icon: React.createElement(LuCode),
    date: "2024",
  },
  {
    title: "Intern Developer (Marrakech Launchpad)",
    location: "Marrakech, Morocco",
    description:
      "Joined Marrakech Launchpad as a full stack intern, where I worked in a team of 6 developers to build scalable SaaS tools. This experience strengthened my skills in building production-ready features, handling real-world user data, and collaborating on fast-paced releases.",
    icon: React.createElement(LuCode),
    date: "2024",
  },
  {
    title: "Software Engineering Student (1337 School)",
    location: "Khouribga, Morocco",
    description:
      "Joined 1337 School in 2021, a peer-to-peer coding program focused on learning through real-world projects and collaboration. This experience built my foundation in algorithms, low-level programming, and full stack web development.",
      icon: React.createElement(LuGraduationCap),
      date: "2021 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Chat Collect",
    href: "https://chatcollect.com",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://chatcollect.com",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  },
  {
    title: "Magic UI",
    href: "https://magicui.design",
    dates: "June 2023 - Present",
    active: true,
    description:
      "Designed, developed and sold animated UI components for developers.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://magicui.design",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/magicuidesign/magicui",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "https://cdn.magicui.design/bento-grid.mp4",
  },
  {
    title: "llm.report",
    href: "https://llm.report",
    dates: "April 2023 - September 2023",
    active: true,
    description:
      "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Magic UI",
      "Stripe",
      "Cloudflare Workers",
    ],
    links: [
      {
        type: "Website",
        href: "https://llm.report",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/dillionverma/llm.report",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "https://cdn.llm.report/openai-demo.mp4",
  },
  {
    title: "Automatic Chat",
    href: "https://automatic.chat",
    dates: "April 2023 - March 2024",
    active: true,
    description:
      "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Magic UI",
      "Stripe",
      "Cloudflare Workers",
    ],
    links: [
      {
        type: "Website",
        href: "https://automatic.chat",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
  },
] as const;

export const skillsData = [
  {
    name: 'MongoDB',
    src: '/images/skills/mongodb.svg'
  },
  {
    name: 'NodeJS',
    src: '/images/skills/node.svg'
  },
  {
    name: 'ReactJS',
    src: '/images/skills/react.svg'
  },
  {
    name: 'Javascript',
    src: '/images/skills/js.svg'
  },
  {
    name: 'AngularJS',
    src: '/images/skills/ts.svg'
  },
  {
    name: 'React Native',
    src: '/images/skills/react-native.svg'
  },
  {
    name: 'NextJs',
    src: '/images/skills/nextjs.svg',
    dark: '/images/skills/nextjs-dark.svg'
  },
  {
    name: 'Angular',
    src: '/images/skills/angular.svg'
  },
  {
    name: 'ExpressJS',
    src: '/images/skills/express.svg',
    dark: '/images/skills/express-dark.svg'
  },
  {
    name: 'Figma',
    src: '/images/skills/figma.svg'
  },
  {
    name: 'Git',
    src: '/images/skills/git.svg'
  }
];


export const emailId = "mohammed@benkhattab.dev" as const;
export const websiteUrl = "benkhattab.dev" as const;


export const documentsName = {
  'cover_letter': 'Mohammed_Benkhattab_Cover_Letter.pdf'
  ,
  'resume': 'Mohammed_Benkhattab_Resume.pdf',
  'experience_letter': 'Mohammed_Benkhattab_Experience_Letter.pdf'
}

export const { cover_letter: coverLetterName, resume: resumeName, experience_letter: experienceLetterName } = documentsName