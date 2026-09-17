"use client";

export default function HeroSection() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section className="relative w-full flex-1 flex flex-col justify-center py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1360px] w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-14">
          {/* Left Content Column */}
          <div className="flex-1 min-w-0">
            {/* Announcement Pill Badge */}
            <div className="inline-flex items-center gap-2.5 border border-blue-200/90 bg-blue-50/50 rounded-full px-4 py-1.5 mb-6 sm:mb-7">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
              <span className="text-[10px] sm:text-[11.5px] lg:text-[12px] font-extrabold tracking-[0.14em] text-[#2563EB] uppercase">
                OPEN SOURCE FOR EVERYONE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[32px] sm:text-[54px] md:text-[68px] lg:text-[78px] xl:text-[86px] font-black text-[#0B0F1A] leading-[1.03] tracking-tight mb-6 sm:mb-7">
              {/* Mobile 3-line structure */}
              <span className="block sm:hidden">Connecting The</span>
              <span className="block sm:hidden">World Through</span>

              {/* Desktop Line 1 */}
              <span className="hidden sm:block whitespace-nowrap">Connecting The World</span>

              {/* Desktop Line 2 */}
              <span className="hidden sm:block mt-1 sm:mt-1.5 whitespace-nowrap">
                Through{" "}
                <span className="font-serif italic font-normal text-[#1D4ED8]">
                  Open Source
                </span>
              </span>
              <span className="block sm:hidden font-serif italic font-normal text-[#1D4ED8] mt-1">
                Open Source
              </span>
            </h1>

            {/* Subheading Description */}
            <p className="text-[15px] sm:text-xl lg:text-[20px] xl:text-[21px] text-slate-600 font-medium max-w-[660px] leading-relaxed mb-8 sm:mb-10">
              Open Source Connect (OSC) provides community infrastructure, operational support, educational programs, and collaboration opportunities to help open source projects, contributors, and organizations grow sustainably.
            </p>

            {/* Mobile CoreFocusCard */}
            <div className="mb-8 lg:hidden">
              <CoreFocusCard isMobile />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#connect-contribute-grow"
                onClick={(e) => handleScrollToSection(e, "connect-contribute-grow")}
                className="inline-flex items-center justify-center h-[50px] sm:h-[60px] px-6 sm:px-10 bg-[#0A1B3D] text-white text-[12px] sm:text-[13px] font-extrabold tracking-[0.14em] uppercase rounded-[2px] shadow-sm hover:bg-[#122752] transition-colors w-full sm:w-auto text-center cursor-pointer"
              >
                GET INVOLVED
              </a>
              <a
                href="#connect-contribute-grow"
                onClick={(e) => handleScrollToSection(e, "connect-contribute-grow")}
                className="inline-flex items-center justify-center h-[50px] sm:h-[60px] px-6 sm:px-10 bg-white text-[#0A1B3D] border border-slate-300 text-[12px] sm:text-[13px] font-extrabold tracking-[0.14em] uppercase rounded-[2px] hover:bg-slate-50 transition-colors w-full sm:w-auto text-center cursor-pointer"
              >
                PARTNER WITH US
              </a>
            </div>
          </div>

          {/* Right: Floating CoreFocusCard with offset shadow (Desktop only) */}
          <div className="hidden lg:block w-[340px] xl:w-[370px] shrink-0 relative lg:mt-[120px] xl:mt-[135px]">
            <div className="relative">
              {/* Slate-blue offset shadow block */}
              <div className="absolute top-4 left-4 w-full h-full bg-[#94A3B8]/60 rounded-[2px] z-0" />
              {/* White card */}
              <div className="relative z-10">
                <CoreFocusCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreFocusCard({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div
      className={`w-full bg-white p-5 sm:p-8 xl:p-9 shadow-xl rounded-[2px] ${
        isMobile ? "border-l-4 border-l-[#2563EB] border-y border-r border-gray-100" : "border border-gray-100/90"
      }`}
    >
      <h3 className="text-[11.5px] xl:text-[12.5px] font-extrabold tracking-[0.2em] text-gray-400 uppercase mb-5 sm:mb-6">
        CORE FOCUS
      </h3>
      <ul className="space-y-4 sm:space-y-5">
        {[
          "Responsible & Applied AI",
          "Cloud-Native",
          "Digital Resilience",
          "Robotics Engineering",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3.5">
            <span className="w-2 h-2 bg-[#F59E0B] rounded-[1px] shrink-0" />
            <span className="text-[15.5px] sm:text-[16.5px] xl:text-[17.5px] font-extrabold text-[#0B0F1A]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
