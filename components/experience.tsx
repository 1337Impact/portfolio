"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            My Experience
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Where I've worked
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My professional journey has equipped me with diverse skills and
            experiences in developing impactful solutions.
          </p>
        </div>
      </div>
      <VerticalTimeline 
        lineColor="var(--secondary)"
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "var(--card-background)",
                boxShadow: "none",
                border: "1px solid var(--foreground)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                color: "var(--foreground)",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid var(--muted-foreground)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "var(--background)",
                color: "var(--foreground)",
                fontSize: "1.5rem",
                boxShadow: "0 0 0 4px var(--accent)",
              }}
              dateClassName="text-muted-foreground"
            >
              <h3 className="font-semibold capitalize text-foreground">{item.title}</h3>
              <p className="!font-bold !text-[13px] !mt-0 text-primary">{item.location}</p>
              <p className="!mt-1 !font-normal text-foreground">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}