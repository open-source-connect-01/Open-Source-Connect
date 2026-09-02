"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AboutOverlay from "@/components/AboutOverlay";
import WhatWeDoOverlay from "@/components/WhatWeDoOverlay";
import EventsOverlay from "@/components/EventsOverlay";
import type { ActiveOverlay } from "@/components/Navbar";

const contentsList = [
  { id: "our-pledge", label: "Our Pledge" },
  { id: "our-standards", label: "Our Standards" },
  { id: "enforcement-responsibilities", label: "Enforcement Responsibilities" },
  { id: "scope", label: "Scope" },
  { id: "enforcement", label: "Enforcement" },
  { id: "attribution", label: "Attribution" },
];

export default function CodeOfConductPage() {
  const router = useRouter();
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("our-pledge");

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 160;
    let currentId = contentsList[0].id;
    for (let i = 0; i < contentsList.length; i++) {
      const el = document.getElementById(contentsList[i].id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= top) {
          currentId = contentsList[i].id;
        }
      }
    }
    setActiveSection(currentId);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    let running = false;
    const onScroll = () => {
      if (!running) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          running = false;
        });
        running = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const rafId = window.requestAnimationFrame(updateActiveSection);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [updateActiveSection]);

  const handleNavClick = (label: ActiveOverlay) => {
    if (label && label !== "events") {
      router.push("/?nav=" + label);
    } else {
      setActiveOverlay((prev) => (prev === label ? null : label));
    }
    setIsMobileMenuOpen(false);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 110;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans antialiased text-[#1E293B]">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-gray-100">
        <Navbar
          activeOverlay={activeOverlay}
          onNavClick={handleNavClick}
          onMobileNavClick={handleNavClick}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
        />
      </header>

      {/* Navigation Overlays */}
      <AboutOverlay
        isOpen={activeOverlay === "about"}
        onClose={handleCloseOverlay}
      />
      <WhatWeDoOverlay
        isOpen={activeOverlay === "whatwedo"}
        onClose={handleCloseOverlay}
      />
      <EventsOverlay
        isOpen={activeOverlay === "events"}
        onClose={handleCloseOverlay}
      />

      <main className="flex-1">
        {/* ===== HERO BANNER ===== */}
        <section className="w-full bg-gradient-to-r from-[#0C1738] via-[#142B67] to-[#1C398E] text-white py-14 sm:py-16 lg:py-20 relative overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-slate-300/80 uppercase mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-200">CODE OF CONDUCT</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-3 leading-[1.1] text-white">
              Code of Conduct
            </h1>

            {/* Subtitle / Last updated */}
            <p className="text-sm sm:text-[15px] text-slate-300 font-normal max-w-[700px]">
              Our commitment to fostering an open, welcoming, diverse, and harassment-free community for all contributors and participants.
            </p>
          </div>
        </section>

        {/* ===== MAIN CONTENT SECTION ===== */}
        <section className="w-full bg-white py-14 sm:py-18 lg:py-22">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* --- LEFT SIDEBAR: CONTENTS --- */}
              <aside className="lg:col-span-3 sticky top-28 hidden lg:block">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
                  CONTENTS
                </h3>
                <nav className="relative border-l border-gray-200 pl-4 space-y-3.5 text-xs">
                  {contentsList.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`relative block text-left w-full transition-colors duration-200 py-0.5 ${
                          isActive
                            ? "text-[#2563EB] font-bold"
                            : "text-gray-500 hover:text-gray-900 font-medium"
                        }`}
                      >
                        {isActive && (
                          <span className="absolute -left-[17px] top-0 bottom-0 w-[2.5px] bg-[#2563EB] rounded-r-xs" />
                        )}
                        {item.label}
                      </button>
                    );
                  })}
                </nav>

                {/* Report a Violation Box */}
                <div className="mt-8 p-5 sm:p-6 bg-[#FEF6D8] border border-[#F59E0B] rounded-[2px]">
                  <h4 className="text-[15px] font-bold text-[#854D0E] mb-2.5">
                    Report a Violation
                  </h4>
                  <p className="text-[13px] text-[#78350F] leading-relaxed mb-4">
                    All reports are handled with confidentiality and care.
                  </p>
                  <a
                    href="mailto:conduct@oscfoundation.org"
                    className="block text-[13px] font-bold text-[#854D0E] hover:underline"
                  >
                    conduct@oscfoundation.org
                  </a>
                </div>
              </aside>

              {/* --- RIGHT COLUMN: CODE OF CONDUCT DETAILS --- */}
              <div className="lg:col-span-9 space-y-12 sm:space-y-14">
                {/* Section 1: Our Pledge */}
                <div id="our-pledge" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                    Our Pledge
                  </h2>
                  <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75]">
                    <p>
                      We, as members, contributors, and leaders of the Open Source Connect (OSC) community, pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, religion, or sexual identity and orientation.
                    </p>
                    <p>
                      We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community where curiosity and collaborative learning are encouraged.
                    </p>
                  </div>
                </div>

                {/* Section 2: Our Standards */}
                <div id="our-standards" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-6 pb-2.5 border-b border-gray-100">
                    Our Standards
                  </h2>
                  <div className="space-y-6">
                    {/* Positive Behaviors Box */}
                    <div className="p-6 sm:p-8 bg-[#F0FAF5] border border-[#86EFAC]/50 rounded-[2px]">
                      <div className="flex items-center gap-2.5 mb-5">
                        <span className="w-2 h-2 bg-[#16A34A] inline-block shrink-0" />
                        <h3 className="text-xs font-extrabold text-[#15803D] uppercase tracking-[0.14em]">
                          POSITIVE BEHAVIORS
                        </h3>
                      </div>
                      <ul className="space-y-3.5 text-[14px] sm:text-[14.5px] text-[#166534] leading-[1.6]">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#16A34A] inline-block shrink-0 mt-2" />
                          <span>Demonstrating empathy and kindness toward other people</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#16A34A] inline-block shrink-0 mt-2" />
                          <span>Being respectful of differing opinions, viewpoints, and experiences</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#16A34A] inline-block shrink-0 mt-2" />
                          <span>Giving and gracefully accepting constructive feedback</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#16A34A] inline-block shrink-0 mt-2" />
                          <span>Accepting responsibility and apologizing to those affected by our mistakes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#16A34A] inline-block shrink-0 mt-2" />
                          <span>Focusing on what is best not just for us as individuals, but for the overall community</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#16A34A] inline-block shrink-0 mt-2" />
                          <span>Using welcoming and inclusive language</span>
                        </li>
                      </ul>
                    </div>

                    {/* Unacceptable Behaviors Box */}
                    <div className="p-6 sm:p-8 bg-[#FEF2F2] border border-[#FECACA]/70 rounded-[2px]">
                      <div className="flex items-center gap-2.5 mb-5">
                        <span className="w-2 h-2 bg-[#DC2626] inline-block shrink-0" />
                        <h3 className="text-xs font-extrabold text-[#DC2626] uppercase tracking-[0.14em]">
                          UNACCEPTABLE BEHAVIORS
                        </h3>
                      </div>
                      <ul className="space-y-3.5 text-[14px] sm:text-[14.5px] text-[#991B1B] leading-[1.6]">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#DC2626] inline-block shrink-0 mt-2" />
                          <span>The use of sexualized language or imagery, and sexual attention or advances of any kind</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#DC2626] inline-block shrink-0 mt-2" />
                          <span>Trolling, insulting or derogatory comments, and personal or political attacks</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#DC2626] inline-block shrink-0 mt-2" />
                          <span>Public or private harassment of any community member</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#DC2626] inline-block shrink-0 mt-2" />
                          <span>Publishing others&apos; private information without their explicit permission</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#DC2626] inline-block shrink-0 mt-2" />
                          <span>Sustained disruption of community discussions, events, or meetings</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#DC2626] inline-block shrink-0 mt-2" />
                          <span>Other conduct which could reasonably be considered inappropriate in a professional setting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3: Enforcement Responsibilities */}
                <div id="enforcement-responsibilities" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                    Enforcement Responsibilities
                  </h2>
                  <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75]">
                    <p>
                      Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.
                    </p>
                    <p>
                      Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.
                    </p>
                  </div>
                </div>

                {/* Section 4: Scope */}
                <div id="scope" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                    Scope
                  </h2>
                  <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75]">
                    <p>
                      This Code of Conduct applies within all community spaces — including GitHub repositories, mailing lists, Slack channels, forums, and in-person events — and also applies when an individual is officially representing the community in public spaces.
                    </p>
                    <p>
                      Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
                    </p>
                  </div>
                </div>

                {/* Section 5: Enforcement */}
                <div id="enforcement" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                    Enforcement
                  </h2>
                  
                  <p className="text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75] mb-6">
                    Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at{" "}
                    <a
                      href="mailto:conduct@oscfoundation.org"
                      className="font-bold text-[#2563EB] hover:underline"
                    >
                      conduct@oscfoundation.org
                    </a>
                    . All complaints will be reviewed and investigated promptly and fairly.
                  </p>

                  <div className="space-y-4">
                    {/* Card 1: Correction */}
                    <div className="p-5 sm:p-6 bg-[#FEFCE8] rounded-[2px] flex items-start gap-4 sm:gap-5">
                      <div className="w-8 h-8 rounded-[2px] bg-[#F59E0B] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-[#D97706] mb-1.5">
                          Correction
                        </h4>
                        <p className="text-[13.5px] text-[#4B5563] leading-relaxed">
                          A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate.
                        </p>
                      </div>
                    </div>

                    {/* Card 2: Warning */}
                    <div className="p-5 sm:p-6 bg-[#FFF7ED] rounded-[2px] flex items-start gap-4 sm:gap-5">
                      <div className="w-8 h-8 rounded-[2px] bg-[#EA580C] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-[#EA580C] mb-1.5">
                          Warning
                        </h4>
                        <p className="text-[13.5px] text-[#4B5563] leading-relaxed">
                          A warning with consequences for continued behavior. No interaction with the people involved for a specified period of time, including unsolicited interaction with those enforcing the Code of Conduct.
                        </p>
                      </div>
                    </div>

                    {/* Card 3: Temporary Ban */}
                    <div className="p-5 sm:p-6 bg-[#FEF2F2] rounded-[2px] flex items-start gap-4 sm:gap-5">
                      <div className="w-8 h-8 rounded-[2px] bg-[#DC2626] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-[#DC2626] mb-1.5">
                          Temporary Ban
                        </h4>
                        <p className="text-[13.5px] text-[#4B5563] leading-relaxed">
                          A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved is allowed during this period.
                        </p>
                      </div>
                    </div>

                    {/* Card 4: Permanent Ban */}
                    <div className="p-5 sm:p-6 bg-[#F5F3FF] rounded-[2px] flex items-start gap-4 sm:gap-5">
                      <div className="w-8 h-8 rounded-[2px] bg-[#7C3AED] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-[#7C3AED] mb-1.5">
                          Permanent Ban
                        </h4>
                        <p className="text-[13.5px] text-[#4B5563] leading-relaxed">
                          A permanent ban from any sort of public interaction within the community for individuals who demonstrate a pattern of violation, harassment, or aggression toward individuals or groups.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6: Attribution */}
                <div id="attribution" className="scroll-mt-28">
                  <div className="p-6 sm:p-8 bg-[#F8FAFC] border border-gray-100 rounded-[2px]">
                    <h3 className="text-xl sm:text-[22px] font-bold text-[#0B0F1A] tracking-tight mb-4">
                      Attribution
                    </h3>
                    <div className="space-y-2.5 text-[13.5px] sm:text-[14px] text-[#64748B] leading-relaxed">
                      <p>
                        This Code of Conduct is adapted from the{" "}
                        <a
                          href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#2563EB] hover:underline"
                        >
                          Contributor Covenant
                        </a>
                        , version 2.1, available at{" "}
                        <a
                          href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          contributor-covenant.org
                        </a>
                        .
                      </p>
                      <p>
                        Community Impact Guidelines were inspired by Mozilla&apos;s code of conduct enforcement ladder.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterSection hideTopSections={true} />
    </div>
  );
}
