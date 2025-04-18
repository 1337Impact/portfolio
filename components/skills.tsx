"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";


export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  const containerRef = useRef<HTMLDivElement>(null);
  const {theme} = useTheme();

  return (
    <section id="skills" ref={ref}>
      <div className="space-y-12 w-full py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Skills
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Technologies I work with
            </h2>
            <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve developed expertise in a variety of technologies and frameworks to build robust and scalable applications.
            </p>
          </div>
        </div>
        
        <div className="relative max-w-[800px] mx-auto flex items-center flex-wrap justify-center" ref={containerRef}>
          {skillsData.map(({ src, name, dark }: any, index: number) => (
            <SkillIcon 
              key={src} 
              src={theme === "dark" && dark ? dark : src} 
              name={name} 
              index={index} 
              totalIcons={skillsData.length}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillIconProps {
  src: string;
  name: string;
  index: number;
  totalIcons: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

function SkillIcon({ src, name, index, totalIcons, containerRef }: SkillIconProps) {
  const isInView = useInView(containerRef, { once: true });
  // Generate a random starting position outside the container
  const directions = [
    { x: -200, y: -200 }, // top-left
    { x: 0, y: -200 },    // top
    { x: 200, y: -200 },  // top-right
    { x: 200, y: 0 },     // right
    { x: 200, y: 200 },   // bottom-right
    { x: 0, y: 200 },     // bottom
    { x: -200, y: -200 }, // bottom-left
    { x: -200, y: 0 },    // left
  ];

  const variants = {
    hidden: {
      opacity: 0,
      x: directions[index % directions.length].x,
      y: directions[index % directions.length].y,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="inline-block p-2 sm:p-6"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      viewport={{ once: true }}
      variants={variants}
    >
      <img 
        src={src} 
        alt={name} 
        className="max-w-40 h-10 sm:h-12 transition-all duration-300 hover:scale-110" 
      />
    </motion.div>
  );
}