"use client";

import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    numericValue: 400,
    suffix: "+",
    label: "PROJECTS",
    sublabel: "Hosted & Supported",
    labelColor: "text-accent-teal",
  },
  {
    numericValue: 15,
    suffix: "K+",
    label: "CONTRIBUTORS",
    sublabel: "Active Developers",
    labelColor: "text-accent-emerald",
  },
  {
    numericValue: 300,
    suffix: "+",
    label: "MEMBERS",
    sublabel: "Global Organizations",
    labelColor: "text-accent-orange",
  },
  {
    numericValue: 20,
    suffix: "+",
    label: "COLLABORATIONS",
    sublabel: "Strategic Partnerships",
    labelColor: "text-accent-purple",
  },
];

const missionCards = [
  {
    iconColor: "bg-[#F59E0B]",
    title: "SUSTAINABLE OPEN ECOSYSTEMS",
    desc: "We support projects beyond initial contributions by providing mentorship, community engagement frameworks, and long-term visibility.",
  },
  {
    iconColor: "bg-[#2563EB]",
    title: "RESPONSIBLE CONTRIBUTION",
    desc: "We encourage ethical contribution practices, clear documentation standards, and respect for intellectual ownership.",
  },
  {
    iconColor: "bg-[#16A34A]",
    title: "TRANSPARENT GOVERNANCE",
    desc: "Openness is at the core of everything we do. Decision-making processes, community guidelines, and leadership structures are clearly defined and accessible.",
  },
];

export function StatsNumbersRow({ className = "" }: { className?: string }) {
  return (
    <section className={`w-full ${className}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10 pt-6 sm:pt-8 pb-8 sm:pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-1">
              <div className="text-[30px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#0B0F1A] leading-none mb-1.5">
                <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
              </div>
              <div
                className={`text-[10px] xs:text-[11.5px] sm:text-[13px] font-extrabold tracking-[0.08em] sm:tracking-[0.12em] uppercase mb-0.5 ${stat.labelColor}`}
              >
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-[13px] text-[#64748B] font-medium">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OurMissionSection() {
  return (
    <section className="w-full bg-white border-t border-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-[26px] sm:text-[38px] lg:text-[42px] font-black text-[#0B1428] leading-tight tracking-tight">
              Our Mission
            </h2>
            {/* Orange bar under "Our" */}
            <div className="w-[50px] sm:w-[60px] h-[4px] bg-[#F59E0B] mt-2 sm:mt-2.5" />
          </div>

          <div className="space-y-4 max-w-[840px]">
            <p className="text-[14.5px] sm:text-lg lg:text-[17px] leading-relaxed text-slate-500 font-medium">
              Open Source Connect exists to strengthen the open-source ecosystem
              by bringing together developers, students, startups, and
              organizations to collaborate openly and build solutions that create
              real-world impact.
            </p>
            <p className="text-[14.5px] sm:text-lg lg:text-[17px] leading-relaxed text-slate-500 font-medium">
              We are building a structured, transparent, and community-driven
              platform where innovation is supported, contributors are respected,
              and projects are nurtured from idea to long-term sustainability.
            </p>
          </div>
        </div>

        {/* Mission feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {missionCards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200/90 p-5 sm:p-7 lg:p-8 rounded-[2px]"
            >
              {/* Colored box with bottom-right offset shadow */}
              <div className="relative w-7 h-7 mb-6">
                {/* Hard offset shadow block peeking out at bottom-right */}
                <div className="absolute top-1.5 left-1.5 w-full h-full bg-[#E2E8F0] rounded-[2px] z-0" />
                {/* Solid color square badge */}
                <div className={`relative z-10 w-full h-full rounded-[2px] ${card.iconColor}`} />
              </div>
              <h3 className="text-[14px] lg:text-[15px] font-black tracking-[0.03em] text-[#0B1428] uppercase mb-3">
                {card.title}
              </h3>
              <p className="text-[13.5px] lg:text-[14.5px] text-slate-500 leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StatsRow() {
  return (
    <>
      <StatsNumbersRow className="bg-white" />
      <OurMissionSection />
    </>
  );
}
