import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./navbar.module.scss";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toogle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="h-[80px] mx-3 grid grid-cols-3 items-center md:w-[90%] lg:w-[80%] xl:w-[70%] md:mx-auto">
      <div className="lg:order-2 flex justify-between items-center">
        <h1 className="font-pacifico text-xl cursor-pointer hover:text-teal-200 lg:text-[1.35rem] text-center lg:order-1">
          Benkhattab
        </h1>
        <div className={`${styles.hamburger} lg:hidden`} onClick={toogle}>
          <div className={`${styles.line} ${isMenuOpen && styles.open}`}></div>
          <div className={`${styles.line} ${isMenuOpen && styles.open}`}></div>
          <div className={`${styles.line} ${isMenuOpen && styles.open}`}></div>
        </div>
        <div
          className={`${
            !isMenuOpen && "max-lg:hidden"
          } flex justify-between max-lg:absolute max-lg:w-screen max-lg:h-[calc(100vh-80px)] max-lg:left-0 max-lg:top-[80px] max-lg:backdrop-blur-xl max-lg:py-1 max-lg:px-3 z-30`}
        >
          <ul className="flex justify-around items-center h-full font-semibold max-lg:flex-col max-lg:text-3xl lg:gap-8">
            <li className={"cursor-pointer"}>Home</li>
            <li className={"cursor-pointer"}>About</li>
            <li className={"cursor-pointer"}>Contact</li>
          </ul>
          <ul className="flex gap-5 max-lg:flex-1 justify-end lg:order-3">
            <li className="text-xl lg:text-2xl cursor-pointer">
              <a>
                <FaGithub />
              </a>
            </li>
            <li className="text-xl lg:text-2xl cursor-pointer">
              <a>
                <FaLinkedin />
              </a>
            </li>
            <li className="text-xl lg:text-2xl cursor-pointer">
              <a>
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
