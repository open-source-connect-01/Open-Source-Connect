import React from "react";
import Image from "next/image";

// ==========================================
// 1. HIGH-FIDELITY SPONSOR LOGO COMPONENTS
// ==========================================

export function NexFellowLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <Image
        src="/sponsors/nexfellow.png"
        alt="NexFellow"
        width={190}
        height={52}
        className="h-10 w-auto max-w-[175px] object-contain"
        priority
      />
    </div>
  );
}

export function NordVPNLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <Image
        src="/sponsors/nordvpn.png"
        alt="NordVPN"
        width={190}
        height={50}
        className="h-9 w-auto max-w-[170px] object-contain"
        priority
      />
    </div>
  );
}

export function NordPassLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <Image
        src="/sponsors/nordpass.png"
        alt="NordPass"
        width={190}
        height={50}
        className="h-9 w-auto max-w-[170px] object-contain"
        priority
      />
    </div>
  );
}

export function IncogniLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <Image
        src="/sponsors/incogni.png"
        alt="incogni"
        width={180}
        height={50}
        className="h-8 w-auto max-w-[160px] object-contain"
        priority
      />
    </div>
  );
}

export function SailyLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <Image
        src="/sponsors/saily.png"
        alt="Saily"
        width={180}
        height={55}
        className="h-10 w-auto max-w-[145px] object-contain"
        priority
      />
    </div>
  );
}

export function TruScholarLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Graduation Mortarboard on Certificate/Shield */}
      <svg
        viewBox="0 0 44 44"
        className="w-10 h-10 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Blue Open Book / Shield Base */}
        <path
          d="M9 22C9 28.5 14 34.5 22 37C30 34.5 35 28.5 35 22V17L22 13L9 17V22Z"
          fill="#1E3A8A"
        />
        {/* Red / Orange Graduation Mortarboard Diamond */}
        <polygon points="22,6 39,14 22,22 5,14" fill="#EA580C" />
        {/* Cap Base */}
        <path
          d="M13 18.5V23.5C13 26 17 28 22 28C27 28 31 26 31 23.5V18.5L22 22.5L13 18.5Z"
          fill="#C2410C"
        />
        {/* White Tassel */}
        <path
          d="M32 16.5V25.5C32 26 31 26.5 30 26.5"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="30" cy="27.5" r="1.5" fill="#FFFFFF" />
      </svg>
      <div className="flex items-baseline">
        <span className="text-[22px] font-black tracking-tight text-[#0F172A]">
          Tru
        </span>
        <span className="text-[22px] font-black tracking-tight text-[#EA580C]">
          Scholar
        </span>
      </div>
    </div>
  );
}

export function AlgoverseLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* Pixelated Brain Cluster */}
      <svg
        viewBox="0 0 52 40"
        className="w-11 h-8 shrink-0 mb-1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brain lobe pixel cubes */}
        <rect x="6" y="10" width="7" height="7" rx="1" fill="#0D9488" />
        <rect x="14" y="6" width="7" height="7" rx="1" fill="#0284C7" />
        <rect x="22" y="3" width="7" height="7" rx="1" fill="#0F172A" />
        <rect x="30" y="5" width="7" height="7" rx="1" fill="#06B6D4" />
        <rect x="38" y="11" width="7" height="7" rx="1" fill="#0D9488" />
        <rect x="13" y="14" width="7" height="7" rx="1" fill="#0F172A" />
        <rect x="21" y="11" width="7" height="7" rx="1" fill="#06B6D4" />
        <rect x="29" y="13" width="7" height="7" rx="1" fill="#0284C7" />
        <rect x="37" y="19" width="7" height="7" rx="1" fill="#0F172A" />
        <rect x="7" y="18" width="7" height="7" rx="1" fill="#06B6D4" />
        <rect x="15" y="22" width="7" height="7" rx="1" fill="#0D9488" />
        <rect x="23" y="19" width="7" height="7" rx="1" fill="#0F172A" />
        <rect x="31" y="21" width="7" height="7" rx="1" fill="#0D9488" />
        <rect x="23" y="27" width="7" height="7" rx="1" fill="#0284C7" />
        <rect x="29" y="29" width="7" height="7" rx="1" fill="#0F172A" />
      </svg>
      <span className="text-[12px] font-black tracking-[0.2em] text-[#0F172A] uppercase">
        ALGOVERSE
      </span>
    </div>
  );
}

