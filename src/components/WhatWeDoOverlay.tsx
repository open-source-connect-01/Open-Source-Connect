"use client";

import { useEffect } from "react";
import Link from "next/link";

interface WhatWeDoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

// Custom SVG Icons matching exact What We Do dropdown screenshot
function OpenCollaborationIcon() {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function OpenHardwareRoboticsIcon() {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="6 9 9 12 6 15" />
      <line x1="11" y1="15" x2="16" y2="15" />
    </svg>
  );
}

function AIResearchIcon() {
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
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" />
    </svg>
  );
}

function FrontierTechnologyIcon() {
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
      <path d="M5 5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-2" />
      <rect x="2" y="6" width="16" height="16" rx="2" />
      <polygon points="8 10 13 14 8 18" fill="#2563EB" />
    </svg>
  );
}

export default function WhatWeDoOverlay({ isOpen, onClose }: WhatWeDoOverlayProps) {
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
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 gap-y-8 md:gap-y-0 min-h-[240px]">
              {/* --- Column 1: CORE INITIATIVES --- */}
              <div className="md:pr-10 lg:pr-14">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-7">
                  CORE INITIATIVES
                </h3>

                <div className="space-y-8">
                  {/* Open Collaboration */}
                  <Link
                    href="/open-collaboration"
                    onClick={onClose}
                    className="group cursor-pointer flex items-start gap-4"
                  >
                    <OpenCollaborationIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Open Collaboration
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[380px]">
                        Supporting developers and communities to share, explore, and build through open source.
                      </p>
                    </div>
                  </Link>

                  {/* Open Hardware & Robotics */}
                  <Link
                    href="/open-hardware-robotics"
                    onClick={onClose}
                    className="group cursor-pointer flex items-start gap-4"
                  >
                    <OpenHardwareRoboticsIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Open Hardware &amp; Robotics
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[380px]">
                        Supporting collaborative innovation in robotics, embedded systems, IoT, and accessible open hardware.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* --- Column 2: RESEARCH & LEARNING --- */}
              <div className="pt-8 md:pt-0 md:pl-10 lg:pl-14">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-7">
                  RESEARCH &amp; LEARNING
                </h3>

                <div className="space-y-8">
                  {/* AI & Research Initiatives */}
                  <Link
                    href="/ai-research-initiatives"
                    onClick={onClose}
                    className="group cursor-pointer flex items-start gap-4"
                  >
                    <AIResearchIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        AI &amp; Research Initiatives
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[380px]">
                        Advancing open research in artificial intelligence, machine learning, and emerging intelligent systems.
                      </p>
                    </div>
                  </Link>

                  {/* Frontier Technology */}
                  <Link
                    href="/frontier-technology"
                    onClick={onClose}
                    className="group cursor-pointer flex items-start gap-4"
                  >
                    <FrontierTechnologyIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Frontier Technology
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[380px]">
                        Exploring emerging technologies where open collaboration can accelerate research and experimentation.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom footer strip */}
          <div className="w-full bg-[#F8FAFC] border-t border-gray-100 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-bold tracking-[0.18em] text-gray-400 uppercase text-[10px] sm:text-[11px]">
                EXPLORE OUR FULL IMPACT
              </span>

              <Link
                href="/about"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-blue hover:underline"
              >
                <span>View All Programs</span>
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
