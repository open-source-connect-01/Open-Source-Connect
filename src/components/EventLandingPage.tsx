"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutOverlay from "@/components/AboutOverlay";
import WhatWeDoOverlay from "@/components/WhatWeDoOverlay";
import EventsOverlay from "@/components/EventsOverlay";
import AnimatedCounter from "@/components/AnimatedCounter";
import type { ActiveOverlay } from "@/components/Navbar";
import FooterSection from "./FooterSection";

export interface EventStat {
  value: number;
  suffix?: string;
  label: string;
}

export interface EventSpeaker {
  name: string;
  role: string;
  photo: string;
}

export interface EventScheduleItem {
  time: string;
  date: string;
  weekday: string;
  title: string;
  speaker: string;
}

export interface EventLandingData {
  edition: string;
  title: string;
  subtitle: string;
  dateRange: string;
  location: string;
  stats: EventStat[];
  aboutHeading: string;
  aboutParagraphs: string[];
  aboutBullets: string[];
  speakersHeading: string;
  speakers: EventSpeaker[];
  scheduleTag: string;
  scheduleTitle: string;
  scheduleMeta: string;
  scheduleItems: EventScheduleItem[];
}

export default function EventLandingPage({ data }: { data: EventLandingData }) {
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (label: ActiveOverlay) => {
    setActiveOverlay((prev) => (prev === label ? null : label));
    setIsMobileMenuOpen(false);
  };

  const handleCloseOverlay = () => setActiveOverlay(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <Navbar
          activeOverlay={activeOverlay}
          onNavClick={handleNavClick}
          onMobileNavClick={handleNavClick}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
        />
      </header>

      <AboutOverlay isOpen={activeOverlay === "about"} onClose={handleCloseOverlay} />
      <WhatWeDoOverlay isOpen={activeOverlay === "whatwedo"} onClose={handleCloseOverlay} />
      <EventsOverlay isOpen={activeOverlay === "events"} onClose={handleCloseOverlay} />

      <main className="flex-1">
        {/* ===== HERO ===== */}
        <section
          className="relative w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #0A0F24 0%, #0B1330 55%, #0C1638 100%)",
          }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />

            <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8 pt-14 sm:pt-20 pb-10 sm:pb-12">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-slate-400 uppercase">
              {data.edition}
            </span>

            <div className="mt-5 border-l-4 border-[#F2811D] pl-5 sm:pl-6">
              <h1 className="text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold text-white leading-[1.08] tracking-tight">
                {data.title}
              </h1>
            </div>

            <p className="mt-5 sm:mt-6 text-[13.5px] sm:text-[15px] text-slate-300 leading-relaxed max-w-[560px]">
              {data.subtitle}
            </p>

            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="inline-flex items-center h-8 px-3.5 bg-[#F2811D] text-[#0A0F24] text-[11px] sm:text-[12px] font-extrabold tracking-wide rounded-[3px]">
                {data.dateRange}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13.5px] text-slate-300">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-slate-400">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {data.location}
              </span>
            </div>
            </div>
          </div>

          <div className="h-[3px] w-full bg-[#F2811D]" />

          {/* ===== STATS ROW ===== */}
          <div className="relative">
            <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
                {data.stats.map((stat) => (
                  <div key={stat.label} className="py-8 sm:py-10 text-center px-2">
                    <div className="text-[26px] sm:text-[36px] font-extrabold text-white leading-none">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix ?? "+"} />
                    </div>
                    <div className="mt-2 text-[9px] sm:text-[10px] font-bold tracking-[0.16em] text-slate-400 uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <span className="text-[10px] font-bold tracking-[0.24em] text-gray-400 uppercase">
                  About the Event
                </span>
                <h2 className="mt-3 text-[26px] sm:text-[32px] font-extrabold text-navy leading-[1.2] tracking-tight max-w-[380px]">
                  {data.aboutHeading}
                </h2>
                <div className="mt-4 w-14 h-[3px] bg-[#F2811D]" />
              </div>

              <div>
                <div className="space-y-4">
                  {data.aboutParagraphs.map((p, i) => (
                    <p key={i} className="text-[13.5px] sm:text-[14.5px] text-slate-500 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                <ul className="mt-6 space-y-2.5">
                  {data.aboutBullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-slate-600 font-medium">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#F2811D] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SPEAKERS ===== */}
        <section className="w-full bg-white pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-[10px] font-bold tracking-[0.24em] text-gray-400 uppercase">
                Meet the Speakers
              </span>
              <h2 className="mt-3 text-[26px] sm:text-[32px] font-extrabold text-navy tracking-tight">
                {data.speakersHeading}
              </h2>
              <div className="mt-4 w-14 h-[3px] bg-[#F2811D] mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {data.speakers.map((speaker) => (
                <div
                  key={speaker.name}
                  className="flex flex-col overflow-hidden bg-[#0A1835] text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/4.8] w-full bg-[#E2E8F0] overflow-hidden">
                    <Image
                      src={speaker.photo}
                      alt={speaker.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>

                  <div className="bg-[#0A1835] px-4 py-3.5 flex flex-col justify-center w-full">
                    <span className="text-[14px] font-bold text-white tracking-normal leading-tight truncate">
                      {speaker.name}
                    </span>
                    <span className="text-[11px] font-medium text-[#94A3B8] tracking-normal mt-1 leading-snug truncate">
                      {speaker.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SCHEDULE ===== */}
        <section className="w-full bg-white pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-[10px] font-bold tracking-[0.24em] text-gray-400 uppercase">
                {data.scheduleTag}
              </span>
              <h2 className="mt-3 text-[26px] sm:text-[32px] font-extrabold text-navy tracking-tight">
                {data.scheduleTitle}
              </h2>
              <div className="mt-4 w-14 h-[3px] bg-[#F2811D] mx-auto" />
            </div>

            <div className="max-w-[900px] mx-auto">
              <div className="flex items-center gap-3 sm:gap-4 pb-4 border-b border-gray-200 text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.14em] text-slate-500 uppercase">
                {data.scheduleMeta.split("•").map((part, i, arr) => (
                  <span key={i} className="flex items-center gap-3 sm:gap-4">
                    {part.trim()}
                    {i < arr.length - 1 && <span className="text-gray-300">•</span>}
                  </span>
                ))}
              </div>

              <div>
                {data.scheduleItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start sm:items-center gap-4 sm:gap-8 py-5 border-b border-gray-100"
                  >
                    <div className="w-[76px] sm:w-[92px] shrink-0 text-left">
                      <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">{item.time}</div>
                      <div className="text-[14px] sm:text-[15px] font-extrabold text-navy leading-tight">{item.date}</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400">{item.weekday}</div>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                      <h4 className="text-[13.5px] sm:text-[15px] font-bold text-navy leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-[11.5px] sm:text-[12.5px] text-slate-400 font-medium whitespace-nowrap shrink-0">
                        {item.speaker}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <FooterSection />
    </div>
  );
}
