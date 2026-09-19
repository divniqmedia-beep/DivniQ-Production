import type { Metadata } from "next";

import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About | DIVNIQ PRODUCTIONS",
  description:
    "About DivniQ Productions — vision, mission, and the studio behind Where Stories Take Flight.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
