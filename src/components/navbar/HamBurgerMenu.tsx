import { useState } from "react";
import styles from "./navbar.module.css";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toogle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative">
      <div className={styles.hamburger} onClick={toogle}>
        <div className={`${styles.line} ${isMenuOpen && styles.open}`}></div>
        <div className={`${styles.line} ${isMenuOpen && styles.open}`}></div>
        <div className={`${styles.line} ${isMenuOpen && styles.open}`}></div>
      </div>
      <div className={`${!isMenuOpen && "hidden"} absolute w-[300px] top-[30px] border-2 border-gray-800 backdrop-blur-xl rounded-lg text-gray-800 font-semibold py-1 px-3`}>
        <ul className="flex justify-between">
          <li className={styles.menuItem}>Home</li>
          <li className={styles.menuItem}>About</li>
          <li className={styles.menuItem}>Contact</li>
        </ul>
      </div>
    </div>
  );
};