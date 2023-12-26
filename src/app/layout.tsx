import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
        className={`${inter.className} bg-gray-100 dark:bg-gray-800`}
      >
        <div className="min-h-screen relative font-manrope font-normal overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
