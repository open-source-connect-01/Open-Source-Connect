"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CommunityOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

// Custom SVG Icons matching exact Community dropdown screenshot
function TrophyIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
      <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
      <path d="M18 4H6v7a6 6 0 0 0 12 0V4z" />
    </svg>
  );
}

function VolunteersIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function GuidelinesIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      <path d="m14.5 12.5-8 8a2.12 2.12 0 1 1-3-3l8-8" />
      <path d="m16 16 6-6" />
      <path d="m8 8 6-6" />
      <path d="m9 7 8 8" />
      <path d="m21 11-8-8" />
    </svg>
  );
}

export default function CommunityOverlay({ isOpen, onClose }: CommunityOverlayProps) {
  const [email, setEmail] = useState("");

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
        onClick={onClose}
      />

      {/* Overlay dropdown panel */}
      <div
        className="fixed inset-x-0 z-50 shadow-2xl animate-slideDown overflow-y-auto overscroll-contain"
        style={{ top: "64px", maxHeight: "calc(100vh - 64px)" }}
      >
        <div className="w-full bg-white border-t border-gray-100">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 gap-y-8 md:gap-y-0 min-h-[280px]">
              {/* --- Column 1: COMMUNITY ENGAGEMENT --- */}
              <div className="md:pr-10 lg:pr-14">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-7">
                  COMMUNITY ENGAGEMENT
                </h3>

                <div className="space-y-8">
                  {/* Top Contributors */}
                  <div className="group cursor-pointer flex items-start gap-4">
                    <TrophyIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Top Contributors
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[340px]">
                        Celebrate the individuals driving our success and innovation.
                      </p>
                    </div>
                  </div>

                  {/* Volunteer With Us */}
                  <div className="group cursor-pointer flex items-start gap-4">
                    <VolunteersIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Volunteer With Us
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[340px]">
                        Join our global network of passionate open source advocates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Column 2: GOVERNANCE --- */}
              <div className="pt-8 md:pt-0 md:pl-10 lg:pl-14">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-7">
                  GOVERNANCE
                </h3>

                <div className="space-y-8">
                  {/* Community Guidelines */}
                  <div className="group cursor-pointer flex items-start gap-4">
                    <GuidelinesIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Community Guidelines
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[340px]">
                        Read our essential standards for collaboration, ethics, and safety.
                      </p>
                    </div>
                  </div>

                  {/* View Community Hub Link */}
                  <div className="pt-2">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-blue hover:underline"
                    >
                      <span>View Community Hub</span>
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
            </div>
          </div>

          {/* Bottom newsletter strip */}
          <div className="w-full bg-[#F8FAFC] border-t border-gray-100 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-bold tracking-[0.18em] text-gray-400 uppercase text-[10px] sm:text-[11px]">
                GET THE LATEST ECOSYSTEM NEWS DELIVERED MONTHLY.
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 sm:w-[220px] text-base sm:text-xs bg-white border border-gray-200 px-3.5 py-2 rounded-md outline-none focus:border-accent-blue transition-colors duration-200 placeholder-gray-400"
                />
                <button className="px-5 py-2 bg-accent-blue text-white text-xs font-bold rounded-md hover:bg-blue-600 transition-all duration-200 shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



