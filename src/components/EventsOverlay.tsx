"use client";

import { useEffect } from "react";
import Link from "next/link";

interface EventsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

// Custom SVG Icons matching exact Events dropdown screenshot
function CalendarIcon() {
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function LiveSignalIcon() {
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
      <path d="M4.93 4.93a10 10 0 0 1 14.14 0" />
      <path d="M7.76 7.76a6 6 0 0 1 8.48 0" />
      <circle cx="12" cy="12" r="2" />
      <path d="M4.93 19.07a10 10 0 0 1 0-14.14" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function HackathonCodeIcon() {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m7 8 4 4-4 4" />
      <path d="M13 16h4" />
    </svg>
  );
}

function EventGalleryIcon() {
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

export default function EventsOverlay({ isOpen, onClose }: EventsOverlayProps) {
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

      {/* Overlay panel */}
      <div
        className="fixed inset-x-0 z-50 shadow-2xl animate-slideDown overflow-y-auto overscroll-contain"
        style={{ top: "64px", maxHeight: "calc(100vh - 64px)" }}
      >
        <div className="w-full bg-white border-t border-gray-100">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 gap-y-8 md:gap-y-0 min-h-[280px]">
              {/* --- Column 1: FLAGSHIP EVENTS --- */}
              <div className="md:pr-10 lg:pr-14">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-7">
                  FLAGSHIP EVENTS
                </h3>

                <div className="space-y-8">
                  {/* Open Source Connect India */}
                  <Link
                    href="https://luma.com/3u22sml7"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="group cursor-pointer flex items-start gap-4 block"
                  >
                    <CalendarIcon />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                          Open Source Connect India
                        </h4>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[340px]">
                        A nationwide open source initiative bringing together students, developers, contributors, and industry leaders.
                      </p>
                    </div>
                  </Link>

                  {/* Open Source Connect Global */}
                  <Link
                    href="https://luma.com/vyb4bntj"
                    target="_blank"
                    onClick={onClose}
                    className="group cursor-pointer flex items-start gap-4 block"
                  >
                    <LiveSignalIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Open Source Connect Global
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[340px]">
                        A global community initiative connecting contributors, maintainers, developers, and technology communities.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* --- Column 2: EVENT EXPERIENCES --- */}
              <div className="pt-8 md:pt-0 md:pl-10 lg:pl-14">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-7">
                  EVENT EXPERIENCES
                </h3>

                <div className="space-y-8">
                  {/* Hackathons */}
                  <Link
                    href="https://ai-builders-hackathon-2026.devpost.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="group cursor-pointer flex items-start gap-4 block"
                  >
                    <HackathonCodeIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Hackathons
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[340px]">
                        Build innovative solutions, collaborate with developers, and compete in hands-on challenges.
                      </p>
                    </div>
                  </Link>

                  {/* Workshops & Tech Talks */}
                  <div className="group cursor-pointer flex items-start gap-4">
                    <EventGalleryIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Workshops &amp; Tech Talks
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[340px]">
                        Learn from engineers, founders, researchers, and industry experts through practical sessions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom footer strip */}
          <div className="w-full bg-[#F8FAFC] border-t border-gray-100 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-bold tracking-[0.18em] text-gray-400 uppercase text-[10px] sm:text-[11px]">
                STAY UPDATED WITH OUR NEWSLETTER
              </span>

              <Link
                href="/events"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-blue hover:underline"
              >
                <span>Event Gallery</span>
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
    </>
  );
}
