"use client";

import EventLandingPage from "@/components/EventLandingPage";
import type { EventLandingData } from "@/components/EventLandingPage";

const eventData: EventLandingData = {
  edition: "Second Edition",
  title: "Open Source Connect Global 2026",
  subtitle:
    "The global open source conference bringing together developers, contributors, maintainers, and communities to collaborate, share knowledge, and shape the future of open source. ",
  dateRange: "December 15, 2025 - February 25, 2026",
  location: "Online · Virtual",
  stats: [
    { value: 10, suffix: "K+", label: "Participants" },
    { value: 50, suffix: "+", label: "Projects Submitted" },
    { value: 100, suffix: "+", label: "Speakers & Mentors" },
    { value: 30, suffix: "+", label: "Cities Represented" },
  ],
  aboutHeading: "Connecting the World Through Open Source Innovation",
  aboutParagraphs: [
    "Open Source Connect Global 2026 is a global open source conference bringing together developers, students, contributors, maintainers, startups, and industry leaders from around the world to learn, collaborate, build, and connect.",
    "The event creates a global platform to discover the latest developments in open source, learn from experienced developers and industry experts, and connect with a diverse community shaping the future of technology.",
  ],
  aboutBullets: [
    "Talks from developers, maintainers, and industry leaders",
    "Hands-on workshops and technical sessions",
    "Discussions on open source, AI, startups, and emerging technologies",
    "Mentorship, networking, and global industry connections",
  ],
  speakersHeading: "Speakers 2026",
  speakers: [
    { name: "Sebastiano Fuccio", role: "Founder & CEO | Managing Partner", photo: "/leaders/sebastiano_fuccio_v3.png" },
    { name: "Olena Yara", role: "Founder & Marketing Expert", photo: "/leaders/olena_yara_v3.png" },
    { name: "Chikahiro Tokoro", role: "Software Engineer, Podcaster", photo: "/leaders/chikahiro_tokoro_v3.png" },
    { name: "Ekaterina Maevskaia", role: "Revenue Growth Leader", photo: "/leaders/ekaterina_maevskaia.png" },
    { name: "Kamesh Sampath", role: "Developer Advocate at Snowflake", photo: "/leaders/kamesh_sampath_v3.png" },
    { name: "Kateryna Tertiienko", role: "Technical Lead", photo: "/leaders/kateryna_tertiienko.png" },
    { name: "Dishant Gandhi", role: "AI/ML Consultant & Public Speaker", photo: "/leaders/dishant_gandhi_v3.png" },
    { name: "Nithin S.S", role: "Founder & Leadership Strategist", photo: "/leaders/nithin_ss.jpg" },
    { name: "Sergey Drymchenko", role: "Senior Android Developer", photo: "/leaders/sergey_drymchenko.png" },
    { name: "Muhammad Tahir Jilani", role: "Technical Lead", photo: "/leaders/muhammad_tahir_jilani.png" },
    { name: "Mayank Sehgal", role: "Senior Product Manager", photo: "/leaders/mayank_sehgal.png" },
  ],
  scheduleTag: "Opening Summit",
  scheduleTitle: "Schedule 2025 - 2026",
  scheduleMeta: "Dec 15, 2025 - Feb 25, 2026 • 73 DAYS • 13 SESSIONS",
  scheduleItems: [
    {
      time: "6:30 PM",
      date: "Dec 15, 2025",
      weekday: "Monday",
      title: "Opening Session: Open Source Connect Global 2026",
      speaker: "Open Source Connect Team",
    },
    {
      time: "7:00 PM",
      date: "Dec 20, 2025",
      weekday: "Saturday",
      title: "Your Next User Is a Coding Agent: Designing Open-Source APIs LLMs Can Use",
      speaker: "Sergey Drymchenko",
    },
    {
      time: "7:00 PM",
      date: "Dec 27, 2025",
      weekday: "Saturday",
      title: "AI for the Open-Source Community",
      speaker: "Sebastiano Fuccio",
    },
    {
      time: "6:30 PM",
      date: "Jan 3, 2026",
      weekday: "Saturday",
      title: "Building a Strong Brand in the Open-Source Ecosystem",
      speaker: "Olena Yara",
    },
    {
      time: "7:30 PM",
      date: "Jan 10, 2026",
      weekday: "Saturday",
      title: "Strategy for Finding a Problem for OSS: With a Real Example – Generating Anonymized Database",
      speaker: "Chikahiro Tokoro",
    },
    {
      time: "6:30 PM",
      date: "Jan 17, 2026",
      weekday: "Saturday",
      title: "The Creative QA Gate: Filtering Assets Before They Burn Your Budget",
      speaker: "Ekaterina Maevskaia",
    },
    {
      time: "7:00 PM",
      date: "Jan 24, 2026",
      weekday: "Saturday",
      title: "From Milliseconds to Insights: Real-Time PostgreSQL + CDC Architecture for Spatial Analytics and AI in an AI Data Cloud",
      speaker: "Kamesh Sampath",
    },
    {
      time: "6:00 PM",
      date: "Jan 31, 2026",
      weekday: "Saturday",
      title: "Owning Production: Why Engineers Should Embrace Operations and On-Call as Part of Product Development",
      speaker: "Kateryna Tertiienko",
    },
    {
      time: "7:00 PM",
      date: "Feb 7, 2026",
      weekday: "Saturday",
      title: "Unlocking On-Device Intelligence with Small Language Models",
      speaker: "Dishant Gandhi",
    },
    {
      time: "6:30 PM",
      date: "Feb 14, 2026",
      weekday: "Saturday",
      title: "Start Open, Graduate Deliberately: Building Physical AI Products on Open Source Models",
      speaker: "Mayank Sehgal",
    },
    {
      time: "7:00 PM",
      date: "Feb 18, 2026",
      weekday: "Wednesday",
      title: "Lessons from Building and Contributing to Mobile SDKs: API Design, Compatibility and Developer Experience",
      speaker: "Muhammad Tahir Jilani",
    },
    {
      time: "7:30 PM",
      date: "Feb 21, 2026",
      weekday: "Saturday",
      title: "My Learning from the Community: No One Is an Island",
      speaker: "Nithin S.S",
    },
    {
      time: "6:30 PM",
      date: "Feb 25, 2026",
      weekday: "Wednesday",
      title: "Closing Session: The Future of Open Source, AI & Developer Communities",
      speaker: "Open Source Connect Team",
    },
  ],
};

export default function Feb2026Page() {
  return <EventLandingPage data={eventData} />;
}
