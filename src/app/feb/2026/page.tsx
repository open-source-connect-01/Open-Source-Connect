"use client";

import EventLandingPage from "@/components/EventLandingPage";
import type { EventLandingData } from "@/components/EventLandingPage";

const eventData: EventLandingData = {
  edition: "Second Edition",
  title: "Open Source Connect Global 2026",
  subtitle:
    "The global open source contribution program and conference connecting developers, maintainers, builders, and industry leaders to shape the future of open source.",
  dateRange: "February 5-25, 2026",
  location: "Online · Virtual",
  stats: [
    { value: 10, suffix: "K+", label: "Participants" },
    { value: 50, suffix: "+", label: "Projects Submitted" },
    { value: 100, suffix: "+", label: "Speakers & Mentors" },
    { value: 30, suffix: "+", label: "Cities Represented" },
  ],
  aboutHeading: "Connecting the World Through Open Source Innovation",
  aboutParagraphs: [
    "Open Source Connect Global 2026 is a global open source contribution program and conference bringing together developers, students, contributors, maintainers, startups, and industry leaders from around the world to learn, collaborate, build, and contribute to open source.",
    "The event creates a global platform to discover meaningful open source projects, make real contributions, learn from experienced developers and industry experts, and connect with a diverse community shaping the future of technology.",
  ],
  aboutBullets: [
    "Global open source projects and real contribution opportunities",
    "Talks from developers, maintainers, and industry leaders",
    "Hands-on workshops and technical sessions",
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
  ],
  scheduleTag: "Opening Summit",
  scheduleTitle: "Schedule 2025",
  scheduleMeta: "AUG 15-30, 2025 • 16 DAYS • 8 SESSIONS",
  scheduleItems: [
    { time: "10:00 AM", date: "Aug 15", weekday: "Friday", title: "Opening Session: The Future of Open Source in India", speaker: "Arjun Mehra" },
    { time: "6:30 PM", date: "Aug 16", weekday: "Sunday", title: "Your First Open Source Contribution: From Issue to Pull Request", speaker: "Kavya Nair" },
    { time: "6:00 PM", date: "Aug 19", weekday: "Tuesday", title: "Building AI Products with Open Source Models", speaker: "Rohan Iyer" },
    { time: "7:00 PM", date: "Aug 20", weekday: "Friday", title: "Open Source as a Career: From Contributor to Maintainer", speaker: "Neha Kulkarni" },
    { time: "11:00 AM", date: "Aug 24", weekday: "Sunday", title: "Scaling Open Source Projects: Architecture, Communities & Governance", speaker: "Aditya Menon" },
    { time: "6:00 PM", date: "Aug 26", weekday: "Tuesday", title: "Open Source + Cloud: Building and Deploying Modern Applications", speaker: "Priya Sharma" },
    { time: "5:30 PM", date: "Aug 28", weekday: "Thursday", title: "Community Builders: Growing Developer Communities That Last", speaker: "Rahul Deshmukh" },
    { time: "6:00 PM", date: "Aug 30", weekday: "Saturday", title: "Closing Session: What's Next for India's Open Source Ecosystem?", speaker: "Siddharth Rao" },
  ],
};

export default function Feb2026Page() {
  return <EventLandingPage data={eventData} />;
}
