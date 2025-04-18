"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-foreground text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        In <span className="font-medium">2021</span>, I joined{" "}
        <a
          href="https://www.1337.ma"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          1337 School
        </a>{" "}
        and instantly fell in love with coding. I spent my time{" "}
        <span className="italic">diving deep into problem-solving</span>,
        building projects, and{" "}
        <span className="font-medium">learning by doing</span>. That hands-on
        approach eventually led me to an internship at{" "}
        <span className="font-medium">Marrakech Launchpad</span>, where I worked
        on{" "}
        <a
          href="https://teamshifts.io"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          TeamShifts
        </a>
        —a CRM platform that was presented at{" "}
        <a
          href="https://gitexafrica.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          Gitex Africa 2024
        </a>
        . I helped build features like the{" "}
        <span className="underline">calendar</span>,{" "}
        <span className="underline">task view</span>, and{" "}
        <span className="underline">product management system</span> using{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, Supabase
        </span>
        , and <span className="font-medium">Tailwind CSS</span>.
      </p>

      <p className="mb-3">
        These days, I’m{" "}
        <a
          href="https://www.upwork.com/freelancers/mohammedbenkhattab"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          freelancing on Upwork
        </a>
        , working with clients to build{" "}
        <span className="italic">clean, responsive web apps</span>. Outside of
        coding, I enjoy{" "}
        <span className="font-medium">experimenting in Figma</span>,{" "}
        <span className="font-medium">playing around with Blender</span>, and{" "}
        <span className="italic">exploring random topics</span> like{" "}
        <span className="font-medium">finance</span>,{" "}
        <span className="font-medium">psychology</span>, and{" "}
        <span className="font-medium">design</span>. I’m always{" "}
        <span className="underline">curious</span> and always{" "}
        <span className="underline">building something</span>.
      </p>
    </motion.section>
  );
}