export function CodeCraftersLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* CodeCrafters Branch Chevron Emblem */}
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 7L6 16L12 25"
          stroke="#1E293B"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 7L13 16L19 25"
          stroke="#1E293B"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 16H27"
          stroke="#1E293B"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className="text-[20px] font-bold text-[#1E293B]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        CodeCrafters
      </span>
    </div>
  );
}

export function SylusLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Sylus 4-point radiant gradient star */}
      <svg
        viewBox="0 0 44 44"
        className="w-8 h-8 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sylusGradient" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="50%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        {/* 4-pointed curved sparkle */}
        <path
          d="M22 2C22 13 31 22 42 22C31 22 22 31 22 42C22 31 13 22 2 22C13 22 22 13 22 2Z"
          fill="url(#sylusGradient)"
        />
      </svg>
      <span className="text-[24px] font-normal tracking-tight text-[#1E293B]">
        sylus
      </span>
    </div>
  );
}

export function SirayAiLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Siray Geometric Origami Bowtie */}
      <svg
        viewBox="0 0 36 36"
        className="w-7 h-7 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 8L18 18L4 28L10 18L4 8Z"
          fill="#000000"
        />
        <path
          d="M32 8L18 18L32 28L26 18L32 8Z"
          fill="#000000"
        />
      </svg>
      <div className="flex items-start">
        <span className="text-[25px] font-bold text-[#000000] tracking-tight leading-none">
          Siray
        </span>
        <span className="text-[10px] font-bold text-[#000000] ml-0.5 uppercase">
          AI
        </span>
      </div>
    </div>
  );
}

export function ZulipLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Zulip Layered Z Chat Icon */}
      <svg
        viewBox="0 0 44 44"
        className="w-8 h-8 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="zulipGrad1" x1="4" y1="8" x2="38" y2="8" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="zulipGrad2" x1="4" y1="36" x2="38" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
        {/* Top Horizontal Bar with Rounded Ends */}
        <rect x="6" y="8" width="32" height="7" rx="3.5" fill="url(#zulipGrad1)" />
        {/* Diagonal Bar */}
        <polygon points="34,14 14,30 20,30 38,14" fill="#3B82F6" />
        {/* Bottom Horizontal Bar */}
        <rect x="6" y="29" width="32" height="7" rx="3.5" fill="url(#zulipGrad2)" />
      </svg>
      <span className="text-[24px] font-extrabold tracking-wider text-[#3B82F6]">
        ZULIP
      </span>
    </div>
  );
}

export function TinComputerLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div
      className={`bg-[#F4EFE6] px-5 py-2.5 rounded-[3px] select-none flex items-center justify-center border border-[#E9E2D5] ${className}`}
    >
      <span
        className="text-[17px] font-medium text-[#1E293B] whitespace-nowrap"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Tin Computer
      </span>
    </div>
  );
}

export function JulepLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Julep 4 diagonal rounded capsules */}
      <svg
        viewBox="0 0 38 42"
        className="w-7 h-8 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bar 1 */}
        <rect
          x="4"
          y="4"
          width="7"
          height="16"
          rx="3.5"
          transform="rotate(-25 4 4)"
          fill="#000000"
        />
        {/* Bar 2 */}
        <rect
          x="14"
          y="11"
          width="7"
          height="18"
          rx="3.5"
          transform="rotate(-25 14 11)"
          fill="#000000"
        />
        {/* Bar 3 */}
        <rect
          x="4"
          y="18"
          width="7"
          height="16"
          rx="3.5"
          transform="rotate(-25 4 18)"
          fill="#000000"
        />
      </svg>
      <span className="text-[28px] font-black tracking-tight text-[#000000]">
        julep
      </span>
    </div>
  );
}

