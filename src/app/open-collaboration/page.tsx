"use client";

import InitiativePageLayout, { InitiativeStep } from "@/components/InitiativePageLayout";

const ACCENT = "#F97316";

const steps: InitiativeStep[] = [
  {
    step: 1,
    tag: "OPENNESS",
    title: "Building Through Openness",
    description:
      "Open Source Connect brings students, researchers, founders, and technology communities together to learn, contribute, collaborate, and build open source. We create opportunities to share knowledge, contribute to meaningful projects, exchange ideas, and connect with people shaping the future of technology.",
    image: "/what-we-do/open-collaboration-1.webp",
    imagePosition: "left",
  },
  {
    step: 2,
    tag: "ACCESSIBILITY",
    title: "Making Contribution More Accessible",
    description:
      "Open Source Connect makes it easier for anyone to discuss, learn, and contribute to open source. Through community programs, workshops, hackathons, mentorship, and contribution initiatives, we connect developers and beginners with real projects, experienced contributors, and opportunities to build practical skills while making meaningful contributions.",
    image: "/what-we-do/open-collaboration-2.webp",
    imagePosition: "right",
  },
  {
    step: 3,
    tag: "GROWTH",
    title: "Building the Next Generation of Contributors",
    description:
      "Open Source Connect empowers students and emerging developers to learn, contribute, and grow through open source. We connect them with real projects, experienced contributors, mentors, and communities, helping them gain practical experience, build strong portfolios, and develop the skills and confidence needed to create meaningful opportunities in technology.",
    image: "/what-we-do/open-collaboration-3.webp",
    imagePosition: "left",
  },
];

export default function OpenCollaborationPage() {
  return (
    <InitiativePageLayout
      breadcrumbLabel="OPEN COLLABORATION"
      badgeLabel="A CORE INITIATIVE"
      title="Open Collaboration"
      heroGradientClass="from-[#0A1330] via-[#0F1E45] to-[#16265A]"
      accentColor={ACCENT}
      accentTextClass="text-[#F97316]"
      steps={steps}
      nextLink={{ label: "AI & Research Initiatives", href: "/ai-research-initiatives" }}
    />
  );
}
