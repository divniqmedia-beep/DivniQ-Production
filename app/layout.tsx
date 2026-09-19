import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DIVNIQ PRODUCTIONS | Where Stories Take Flight",
  description:
    "Divniq Productions is a cinematic creative studio crafting brand films, motion, and visual stories that take flight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <Navbar />
        <div className="site-shell">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
