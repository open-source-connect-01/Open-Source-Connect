"use client";

const focusCards = [
  {
    blobColor: "bg-[#E3F2FD]", // Soft Ice Blue
    title: "Sustainable Open Source Infrastructure",
    desc: "Establishing strong governance, clear standards, and long-term stewardship to ensure project stability and scalable growth.",
  },
  {
    blobColor: "bg-[#E8F5E9]", // Soft Mint Green
    title: "Leadership and Maintainer Development",
    desc: "Supporting contributors in evolving into maintainers and ecosystem leaders through structured mentorship and technical excellence.",
  },
  {
    blobColor: "bg-[#FFF8E1]", // Soft Yellow
    title: "Open Innovation with Impact",
    desc: "Supporting projects that address practical industry and societal challenges across emerging technologies.",
  },
  {
    blobColor: "bg-[#F3E5F5]", // Soft Lavender
    title: "Global Collaboration and Regional Chapters",
    desc: "Connecting international expertise with strong local communities to accelerate adoption and innovation.",
  },
  {
    blobColor: "bg-[#FCE4EC]", // Soft Rose Pink
    title: "Responsible and Secure Innovation",
    desc: "Promoting ethical development, cybersecurity best practices, and transparent community governance.",
  },
  {
    blobColor: "bg-[#FFEBEE]", // Soft Coral/Peach
    title: "Industry and Academic Partnerships",
    desc: "Bridging open source communities with enterprises, startups, and universities to accelerate research, adoption, and deployment.",
  },
];

export default function CoreFocusSection() {
  return (
    <section className="w-full bg-white border-t border-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-[26px] sm:text-[38px] lg:text-[42px] font-black text-[#0B1428] leading-tight tracking-tight">
            Our Core Focus
          </h2>
          <div className="w-[50px] sm:w-[60px] h-[4px] bg-[#14B8A6] mt-2 sm:mt-2.5 mb-4 sm:mb-5" />
          <p className="max-w-[620px] text-[14.5px] sm:text-lg text-slate-500 font-medium leading-relaxed">
            Driving the future of open innovation through six strategic pillars.
          </p>
        </div>

        {/* 3×2 Grid of focus cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {focusCards.map((card, i) => (
            <div
              key={i}
              className="relative bg-white border border-[#E2E8F0] rounded-[2px] p-5 sm:p-7 overflow-hidden flex flex-col justify-between h-full min-h-[160px] sm:min-h-[190px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-slate-300 transition-colors"
            >
              {/* Distinct soft pastel corner quarter-circle arc */}
              <div
                className={`absolute -top-12 -right-10 w-[130px] h-[130px] rounded-full ${card.blobColor} pointer-events-none z-0`}
              />
              <div className="relative z-10">
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0B1428] mb-2.5 leading-snug pr-6">
                  {card.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-500 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