// ==========================================
// 2. COMMUNITY PARTNER LOGOS
// ==========================================

export function GitHubLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 fill-current text-gray-900">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
      <span className="text-[20px] font-bold text-gray-900 tracking-tight">
        GitHub Campus
      </span>
    </div>
  );
}

export function DevpostLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-8 h-8 rounded-md bg-[#003E54] flex items-center justify-center text-white font-black text-lg">
        D
      </div>
      <span className="text-[20px] font-extrabold text-[#003E54] tracking-tight">
        DEVPOST
      </span>
    </div>
  );
}

export function FossUnitedLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-white font-black text-sm">
        FU
      </div>
      <div className="flex flex-col">
        <span className="text-[17px] font-bold text-[#0F172A] leading-tight">
          FOSS United
        </span>
        <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
          Foundation
        </span>
      </div>
    </div>
  );
}

export function MlhLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-8 h-8 rounded-xs bg-[#E73427] flex items-center justify-center text-white font-black text-xs tracking-tighter">
        MLH
      </div>
      <span className="text-[18px] font-extrabold text-[#E73427] tracking-tight">
        Major League Hacking
      </span>
    </div>
  );
}

// ==========================================
// 3. SPONSORS LIST (EXACT TO SCREENSHOT)
// ==========================================

export interface SponsorItem {
  id: string;
  name: string;
  category: "Security" | "Developer Tools" | "Education" | "AI & Cloud" | "Community";
  websiteUrl: string;
  component: React.ComponentType<{ className?: string }>;
  isEmpty?: boolean;
}

export const SPONSORS_LIST: SponsorItem[] = [
  // Row 1
  {
    id: "nexfellow",
    name: "NexFellow",
    category: "Developer Tools",
    websiteUrl: "https://nexfellow.com",
    component: NexFellowLogo,
  },
  {
    id: "nordvpn",
    name: "NordVPN",
    category: "Security",
    websiteUrl: "https://nordvpn.com",
    component: NordVPNLogo,
  },
  {
    id: "nordpass",
    name: "NordPass",
    category: "Security",
    websiteUrl: "https://nordpass.com",
    component: NordPassLogo,
  },
  {
    id: "incogni",
    name: "incogni",
    category: "Security",
    websiteUrl: "https://incogni.com",
    component: IncogniLogo,
  },

  // Row 2
  {
    id: "saily",
    name: "Saily",
    category: "Developer Tools",
    websiteUrl: "https://saily.com",
    component: SailyLogo,
  },
  {
    id: "truscholar",
    name: "TruScholar",
    category: "Education",
    websiteUrl: "https://truscholar.io",
    component: TruScholarLogo,
  },
  {
    id: "algoverse",
    name: "ALGOVERSE",
    category: "Education",
    websiteUrl: "https://algoverse.org",
    component: AlgoverseLogo,
  },
  {
    id: "codecrafters",
    name: "CodeCrafters",
    category: "Developer Tools",
    websiteUrl: "https://codecrafters.io",
    component: CodeCraftersLogo,
  },

  // Row 3
  {
    id: "sylus",
    name: "sylus",
    category: "Developer Tools",
    websiteUrl: "https://sylus.io",
    component: SylusLogo,
  },
  {
    id: "siray",
    name: "Siray AI",
    category: "AI & Cloud",
    websiteUrl: "https://siray.ai",
    component: SirayAiLogo,
  },
  {
    id: "zulip",
    name: "ZULIP",
    category: "Developer Tools",
    websiteUrl: "https://zulip.com",
    component: ZulipLogo,
  },
  {
    id: "tin-computer",
    name: "Tin Computer",
    category: "Developer Tools",
    websiteUrl: "https://tincomputer.com",
    component: TinComputerLogo,
  },

  // Row 4 (Julep + 3 empty cells matching the screenshot)
  {
    id: "julep",
    name: "julep",
    category: "AI & Cloud",
    websiteUrl: "https://julep.ai",
    component: JulepLogo,
  },
  {
    id: "empty-1",
    name: "",
    category: "Community",
    websiteUrl: "",
    component: () => null,
    isEmpty: true,
  },
  {
    id: "empty-2",
    name: "",
    category: "Community",
    websiteUrl: "",
    component: () => null,
    isEmpty: true,
  },
  {
    id: "empty-3",
    name: "",
    category: "Community",
    websiteUrl: "",
    component: () => null,
    isEmpty: true,
  },
];

