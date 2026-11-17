"use client";

import InitiativePageLayout, { InitiativeStep } from "@/components/InitiativePageLayout";

const ACCENT = "#14B8A6";

const steps: InitiativeStep[] = [
  {
    step: 1,
    tag: "OPEN HARDWARE",
    title: "Making Hardware More Open",
    description:
      "Technology goes beyond software. Robotics, embedded systems, IoT, sensors, and connected devices are shaping how we interact with the physical world. Open Source Connect brings developers, engineers, students, researchers, and makers together to collaborate, experiment, and build open hardware projects that can be shared, improved, and used by communities around the world.",
    image: "/what-we-do/open-hardware-robotics-1.webp",
    imagePosition: "left",
  },
  {
    step: 2,
    tag: "ROBOTICS",
    title: "Supporting Open Robotics",
    description:
      "Open Source Connect supports the growing robotics ecosystem by bringing together developers, researchers, students, and makers to explore robotics and open hardware. Through workshops, hackathons, technical challenges, and community initiatives, we create opportunities to experiment, collaborate, and build practical robotic solutions for real-world challenges.",
    image: "/what-we-do/open-hardware-robotics-2.webp",
    imagePosition: "right",
  },
  {
    step: 3,
    tag: "ACCESSIBILITY",
    title: "Building Accessible Hardware",
    description:
      "Open Source Connect believes hardware innovation should be accessible to everyone. Through open collaboration, we connect students, developers, makers, and engineering communities with the knowledge, tools, and opportunities to explore, build, modify, and share hardware solutions that solve real problems.",
    image: "/what-we-do/open-hardware-robotics-3.webp",
    imagePosition: "left",
  },
];

export default function OpenHardwareRoboticsPage() {
  return (
    <InitiativePageLayout
      breadcrumbLabel="OPEN HARDWARE & ROBOTICS"
      badgeLabel="A CORE INITIATIVE"
      title="Open Hardware & Robotics"
      heroGradientClass="from-[#04140F] via-[#06251B] to-[#0B3B2C]"
      accentColor={ACCENT}
      accentTextClass="text-[#14B8A6]"
      steps={steps}
      prevLink={{ label: "AI & Research Initiatives", href: "/ai-research-initiatives" }}
      nextLink={{ label: "Frontier Technology", href: "/frontier-technology" }}
    />
  );
}
