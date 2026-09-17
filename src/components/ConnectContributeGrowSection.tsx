import Link from "next/link";

const collabItems = [
  {
    title: "Open Source Programs",
    desc: "Contribute to real-world open source projects alongside maintainers and experienced developers.",
  },
  {
    title: "Hackathons",
    desc: "Build innovative solutions, collaborate with global participants, and win exciting rewards.",
  },
  {
    title: "Mentorship",
    desc: "Learn directly from industry experts, maintainers, and experienced contributors.",
  },
  {
    title: "Career Opportunities",
    desc: "Discover internships, jobs, networking opportunities, and showcase your contributions.",
  },
];

const eventItems = [
  {
    title: "Sponsorship",
    desc: "Support hackathons, community programs, and developer initiatives while increasing your brand visibility.",
  },
  {
    title: "Hiring & Talent",
    desc: "Connect with skilled contributors, students, and developers from around the world.",
  },
  {
    title: "Community Partnerships",
    desc: "Collaborate on events, workshops, contribution programs, and developer engagement.",
  },
  {
    title: "Speaking & Mentorship",
    desc: "Share your expertise through workshops, technical sessions, hackathons, and mentorship programs.",
  },
];

export default function ConnectContributeGrowSection() {
  return (
    <section id="connect-contribute-grow" className="w-full bg-white scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] font-extrabold text-navy-deep leading-tight">
            Connect, Contribute &amp; Grow
          </h2>
          <div className="w-[50px] sm:w-[60px] h-[4px] bg-accent-blue mt-2 mb-4 sm:mb-5" />
          <p className="max-w-[600px] text-[14.5px] sm:text-[15px] text-slate-600 font-medium leading-relaxed">
            Empowering contributors and organizations to build, collaborate, and grow through open source.
          </p>
        </div>

        {/* Two-column card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1: For Contributors */}
          <div className="relative overflow-hidden bg-white border border-gray-100 p-5 sm:p-8 flex flex-col shadow-xs">
            {/* Top-Right Decorative Blue Curve Overlay */}
            <div className="absolute -top-10 -right-10 w-[140px] h-[140px] bg-[#E0F2FE]/70 rounded-full pointer-events-none" />

            <div className="relative w-[42px] h-[42px] mb-5 z-10">
              {/* Hard offset shadow block */}
              <div className="absolute top-1 left-1 w-[42px] h-[42px] bg-[#E2E8F0] rounded-[3px] z-0" />
              {/* Solid blue square badge */}
              <div className="relative z-10 w-[42px] h-[42px] rounded-[3px] bg-[#2563EB] text-white flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
            <h3 className="text-[19px] sm:text-[20px] font-extrabold text-[#0B0F1A] mb-3 relative z-10">
              For Contributors
            </h3>
            <p className="text-[13.5px] sm:text-[14px] text-slate-600 font-medium leading-relaxed mb-6 relative z-10">
              Grow your skills, contribute to meaningful projects, connect with mentors, and become part of a global open source community.
            </p>

            <ul className="space-y-4 sm:space-y-5 flex-1 relative z-10">
              {collabItems.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] bg-accent-blue rounded-full mt-[7px] shrink-0" />
                  <div>
                    <span className="text-[13.5px] sm:text-[14px] font-bold text-navy-deep">
                      {item.title}
                    </span>
                    <p className="text-[13px] sm:text-[13.5px] text-slate-600 font-medium leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="https://luma.com/3u22sml7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[46px] px-6 bg-navy-deep text-white text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-navy transition-all duration-200 mt-7 sm:mt-8 w-full sm:w-auto text-center self-stretch sm:self-start relative z-10"
            >
              BECOME A CONTRIBUTOR
            </Link>
          </div>

          {/* Card 2: For Organizations */}
          <div className="relative overflow-hidden bg-white border border-gray-100 p-5 sm:p-8 flex flex-col shadow-xs">
            {/* Top-Right Decorative Green Curve Overlay */}
            <div className="absolute -top-10 -right-10 w-[140px] h-[140px] bg-[#DCFCE7]/70 rounded-full pointer-events-none" />

            <div className="relative w-[42px] h-[42px] mb-5 z-10">
              {/* Hard offset shadow block */}
              <div className="absolute top-1 left-1 w-[42px] h-[42px] bg-[#E2E8F0] rounded-[3px] z-0" />
              {/* Solid green square badge */}
              <div className="relative z-10 w-[42px] h-[42px] rounded-[3px] bg-[#10B981] text-white flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
            </div>
            <h3 className="text-[19px] sm:text-[20px] font-extrabold text-[#0B0F1A] mb-3 relative z-10">
              For Organizations
            </h3>
            <p className="text-[13.5px] sm:text-[14px] text-slate-600 font-medium leading-relaxed mb-6 relative z-10">
              Partner with us to engage developers, support innovation, and strengthen your presence in the global open source ecosystem.
            </p>

            <ul className="space-y-4 sm:space-y-5 flex-1 relative z-10">
              {eventItems.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] bg-accent-blue rounded-full mt-[7px] shrink-0" />
                  <div>
                    <span className="text-[13.5px] sm:text-[14px] font-bold text-navy-deep">
                      {item.title}
                    </span>
                    <p className="text-[13px] sm:text-[13.5px] text-slate-600 font-medium leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="mailto:hello@osconnect.org"
              target="_blank"
              className="inline-flex items-center justify-center h-[46px] px-6 bg-white text-navy-deep border-2 border-navy-deep text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-navy-deep hover:text-white transition-all duration-200 mt-7 sm:mt-8 w-full sm:w-auto text-center self-stretch sm:self-start relative z-10"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
