"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AboutOverlay from "@/components/AboutOverlay";
import WhatWeDoOverlay from "@/components/WhatWeDoOverlay";
import EventsOverlay from "@/components/EventsOverlay";
import CommunityOverlay from "@/components/CommunityOverlay";
import type { ActiveOverlay } from "@/components/Navbar";

export interface InitiativeStep {
  step: number;
  tag: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
  imagePosition: "left" | "right";
}

export interface InitiativeNavLink {
  label: string;
  href: string;
}

interface InitiativePageLayoutProps {
  breadcrumbLabel: string;
  badgeLabel: string;
  title: string;
  heroGradientClass: string;
  accentColor: string;
  accentTextClass: string;
  steps: InitiativeStep[];
  prevLink?: InitiativeNavLink;
  nextLink?: InitiativeNavLink;
}

export default function InitiativePageLayout({
  breadcrumbLabel,
  badgeLabel,
  title,
  heroGradientClass,
  accentColor,
  accentTextClass,
  steps,
  prevLink,
  nextLink,
}: InitiativePageLayoutProps) {
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (label: ActiveOverlay) => {
    setActiveOverlay((prev) => (prev === label ? null : label));
    setIsMobileMenuOpen(false);
  };

  const handleCloseOverlay = () => setActiveOverlay(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-[60] bg-white shadow-sm border-b border-gray-100">
        <Navbar
          activeOverlay={activeOverlay}
          onNavClick={handleNavClick}
          onMobileNavClick={handleNavClick}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
        />
      </header>

      <AboutOverlay isOpen={activeOverlay === "about"} onClose={handleCloseOverlay} />
      <WhatWeDoOverlay isOpen={activeOverlay === "whatwedo"} onClose={handleCloseOverlay} />
      <EventsOverlay isOpen={activeOverlay === "events"} onClose={handleCloseOverlay} />
      <CommunityOverlay isOpen={activeOverlay === "community"} onClose={handleCloseOverlay} />

      <main className="flex-1">
        {/* ===== HERO BANNER ===== */}
        <section
          className={`w-full bg-gradient-to-br ${heroGradientClass} text-white py-12 sm:py-20 lg:py-24 relative overflow-hidden`}
        >
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-white/[0.04] pointer-events-none" />
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-10">
              <div className="max-w-[640px]">
                {/* Breadcrumb */}
                <div className="flex items-center flex-wrap gap-2 text-[10.5px] sm:text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase mb-4 sm:mb-6">
                  <Link href="/" className="hover:text-white transition-colors">
                    HOME
                  </Link>
                  <span className="text-white/30">/</span>
                  <button
                    onClick={() => handleNavClick("whatwedo")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    WHAT WE DO
                  </button>
                  <span className="text-white/30">/</span>
                  <span className="text-white/80">{breadcrumbLabel}</span>
                </div>

                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 text-[10px] sm:text-[10.5px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-[2px] mb-4 sm:mb-5"
                  style={{ backgroundColor: `${accentColor}26`, color: accentColor }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                  {badgeLabel}
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                  {title}
                </h1>
              </div>

              {/* Mobile Steps Quick Scroller */}
              <div className="lg:hidden flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 pb-1 -mx-4 px-4 sm:-mx-6 sm:px-6">
                {steps.map((s) => (
                  <a
                    key={s.step}
                    href={`#step-${s.step}`}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white/10 hover:bg-white/20 text-xs font-semibold text-white/90 whitespace-nowrap transition-colors shrink-0"
                  >
                    <span className="font-bold" style={{ color: accentColor }}>
                      {String(s.step).padStart(2, "0")}
                    </span>
                    <span>{s.title}</span>
                  </a>
                ))}
              </div>

              {/* Desktop Steps outline */}
              <div className="hidden lg:block lg:pl-8 lg:border-l border-white/15 shrink-0">
                <ol className="space-y-3">
                  {steps.map((s) => (
                    <li key={s.step}>
                      <a
                        href={`#step-${s.step}`}
                        className="flex items-center gap-2.5 text-[12.5px] text-white/60 hover:text-white transition-colors"
                      >
                        <span className="font-bold" style={{ color: accentColor }}>
                          {String(s.step).padStart(2, "0")}
                        </span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STEP SECTIONS ===== */}
        <div className="w-full bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 space-y-12 sm:space-y-20 lg:space-y-24">
            {steps.map((s) => (
              <div
                key={s.step}
                id={`step-${s.step}`}
                className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center scroll-mt-24 ${
                  s.imagePosition === "right" ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Illustration */}
                <div
                  className="relative rounded-[4px] overflow-hidden aspect-[6/5] flex items-center justify-center"
                  style={{ backgroundColor: "#0B1220" }}
                >
                  <span
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 text-[9.5px] sm:text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-[2px]"
                    style={{ backgroundColor: accentColor, color: "#fff" }}
                  >
                    STEP {s.step}
                  </span>
                  <span
                    className="absolute -bottom-3 left-4 text-[54px] sm:text-[72px] font-black leading-none select-none"
                    style={{ color: "#ffffff", opacity: 0.06 }}
                  >
                    {String(s.step).padStart(2, "0")}
                  </span>
                  <div className="relative z-[1] w-full h-full flex items-center justify-center p-4 sm:p-8">
                    {s.illustration}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <span
                    className={`inline-block text-xs font-bold tracking-[0.22em] uppercase mb-2 sm:mb-3 ${accentTextClass}`}
                  >
                    STEP {s.step}
                  </span>
                  <h2 className="text-xl sm:text-[28px] lg:text-[32px] font-extrabold text-[#0B0F1A] tracking-tight leading-snug mb-3 sm:mb-4">
                    {s.title}
                  </h2>
                  <div
                    className="w-10 h-[3px] mb-4 sm:mb-5"
                    style={{ backgroundColor: accentColor }}
                  />
                  <p className="text-[14px] sm:text-[15.5px] text-gray-600 leading-relaxed max-w-[520px]">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PREV / ALL / NEXT PAGINATION ===== */}
        <div className="w-full bg-[#F8FAFC] border-t border-gray-100">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex items-center justify-between gap-2 sm:gap-4">
            <div className="flex-1 min-w-0">
              {prevLink ? (
                <Link
                  href={prevLink.href}
                  className="group inline-flex items-center gap-2 sm:gap-3 max-w-full"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-gray-400 group-hover:text-[#0B0F1A] transition-colors"
                  >
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>
                  <span className="min-w-0">
                    <span className="block text-[9.5px] sm:text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase">
                      Previous
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-[#0B0F1A] truncate max-w-[100px] xs:max-w-[140px] sm:max-w-[200px] group-hover:text-accent-blue transition-colors">
                      {prevLink.label}
                    </span>
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </div>

            <Link
              href="/about"
              className="shrink-0 text-[10.5px] sm:text-xs font-bold tracking-[0.18em] text-gray-500 hover:text-[#0B0F1A] uppercase transition-colors px-1"
            >
              All Initiatives
            </Link>

            <div className="flex-1 min-w-0 flex justify-end">
              {nextLink ? (
                <Link
                  href={nextLink.href}
                  className="group inline-flex items-center gap-2 sm:gap-3 max-w-full text-right"
                >
                  <span className="min-w-0">
                    <span className="block text-[9.5px] sm:text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase">
                      Next
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-[#0B0F1A] truncate max-w-[100px] xs:max-w-[140px] sm:max-w-[200px] group-hover:text-accent-blue transition-colors">
                      {nextLink.label}
                    </span>
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-gray-400 group-hover:text-[#0B0F1A] transition-colors"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </div>
      </main>

      <FooterSection hideTopSections={true} />
    </div>
  );
}
