"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileModal from "./ProfileModal";
import type { ProfileData } from "./ProfileModal";

export function getSpeakerSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const teamMembers: (ProfileData & {
  cardRole: string;
  photo: string;
  eventTag?: string;
  eventLink?: string;
})[] = [
  {
    name: "Sebastiano Fuccio",
    slug: "sebastiano-fuccio",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Founder & CEO | Managing Partner",
    role: "Founder & CEO | Managing Partner",
    org: "AlpGuard",
    badge: "Keynote Speaker",
    photo: "/leaders/sebastiano_fuccio_v3.png",
    bioParagraphs: [
      "Sebastiano Fuccio is an AI strategist, entrepreneur, and digital transformation leader with over 30 years of experience across emerging technologies, enterprise innovation, and AI governance.",
      "His work focuses on AI strategy, sovereign innovation, digital transformation, and compliance, while building AlpGuard and advising organizations on responsible AI adoption, governance, and sustainable business outcomes.",
    ],
    sessionTopic: "AI for the open-source community",
    tags: ["AI Strategy", "Digital Transformation", "AI Governance"],
  },
  {
    name: "Olena Yara",
    slug: "olena-yara",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Founder & Marketing Expert",
    role: "Founder & Marketing Expert",
    org: "Yara Agency",
    badge: "Keynote Speaker",
    photo: "/leaders/olena_yara_v3.png",
    bioParagraphs: [
      "Olena Yara is a marketing expert and founder of Yara Agency, working at the intersection of digital art, technology, and global communities.",
      "Her work focuses on marketing, curation, and strategic partnerships, helping artists, institutions, and companies amplify their work while connecting creativity, technology, and community through storytelling and collaboration.",
    ],
    sessionTopic: "Building a strong brand in the open-source ecosystem",
    tags: ["Marketing Strategy", "Digital Art", "Strategic Partnerships", "Storytelling"],
  },
  {
    name: "Chikahiro Tokoro",
    slug: "chikahiro-tokoro",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Software Engineer, Podcaster",
    role: "Software Engineer, Podcaster",
    org: "OSS Developer / Public Speaker",
    badge: "Keynote Speaker",
    photo: "/leaders/chikahiro_tokoro_v3.png",
    bioParagraphs: [
      "Chikahiro Tokoro is a software engineer, podcaster, and public speaker with over 15 years of experience building and scaling impactful products across successful startups in Japan and Germany.",
      "His work focuses on software engineering, product development, open source, and sharing practical insights on software design while connecting global communities through his podcast and speaking engagements.",
    ],
    sessionTopic: "Strategy for finding a problem for OSS: With a real example – Generating Anonymized Database",
    tags: ["Software Engineering", "Product Development", "Open Source", "Public Speaker"],
  },
  {
    name: "Ekaterina Maevskaia",
    slug: "ekaterina-maevskaia",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Revenue Growth Leader",
    role: "Revenue Growth Leader",
    org: "Snap Inc. & TikTok",
    badge: "Keynote Speaker",
    photo: "/leaders/ekaterina_maevskaia.png",
    bioParagraphs: [
      "Ekaterina Maevskaia is a distinguished revenue growth leader focused on scaling multimillion dollar advertising portfolios, driving end to end go to market strategies, and transforming regional ecosystems across CEE and EMEA. Her work combines commercial strategy, business growth, and ecosystem development to create sustainable impact across markets.",
      "She engages with global technology networks through high impact commercial integrations, keynote presentations at conferences with 21,000+ attendees, and nonprofit community building. Her experience spans revenue growth, strategic partnerships, and building meaningful connections across the global technology ecosystem.",
    ],
    sessionTopic: "The creative QA gate: filtering assets before they burn your budget",
    tags: ["Revenue Growth", "Go-to-Market Strategy", "Strategic Partnerships", "Ecosystem Development"],
  },
  {
    name: "Kamesh Sampath",
    slug: "kamesh-sampath",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Developer Advocate at Snowflake",
    role: "Developer Advocate",
    org: "Snowflake",
    badge: "Keynote Speaker",
    photo: "/leaders/kamesh_sampath_v3.png",
    bioParagraphs: [
      "Kamesh Sampath is a Developer Advocate at Snowflake, author, and long time open source contributor with over two decades of experience in enterprise software and developer communities.",
      "His work focuses on cloud, data, and AI, helping developers turn complex technologies into real world solutions through advocacy, community building, storytelling, and knowledge sharing.",
    ],
    sessionTopic: "From milliseconds to insights: real-time PostgreSQL + CDC architecture for spatial analytics and AI in an AI data cloud",
    tags: ["Developer Advocacy", "Cloud & Data", "AI", "Open Source"],
  },
  {
    name: "Kateryna Tertiienko",
    slug: "kateryna-tertiienko",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Technical Lead",
    role: "Technical Lead",
    org: "Infonetica",
    badge: "Keynote Speaker",
    photo: "/leaders/kateryna_tertiienko.png",
    bioParagraphs: [
      "Kateryna Tertiienko is a technology leader and self-learner with around 20 years of experience across software engineering, diverse products, and engineering cultures in Ukraine, South Africa, and the UK.",
      "Her work focuses on technology leadership, software engineering, and building effective teams, with experience across multiple programming languages and frameworks.",
    ],
    sessionTopic: {
      title: "Engineering Culture & Technical Leadership Across Distributed Teams",
      description: "Strategies for leading high-performing engineering teams, navigating architectural challenges, and cultivating learning cultures in modern tech organizations.",
    },
    tags: ["Technology Leadership", "Software Engineering", "Team Building", "Engineering Culture"],
  },
  {
    name: "Dishant Gandhi",
    slug: "dishant-gandhi",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "AI/ML Consultant & Public Speaker",
    role: "AI/ML Consultant & Public Speaker",
    org: "Ruffalo Noel Levitz",
    badge: "Keynote Speaker",
    photo: "/leaders/dishant_gandhi_v3.png",
    bioParagraphs: [
      "Dishant Gandhi is an AI/ML Consultant with over 6 years of experience specializing in Generative AI, Conversational AI, and Large Language Models. He has built scalable chatbots, RAG pipelines, web applications, and AI powered widgets using technologies such as LangChain, Streamlit, and Kubernetes.",
      "With 25+ speaking sessions at global conferences, Dishant is known for simplifying complex AI concepts, driving innovation, and mentoring aspiring technologists to build impactful AI solutions.",
    ],
    sessionTopic: "Unlocking on-device intelligence with Small Language Models",
    tags: ["Generative AI", "LLMs", "Conversational AI", "RAG Pipelines"],
  },
  {
    name: "Nithin S.S",
    slug: "nithin-ss",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Founder & Leadership Strategist",
    role: "Founder & Leadership Strategist",
    org: "Synapse QA",
    badge: "Keynote Speaker",
    photo: "/leaders/nithin_ss.jpg",
    bioParagraphs: [
      "Nithin is a Software Engineering leader with over a decade of experience in Quality Engineering and team building. He is Head of QA at Lodgify and founder of Synapse QA, a community focused on accessible quality learning across Southeast Asia.",
      "He is also an international speaker, consultant, author of the Now to Next newsletter, and career coach who has guided over 200 professionals in their career growth.",
    ],
    sessionTopic: "My learning from the community: No one is an island",
    tags: ["Software Engineering", "Quality Engineering", "Leadership Strategy", "Career Coaching"],
  },
];

