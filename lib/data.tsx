import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuCode } from "react-icons/lu";
import {
  GiLemon,
  GiFlowerPot,
  GiPineTree,
  GiWaterDrop,
  GiMountainCave,
} from "react-icons/gi";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

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
    title: "Kimih",
    href: "https://kimih-website.vercel.app/",
    dates: "Jul 2024",
    active: true,
    description:
      "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Supabase",
      "TailwindCSS",
      "Shadcn UI",
      "Stripe",
    ],
    links: [
      {
        type: "Website",
        href: "https://kimih-website.vercel.app",
        icon: <GoProjectSymlink className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/1337Impact/kimih-website",
        icon: <FaGithub className="size-3" />,
      },
    ],
    image: "",
    video: "/videos/kimih-demo.mp4",
  },
  {
    title: "Applitics",
    href: "https://www.applitics.fr/case-study-dfc",
    dates: "Mar 2025",
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
        href: "https://www.applitics.fr/case-study-dfc",
        icon: <GoProjectSymlink className="size-3" />,
      },
    ],
    image: "",
    video: "/videos/applitics-demo.mp4",
  },
  {
    title: "Bhives.Ai",
    href: "https://bhives-ai.vercel.app",
    dates: "Jun 2024 - Jul 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://bhives-ai.vercel.app",
        icon: <GoProjectSymlink className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/1337Impact/bhives-ai",
        icon: <FaGithub className="size-3" />,
      },
    ],
    image: "",
    video:
      "/videos/bhives-demo.mp4",
  },
  {
    title: "TeamShifts",
    href: "https://teamshifts.io",
    dates: "Jan 2024 - May 2024",
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
        href: "https://teamshifts.io",
        icon: <GoProjectSymlink className="size-3" />,
      },
    ],
    image: "",
    video:
      "/videos/teamshifts-demo.mp4",
  },
] as const;

export const skillsData = [
  {
    name: "MongoDB",
    src: "/images/skills/mongodb.svg",
  },
  {
    name: "NodeJS",
    src: "/images/skills/node.svg",
  },
  {
    name: "ReactJS",
    src: "/images/skills/react.svg",
  },
  {
    name: "Javascript",
    src: "/images/skills/js.svg",
  },
  {
    name: "AngularJS",
    src: "/images/skills/ts.svg",
  },
  {
    name: "React Native",
    src: "/images/skills/react-native.svg",
  },
  {
    name: "NextJs",
    src: "/images/skills/nextjs.svg",
    dark: "/images/skills/nextjs-dark.svg",
  },
  {
    name: "Angular",
    src: "/images/skills/angular.svg",
  },
  {
    name: "ExpressJS",
    src: "/images/skills/express.svg",
    dark: "/images/skills/express-dark.svg",
  },
  {
    name: "Figma",
    src: "/images/skills/figma.svg",
  },
  {
    name: "Git",
    src: "/images/skills/git.svg",
  },
];

// Define theme types
export type ThemeType =
  | "light"
  | "dark"
  | "lemon"
  | "forest"
  | "ocean"
  | "lavender"
  | "desert";

// Define theme interface
export interface ThemeOption {
  name: ThemeType;
  label: string;
  icon: React.ReactNode;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    muted: string;
    "muted-foreground": string;
    accent: string;
    "accent-foreground": string;
    "card-background": string;
  };
}

// Theme options with their colors and icons
export const themeOptions: ThemeOption[] = [
  {
    name: "light",
    label: "Light",
    icon: <BsSun className="h-4 w-4" />,
    colors: {
      background: "#ffffff",
      foreground: "#020817",
      primary: "#0f172a",
      secondary: "#f1f5f9",
      muted: "#f1f5f9",
      "muted-foreground": "#64748b",
      accent: "#f1f5f9",
      "accent-foreground": "#0f172a",
      "card-background": "#ffffff",
    },
  },
  {
    name: "dark",
    label: "Dark",
    icon: <BsMoon className="h-4 w-4" />,
    colors: {
      background: "#020817",
      foreground: "#ffffff",
      primary: "#f8fafc",
      secondary: "#1e293b",
      muted: "#1e293b",
      "muted-foreground": "#94a3b8",
      accent: "#1e293b",
      "accent-foreground": "#f8fafc",
      "card-background": "#1e293b",
    },
  },
  {
    name: "lemon",
    label: "Lemon",
    icon: <GiLemon className="h-4 w-4" />,
    colors: {
      background: "#FFFACD",
      foreground: "#556B2F",
      primary: "#FFA500",
      secondary: "#E6F2A2",
      muted: "#F0E68C",
      "muted-foreground": "#556B2F",
      accent: "#FFFF00",
      "accent-foreground": "#2F4F4F",
      "card-background": "#FFFDE7",
    },
  },
  {
    name: "forest",
    label: "Forest",
    icon: <GiPineTree className="h-4 w-4" />,
    colors: {
      background: "#F1F8E9",
      foreground: "#33691E",
      primary: "#558B2F",
      secondary: "#DCEDC8",
      muted: "#C5E1A5",
      "muted-foreground": "#33691E",
      accent: "#8BC34A",
      "accent-foreground": "#1B5E20",
      "card-background": "#F9FBE7",
    },
  },
  {
    name: "ocean",
    label: "Ocean",
    icon: <GiWaterDrop className="h-4 w-4" />,
    colors: {
      background: "#E3F2FD",
      foreground: "#01579B",
      primary: "#0288D1",
      secondary: "#B3E5FC",
      muted: "#81D4FA",
      "muted-foreground": "#01579B",
      accent: "#29B6F6",
      "accent-foreground": "#01579B",
      "card-background": "#E1F5FE",
    },
  },
  {
    name: "lavender",
    label: "Lavender",
    icon: <GiFlowerPot className="h-4 w-4" />,
    colors: {
      background: "#F3E5F5",
      foreground: "#4A148C",
      primary: "#7B1FA2",
      secondary: "#E1BEE7",
      muted: "#CE93D8",
      "muted-foreground": "#4A148C",
      accent: "#AB47BC",
      "accent-foreground": "#4A148C",
      "card-background": "#F5E9F7",
    },
  },
  {
    name: "desert",
    label: "Desert",
    icon: <GiMountainCave className="h-4 w-4" />,
    colors: {
      background: "#FFF3E0",
      foreground: "#BF360C",
      primary: "#E64A19",
      secondary: "#FFE0B2",
      muted: "#FFCC80",
      "muted-foreground": "#BF360C",
      accent: "#FF9800",
      "accent-foreground": "#BF360C",
      "card-background": "#FFF8E1",
    },
  },
];

export const emailId = "mohammed@benkhattab.dev" as const;
export const websiteUrl = "benkhattab.dev" as const;

export const documentsName = {
  cover_letter: "Mohammed_Benkhattab_Cover_Letter.pdf",
  resume: "Mohammed_Benkhattab_Resume.pdf",
  experience_letter: "Mohammed_Benkhattab_Experience_Letter.pdf",
};

export const {
  cover_letter: coverLetterName,
  resume: resumeName,
  experience_letter: experienceLetterName,
} = documentsName;
