import type { Metadata } from "next";

import PoliticalPageContent from "@/components/political/PoliticalPageContent";

export const metadata: Metadata = {
  title: "Political Media | DIVNIQ PRODUCTIONS",
  description:
    "From the ground to the screen — campaign coverage, same-day edit, and the DivniQ political production model.",
};

export default function PoliticalMediaPage() {
  return <PoliticalPageContent />;
}
