"use client";

import Link from "next/link";
import Image from "next/image";

const whyItems = [
  {
    num: "01",
    title: "EMPOWER DEVELOPERS",
    desc: "Help students and developers gain hands-on experience through real open source projects, workshops, and hackathons.",
  },
  {
    num: "02",
    title: "BUILD GLOBAL COMMUNITIES",
    desc: "Support collaborations between contributors, maintainers, universities, startups, and technology organizations worldwide.",
  },
  {
    num: "03",
    title: "CREATE LASTING IMPACT",
    desc: "Your contribution helps keep participation free while enabling mentorship, contributor rewards, infrastructure, and community programs.",
  },
];

const footerLinks = [
  {
    heading: "ORGANIZATION",
    links: [
      { label: "About OSC", href: "/about" },
      { label: "Meet the Team", href: "#" },
      { label: "Speakers & Mentors", href: "/speakers-and-mentors" },
      { label: "Partners", href: "/about" },
    ],
  },
  {
    heading: "PROGRAMS",
    links: [
      { label: "Open Source Connect India", href: "https://luma.com/3u22sml7?tk=k1DFsQ" },
      { label: "Open Source Connect Global", href: "https://luma.com/vyb4bntj?tk=gLmY56" },
      { label: "Hackathons", href: "https://ai-builders-hackathon-2026.devpost.com/" },
      { label: "Workshops & Tech Talks", href: "#" },
    ],
  },
  {
    heading: "SUPPORT",
    links: [
      { label: "Donate", href: "https://ko-fi.com/opensourceconnect" },
      { label: "Join the Community", href: "https://discord.gg/umEXASsAev" },
      { label: "Newsletter", href: "#" },
      { label: "Contact Us", href: "mailto:hello@osconnect.org" },
    ],
  },
];

interface FooterSectionProps {
  hideTopSections?: boolean;
}