// Community partners list for the interactive tab
export const COMMUNITY_PARTNERS_LIST: SponsorItem[] = [
  {
    id: "github-campus",
    name: "GitHub Campus",
    category: "Community",
    websiteUrl: "https://campus.github.com",
    component: GitHubLogo,
  },
  {
    id: "devpost",
    name: "Devpost",
    category: "Developer Tools",
    websiteUrl: "https://devpost.com",
    component: DevpostLogo,
  },
  {
    id: "foss-united",
    name: "FOSS United",
    category: "Community",
    websiteUrl: "https://fossunited.org",
    component: FossUnitedLogo,
  },
  {
    id: "mlh",
    name: "Major League Hacking",
    category: "Education",
    websiteUrl: "https://mlh.io",
    component: MlhLogo,
  },
];

// ==========================================
// 4. SPONSORSHIP TIERS
// ==========================================

export interface SponsorshipTier {
  name: string;
  badgeColor: string;
  badgeBg: string;
  popular?: boolean;
  tagline: string;
  perks: string[];
}

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    name: "Title / Platinum Sponsor",
    badgeColor: "text-amber-400",
    badgeBg: "bg-amber-400/10 border-amber-400/30",
    popular: true,
    tagline: "Exclusive keynote address, premier branding, and top-tier community reach.",
    perks: [
      "Keynote speaking opportunity at OSC summits & hackathons",
      "Premier banner placement across all digital portals, summits, and badges",
      "Direct recruiting portal access to 15,000+ vetted open source contributors",
      "Dedicated co-branded technical workshop & hackathon track",
      "Social media spotlights to 100K+ reach across LinkedIn, X, & Discord",
    ],
  },
  {
    name: "Gold Sponsor",
    badgeColor: "text-yellow-400",
    badgeBg: "bg-yellow-400/10 border-yellow-400/30",
    tagline: "High-impact brand presence and developer engagement.",
    perks: [
      "Technical workshop or panel speaker slot",
      "Prominent logo on event website, stage banners, and newsletters",
      "Virtual booth & direct Discord channel for hiring / developer evangelism",
      "Access to opt-in attendee resume pool",
      "Quarterly community spotlight feature",
    ],
  },
  {
    name: "Silver Sponsor",
    badgeColor: "text-slate-300",
    badgeBg: "bg-slate-300/10 border-slate-300/30",
    tagline: "Targeted visibility and community contribution support.",
    perks: [
      "Logo on official website and event banners",
      "Shoutout across OSC social media channels",
      "Branded swag distribution in hacker welcome kits",
      "Direct access to OSC Discord partner channels",
    ],
  },
  {
    name: "Community & Tooling Partner",
    badgeColor: "text-blue-400",
    badgeBg: "bg-blue-400/10 border-blue-400/30",
    tagline: "Developer credits, tooling licenses, and shared growth.",
    perks: [
      "Logo placement in Community Partners grid",
      "Tooling / credit distribution to hackathon participants",
      "Co-host online tech sessions & open source office hours",
    ],
  },
];
