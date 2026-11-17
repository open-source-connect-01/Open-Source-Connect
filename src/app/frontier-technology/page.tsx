"use client";

import InitiativePageLayout, { InitiativeStep } from "@/components/InitiativePageLayout";

const ACCENT = "#38BDF8";

const steps: InitiativeStep[] = [
  {
    step: 1,
    tag: "WHAT'S NEXT",
    title: "Exploring What Comes Next",
    description:
      "Technology is constantly evolving, and new possibilities are emerging every day. Open Source Connect brings developers, researchers, students, and technologists together to explore emerging technologies, experiment with new ideas, and shape what comes next in the world of technology.",
    image: "/what-we-do/frontier-technology-1.webp",
    imagePosition: "left",
  },
  {
    step: 2,
    tag: "EXPERIMENTATION",
    title: "Experimentation Over Prediction",
    description:
      "The future of technology is shaped by people who are willing to explore, experiment, and iterate. Open Source Connect creates opportunities for developers, students, and innovators to explore emerging technologies through hands-on experimentation and rapid prototyping. Rather than waiting for perfect answers, we encourage communities to test ideas early, learn quickly, and experiment into meaningful progress.",
    image: "/what-we-do/frontier-technology-2.webp",
    imagePosition: "right",
  },
  {
    step: 3,
    tag: "CONNECTIVITY",
    title: "Connecting Emerging Technologies",
    description:
      "Innovation often happens where different technologies come together. Open Source Connect brings developers, researchers, and technologists into technology communities to explore intersections — how AI and robotics, IoT and connectivity, computing, cybersecurity, and other emerging technologies can connect multiple technologies.",
    image: "/what-we-do/frontier-technology-3.webp",
    imagePosition: "left",
  },
  {
    step: 4,
    tag: "CROSS-INDUSTRY",
    title: "Creating Cross-Industry Possibilities",
    description:
      "Open Source Connect brings together researchers, developers, and communities with opportunities to explore new tools, experiment with new ideas, and build technology across industries. From healthcare, finance, mobility, and sustainability to creative industries, we encourage builders to collaborate openly, share tools, and build technology that expands into new possibilities.",
    image: "/what-we-do/frontier-technology-4.webp",
    imagePosition: "right",
  },
];

export default function FrontierTechnologyPage() {
  return (
    <InitiativePageLayout
      breadcrumbLabel="FRONTIER TECHNOLOGY"
      badgeLabel="AN EMERGING INITIATIVE"
      title="Frontier Technology"
      heroGradientClass="from-[#03060F] via-[#060C1F] to-[#0A1533]"
      accentColor={ACCENT}
      accentTextClass="text-[#38BDF8]"
      steps={steps}
      prevLink={{ label: "Open Hardware & Robotics", href: "/open-hardware-robotics" }}
    />
  );
}
