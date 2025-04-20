import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mohammed Benkhattab | Personal Portfolio",
  description:
    "Innovative Full Stack Developer with a Proven Track Record in Building Scalable Web Applications.",
  keywords: [
    "Mohammed Benkhattab",
    "Portfolio",
    "Developer",
    "Full-stack",
    "alzywelzy",
    "Alzy Welzy",
    "welzyalzy",
    "Welzy Alzy",
    "mohammed",
    "benkhattab",
    "benkhattab.tech",
    "www.benkhattab.tech",
  ],
  authors: {
    name: "Mohammed Benkhattab",
    url: "https://www.benkhattab.tech",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: "Mohammed Benkhattab | Personal Portfolio",
    creator: "@AlzyWelzy",
    site: "@AlzyWelzy",
    description:
      "Innovative Full Stack Developer with a Proven Track Record in Building Scalable Web Applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${quicksand.className} bg-background text-foreground relative pt-28 sm:pt-36 dark:text-opacity-90`}
      >
        <div className="bg-primary absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[8rem] sm:w-[50rem]"></div>
        <div className="bg-secondary absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[8rem] sm:w-[50rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
