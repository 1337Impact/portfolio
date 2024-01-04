"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function async() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="text-2xl hover:text-gray-600 w-[100px]">
      {theme === "dark" ? (
        <button className="float-right"  type="button" onClick={() => setTheme("light")}>
          <FaSun />
        </button>
      ) : (
        <button className="float-right" type="button" onClick={() => setTheme("dark")}>
          <FaMoon />
        </button>
      )}
    </div>
  );
}
