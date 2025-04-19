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
  const [originalTheme, setOriginalTheme] = useState<ThemeType>("light");

  // Apply theme CSS variables
  const applyTheme = (themeName: ThemeType) => {
    const selectedTheme = themeOptions.find((t) => t.name === themeName);
    if (!selectedTheme) return;

    const root = document.documentElement;
    Object.entries(selectedTheme.colors).forEach(([property, value]) => {
      root.style.setProperty(`--${property}`, value);
    });
  };

  // // Store the actual theme when opening dropdown to restore after preview
  // useEffect(() => {
  //   if (!previewTheme) {
  //     setOriginalTheme(theme as ThemeType);
  //   }
  // }, [theme, previewTheme]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Preview theme on hover
  const handleThemePreview = useCallback((themeName: ThemeType) => {
    if (!isReady) return;
    console.log("Previewing theme:", themeName);
    setPreviewTheme(themeName);
    applyTheme(themeName);
  }, [isReady]);

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
    setIsReady(false);
    setTheme(themeName);
    setOriginalTheme(themeName);
    setTimeout(() => {
    setPreviewTheme(null);
    setIsOpen(false);
    }, 2000);
  };

  const currentTheme = themeOptions.find((t) => t.name === theme);

  // State to track if menu should be locked open after clicking
  const [isLocked, setIsLocked] = useState(false);
  // Ref for timer to add closing delay
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter - open the menu
  const handleMouseEnter = () => {
    setIsReady(false);
    // Clear any pending close timer
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsOpen(true);
    setTimeout(() => {
      setIsReady(true);
    }, 600);
  };

  // Handle mouse leave - add delay before closing
  const handleMouseLeave = () => {
    // Don't close if menu is locked
    if (isLocked) return;

    // Set timer to close after delay
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      handleEndPreview();
    }, 300); // 300ms delay before closing
  };

  // Handle click on main button - toggle locked state
  const handleButtonClick = () => {
    setIsLocked(!isLocked);
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
              height: isOpen ? "auto" : "3.5rem",
              width: "3.5rem",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="relative bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl overflow-hidden rounded-full dark:bg-gray-950 flex flex-col items-center"
          >
            {/* Vertical list of theme options */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="flex flex-col gap-2 pt-3 pb-[3.5rem]"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: {
                      duration: 0.3, // Slower animation
                      staggerChildren: 0.1, // More pronounced staggering
                    },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
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
                              onMouseEnter={() =>
                                handleThemePreview(themeOption.name)
                              }
                              onMouseLeave={handleEndPreview}
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
                          <TooltipContent side="left">
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
              className={`absolute bottom-[5px] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out`}
              onClick={handleButtonClick}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer">
                    {currentTheme?.icon ||
                      (theme === "light" ? <BsSun /> : <BsMoon />)}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>{isLocked ? "Unlock menu" : "Click to lock menu open"}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </motion.div>
        </AnimatePresence>
      </TooltipProvider>
    </div>
  );
}
