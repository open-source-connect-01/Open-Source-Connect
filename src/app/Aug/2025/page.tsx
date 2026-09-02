"use client";

import EventLandingPage from "@/components/EventLandingPage";
import type { EventLandingData } from "@/components/EventLandingPage";

const eventData: EventLandingData = {
  edition: "First Edition",
  title: "Open Source Connect India 2025",
  subtitle:
    "India's flagship open source conference — three days of keynotes, workshops, hackathons, and community connection across South Asia.",
  dateRange: "15th - 30th August, 2025",
  location: "Online · Virtual",
  stats: [
    { value: 10, suffix: "K+", label: "Participants" },
    { value: 50, suffix: "+", label: "Projects Submitted" },
    { value: 100, suffix: "+", label: "Speakers & Mentors" },
    { value: 30, suffix: "+", label: "Cities Represented" },
  ],
  aboutHeading: "Driving Open Source Innovation Across India",
  aboutParagraphs: [
    "Open Source Connect India 2025 brings together developers, students, contributors, maintainers, startups, and technology communities to explore ideas, build solutions, and contribute to the future of open source.",
    "The event creates a collaborative environment where participants can learn from experienced builders, work on meaningful projects, discover emerging technologies, and turn open source ideas into practical innovation.",
  ],
  aboutBullets: [
    "Open source innovation and real-world projects",
    "Talks from developers, researchers, and industry leaders",
    "Hands-on contribution and technical workshops",
    "Mentorship, networking, and community connections",
  ],
  speakersHeading: "Speakers 2025",
  speakers: [
    { name: "Sebastiano Fuccio", role: "Founder & CEO | Managing Partner", photo: "/leaders/sebastiano_fuccio_v3.png" },
    { name: "Chikahiro Tokoro", role: "Software Engineer, Podcaster", photo: "/leaders/chikahiro_tokoro_v3.png" },
    { name: "Kamesh Sampath", role: "Developer Advocate at Snowflake", photo: "/leaders/kamesh_sampath_v3.png" },
    { name: "Dishant Gandhi", role: "AI/ML Consultant", photo: "/leaders/dishant_gandhi_v3.png" },
    { name: "Olena Yara", role: "Founder at Yara Agency", photo: "/leaders/olena_yara_v3.png" },
    { name: "Nithin S.S", role: "Open Standards @ IBM", photo: "/leaders/nithin_ss.jpg" },
    { name: "James Wilson", role: "Cloud Infrastructure Lead", photo: "/leaders/james_wilson.jpg" },
    { name: "Amara Okafor", role: "Strategic Partnerships", photo: "/leaders/amara_okafor.jpg" },
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

export default function Aug2025Page() {
  return <EventLandingPage data={eventData} />;
}
