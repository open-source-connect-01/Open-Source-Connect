"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AboutOverlay from "@/components/AboutOverlay";
import WhatWeDoOverlay from "@/components/WhatWeDoOverlay";
import EventsOverlay from "@/components/EventsOverlay";
import CommunityOverlay from "@/components/CommunityOverlay";
import type { ActiveOverlay } from "@/components/Navbar";
import {
  SPONSORS_LIST,
  COMMUNITY_PARTNERS_LIST,
} from "@/data/sponsorsData";

export default function PartnersPageClient() {
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"sponsors" | "community">("sponsors");

  const handleNavClick = (label: ActiveOverlay) => {
    setActiveOverlay((prev) => (prev === label ? null : label));
    setIsMobileMenuOpen(false);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };

  const currentList = activeTab === "sponsors" ? SPONSORS_LIST : COMMUNITY_PARTNERS_LIST;

  // Helper for crisp 1px borders on 2-col (mobile) and 4-col (desktop) without double outer edges
  const getCellBorderClasses = (idx: number, total: number = 16) => {
    const isRightMobile = idx % 2 === 0;
    const isRightDesktop = idx % 4 !== 3;
    const isBottomMobile = idx < total - 2;
    const isBottomDesktop = idx < total - 4;

    return `${isRightMobile ? "border-r" : "border-r-0"} ${isRightDesktop ? "md:border-r" : "md:border-r-0"} ${isBottomMobile ? "border-b" : "border-b-0"} ${isBottomDesktop ? "md:border-b" : "md:border-b-0"} border-gray-200/70`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-[60] bg-white shadow-xs">
        <Navbar
          activeOverlay={activeOverlay}
          onNavClick={handleNavClick}
          onMobileNavClick={handleNavClick}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
          ctaText="DONATE US"
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
      {/* Community Overlay */}
      {typeof CommunityOverlay === "function" && (
        <CommunityOverlay
          isOpen={(activeOverlay as string) === "community" || (activeOverlay as string) === "resources"}
          onClose={handleCloseOverlay}
        />
      )}

      <main className="flex-1 flex flex-col">
        {/* ========================================================
            HERO SECTION (SAME-TO-SAME AS REFERENCE)
            ======================================================== */}
        <section
          className="relative w-full text-white pt-9 pb-10 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-12 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #091B2F 0%, #0D2449 45%, #183578 80%, #1D3A85 100%)",
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-[360px] sm:w-[600px] h-[360px] sm:h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1D3A85]/35 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start">
            {/* Kicker: ■ OUR PARTNERS */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-3.5">
              <span className="w-2 h-2 bg-[#F59E0B] inline-block rounded-[1px] shrink-0" />
              <span className="text-[10.5px] sm:text-[11px] font-extrabold tracking-[0.2em] text-[#F59E0B] uppercase">
                OUR PARTNERS
              </span>
            </div>

            {/* Main Title: Sponsors & Partners */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight mb-3.5 sm:mb-4 leading-[1.1] text-white">
              Sponsors &amp;{" "}
              <span className="text-[#F59E0B]">
                Partners
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[13px] sm:text-sm md:text-[14.5px] text-slate-400 font-normal max-w-[680px] leading-[1.65] mb-8 sm:mb-10">
              We collaborate with organizations, startups, universities, and<br className="hidden sm:inline" />{" "}
              technology companies to create meaningful opportunities for<br className="hidden sm:inline" />{" "}
              developers, accelerate open source innovation, and build a stronger,<br className="hidden sm:inline" />{" "}
              more connected technology ecosystem.
            </p>

            {/* Centered Segmented Pill Tabs */}
            <div className="w-full flex justify-center mt-1 mb-1 sm:mb-2">
              <div className="inline-flex max-w-full items-center p-1 sm:p-1.5 rounded-full bg-white/[0.08] border border-white/20 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
                {/* Sponsors Tab */}
                <button
                  type="button"
                  onClick={() => setActiveTab("sponsors")}
                  className={`cursor-pointer px-5 sm:px-7 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-semibold tracking-wide transition-all duration-300 whitespace-nowrap ${
                    activeTab === "sponsors"
                      ? "bg-[#1D4ED8] text-white shadow-[0_2px_14px_rgba(29,78,216,0.45)]"
                      : "bg-transparent text-slate-300/80 hover:text-white font-medium"
                  }`}
                >
                  Sponsors
                </button>

                {/* Community Partners Tab */}
                <button
                  type="button"
                  onClick={() => setActiveTab("community")}
                  className={`cursor-pointer px-5 sm:px-7 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-semibold tracking-wide transition-all duration-300 whitespace-nowrap ${
                    activeTab === "community"
                      ? "bg-[#1D4ED8] text-white shadow-[0_2px_14px_rgba(29,78,216,0.45)]"
                      : "bg-transparent text-slate-300/80 hover:text-white font-medium"
                  }`}
                >
                  Community Partners
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SPONSORS & PARTNERS GRID SECTION (RESPONSIVE)
            ======================================================== */}
        <section className="w-full bg-[#EEF2F6] py-8 sm:py-14 lg:py-20 px-3 sm:px-6 lg:px-8 flex-1">
          <div className="max-w-[1140px] mx-auto">
            {/* White Grid Container with Crisp Outlines */}
            <div className="bg-white rounded-lg shadow-xs border border-gray-200/90 overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {currentList.length === 0 ? (
                  Array.from({ length: 16 }).map((_, idx) => (
                    <div
                      key={`empty-community-${idx}`}
                      className={`h-28 sm:h-36 md:h-44 bg-[#E8EEF5] ${getCellBorderClasses(idx, 16)}`}
                      aria-hidden="true"
                    />
                  ))
                ) : (
                  currentList.map((item, idx) => {
                    const borderCls = getCellBorderClasses(idx, currentList.length);

                    // Empty slot rendering matching Row 4 of reference screenshot
                    if (item.isEmpty) {
                      return (
                        <div
                          key={`empty-${idx}`}
                          className={`h-28 sm:h-36 md:h-44 bg-[#E8EEF5] ${borderCls}`}
                          aria-hidden="true"
                        />
                      );
                    }

                    const LogoComponent = item.component;

                    return (
                      <div
                        key={item.id}
                        className={`relative h-28 sm:h-36 md:h-44 p-3 sm:p-5 md:p-6 flex items-center justify-center bg-white ${borderCls}`}
                      >
                        {item.websiteUrl ? (
                          <a
                            href={item.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Visit ${item.name}`}
                            className="flex items-center justify-center w-full h-full"
                          >
                            <LogoComponent />
                          </a>
                        ) : (
                          <div className="flex items-center justify-center w-full h-full">
                            <LogoComponent />
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            BECOME A SPONSOR SECTION (RESPONSIVE)
            ======================================================== */}
        <section className="relative w-full bg-[#071120] text-white border-t-[3px] border-[#F59E0B] py-12 sm:py-16 lg:py-24">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
              {/* Left Column: Heading, text, and bullets */}
              <div className="lg:col-span-7">
                {/* Kicker: ■ PARTNER WITH US */}
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="w-2 h-2 bg-[#F59E0B] inline-block rounded-[1px]" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#F59E0B] uppercase">
                    PARTNER WITH US
                  </span>
                </div>

                {/* Heading: Become a Sponsor */}
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
                  Become a Sponsor
                </h2>

                {/* Paragraph */}
                <p className="text-slate-300 text-xs sm:text-sm lg:text-[15.5px] leading-relaxed max-w-xl mb-5 sm:mb-7 font-normal">
                  Put your brand in front of a growing global community of developers, contributors, and open 
                  source builders. Your sponsorship helps power community programs, 
                  contributor initiatives, and technical events.
                </p>

                {/* Bullets */}
                <ul className="space-y-3 sm:space-y-3.5">
                  <li className="flex items-start text-[13px] sm:text-[14px] text-slate-300 font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rotate-45 mr-3 sm:mr-3.5 mt-2 shrink-0" />
                    <span>Brand visibility across OSC platform, campaigns, and events</span>
                  </li>
                  <li className="flex items-start text-[13px] sm:text-[14px] text-slate-300 font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rotate-45 mr-3 sm:mr-3.5 mt-2 shrink-0" />
                    <span>Reach 25,000+ active open source contributors and developers</span>
                  </li>
                  
                  <li className="flex items-start text-[13px] sm:text-[14px] text-slate-300 font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rotate-45 mr-3 sm:mr-3.5 mt-2 shrink-0" />
                    <span>Showcase your products, tools, and opportunities to the community</span>
                  </li>
                  
                </ul>
              </div>

              {/* Right Column: Stacked Action Buttons */}
              <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center w-full">
                <div className="w-full sm:w-72 flex flex-col gap-3">
                  {/* Primary Amber Button: VIEW SPONSORSHIP TIERS */}
                  <button
                    type="button"
                    className="w-full py-3 sm:py-3.5 px-4 sm:px-6 bg-[#F59E0B] hover:bg-[#E58A13] text-[#071120] text-[10.5px] sm:text-[11px] font-extrabold tracking-[0.14em] sm:tracking-[0.16em] uppercase rounded-[2px] transition-all duration-200 shadow-md text-center"
                  >
                    VIEW SPONSORSHIP TIERS
                  </button>

                  {/* Secondary Dark Button: CONTACT OUR TEAM */}
                  <a
                    href="mailto:hello@osconnect.org"
                    className="w-full py-3 sm:py-3.5 px-4 sm:px-6 bg-[#071120] hover:bg-[#0D1C36] text-white text-[10.5px] sm:text-[11px] font-extrabold tracking-[0.14em] sm:tracking-[0.16em] uppercase rounded-[2px] border border-slate-700/80 hover:border-slate-500 transition-all duration-200 text-center inline-block cursor-pointer"
                  >
                    CONTACT OUR TEAM
                  </a>
                </div>
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
