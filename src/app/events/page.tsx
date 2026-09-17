"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsRow from "@/components/StatsRow";
import CoreFocusSection from "@/components/CoreFocusSection";
import CommunitySpotlightSection from "@/components/CommunitySpotlightSection";
import ConnectContributeGrowSection from "@/components/ConnectContributeGrowSection";
import FooterSection from "@/components/FooterSection";
import ResearchLeadershipSection from "@/components/ResearchLeadershipSection";
import type { ActiveOverlay } from "@/components/Navbar";

export default function EventsPage() {
  const router = useRouter();
  const [showResearch, setShowResearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (label: ActiveOverlay) => {
    setIsMobileMenuOpen(false);
    if (label && label !== "events") {
      router.push("/?nav=" + label);
    }
  };

  const navBar = (
    <Navbar
      activeOverlay={null}
      onNavClick={handleNavClick}
      onMobileNavClick={handleNavClick}
      isMobileMenuOpen={isMobileMenuOpen}
      onMobileMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
    />
  );

  if (showResearch) {
    return (
      <div className="flex flex-col min-h-full">
        <header className="sticky top-0 z-[60] bg-white shadow-sm border-b border-gray-100">
          {navBar}
        </header>
        <main className="flex-1">
          <ResearchLeadershipSection />
        </main>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-full overflow-hidden">
      <header className="sticky top-0 z-[60] bg-white shadow-sm border-b border-gray-100">
        {navBar}
      </header>

      <main className="relative flex-1">
        <div className="pointer-events-none select-none opacity-35 blur-[1.5px] transition-all duration-300">
          <HeroSection />
          <StatsRow />
          <CoreFocusSection />
          <CommunitySpotlightSection />
          <ConnectContributeGrowSection />
          <FooterSection />
        </div>

        <div
          className="fixed inset-x-0 z-40 bg-navy/25 backdrop-blur-sm"
          style={{ top: "64px", bottom: 0 }}
        />

        <div
          className="fixed inset-x-0 z-50 shadow-2xl animate-slideDown overflow-y-auto overscroll-contain"
          style={{ top: "64px", maxHeight: "calc(100vh - 64px)" }}
        >
          <div className="w-full bg-white">
            <div className="sticky top-0 z-10 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
              <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-start">
                <button
                  onClick={() => router.push("/")}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-[9px] font-bold tracking-[0.16em] uppercase text-navy shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 cursor-pointer"
                  aria-label="Back to home"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>
                  Back
                </button>
              </div>
            </div>

            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                <div>
                  <h3 className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                    Browse Events
                  </h3>

                  <div className="space-y-8">
                    <div className="group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-3">
                          <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                            Upcoming Events
                          </h4>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-purple-100 text-[8px] font-bold text-purple-600 uppercase tracking-wider">
                            12 New
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.08 9.08a4 4 0 0 0 0 5.84" />
                            <path d="M14.92 9.08a4 4 0 0 1 0 5.84" />
                            <path d="M6.34 6.34a8 8 0 0 0 0 11.32" />
                            <path d="M17.66 6.34a8 8 0 0 1 0 11.32" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-3">
                          <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                            Ongoing Now
                          </h4>
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        </div>
                      </div>
                    </div>

                    <div className="group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        </div>
                        <div className="flex items-center h-10">
                          <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                            Past Events
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                    Special Programs
                  </h3>

                  <div className="space-y-8">
                    <div className="group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                            Global Hackathons
                          </h4>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            Compete with top developers and build the future of open source.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                            Event Gallery
                          </h4>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            Explore highlights, keynote recordings, and session photography.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-gray-50 border-t border-gray-100 mt-10 lg:mt-12">
                <div className="max-w-[1240px] mx-auto pl-0 lg:pl-0 pr-0 lg:pr-0 py-5">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                      Stay updated with our newsletter
                    </p>
                    <button
                      onClick={() => setShowResearch(true)}
                      className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-accent-blue uppercase hover:text-accent-blue/80 transition-colors duration-200 group cursor-pointer"
                    >
                      View Full Calendar
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
