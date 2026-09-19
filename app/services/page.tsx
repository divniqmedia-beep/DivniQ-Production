import type { Metadata } from "next";

import ServiceDirectory from "@/components/services/ServiceDirectory";

export const metadata: Metadata = {
  title: "Services | DIVNIQ PRODUCTIONS",
  description:
    "Film & video, photography, reels, political, events, digital, and specialized production — the DivniQ directory.",
};

export default function ServicesPage() {
  return <ServiceDirectory />;
}