export default function FooterSection({
  hideTopSections = false,
}: FooterSectionProps) {
  return (
    <>
      {!hideTopSections && (
        <>
          {/* ===== MEMBERSHIP HERO ===== */}
          <section className="w-full bg-white">
            <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-2 gap-16 items-start">
                {/* Left */}
                <div>
                  <h1 className="text-[48px] font-extrabold text-navy-deep leading-[1.1] tracking-tight">
                    Support the Future of
                    <br />
                    Open Source
                  </h1>
                  <p className="mt-5 text-[15.5px] text-slate-600 font-medium leading-relaxed max-w-[440px]">
                    Your support helps us provide free learning opportunities,
                    reward contributors, organize world-class events, and make
                    open source accessible to everyone.
                  </p>

                  <div className="flex gap-12 mt-12 lg:mt-16">
                    <div className="pl-4 border-l-[3px] border-accent-orange">
                      <div className="text-[28px] font-extrabold text-navy-deep leading-none">
                        100K+
                      </div>
                      <div className="mt-1.5 text-[11px] font-bold tracking-[0.6px] text-gray-400 uppercase whitespace-nowrap">
                        PEOPLE REACHED
                      </div>
                    </div>
                    <div className="pl-4 border-l-[3px] border-accent-blue">
                      <div className="text-[28px] font-extrabold text-navy-deep leading-none">
                        300+
                      </div>
                      <div className="mt-1.5 text-[11px] font-bold tracking-[0.6px] text-gray-400 uppercase whitespace-nowrap">
                        PROJECTS & INITIATIVES
                      </div>
                    </div>
                  </div>

                  <Link
                    href="https://ko-fi.com/opensourceconnect"
                    target="_blank"
                    className="inline-flex items-center justify-center mt-12 lg:mt-16 h-[50px] px-7 bg-navy-deep text-white text-[12.5px] font-bold tracking-[0.5px] uppercase hover:bg-navy transition-all duration-200"
                  >
                    SUPPORT THE COMMUNITY
                  </Link>
                </div>

                {/* Right: Why Support Open Source Connect? card with offset shadow */}
                <div className="relative w-full">
                  {/* Soft light cream offset shadow block */}
                  <div className="absolute top-3 left-3 w-full h-full bg-[#FEF3C7] rounded-[2px] z-0" />
                  {/* Dark navy card */}
                  <div className="relative z-10 w-full bg-[#0D1527] p-8 sm:p-9 lg:p-10 rounded-[2px] text-white">
                    <div className="flex items-center gap-3.5 mb-8">
                      <div className="w-8 h-8 bg-white text-[#0D1527] font-bold text-lg flex items-center justify-center rounded-[2px] shrink-0">
                        ?
                      </div>
                      <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight">
                        Why Support Open Source Connect?
                      </h3>
                    </div>

                    <div className="space-y-7">
                      {whyItems.map((item) => (
                        <div key={item.num} className="flex gap-4">
                          <div className="flex-none w-7 h-7 bg-[#F59E0B] text-white text-xs font-bold rounded-[2px] flex items-center justify-center mt-0.5">
                            {item.num}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold tracking-[0.04em] text-[#F59E0B] uppercase mb-1.5">
                              {item.title}
                            </h4>
                            <p className="text-[13.5px] text-slate-300 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden space-y-8">
                {/* Support Section Header & Stats */}
                <div>
                  <h2 className="text-[32px] sm:text-[38px] font-extrabold text-navy-deep leading-[1.15] tracking-tight">
                    Support the Future of
                    <br />
                    Open Source
                  </h2>
                  <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-slate-600 font-medium leading-relaxed">
                    Your support helps us provide free learning opportunities,
                    reward contributors, organize world-class events, and make
                    open source accessible to everyone.
                  </p>

                  <div className="flex items-start gap-8 sm:gap-12 mt-7">
                    <div className="pl-4 border-l-[3px] border-accent-orange">
                      <div className="text-[26px] sm:text-[28px] font-extrabold text-navy-deep leading-none">
                        100K+
                      </div>
                      <div className="mt-1.5 text-[10.5px] sm:text-[11px] font-bold tracking-[0.6px] text-gray-400 uppercase whitespace-nowrap">
                        PEOPLE REACHED
                      </div>
                    </div>
                    <div className="pl-4 border-l-[3px] border-accent-blue">
                      <div className="text-[26px] sm:text-[28px] font-extrabold text-navy-deep leading-none">
                        300+
                      </div>
                      <div className="mt-1.5 text-[10.5px] sm:text-[11px] font-bold tracking-[0.6px] text-gray-400 uppercase whitespace-nowrap">
                        PROJECTS & INITIATIVES
                      </div>
                    </div>
                  </div>

                  {/* Full Width Support Button */}
                  <Link
                    href="https://ko-fi.com/opensourceconnect"
                    target="_blank"
                    className="w-full bg-[#0A1B3D] text-white text-xs font-extrabold tracking-[0.16em] uppercase py-4 rounded-[4px] shadow-sm flex items-center justify-center text-center block mt-8 hover:bg-[#122752] transition-colors"
                  >
                    SUPPORT THE COMMUNITY
                  </Link>
                </div>

                {/* Dark Navy Why Support Card with cream offset shadow */}
                <div className="relative w-full">
                  <div className="absolute top-2.5 left-2.5 w-full h-full bg-[#FEF3C7] rounded-[2px] z-0" />
                  <div className="relative z-10 w-full bg-[#0D1527] p-6 sm:p-7 rounded-[2px] text-white">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-7 h-7 bg-white text-[#0D1527] font-bold text-base flex items-center justify-center rounded-[2px] shrink-0">
                        ?
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        Why Support Open Source Connect?
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {whyItems.map((item) => (
                        <div key={item.num} className="flex gap-3.5">
                          <div className="flex-none w-6 h-6 bg-[#F59E0B] text-white text-[11px] font-bold rounded-[2px] flex items-center justify-center mt-0.5">
                            {item.num}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold tracking-[0.04em] text-[#F59E0B] uppercase mb-1">
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rounded Dark Navy Current Event Card */}
                <div className="w-full bg-[#182750] p-7 rounded-[22px] text-white shadow-2xl relative overflow-hidden">
                  {/* Top-Right Decorative Curve Overlay */}
                  <div className="absolute -top-10 -right-10 w-[180px] h-[180px] bg-white/5 rounded-full pointer-events-none" />

                  <div className="text-[10.5px] font-extrabold tracking-[0.18em] text-[#F2811D] uppercase mb-3 relative z-10">
                    CURRENT EVENT
                  </div>

                  <h3 className="text-[26px] sm:text-[28px] font-extrabold text-white mb-3 leading-[1.15] tracking-tight relative z-10">
                    Open Source
                    <br />
                    Connect India 2026
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-6 max-w-[280px] relative z-10">
                    Join thousands of students, contributors, maintainers, and industry professionals building the future of open source.
                  </p>

                  <div className="space-y-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.1em] mb-7 relative z-10">
                    <div className="flex items-center gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 text-slate-400"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>September 1-30, 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 text-slate-400"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Online</span>
                    </div>
                  </div>

                  <a
                    href="https://luma.com/3u22sml7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#F2811D] text-white text-xs font-extrabold tracking-[0.16em] uppercase py-3.5 rounded-[12px] shadow-lg flex items-center justify-center text-center block hover:bg-orange-600 transition-colors relative z-10"
                  >
                    REGISTER NOW
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ===== EVENT BANNER (Desktop Only) ===== */}
          <section className="hidden lg:block w-full bg-[#1B3280] border-b-[3px] border-[#F59E0B]">
            <div className="max-w-[1240px] mx-auto px-8 py-12">
              <div className="flex items-center justify-between gap-8">
                <div>
                  <span className="inline-block bg-[#F2811D] text-white text-[10px] font-extrabold tracking-[0.14em] uppercase px-3 py-1.5 rounded-[2px] mb-4">
                    CURRENT EVENT
                  </span>
                  <h2 className="text-[34px] font-extrabold text-white mb-2 tracking-tight">
                    Open Source Connect India 2026
                  </h2>
                  <p className="text-[15px] text-[#A5B4FC] leading-relaxed max-w-[620px] mb-4">
                    Join thousands of students, contributors, maintainers, and industry professionals building the future of open source.
                  </p>
                  <div className="flex gap-6 text-[13px] text-[#A5B4FC]">
                    <span className="flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="shrink-0"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      September 1-30, 2026
                    </span>
                    <span className="flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="shrink-0"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Online
                    </span>
                  </div>
                </div>
                <a
                  href="https://luma.com/3u22sml7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[48px] px-8 bg-[#F2811D] text-white text-[11px] font-extrabold tracking-[0.14em] uppercase rounded-[2px] hover:bg-orange-600 transition-all duration-200 shrink-0 shadow-md"
                >
                  REGISTER NOW
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ===== FOOTER ===== */}
      <footer className="w-full bg-[#0B132B] text-gray-400 border-t-[3px] border-[#F59E0B]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 pt-12 sm:pt-14 pb-8">
          {/* Desktop Footer Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-10 pb-10">
            {/* Brand Column */}
            <div>
              <Image
                src="/logo.png"
                alt="Open Source Connect"
                width={150}
                height={38}
                className="h-8 w-auto object-contain brightness-0 invert mb-4 -ml-1.5"
              />
              <p className="text-[13px] leading-relaxed text-slate-400 max-w-[220px] mb-5">
                Bringing developers, communities, and organizations together to
                shape the future through open source.
              </p>
              <div className="flex items-center gap-3.5 text-slate-400">
                <a
                  href="https://www.linkedin.com/company/open-source-connect/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Open-Source-Connect/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/osconnect.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://x.com/osconnect1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@open-source-connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/umEXASsAev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Discord"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h5 className="text-white text-[11px] font-extrabold tracking-[0.12em] uppercase mb-5">
                  {col.heading}
                </h5>
                <div className="space-y-3">
                  {col.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block text-[13.5px] text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Footer Layout (Matching Mobile Screenshot 2) */}
          <div className="lg:hidden space-y-6 pb-6">
            <div>
              <Image
                src="/logo.png"
                alt="Open Source Connect"
                width={150}
                height={38}
                className="h-8 w-auto object-contain brightness-0 invert mb-4 -ml-1.5"
              />
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Bringing developers, communities, and organizations
                together to shape the future through open source.
              </p>
              <div className="flex items-center gap-3.5 text-slate-400">
                <a
                  href="https://www.linkedin.com/company/open-source-connect/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Open-Source-Connect/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/osconnect.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://x.com/osconnect1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="hover:text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@open-source-connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="hover:text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/umEXASsAev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                  className="hover:text-white"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-6">
              {/* 2-Column Grid for ORGANIZATION & PROGRAMS */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="text-[#F2811D] text-[11px] font-extrabold tracking-wider uppercase mb-3">
                    {footerLinks[0].heading}
                  </h5>
                  <div className="space-y-2.5">
                    {footerLinks[0].links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block text-xs text-slate-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-[#F2811D] text-[11px] font-extrabold tracking-wider uppercase mb-3">
                    {footerLinks[1].heading}
                  </h5>
                  <div className="space-y-2.5">
                    {footerLinks[1].links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block text-xs text-slate-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* SUPPORT Column Below */}
              <div>
                <h5 className="text-[#F2811D] text-[11px] font-extrabold tracking-wider uppercase mb-3">
                  {footerLinks[2].heading}
                </h5>
                <div className="space-y-2.5">
                  {footerLinks[2].links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block text-xs text-slate-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal Bar */}
          <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9.5px] sm:text-[11px] text-slate-500 tracking-[0.05em] uppercase text-center sm:text-left">
            <div>
              &copy; 2026 Open Source Connect Community. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2">
              <Link
                href="/privacy-policy"
                className="hover:text-slate-300 transition-colors whitespace-nowrap"
              >
                PRIVACY POLICY
              </Link>
              <Link
                href="#"
                className="hover:text-slate-300 transition-colors whitespace-nowrap"
              >
                TERMS OF USE
              </Link>
              <Link
                href="/code-of-conduct"
                className="hover:text-slate-300 transition-colors whitespace-nowrap"
              >
                CODE OF CONDUCT
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
