"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ResearchLeadershipSection from "./ResearchLeadershipSection";
import ProfileModal from "./ProfileModal";
import type { ProfileData } from "./ProfileModal";

interface AboutOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

type SubView = "main" | "mentors-speakers";

// Custom SVG Icons matching exact dropdown screenshot
function BuildingIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      {/* Left Tower */}
      <rect x="3" y="3" width="8" height="18" />
      <line x1="3" y1="7.5" x2="11" y2="7.5" />
      <line x1="3" y1="12" x2="11" y2="12" />
      <line x1="3" y1="16.5" x2="11" y2="16.5" />

      {/* Right Tower */}
      <path d="M11 8h10v13H11" />
      <line x1="14.5" y1="12" x2="17.5" y2="12" />
      <line x1="14.5" y1="16.5" x2="17.5" y2="16.5" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      {/* Slider 1 (Left) */}
      <line x1="4.5" y1="2.5" x2="4.5" y2="6.5" />
      <rect x="1.5" y="6.5" width="6" height="11" rx="1.5" />
      <line x1="1.5" y1="12" x2="7.5" y2="12" />
      <line x1="4.5" y1="17.5" x2="4.5" y2="21.5" />

      {/* Slider 2 (Center) */}
      <line x1="12" y1="2.5" x2="12" y2="6.5" />
      <rect x="9" y="6.5" width="6" height="11" rx="1.5" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="12" y1="17.5" x2="12" y2="21.5" />

      {/* Slider 3 (Right) */}
      <line x1="19.5" y1="2.5" x2="19.5" y2="6.5" />
      <rect x="16.5" y="6.5" width="6" height="11" rx="1.5" />
      <line x1="16.5" y1="12" x2="22.5" y2="12" />
      <line x1="19.5" y1="17.5" x2="19.5" y2="21.5" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      {/* Top Clip / Tab */}
      <path d="M9 7V3.5C9 2.67 9.67 2 10.5 2h3c.83 0 1.5.67 1.5 1.5V7" />
      <line x1="12" y1="3.5" x2="12" y2="4.5" strokeWidth="1.8" />

      {/* Main ID Badge Outline */}
      <rect x="2" y="7" width="20" height="15" rx="2" />

      {/* Profile Avatar (Left) */}
      <circle cx="8" cy="12.5" r="1.8" fill="#2563EB" stroke="none" />
      <path d="M5.2 18.5c0-1.6 1.25-2.7 2.8-2.7s2.8 1.1 2.8 2.7Z" fill="#2563EB" stroke="none" />

      {/* Text / Info Lines (Right) */}
      <line x1="14" y1="12.5" x2="18.5" y2="12.5" />
      <line x1="14" y1="16.5" x2="18.5" y2="16.5" />
    </svg>
  );
}

function PartnersIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      {/* Head */}
      <circle cx="8.5" cy="8.5" r="3.5" />
      {/* Shoulders */}
      <path d="M2 20.5c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6" />
      {/* Inner Signal Wave */}
      <path d="M16 6a5 5 0 0 1 0 7" />
      {/* Outer Signal Wave */}
      <path d="M19.5 2.5a9.5 9.5 0 0 1 0 14" />
    </svg>
  );
}

