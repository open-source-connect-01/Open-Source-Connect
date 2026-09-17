"use client";

import Link from "next/link";

export default function BecomeCommunityLeaderSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="w-full p-6 sm:p-10 lg:p-16 border border-gray-100 text-center relative overflow-hidden rounded-[2px]"
          style={{ background: 'linear-gradient(180deg, #F4F8FE 0%, #FAFCFF 50%, #FFFDF9 100%)' }}
        >
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0B0F1A] tracking-tight mb-4">
            Speak at Open Source Connect
          </h2>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-[620px] mx-auto leading-relaxed mb-7 sm:mb-8">
            Share your expertise, mentor the next generation, and help shape the future of open source. Apply to speak at our events or join our ambassador program.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeKiFy7Kln9sqewJzBpD71EzQC31nleg4lybqyEBoOSwWdX3A/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[46px] px-6 sm:px-8 bg-[#0B0F1A] text-white text-[11px] font-extrabold tracking-[0.14em] uppercase rounded-[2px] shadow-sm hover:bg-slate-800 transition-colors w-full sm:w-auto"
            >
              BECOME A SPEAKER
            </Link>

            <Link
              href="/speakers-and-mentors"
              className="inline-flex items-center justify-center h-[46px] px-6 sm:px-8 bg-white text-[#0B0F1A] border border-slate-300 text-[11px] font-extrabold tracking-[0.14em] uppercase rounded-[2px] hover:bg-slate-50 transition-colors w-full sm:w-auto"
            >
              VIEW ALL SPEAKERS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
