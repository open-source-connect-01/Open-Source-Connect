"use client";

import InitiativePageLayout, { InitiativeStep } from "@/components/InitiativePageLayout";

const ACCENT = "#8B5CF6";

const steps: InitiativeStep[] = [
  {
    step: 1,
    tag: "AI INNOVATION",
    title: "Advancing Open AI Innovation",
    description:
      "Open Source Connect brings developers, researchers, students, startups, and communities to explore the possibilities of artificial intelligence. Through open collaboration, hands-on experimentation, and knowledge sharing, we help people learn, build, and contribute to the next generation of AI technologies.",
    image: "/what-we-do/ai-research-initiatives-1.webp",
    imagePosition: "left",
  },
  {
    step: 2,
    tag: "SHARED RESEARCH",
    title: "Open Research for a Shared Future",
    description:
      "Open Source Connect believes research becomes more impactful when knowledge is shared openly. We bring researchers, developers, students, and technology communities together to exchange ideas, explore new technologies, and contribute to open research initiatives that benefit everyone.",
    image: "/what-we-do/ai-research-initiatives-2.webp",
    imagePosition: "right",
  },
  {
    step: 3,
    tag: "COLLABORATION",
    title: "Connecting Researchers and Builders",
    description:
      "Open Source Connect brings together researchers, developers, engineers, and founders to turn ideas into practical innovation. Through open collaboration, technical discussions, workshops, challenges, and community-driven projects, we connect people to experiment, share knowledge, and build solutions that move research from ideas into real-world applications.",
    image: "/what-we-do/ai-research-initiatives-3.webp",
    imagePosition: "left",
  },
];

export default function AiResearchInitiativesPage() {
  return (
    <InitiativePageLayout
      breadcrumbLabel="AI & RESEARCH INITIATIVES"
      badgeLabel="A RESEARCH INITIATIVE"
      title="AI & Research Initiatives"
      heroGradientClass="from-[#1C1140] via-[#2A1868] to-[#3B2088]"
      accentColor={ACCENT}
      accentTextClass="text-[#8B5CF6]"
      steps={steps}
      prevLink={{ label: "Open Collaboration", href: "/open-collaboration" }}
      nextLink={{ label: "Open Hardware & Robotics", href: "/open-hardware-robotics" }}
    />
  );
}
