"use client";

import { useTheme } from "@/context/theme-context";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { themeOptions, ThemeType } from "@/lib/data";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [previewTheme, setPreviewTheme] = useState<ThemeType | null>(null);
  const [originalTheme, setOriginalTheme] = useState<ThemeType>(theme);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Apply theme CSS variables
  const applyTheme = (themeName: ThemeType) => {
    const selectedTheme = themeOptions.find((t) => t.name === themeName);
    if (!selectedTheme) return;

    const root = document.documentElement;
    Object.entries(selectedTheme.colors).forEach(([property, value]) => {
      root.style.setProperty(`--${property}`, value);
    });
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Preview theme on hover
  const handleThemePreview = (themeName: ThemeType) => {
    if (!isOpen || !isReady) {
      return;
    }
    console.log("Previewing theme:", themeName);
    setPreviewTheme(themeName);
    applyTheme(themeName);
  };

  // End preview and restore original theme if not selecting
  const handleEndPreview = () => {
    if (previewTheme) {
      setPreviewTheme(null);
      applyTheme(originalTheme);
    }
  };

  // Change theme permanently
  const handleThemeChange = (themeName: ThemeType) => {
    console.log("Changing theme to:", themeName);
    setPreviewTheme(null);
    setTimeout(() => setIsReady(false));
    setTimeout(() => {
      setTheme(themeName);
      setOriginalTheme(themeName);
    });

  };

  useEffect(() => {
    console.log("isReady", isReady);
    if (!isReady) {
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  }, [isReady]);

  const currentTheme = themeOptions.find((t) => t.name === theme);

  // Ref for timer to add closing delay
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter - open the menu
  const handleMouseEnter = () => {
    // Clear any pending close timer
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsOpen(true);
    setTimeout(() => setIsReady(true), 500);
  };

  // Handle mouse leave - add delay before closing
  const handleMouseLeave = () => {
    setIsReady(false);
    // Set timer to close after delay
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      handleEndPreview();
    }, 300); // 300ms delay before closing
  };

  // Handle click on main button - toggle locked state
  const handleButtonClick = () => {
    setIsOpen(true); // Ensure menu is open when clicking
  };

  // Clear timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed bottom-10 right-6 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TooltipProvider>
        <AnimatePresence>
          <motion.div
            initial={{ height: "3.5rem", width: "3.5rem" }}
            animate={{
              height: isOpen ? (isMobile ? "auto" : "3.5rem") : "3.5rem",
              width: isOpen ? (isMobile ? "3.5rem" : "auto") : "3.5rem",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="relative bg-opacity-20 backdrop-blur-[2rem] border border-foreground border-opacity-40 shadow-2xl overflow-hidden rounded-full flex flex-col md:flex-row items-center"
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="flex flex-col md:flex-row gap-2 pt-3 md:pt-0 md:pl-3 pb-[3.5rem] md:pb-0 md:pr-[3.5rem]"
                  initial={{
                    opacity: 0,
                    height: isMobile ? 0 : "auto",
                    width: isMobile ? "auto" : 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    width: "auto",
                    transition: {
                      duration: 0.3, // Slower animation
                      staggerChildren: 0.1, // More pronounced staggering
                    },
                  }}
                  exit={{
                    opacity: 0,
                    height: isMobile ? 0 : "auto",
                    width: isMobile ? "auto" : 0,
                    transition: { duration: 0.4 }, // Slower exit animation
                  }}
                >
                  {themeOptions
                    .filter((t) => t.name !== theme) // Don't show current theme in the list
                    .map((themeOption, index) => (
                      <motion.div
                        key={themeOption.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              className="w-10 h-10 rounded-full focus:outline-none hover:scale-110 transition-all"
                              disabled={!isOpen}
                              onMouseEnter={() =>
                                handleThemePreview(themeOption.name)
                              }
                              onClick={() =>
                                handleThemeChange(themeOption.name)
                              }
                            >
                              <div
                                className="w-full h-full rounded-full flex items-center justify-center"
                                style={{
                                  backgroundColor:
                                    themeOption.colors.background,
                                  color: themeOption.colors.foreground,
                                  border: `1px solid ${themeOption.colors["muted-foreground"]}`,
                                }}
                              >
                                {themeOption.icon}
                              </div>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent
                            className="bg-muted"
                            side={isMobile ? "left" : "top"}
                          >
                            <p>{themeOption.label}</p>
                          </TooltipContent>
                        </Tooltip>
                      </motion.div>
                    ))}
                </motion.div>
              )}
              {/* Main theme button - always visible */}
            </AnimatePresence>
            <div
              style={{
                backgroundColor: isOpen ? currentTheme?.colors.background : "",
                color: currentTheme?.colors.foreground,
                border: isOpen
                  ? `1px solid ${currentTheme?.colors["muted-foreground"]}`
                  : "",
              }}
              className={`absolute md:right-[5px] md:bottom-auto md:left-auto bottom-[5px] left-auto w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out`}
              onMouseEnter={handleEndPreview}
              onClick={handleButtonClick}
            >
              <div className="cursor-pointer">
                {currentTheme?.icon ||
                  (theme === "light" ? <BsSun /> : <BsMoon />)}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </TooltipProvider>
    </div>
  );
}
