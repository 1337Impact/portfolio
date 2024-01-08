import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NextThemeProvider from "./NextThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed Benkhattab",
  description: "Mohammed Benkhattab personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-gray-200 dark:bg-gray-200`}
      >
        <NextThemeProvider>
          <div className="relative min-h-screen overflow-x-hidden font-manrope font-normal">
            <Navbar />
            {children}
            <Footer />
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
