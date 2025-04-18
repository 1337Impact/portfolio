import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  // Card animation variants for the falling effect
  const cardVariants: Variants = {
    hidden: { 
      transform: "scale(0.9)",
      opacity: 0, 
      y: -50 
    },
    visible: { 
      transform: "scale(1)",
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
      >
        <Card
          className={
            "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
          }
        >
          <Link
            href={href || "#"}
            className={cn("block cursor-pointer", className)}
          >
            {video && (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
              />
            )}
            {image && (
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="h-40 w-full overflow-hidden object-cover object-top"
              />
            )}
          </Link>
          <CardHeader className="px-2">
            <div className="space-y-1">
              <CardTitle className="mt-1 text-base">{title}</CardTitle>
              <time className="font-sans text-xs">{dates}</time>
              <div className="hidden font-sans text-xs underline print:visible">
                {link
                  ?.replace("https://", "")
                  .replace("www.", "")
                  .replace("/", "")}
              </div>
              <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                {description}
              </Markdown>
            </div>
          </CardHeader>
          <CardContent className="mt-auto flex flex-col px-2">
            {tags && tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {tags?.map((tag) => (
                  <Badge
                    className="px-1 py-0 text-[10px]"
                    variant="secondary"
                    key={tag}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="px-2 pb-2">
            {links && links.length > 0 && (
              <div className="flex flex-row flex-wrap items-start gap-1">
                {links?.map((link, idx) => (
                  <Link href={link?.href} key={idx} target="_blank">
                    <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                      {link.icon}
                      {link.type}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </CardFooter>
        </Card>
      </motion.div>
  );
}