export function getSpeakerBySlug(slug: string) {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
  return teamMembers.find((member) => {
    const memberSlug = (member.slug || getSpeakerSlug(member.name))
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    return memberSlug === normalized;
  });
}

export default function ResearchLeadershipSection({
  selectedProfile: externalSelectedProfile,
  onProfileSelect: externalOnProfileSelect,
  onProfileClose: externalOnProfileClose,
  hideFooter = false,
}: {
  selectedProfile?: ProfileData | null;
  onProfileSelect?: (profile: ProfileData) => void;
  onProfileClose?: () => void;
  hideFooter?: boolean;
}) {
  const [activeTab, setActiveTab] = useState<"speakers" | "mentors">("speakers");
  const [mentorNotifyEmail, setMentorNotifyEmail] = useState("");
  const [isMentorNotified, setIsMentorNotified] = useState(false);
  const [internalProfile, setInternalProfile] = useState<ProfileData | null>(null);

  // Use external state (from AboutOverlay) if provided, otherwise internal
  const selectedProfile =
    externalSelectedProfile !== undefined ? externalSelectedProfile : internalProfile;
  const onProfileSelect = externalOnProfileSelect || setInternalProfile;
  const onProfileClose =
    externalOnProfileClose || (() => setInternalProfile(null));

  // Standalone mode (events page) — render modal internally; AboutOverlay handles it externally
  const isStandalone = externalSelectedProfile === undefined;

  return (
    <>
      {/* ===== Community Experts ===== */}
      <section id="research-leadership" className="w-full bg-white py-12 lg:py-16">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0B0F1A] tracking-tight">
              Community Experts
            </h1>
            <p className="max-w-3xl text-sm sm:text-base text-gray-500 leading-relaxed mt-3">
              Meet our speakers and mentors from leading technology companies who share their experience through technical talks, workshops, mentoring, and career guidance.
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("speakers")}
              className={`px-6 py-2.5 text-xs font-extrabold tracking-[0.12em] uppercase transition-colors duration-200 rounded-[2px] ${
                activeTab === "speakers"
                  ? "bg-[#0F172A] text-white"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-slate-200"
              }`}
            >
              SPEAKERS
            </button>
            <button
              onClick={() => setActiveTab("mentors")}
              className={`px-6 py-2.5 text-xs font-extrabold tracking-[0.12em] uppercase transition-colors duration-200 rounded-[2px] ${
                activeTab === "mentors"
                  ? "bg-[#0F172A] text-white"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-slate-200"
              }`}
            >
              MENTORS
            </button>
          </div>

          {/* 4-Column Leadership Team Grid */}
          {activeTab === "speakers" ? (
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  onClick={() =>
                    onProfileSelect({
                      name: member.name,
                      role: member.role,
                      org: member.org,
                      badge: member.badge,
                      photo: member.photo,
                      bioParagraphs: member.bioParagraphs,
                      tags: member.tags,
                      sessionTopic: member.sessionTopic,
                      slug: member.slug || getSpeakerSlug(member.name),
                    })
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onProfileSelect({
                        name: member.name,
                        role: member.role,
                        org: member.org,
                        badge: member.badge,
                        photo: member.photo,
                        bioParagraphs: member.bioParagraphs,
                        tags: member.tags,
                        sessionTopic: member.sessionTopic,
                        slug: member.slug || getSpeakerSlug(member.name),
                      });
                    }
                  }}
                  className="flex flex-col group overflow-hidden bg-[#0A1835] text-left cursor-pointer border-0 outline-none ring-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {/* Full Photo container */}
                  <div className="relative aspect-[4/4.8] w-full bg-[#E2E8F0] overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Blue Caption Section below photo */}
                  <div className="bg-[#0A1835] px-4 py-3.5 flex flex-col justify-center w-full">
                    {/* Event Tag */}
                    <Link
                      href={member.eventLink || "/Feb/2026"}
                      onClick={(e) => e.stopPropagation()}
                      className="group/tag inline-flex items-center gap-1.5 mb-1.5 w-fit z-10 cursor-pointer"
                    >
                      <span className="w-[2px] h-[10px] bg-[#2563EB] group-hover/tag:bg-[#60A5FA] shrink-0 inline-block transition-colors" />
                      <span className="text-[10px] font-bold text-[#60A5FA] group-hover/tag:text-[#93C5FD] group-hover/tag:underline tracking-[0.06em] uppercase leading-none truncate transition-colors">
                        {member.eventTag || "OSC GLOBAL 2026"}
                      </span>
                    </Link>

                    <span className="text-[14px] font-bold text-white tracking-normal leading-tight truncate">
                      {member.name}
                    </span>
                    <span className="text-[11px] font-medium text-[#94A3B8] tracking-normal mt-1 leading-snug truncate">
                      {member.cardRole}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ===== COMING SOON / UNDER DEVELOPMENT STATE FOR MENTORS ===== */
            <div className="max-w-[720px] mx-auto py-12 sm:py-16 text-center flex flex-col items-center">
              {/* Top Badge: UNDER DEVELOPMENT */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gray-200 bg-white rounded-[2px] shadow-xs mb-8">
                <span className="w-2 h-2 rounded-full bg-[#EA580C] shrink-0" />
                <span className="text-[11px] font-bold tracking-[0.18em] text-[#C2410C] uppercase">
                  UNDER DEVELOPMENT
                </span>
              </div>

              {/* Headline: Coming Soon */}
              <h2 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.05] text-[#0B132B] mb-5">
                Coming <span className="font-serif italic font-normal text-[#274887]">Soon</span>
              </h2>

              {/* Subtitle */}
              <p className="text-[15px] sm:text-base text-slate-600 font-normal max-w-[540px] leading-relaxed mb-8">
                We are working hard to bring you something extraordinary. This page is currently being built and will be available shortly.
              </p>

              {/* Email Notify Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (mentorNotifyEmail.trim()) {
                    setIsMentorNotified(true);
                    setMentorNotifyEmail("");
                  }
                }}
                className="w-full max-w-[480px] mb-6"
              >
                <div className="flex flex-col sm:flex-row items-stretch border border-gray-200 rounded-[2px] overflow-hidden bg-white shadow-xs focus-within:border-accent-blue transition-colors">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={mentorNotifyEmail}
                    onChange={(e) => setMentorNotifyEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3.5 text-xs sm:text-sm text-slate-800 placeholder-gray-400 bg-slate-50/50 sm:bg-white outline-none"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3.5 bg-[#0B132B] hover:bg-[#15234A] text-white text-xs font-extrabold tracking-[0.14em] uppercase transition-colors shrink-0 whitespace-nowrap cursor-pointer"
                  >
                    NOTIFY ME
                  </button>
                </div>
                {isMentorNotified && (
                  <p className="text-xs text-emerald-600 font-semibold mt-2">
                    Thank you! We&apos;ll notify you when mentor profiles go live.
                  </p>
                )}
              </form>

              {/* Back to Home Link */}
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:underline mb-8"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <span>Back to Home</span>
              </Link>

              {/* 5 Color Palette Swatches */}
              <div className="flex items-center justify-center gap-2">
                <span className="w-3 h-3 rounded-[2px] bg-[#B3C5EA]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#FDBA74]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#FDE047]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#4ADE80]" />
                <span className="w-3 h-3 rounded-[2px] bg-[#A855F7]" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== FOOTER SECTION ===== */}
      {!hideFooter && (
        <>
          <div className="w-full h-[4px] bg-[#F59E0B]" />
          <footer className="w-full bg-[#0A101D] text-slate-400 text-xs pt-12 pb-8">
            <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-10">
                {/* Brand Column */}
                <div>
                  <Image
                    src="/logo.png"
                    alt="Open Source Connect"
                    width={160}
                    height={40}
                    className="h-8 w-auto object-contain brightness-0 invert mb-4 -ml-1.5"
                  />
                  <p className="text-[12px] text-slate-400 leading-relaxed max-w-[240px] mb-4">
                    Bringing developers, communities, and organizations
                    together to shape the future through open source.
                  </p>
                  {/* Social icons */}
                  <div className="flex items-center gap-3">
                    <Link
                      href="#"
                      aria-label="GitHub"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      aria-label="LinkedIn"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* ORGANIZATION */}
                <div>
                  <h3 className="text-white text-[11px] font-extrabold tracking-[0.15em] uppercase mb-4">
                    ORGANIZATION
                  </h3>
                  <ul className="space-y-2.5 text-[12px]">
                    {[
                      { label: "About OSC", href: "/about" },
                      { label: "Meet the Team", href: "/about" },
                      { label: "Speakers & Mentors", href: "/speakers-and-mentors" },
                      { label: "Partners", href: "/about" },
                    ].map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className="hover:text-white transition-colors">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PROGRAMS */}
                <div>
                  <h3 className="text-white text-[11px] font-extrabold tracking-[0.15em] uppercase mb-4">
                    PROGRAMS
                  </h3>
                  <ul className="space-y-2.5 text-[12px]">
                    {[
                      { label: "Open Source Connect India", href: "/events" },
                      { label: "Open Source Connect Global", href: "#" },
                      { label: "Hackathons", href: "https://ai-builders-hackathon-2026.devpost.com/" },
                      { label: "Workshops & Tech Talks", href: "#" },
                    ].map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="hover:text-white transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SUPPORT */}
                <div>
                  <h3 className="text-white text-[11px] font-extrabold tracking-[0.15em] uppercase mb-4">
                    SUPPORT
                  </h3>
                  <ul className="space-y-2.5 text-[12px]">
                    {[
                      { label: "Donate", href: "https://ko-fi.com/opensourceconnect" },
                      { label: "Join the Community", href: "https://discord.gg/umEXASsAev" },
                      { label: "Newsletter", href: "#" },
                      { label: "Contact Us", href: "mailto:conduct@oscfoundation.org" },
                    ].map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className="hover:text-white transition-colors">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom legal line */}
              <div className="border-t border-[#1E293B] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] text-slate-500 font-medium text-center sm:text-left">
                <div>
                  &copy; 2026 Open Source Connect Community. All rights reserved.
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-slate-400">
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                  <Link href="/code-of-conduct" className="hover:text-white transition-colors">
                    Code of Conduct
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* Profile Modal */}
      {isStandalone && (
        <ProfileModal profile={selectedProfile} onClose={onProfileClose} />
      )}
    </>
  );
}
