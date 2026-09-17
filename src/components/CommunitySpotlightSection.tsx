import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

const personColors: Record<
  string,
  {
    badge: string;
    pillBg: string;
    pillText: string;
    bulletColor: string;
    photo: string;
  }
> = {
  "Adrisha Biswas": {
    badge: "bg-[#2563EB]",
    pillBg: "bg-[#EFF6FF]",
    pillText: "text-[#2563EB]",
    bulletColor: "bg-[#2563EB]",
    photo: "/spotlight/adrisha_biswas.jpg",
  },
  "Rahul Sharma": {
    badge: "bg-[#10B981]",
    pillBg: "bg-[#ECFDF5]",
    pillText: "text-[#059669]",
    bulletColor: "bg-[#10B981]",
    photo: "/spotlight/rahul_sharma.jpg",
  },
  "Sophia Martinez": {
    badge: "bg-[#F59E0B]",
    pillBg: "bg-[#FFFBEB]",
    pillText: "text-[#D97706]",
    bulletColor: "bg-[#F59E0B]",
    photo: "/spotlight/sophia_martinez.jpg",
  },
  "Sania Khanna": {
    badge: "bg-[#8B5CF6]",
    pillBg: "bg-[#F5F3FF]",
    pillText: "text-[#7C3AED]",
    bulletColor: "bg-[#8B5CF6]",
    photo: "/spotlight/sania_khanna.jpg",
  },
};

const defaultPersonColors = {
  badge: "bg-[#2563EB]",
  pillBg: "bg-[#EFF6FF]",
  pillText: "text-[#2563EB]",
  bulletColor: "bg-[#2563EB]",
  photo: "/spotlight/adrisha_biswas.jpg",
};

const spotlightCards = [
  {
    name: "Adrisha Biswas",
    role: "Team Manager",
    org: "Open Source Connect",
    specialty: "Community Building",
    highlights: [
      "Building and scaling developer communities.",
      "Connecting contributors, mentors, and industry leaders",
    ],
  },
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    org: "Meta",
    specialty: "Distributed Systems",
    highlights: [
      "Open source maintainer",
      "Speaker at developer conferences",
    ],
  },
  {
    name: "Sophia Martinez",
    role: "Engineering Manager",
    org: "AWS",
    specialty: "Serverless & DevOps",
    highlights: [
      "Leads cloud architecture workshops globally",
      "Open source contributor and technical mentor",
    ],
  },
  {
    name: "Sania Khanna",
    role: "Content Creator",
    org: "Open Source Connect",
    specialty: "Graphic Design",
    highlights: [
      "CNCF Ambassador and open source contributor",
      "Speaker on Cloud Native and Platform Engineering",
    ],
  },
];

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z" />
    </svg>
  );
}

function MedalIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function CommunitySpotlightSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="mb-8 lg:mb-12">
          <div className="relative inline-block pb-2 lg:pb-3">
            <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#0B0F1A] tracking-tight">
              Community Spotlight
            </h2>
            <div className="hidden lg:block absolute bottom-0 left-0 w-[68px] h-[4px] bg-[#F59E0B]" />
          </div>
          <p className="max-w-[780px] text-xs sm:text-sm lg:text-base text-gray-500 font-medium leading-relaxed mt-2 lg:mt-4">
            Celebrating the builders, maintainers, researchers, and leaders driving meaningful innovation across the Open Source Connect ecosystem. Our community represents diverse expertise across emerging technologies and real-world industry challenges.
          </p>
        </div>

        {/* Stats Row (Desktop & Tablet) */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-8 sm:gap-16 my-10 py-4">
          <div className="flex items-center gap-3">
            <TrendingUpIcon className="text-[#2563EB]" />
            <div>
              <span className="text-3xl font-extrabold text-[#0B0F1A] tracking-tight">
                <AnimatedCounter value={500} suffix="+" />
              </span>
              <div className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mt-0.5">
                ACTIVE LEADERS
              </div>
            </div>
          </div>

          <div className="w-px h-10 bg-gray-200" />

          <div className="flex items-center gap-3">
            <GlobeIcon className="text-[#10B981]" />
            <div>
              <span className="text-3xl font-extrabold text-[#0B0F1A] tracking-tight">
                <AnimatedCounter value={15} suffix="+" />
              </span>
              <div className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mt-0.5">
                COUNTRIES
              </div>
            </div>
          </div>

          <div className="w-px h-10 bg-gray-200" />

          <div className="flex items-center gap-3">
            <MedalIcon className="text-[#F59E0B]" />
            <div>
              <span className="text-3xl font-extrabold text-[#0B0F1A] tracking-tight">
                <AnimatedCounter value={100} suffix="+" />
              </span>
              <div className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mt-0.5">
                SPEAKING SESSIONS
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats Row */}
        <div className="grid grid-cols-3 divide-x divide-gray-200 border-y border-gray-100 py-3.5 my-6 sm:hidden text-center">
          <div className="px-1">
            <span className="text-xl font-extrabold text-[#0B0F1A] tracking-tight block">
              <AnimatedCounter value={500} suffix="+" />
            </span>
            <div className="text-[8.5px] font-bold tracking-wider text-gray-400 uppercase mt-0.5">
              LEADERS
            </div>
          </div>
          <div className="px-1">
            <span className="text-xl font-extrabold text-[#0B0F1A] tracking-tight block">
              <AnimatedCounter value={15} suffix="+" />
            </span>
            <div className="text-[8.5px] font-bold tracking-wider text-gray-400 uppercase mt-0.5">
              COUNTRIES
            </div>
          </div>
          <div className="px-1">
            <span className="text-xl font-extrabold text-[#0B0F1A] tracking-tight block">
              <AnimatedCounter value={100} suffix="+" />
            </span>
            <div className="text-[8.5px] font-bold tracking-wider text-gray-400 uppercase mt-0.5">
              SESSIONS
            </div>
          </div>
        </div>

        {/* Mobile Cards View (Matching Mobile Screenshot) */}
        <div className="sm:hidden space-y-4 mt-6">
          {spotlightCards.map((person) => {
            const colors = personColors[person.name] ?? defaultPersonColors;
            return (
              <div
                key={person.name}
                className="bg-white border border-gray-100/90 rounded-[10px] p-5 shadow-xs"
              >
                {/* Top Row: Avatar + Info */}
                <div className="flex items-start gap-4">
                  <Image
                    src={colors.photo}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-[12px] object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-base font-extrabold text-[#0B0F1A] tracking-tight">
                      {person.name}
                    </h3>
                    <p className="text-[12.5px] font-bold text-[#2563EB] mt-0.5">
                      {person.role}
                    </p>
                    <p className="text-[11.5px] text-gray-400 font-medium mt-0.5">
                      {person.org}
                    </p>
                  </div>
                </div>

                {/* Horizontal Divider */}
                <div className="border-t border-gray-100 my-4" />

                {/* Bottom Section: Specialty Bullet */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                    <span className="text-[12.5px] font-extrabold text-[#0B0F1A]">
                      {person.specialty}
                    </span>
                  </div>

                  {person.highlights && person.highlights.length > 0 && (
                    <ul className="space-y-1 pl-4">
                      {person.highlights.map((h, i) => (
                        <li key={i} className="text-[11.5px] text-gray-400 font-medium">
                          • {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Cards Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10">
          {spotlightCards.map((person) => {
            const colors = personColors[person.name] ?? defaultPersonColors;
            return (
              <div
                key={person.name}
                className="bg-white border border-gray-100/80 rounded-sm p-6 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)] flex items-start gap-6 transition-all duration-200 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]"
              >
                {/* Photo container */}
                <div className="relative w-[110px] h-[110px] sm:w-[125px] sm:h-[125px] shrink-0">
                  <Image
                    src={colors.photo}
                    alt={person.name}
                    width={125}
                    height={125}
                    className="w-full h-full object-cover rounded-sm"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-5 h-5 sm:w-5.5 sm:h-5.5 ${colors.badge} rounded-[2px]`}
                  />
                </div>

                {/* Info Container */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-extrabold text-[#0B0F1A] tracking-tight leading-snug">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 mt-1">
                    {person.role}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 font-medium">
                    {person.org}
                  </p>

                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] ${colors.pillBg} ${colors.pillText} text-[11px] font-semibold my-3`}
                  >
                    <CodeIcon className="shrink-0" />
                    <span>{person.specialty}</span>
                  </div>

                  <ul className="space-y-1.5">
                    {person.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${colors.bulletColor}`}
                        />
                        <span className="text-xs text-gray-500 font-medium">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
