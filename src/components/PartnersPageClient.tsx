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
  SPONSORSHIP_TIERS,
} from "@/data/sponsorsData";

export default function PartnersPageClient() {
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"sponsors" | "community">("sponsors");

  // Modals
  const [isTiersModalOpen, setIsTiersModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedTierForContact, setSelectedTierForContact] = useState<string>("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleNavClick = (label: ActiveOverlay) => {
    setActiveOverlay((prev) => (prev === label ? null : label));
    setIsMobileMenuOpen(false);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };

  const handleOpenContactWithTier = (tierName: string) => {
    setSelectedTierForContact(tierName);
    setIsTiersModalOpen(false);
    setIsContactModalOpen(true);
    setContactSubmitted(false);
  };

  const currentList = activeTab === "sponsors" ? SPONSORS_LIST : COMMUNITY_PARTNERS_LIST;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-gray-100">
        <Navbar
          activeOverlay={activeOverlay}
          onNavClick={handleNavClick}
          onMobileNavClick={handleNavClick}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
          ctaText="JOIN US"
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
            HERO SECTION
            ======================================================== */}
        <section className="relative w-full bg-gradient-to-br from-[#06122F] via-[#0A1A4A] to-[#122F74] text-white pt-16 sm:pt-20 pb-20 sm:pb-24 overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-start">
            {/* Kicker: ■ OUR PARTNERS */}
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-2 h-2 bg-[#F59E0B] inline-block rounded-[1px]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#F59E0B] uppercase">
                OUR PARTNERS
              </span>
            </div>

            {/* Main Title: Sponsors & Partners */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight mb-5 leading-[1.1]">
              Sponsors &amp;{" "}
              <span className="text-[#F59E0B]">
                Partners
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-[16px] text-slate-300 font-normal max-w-[760px] leading-relaxed mb-10">
              We collaborate with organizations, startups, universities, and technology
              companies to create meaningful opportunities for developers, accelerate
              open source innovation, and build a stronger, more connected technology
              ecosystem.
            </p>

            {/* Centered Segmented Pill Tabs */}
            <div className="w-full flex justify-center mt-2">
              <div className="inline-flex items-center p-1 rounded-full bg-[#0D1D45]/90 border border-slate-700/60 backdrop-blur-md shadow-inner">
                {/* Sponsors Tab */}
                <button
                  type="button"
                  onClick={() => setActiveTab("sponsors")}
                  className={`cursor-pointer px-7 sm:px-8 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    activeTab === "sponsors"
                      ? "bg-[#2563EB] text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sponsors
                </button>

                {/* Community Partners Tab */}
                <button
                  type="button"
                  onClick={() => setActiveTab("community")}
                  className={`cursor-pointer px-6 sm:px-7 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    activeTab === "community"
                      ? "bg-[#2563EB] text-white shadow-md font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Community Partners
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SPONSORS & PARTNERS GRID SECTION
            ======================================================== */}
        <section className="w-full bg-[#EEF2F6] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 flex-1">
          <div className="max-w-[1140px] mx-auto">
            {/* White Grid Container with Crisp Outlines */}
            <div className="bg-white rounded-lg shadow-xs border border-gray-200/90 overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {currentList.map((item, idx) => {
                  // Empty slot rendering matching Row 4 of reference screenshot
                  if (item.isEmpty) {
                    return (
                      <div
                        key={`empty-${idx}`}
                        className="h-36 sm:h-40 bg-[#E8EEF5] border-b border-r border-gray-200/70"
                        aria-hidden="true"
                      />
                    );
                  }

                  const LogoComponent = item.component;

                  return (
                    <div
                      key={item.id}
                      className="group relative h-36 sm:h-40 p-6 flex items-center justify-center border-b border-r border-gray-200/70 bg-white transition-all duration-200 hover:bg-slate-50/70"
                    >
                      {item.websiteUrl ? (
                        <a
                          href={item.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Visit ${item.name}`}
                          className="flex items-center justify-center w-full h-full transition-transform duration-200 group-hover:scale-[1.04]"
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
                })}
              </div>
            </div>

            {/* Sub-note for community partners */}
            {activeTab === "community" && (
              <p className="text-center text-xs text-slate-500 mt-6">
                Are you a student club, campus organization, or open source group?{" "}
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-accent-blue font-bold hover:underline"
                >
                  Partner with OSC
                </button>
              </p>
            )}
          </div>
        </section>

        {/* ========================================================
            BECOME A SPONSOR SECTION (EXACT TO REFERENCE)
            ======================================================== */}
        <section className="relative w-full bg-[#071120] text-white border-t-[3px] border-[#F59E0B] py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Heading, text, and bullets */}
              <div className="lg:col-span-7">
                {/* Kicker: ■ PARTNER WITH US */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-[#F59E0B] inline-block rounded-[1px]" />
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#F59E0B] uppercase">
                    PARTNER WITH US
                  </span>
                </div>

                {/* Heading: Become a Sponsor */}
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight mb-4 leading-tight">
                  Become a Sponsor
                </h2>

                {/* Paragraph */}
                <p className="text-slate-300 text-sm sm:text-[15.5px] leading-relaxed max-w-xl mb-7 font-normal">
                  Join a global network of organizations shaping the future of open
                  source. Sponsorship directly funds contributor programs,
                  infrastructure, and community events.
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  <li className="flex items-center text-xs sm:text-[13.5px] text-slate-300 font-medium">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-[1px] mr-3 shrink-0" />
                    Brand visibility across all OSC platforms and events
                  </li>
                  <li className="flex items-center text-xs sm:text-[13.5px] text-slate-300 font-medium">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-[1px] mr-3 shrink-0" />
                    Direct access to 15,000+ active open source contributors
                  </li>
                </ul>
              </div>

              {/* Right Column: Stacked Action Buttons */}
              <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
                <div className="w-full sm:w-72 flex flex-col gap-3">
                  {/* Primary Amber Button: VIEW SPONSORSHIP TIERS */}
                  <button
                    type="button"
                    onClick={() => setIsTiersModalOpen(true)}
                    className="cursor-pointer w-full py-3.5 px-6 bg-[#F59E0B] hover:bg-[#E58A13] text-[#071120] text-[11px] font-extrabold tracking-[0.16em] uppercase rounded-[2px] transition-all duration-200 shadow-md text-center"
                  >
                    VIEW SPONSORSHIP TIERS
                  </button>

                  {/* Secondary Dark Button: CONTACT OUR TEAM */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTierForContact("");
                      setIsContactModalOpen(true);
                    }}
                    className="cursor-pointer w-full py-3.5 px-6 bg-[#071120] hover:bg-[#0D1C36] text-white text-[11px] font-extrabold tracking-[0.16em] uppercase rounded-[2px] border border-slate-700/80 hover:border-slate-500 transition-all duration-200 text-center"
                  >
                    CONTACT OUR TEAM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <FooterSection hideTopSections={true} />

      {/* ========================================================
          SPONSORSHIP TIERS MODAL
          ======================================================== */}
      {isTiersModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A1428] text-white rounded-lg shadow-2xl border border-slate-700/70 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-[#070E1C]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-[#F59E0B] inline-block rounded-[1px]" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#F59E0B] uppercase">
                    PARTNERSHIP OPPORTUNITIES
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  OSC Sponsorship Tiers
                </h3>
              </div>
              <button
                onClick={() => setIsTiersModalOpen(false)}
                className="cursor-pointer p-2 text-slate-400 hover:text-white rounded-md transition-colors"
                aria-label="Close modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Body: Tiers Grid */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SPONSORSHIP_TIERS.map((tier) => (
                  <div
                    key={tier.name}
                    className={`p-5 rounded-md border transition-all flex flex-col justify-between ${
                      tier.popular
                        ? "bg-[#0E1F40] border-[#F59E0B]/50 shadow-lg"
                        : "bg-[#0B172E] border-slate-800"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-[2px] border ${tier.badgeBg} ${tier.badgeColor}`}>
                          {tier.name}
                        </span>
                        {tier.popular && (
                          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#F59E0B] text-black px-2 py-0.5 rounded-[2px]">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 font-medium mb-4 leading-relaxed">
                        {tier.tagline}
                      </p>
                      <div className="space-y-2 mb-6">
                        {tier.perks.map((perk, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                            <span className="text-[#F59E0B] font-bold mt-0.5">✓</span>
                            <span>{perk}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOpenContactWithTier(tier.name)}
                      className={`cursor-pointer w-full py-2.5 px-4 text-xs font-bold tracking-wider uppercase rounded-[2px] transition-colors text-center ${
                        tier.popular
                          ? "bg-[#F59E0B] hover:bg-[#E58A13] text-black"
                          : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                      }`}
                    >
                      Inquire About {tier.name.split(" ")[0]}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-800 bg-[#070E1C] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <span>Have custom sponsorship requirements?</span>
              <button
                type="button"
                onClick={() => {
                  setIsTiersModalOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="cursor-pointer text-[#F59E0B] hover:underline font-bold"
              >
                Talk directly with our Partnerships Team →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          CONTACT OUR TEAM MODAL
          ======================================================== */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#0A1428] text-white rounded-lg shadow-2xl border border-slate-700/70 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-[#070E1C]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-[#F59E0B] inline-block rounded-[1px]" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#F59E0B] uppercase">
                    GET IN TOUCH
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  Contact Partnerships Team
                </h3>
              </div>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="cursor-pointer p-2 text-slate-400 hover:text-white rounded-md transition-colors"
                aria-label="Close modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {contactSubmitted ? (
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-2xl mb-4">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-xs text-slate-300 max-w-xs leading-relaxed mb-6">
                  Our Partnerships Lead will review your message and reply within 24–48 hours with customized partnership options.
                </p>
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(false)}
                  className="cursor-pointer px-6 py-2.5 bg-[#F59E0B] text-black font-bold text-xs rounded-[2px]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="p-6 space-y-4"
              >
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Miller"
                    className="w-full px-3.5 py-2.5 bg-[#070E1C] border border-slate-700 rounded-[2px] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 bg-[#070E1C] border border-slate-700 rounded-[2px] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Company or Org Name"
                      className="w-full px-3.5 py-2.5 bg-[#070E1C] border border-slate-700 rounded-[2px] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Interested Tier / Program
                  </label>
                  <select
                    value={selectedTierForContact}
                    onChange={(e) => setSelectedTierForContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#070E1C] border border-slate-700 rounded-[2px] text-xs text-white focus:outline-none focus:border-[#F59E0B]"
                  >
                    <option value="">General Sponsorship Inquiry</option>
                    <option value="Platinum">Title / Platinum Sponsor</option>
                    <option value="Gold">Gold Sponsor</option>
                    <option value="Silver">Silver Sponsor</option>
                    <option value="Community">Community &amp; Tooling Partner</option>
                    <option value="Hackathon">Hackathon Track / Event Co-Host</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Message / Goals *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your developer reach goals, budget, or event timeline..."
                    className="w-full px-3.5 py-2.5 bg-[#070E1C] border border-slate-700 rounded-[2px] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="cursor-pointer w-full py-3 px-4 bg-[#F59E0B] hover:bg-[#E58A13] text-[#071120] text-xs font-extrabold tracking-[0.14em] uppercase rounded-[2px] transition-colors"
                  >
                    Submit Partnership Inquiry
                  </button>
                  <p className="text-[10px] text-slate-500 text-center mt-2.5">
                    Or email directly to{" "}
                    <a
                      href="mailto:partners@osconnect.org?subject=Sponsorship%20Inquiry"
                      className="text-[#F59E0B] hover:underline"
                    >
                      partners@osconnect.org
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
