import type { Metadata } from "next";
import PartnersPageClient from "@/components/PartnersPageClient";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
  description:
    "We collaborate with organizations, startups, universities, and technology companies to create meaningful opportunities for developers and accelerate open source innovation.",
};

export default function SponsorsPage() {
  return <PartnersPageClient />;
}
