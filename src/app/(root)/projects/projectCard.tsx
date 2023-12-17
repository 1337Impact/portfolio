import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

interface Props {
  title: string;
  date: string;
  image?: string;
  link: string;
  tech?: string[];
  demo: string;
  isVideo: boolean;
  children: React.ReactNode;
}

export default ({
  link,
  title,
  date,
  tech,
  children,
  demo,
  isVideo,
}: Props) => {
  return (
    <div className="group relative mx-auto h-[400px] max-w-[600px] cursor-pointer overflow-hidden rounded-xl shadow-2xl">
      <div className="absolute -z-10 h-full w-full">
        {isVideo ? (
          <video className="h-full w-full object-cover" autoPlay loop muted>
            <source src={demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={demo} alt={title} className="w-full" />
        )}
      </div>
      <div className="bottom-0 left-0 flex h-full w-full items-end p-6 opacity-0 duration-500 group-hover:opacity-100 max-md:opacity-100">
        <a
          target="_blank"
          href={link}
          className="absolute right-5 top-4 text-3xl text-gray-200"
        >
          <HiOutlineExternalLink />
        </a>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black opacity-75"></div>
        <div>
          <div className="flex items-end justify-between py-2">
            <h1 className="text-xl font-semibold text-gray-100">{title}</h1>
            <h3 className="rounded border-2 border-gray-300 px-2 text-xs font-bold text-gray-300">
              {date}
            </h3>
          </div>
          <p className="mt-1 text-sm text-gray-300">{children}</p>
          <div>
            <ul className="mt-2 flex flex-wrap gap-2">
              {tech &&
                tech.map((item, index) => (
                  <li
                    key={index}
                    className="inline-block rounded-full border-2 border-gray-300 px-3 py-[2px] text-sm font-semibold text-gray-400"
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
};
