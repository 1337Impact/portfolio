"use client";
import { ProjectCardProps } from "@/types/project";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import VideoDemo from "./VideoDemo";

export default function ProjectCard({
  link,
  title,
  date,
  tech,
  children,
  demo,
  placeholderImg,
  isVideo,
  h,
}: ProjectCardProps) {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-loadProject");
          observer.disconnect();
        }
      });
    });

    io.observe(ref.current as any);
  }, []);
  return (
    <div
      ref={ref}
      className={`${h} group relative mx-auto mb-6 max-w-[600px] cursor-pointer overflow-hidden rounded-xl opacity-0 shadow-2xl md:mb-10 lg:mb-8`}
    >
      <div className="h-full w-full">
        {isVideo ? (
          <VideoDemo demo={demo} placeholderImg={placeholderImg} />
        ) : (
          <img src={demo} alt={title} className="h-full w-full object-cover" />
        )}
      </div>
      <div className="absolute bottom-0  left-0 z-10 flex h-full w-full items-end p-6 duration-500 group-hover:opacity-100 lg:opacity-0">
        <a
          target="_blank"
          href={link}
          className="absolute right-5 top-4 text-3xl text-gray-200 hover:text-gray-50"
        >
          <HiOutlineExternalLink />
        </a>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgba(0,0,0,.4)] to-black opacity-90"></div>
        <div className="duration-500 group-hover:translate-y-0 lg:translate-y-4">
          <div className="flex items-center justify-between py-2">
            <h1 className="text-xl font-semibold text-gray-100">{title}</h1>
            <h3 className="rounded border-2 border-gray-300 px-2 text-xs font-bold text-gray-300">
              {date}
            </h3>
          </div>
          <p className="mt-1 text-sm tracking-wider text-gray-300 opacity-95">
            {children}
          </p>
          <div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {tech &&
                tech.map((item, index) => (
                  <li
                    key={index}
                    className="inline-block rounded-full border-[1.5px] border-gray-200 px-3 py-[2.5px] text-xs font-bold text-gray-400 hover:text-gray-200"
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