export default function AboutOverlay({ isOpen, onClose }: AboutOverlayProps) {
  const [subview, setSubview] = useState<SubView>("main");
  const [selectedProfile, setSelectedProfile] = useState<ProfileData | null>(null);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setSubview("main");
    }
  }

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-x-0 z-40 bg-navy/30 backdrop-blur-[2px]"
        style={{ top: "64px", bottom: 0 }}
        onClick={subview === "main" ? onClose : () => setSubview("main")}
      />

      {/* Overlay panel */}
      <div
        className={`fixed inset-x-0 z-50 shadow-2xl animate-slideDown overscroll-contain ${
          selectedProfile ? "overflow-hidden" : "overflow-y-auto"
        }`}
        style={{ top: "64px", maxHeight: "calc(100vh - 64px)" }}
      >
        <div className="w-full bg-white border-t border-gray-100">

          {/* ---------- MAIN VIEW ---------- */}
          {subview === "main" && (
            <div>
              <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                  {/* --- Column 1: Image + About Open Source Connect --- */}
                  <div className="md:col-span-5 lg:col-span-4">
                    <div className="relative mb-6 pr-1 pb-1">
                      {/* Solid periwinkle offset shadow block - exact same width & height as image, positioned bottom-right */}
                      <div className="absolute top-1 left-1 w-full h-full bg-[#B4C6EE] z-0" />
                      {/* Image container with sharp 90-degree corners and subtle bottom-right drop shadow */}
                      <div className="relative z-10 shadow-[4px_6px_20px_rgba(0,0,0,0.25)] bg-white">
                        <Image
                          src="/about_foundation_v2.png"
                          alt="About Open Source Connect"
                          width={400}
                          height={250}
                          className="w-full aspect-[16/10] object-cover rounded-none block"
                        />
                      </div>
                    </div>
                    <h3 className="text-[17px] font-extrabold text-[#0B0F1A] tracking-tight">
                      About Open Source Connect
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1.5 max-w-[340px]">
                      Learn about our mission, values, and
                      commitment to making open source more accessible.
                    </p>
                  </div>

                  {/* --- Column 2: THE FOUNDATION --- */}
                  <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                      <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                        THE FOUNDATION
                      </h3>

                      <div className="space-y-7">
                        {/* About the OSC */}
                        <Link
                          href="/about"
                          className="group cursor-pointer flex items-start gap-4"
                          onClick={onClose}
                        >
                          <BuildingIcon />
                          <div>
                            <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                              About the OSC
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-snug">
                              Our mission, vision, and values shaping a
                              stronger open source ecosystem.
                            </p>
                          </div>
                        </Link>

                        {/* Meet the team */}
                        <div className="group cursor-pointer flex items-start gap-4">
                          <SlidersIcon />
                          <div>
                            <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                              Meet the team
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-snug">
                              Meet the people building programs,
                              communities, and opportunities at OSC.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* --- Column 3: OUR PEOPLE --- */}
                    <div>
                      <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                        OUR PEOPLE
                      </h3>

                      <div className="space-y-7">
                        {/* Speakers & Mentors */}
                        <Link
                          href="/speakers-and-mentors"
                          className="group cursor-pointer flex items-start gap-4"
                          onClick={onClose}
                        >
                          <BadgeIcon />
                          <div>
                            <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                              Speakers &amp; Mentors
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-snug">
                              Industry leaders sharing knowledge, experience,
                              and insights with our community.
                            </p>
                          </div>
                        </Link>

                        {/* Partners */}
                        <Link
                          href="/partners"
                          className="group cursor-pointer flex items-start gap-4"
                          onClick={onClose}
                        >
                          <PartnersIcon />
                          <div>
                            <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                              Partners
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-snug">
                              Organizations and communities working
                              with us to strengthen open source.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom footer strip */}
              <div className="w-full bg-[#F8FAFC] border-t border-gray-100 py-4.5 px-6 lg:px-8">
                <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold tracking-[0.18em] text-gray-400 uppercase text-[10px] sm:text-[11px]">
                      STAY UPDATED WITH OUR NEWSLETTER
                    </span>
                    <Link
                      href="#"
                      className="font-bold text-accent-blue hover:underline text-xs"
                    >
                      Sign up now
                    </Link>
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-blue hover:underline"
                  >
                    <span>View Our History</span>
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
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ---------- MENTORS & SPEAKERS SUBVIEW ---------- */}
          {subview === "mentors-speakers" && (
            <div>
              <div className="sticky top-0 z-20 border-b border-gray-100 bg-white/95 backdrop-blur-sm px-4 sm:px-8 py-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSubview("main")}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-[10px] font-bold tracking-[0.14em] uppercase text-[#0B0F1A] shadow-xs hover:bg-gray-50 transition-colors cursor-pointer"
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
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>
                  Back to Overview
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                  aria-label="Close overlay"
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
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <ResearchLeadershipSection
                selectedProfile={selectedProfile}
                onProfileSelect={(profile) => setSelectedProfile(profile)}
                onProfileClose={() => setSelectedProfile(null)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </>
  );
}






