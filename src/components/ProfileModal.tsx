"use client";

import { useEffect } from "react";
import Image from "next/image";

export interface SessionTopic {
  title: string;
  description?: string;
}

export interface ProfileData {
  name: string;
  role: string;
  org: string;
  badge: string;
  photo?: string;
  bioParagraphs: string[];
  tags: string[];
  sessionTopic?: SessionTopic | string;
  slug?: string;
  linkedinUrl?: string;
}

interface ProfileModalProps {
  profile: ProfileData | null;
  onClose: () => void;
}

const avatarGradients = [
  "from-blue-400 to-blue-600",
  "from-emerald-400 to-emerald-600",
  "from-violet-400 to-violet-600",
  "from-amber-400 to-amber-600",
  "from-rose-400 to-rose-600",
];

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter((w) => w.length > 0 && !w.startsWith("Dr."))
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return avatarGradients[Math.abs(hash) % avatarGradients.length];
}

export default function ProfileModal({ profile, onClose }: ProfileModalProps) {
  // Lock body scroll cleanly without moving or resetting window scroll position
  useEffect(() => {
    if (!profile) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [profile]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (profile) {
      window.addEventListener("keydown", handleKey);
    }
    return () => window.removeEventListener("keydown", handleKey);
  }, [profile, onClose]);

  if (!profile) return null;

  const initials = getInitials(profile.name);
  const avatarColor = getAvatarColor(profile.name);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Dark backdrop */}
      <div className="absolute inset-0 bg-[#0F172A]/65 backdrop-blur-[2px]" />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-[620px] max-h-[90vh] overflow-y-auto bg-white rounded-[4px] shadow-2xl p-6 sm:p-9 text-left z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          aria-label="Close"
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

        {/* Header Profile Section */}
        <div className="flex items-start gap-5 sm:gap-6 mb-6">
          {/* Profile Photo Frame with Offset Shadow */}
          <div className="relative w-[110px] h-[110px] sm:w-[125px] sm:h-[125px] shrink-0">
            {/* Hard Offset Shadow Block */}
            <div className="absolute top-1.5 left-1.5 w-full h-full bg-[#A3B8D8]/70 z-0" />
            {/* Dark Bordered Square Photo */}
            <div className="relative z-10 w-full h-full border-2 border-[#0B1428] bg-white overflow-hidden shadow-xs">
              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  className="object-cover object-center"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-br ${avatarColor} flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-2xl tracking-wide">
                    {initials}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Header Info */}
          <div className="flex-1 pr-6 pt-0.5">
            <span className="inline-block px-2.5 py-0.5 bg-[#EFF6FF] text-[#2563EB] text-[10px] font-extrabold tracking-[0.1em] uppercase rounded-[2px] mb-2">
              {profile.badge}
            </span>
            <div className="flex items-center justify-between gap-3 mb-1">
              <h2 className="text-2xl sm:text-[26px] font-extrabold text-[#0B0F1A] tracking-tight leading-tight">
                {profile.name}
              </h2>
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${profile.name}'s LinkedIn Profile`}
                  className="text-[#0A66C2] hover:text-[#004182] hover:scale-110 transition-all p-1 inline-flex items-center justify-center shrink-0 ml-auto"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-[13.5px] font-semibold text-slate-600 leading-snug">
              {profile.role}
            </p>
            <p className="text-[12.5px] font-bold text-[#2563EB] mt-0.5">
              {profile.org}
            </p>
          </div>
        </div>

        {/* BIOGRAPHY Section */}
        <div>
          <h3 className="text-[11px] font-extrabold tracking-[0.18em] text-[#94A3B8] uppercase mb-3">
            BIOGRAPHY
          </h3>
          <div className="space-y-3.5 text-[13px] text-slate-600 font-medium leading-relaxed">
            {profile.bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* SESSION TOPIC Section */}
        {profile.sessionTopic && (
          <div className="mt-6 pt-5 border-t border-slate-100">
            <h3 className="text-[11px] font-extrabold tracking-[0.18em] text-[#94A3B8] uppercase mb-3">
              SESSION TOPIC
            </h3>
            {typeof profile.sessionTopic === "string" ? (
              <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                {profile.sessionTopic}
              </p>
            ) : (
              <div className="space-y-2">
                <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                  {profile.sessionTopic.title}
                </p>
                {profile.sessionTopic.description && (
                  <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                    {profile.sessionTopic.description}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
