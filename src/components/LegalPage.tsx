"use client";

import { useState, useEffect, useCallback, type ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AboutOverlay from "@/components/AboutOverlay";
import WhatWeDoOverlay from "@/components/WhatWeDoOverlay";
import EventsOverlay from "@/components/EventsOverlay";
import CommunityOverlay from "@/components/CommunityOverlay";
import type { ActiveOverlay } from "@/components/Navbar";

export type LegalSection = { id: string; label: string; title: string; content: ReactNode };

export const legalLinkClass = "font-semibold text-[#2563EB] hover:underline";
export const legalListClass = "list-disc pl-5 space-y-2 marker:text-[#94A3B8]";

export default function LegalPage({
  title,
  subtitle,
  sections,
}: {
  title: string;
  subtitle: string;
  sections: LegalSection[];
}) {
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 160;
    let currentId = sections[0].id;
    for (let i = 0; i < sections.length; i++) {
      const el = document.getElementById(sections[i].id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= top) {
          currentId = sections[i].id;
        }
      }
    }
    setActiveSection(currentId);
  }, [sections]);

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
    setActiveOverlay((prev) => (prev === label ? null : label));
    setIsMobileMenuOpen(false);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
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
      <header className="sticky top-0 z-[60] bg-white shadow-xs">
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
      <CommunityOverlay
        isOpen={activeOverlay === "community"}
        onClose={handleCloseOverlay}
      />

      <main className="flex-1">
        {/* ===== HERO BANNER ===== */}
        <section className="w-full bg-gradient-to-r from-[#0C1738] via-[#142B67] to-[#1C398E] text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-bold tracking-[0.2em] text-slate-300/80 uppercase mb-3 sm:mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-200">{title}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-2 sm:mb-3 leading-[1.15] text-white">
              {title}
            </h1>

            {/* Subtitle / Last updated */}
            <p className="text-sm sm:text-[15px] text-slate-300 font-normal">
              {subtitle}
            </p>
          </div>
        </section>

        {/* ===== MAIN CONTENT SECTION ===== */}
        <section className="w-full bg-white py-10 sm:py-14 lg:py-22">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Contents Quick Scroller */}
            <div className="lg:hidden sticky top-[57px] sm:top-[65px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 -mx-4 px-4 sm:-mx-6 sm:px-6 py-2.5 mb-8 shadow-xs">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                {sections.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold whitespace-nowrap transition-colors shrink-0 cursor-pointer ${
                        isActive
                          ? "bg-[#2563EB] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* --- LEFT SIDEBAR: CONTENTS --- */}
              <aside className="lg:col-span-3 sticky top-28 hidden lg:block">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
                  CONTENTS
                </h3>
                <nav className="relative border-l border-gray-200 pl-4 space-y-3.5 text-xs">
                  {sections.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`relative block text-left w-full transition-colors duration-200 py-0.5 cursor-pointer ${
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
              </aside>

              {/* --- RIGHT COLUMN: SECTIONS --- */}
              <div className="lg:col-span-9 space-y-12 sm:space-y-14">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                      {section.title}
                    </h2>
                    <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75]">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <FooterSection hideTopSections={true} />
    </div>
  );
}
