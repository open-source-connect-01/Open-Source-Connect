import React from "react";
import Image from "next/image";

// ==========================================
// 1. HIGH-FIDELITY SPONSOR LOGO COMPONENTS
// ==========================================

export function NexFellowLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/nexfellow.png"
        alt="NexFellow"
        width={260}
        height={70}
        className="h-14 sm:h-16 md:h-18 w-auto max-w-[210px] sm:max-w-[235px] object-contain"
        priority
      />
    </div>
  );
}

export function NordVPNLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/nordvpn.png"
        alt="NordVPN"
        width={260}
        height={95}
        className="h-20 sm:h-24 md:h-28 w-auto max-w-[220px] sm:max-w-[245px] object-contain"
        priority
      />
    </div>
  );
}

export function NordPassLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/nordpass.png"
        alt="NordPass"
        width={260}
        height={65}
        className="h-14 sm:h-16 md:h-18 w-auto max-w-[220px] sm:max-w-[245px] object-contain"
        priority
      />
    </div>
  );
}

export function IncogniLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/incogni.png"
        alt="incogni"
        width={250}
        height={115}
        className="h-16 sm:h-20 md:h-24 w-auto max-w-[200px] sm:max-w-[225px] object-contain"
        priority
      />
    </div>
  );
}

export function SailyLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/saily.png"
        alt="Saily"
        width={250}
        height={150}
        className="h-22 sm:h-26 md:h-30 w-auto max-w-[200px] sm:max-w-[225px] object-contain"
        priority
      />
    </div>
  );
}

export function TruScholarLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/truscholar.png"
        alt="TruScholar"
        width={250}
        height={135}
        className="h-22 sm:h-26 md:h-30 w-auto max-w-[210px] sm:max-w-[235px] object-contain"
        priority
      />
    </div>
  );
}

export function AlgoverseLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/algoverse.png"
        alt="ALGOVERSE"
        width={240}
        height={170}
        className="h-22 sm:h-26 md:h-30 w-auto max-w-[190px] sm:max-w-[215px] object-contain"
        priority
      />
    </div>
  );
}

export function CodeCraftersLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/codecrafters.png"
        alt="CodeCrafters"
        width={260}
        height={50}
        className="h-12 sm:h-14 md:h-16 w-auto max-w-[220px] sm:max-w-[250px] object-contain"
        priority
      />
    </div>
  );
}

export function SylusLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/sylus.png"
        alt="sylus"
        width={260}
        height={85}
        className="h-16 sm:h-18 md:h-22 w-auto max-w-[210px] sm:max-w-[235px] object-contain"
        priority
      />
    </div>
  );
}

export function SirayAiLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/siray.png"
        alt="Siray AI"
        width={260}
        height={70}
        className="h-14 sm:h-16 md:h-20 w-auto max-w-[220px] sm:max-w-[245px] object-contain"
        priority
      />
    </div>
  );
}

export function ZulipLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/zulip.png"
        alt="ZULIP"
        width={260}
        height={70}
        className="h-14 sm:h-16 md:h-20 w-auto max-w-[220px] sm:max-w-[245px] object-contain"
        priority
      />
    </div>
  );
}

export function TinComputerLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/tincomputer.png"
        alt="Tin Computer"
        width={260}
        height={90}
        className="h-16 sm:h-18 md:h-22 w-auto max-w-[210px] sm:max-w-[235px] object-contain rounded-xs"
        priority
      />
    </div>
  );
}

export function JulepLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/julep.png"
        alt="julep"
        width={250}
        height={90}
        className="h-16 sm:h-18 md:h-22 w-auto max-w-[200px] sm:max-w-[225px] object-contain"
        priority
      />
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
