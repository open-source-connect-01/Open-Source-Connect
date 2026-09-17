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
        width={240}
        height={65}
        className="h-8 sm:h-11 md:h-14 w-auto max-w-[125px] sm:max-w-[160px] md:max-w-[190px] object-contain"
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
        width={240}
        height={85}
        className="h-10 sm:h-14 md:h-19 w-auto max-w-[130px] sm:max-w-[170px] md:max-w-[200px] object-contain"
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
        width={240}
        height={60}
        className="h-8 sm:h-11 md:h-14 w-auto max-w-[130px] sm:max-w-[170px] md:max-w-[200px] object-contain"
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
        width={230}
        height={105}
        className="h-9 sm:h-12 md:h-15 w-auto max-w-[120px] sm:max-w-[155px] md:max-w-[180px] object-contain"
        priority
      />
    </div>
  );
}

export function SailyLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none w-full h-full ${className}`}>
      <Image
        src="/sponsors/saily-black.png"
        alt="Saily"
        width={230}
        height={105}
        className="h-10 sm:h-14 md:h-18 w-auto max-w-[115px] sm:max-w-[150px] md:max-w-[175px] object-contain"
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
        width={230}
        height={125}
        className="h-11 sm:h-15 md:h-20 w-auto max-w-[125px] sm:max-w-[160px] md:max-w-[185px] object-contain"
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
        width={220}
        height={155}
        className="h-11 sm:h-15 md:h-20 w-auto max-w-[115px] sm:max-w-[150px] md:max-w-[170px] object-contain"
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
        width={240}
        height={45}
        className="h-7 sm:h-9 md:h-12 w-auto max-w-[135px] sm:max-w-[175px] md:max-w-[205px] object-contain"
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
        width={240}
        height={80}
        className="h-9 sm:h-12 md:h-15 w-auto max-w-[125px] sm:max-w-[160px] md:max-w-[190px] object-contain"
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
        width={240}
        height={65}
        className="h-8 sm:h-11 md:h-14 w-auto max-w-[130px] sm:max-w-[170px] md:max-w-[200px] object-contain"
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
        width={240}
        height={65}
        className="h-8 sm:h-11 md:h-14 w-auto max-w-[130px] sm:max-w-[170px] md:max-w-[200px] object-contain"
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
        width={240}
        height={80}
        className="h-9 sm:h-12 md:h-15 w-auto max-w-[125px] sm:max-w-[160px] md:max-w-[190px] object-contain rounded-xs"
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
        width={230}
        height={80}
        className="h-9 sm:h-12 md:h-15 w-auto max-w-[120px] sm:max-w-[155px] md:max-w-[180px] object-contain"
        priority
      />
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
    websiteUrl: "https://algoverseairesearch.org/",
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
    websiteUrl: "https://docs.julep.ai/introduction/julep",
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

// Community partners list (empty)
export const COMMUNITY_PARTNERS_LIST: SponsorItem[] = [];
