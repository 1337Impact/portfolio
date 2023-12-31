import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiFrontendmentor, SiHackerrank } from "react-icons/si";

export default function MediaLinks({ size }: { size?: string }) {
  return (
    <ul
      className={`text-${size} flex h-full items-center justify-center gap-5 lg:mb-7 lg:gap-7`}
    >
      <li className="transition-all duration-100 ease-in hover:scale-110">
        <a target="_blank" href="https://github.com/1337Impact">
          <FaGithub />
        </a>
      </li>
      <li className="transition-all duration-100 ease-in hover:scale-110">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mohammed-benkhattab/"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className="transition-all duration-100 ease-in hover:scale-110">
        <a target="_blank" href="https://twitter.com/BenkhattabMo">
          <FaXTwitter />
        </a>
      </li>
      <li className="transition-all duration-100 ease-in hover:scale-110">
        <a
          target="_blank"
          href="https://www.frontendmentor.io/profile/Mohamaedbenk"
        >
          <SiFrontendmentor />
        </a>
      </li>
      <li className="transition-all duration-100 ease-in hover:scale-110">
        <a
          target="_blank"
          href="https://www.hackerrank.com/profile/mobenkhattab"
        >
          <SiHackerrank />
        </a>
      </li>
      <li className="transition-all duration-100 ease-in hover:scale-110">
        <a
          target="_blank"
          href="https://www.instagram.com/mohammed_benkhattab/"
        >
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
}
