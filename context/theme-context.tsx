"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { ThemeType } from "@/lib/data";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  // State to hold current theme
  const [theme, setTheme] = useState<ThemeType>("light");

  // Initialize theme based on user's system preference or localStorage
  useEffect(() => {
    // First check for theme mode (light/dark)
    const localTheme = window.localStorage.getItem("theme") as ThemeType | null;
    
    if (localTheme) {
      setTheme(localTheme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
      window.localStorage.setItem("theme", systemTheme);
    }
    
    // Now check for custom theme (This will be handled by ThemeSwitch component)
  }, []);

  // Update HTML class and localStorage when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // Handle non-standard themes
      // For custom themes, we'll keep the light/dark mode based on their nature
      const isDarkTheme = ["ocean", "forest", "desert"].includes(theme);
      if (isDarkTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    
    // Always save the current theme to localStorage
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      // If current theme is light or dark, toggle between them
      if (prevTheme === "light" || prevTheme === "dark") {
        return prevTheme === "light" ? "dark" : "light";
      }
      // If it's a custom theme, determine if it's a dark or light theme and toggle to standard
      const isDarkTheme = ["ocean", "forest", "desert"].includes(prevTheme);
      return isDarkTheme ? "light" : "dark";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  
  return context;
}