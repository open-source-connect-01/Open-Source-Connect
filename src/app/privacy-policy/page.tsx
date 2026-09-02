"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AboutOverlay from "@/components/AboutOverlay";
import WhatWeDoOverlay from "@/components/WhatWeDoOverlay";
import EventsOverlay from "@/components/EventsOverlay";
import type { ActiveOverlay } from "@/components/Navbar";

const contentsList = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-your-information", label: "How We Use Your Information" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-privacy-rights", label: "Your Privacy Rights" },
  { id: "cookies-and-tracking", label: "Cookies & Tracking" },
  { id: "security", label: "Security" },
  { id: "contact-us", label: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  const router = useRouter();
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("introduction");

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 160;
    let currentId = contentsList[0].id;
    for (let i = 0; i < contentsList.length; i++) {
      const el = document.getElementById(contentsList[i].id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= top) {
          currentId = contentsList[i].id;
        }
      }
    }
    setActiveSection(currentId);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    let running = false;
    const onScroll = () => {
      if (!running) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          running = false;
        });
        running = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const rafId = window.requestAnimationFrame(updateActiveSection);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [updateActiveSection]);

  const handleNavClick = (label: ActiveOverlay) => {
    if (label && label !== "events") {
      router.push("/?nav=" + label);
    } else {
      setActiveOverlay((prev) => (prev === label ? null : label));
    }
    setIsMobileMenuOpen(false);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 110;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans antialiased text-[#1E293B]">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-gray-100">
        <Navbar
          activeOverlay={activeOverlay}
          onNavClick={handleNavClick}
          onMobileNavClick={handleNavClick}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
        />
      </header>

      {/* Navigation Overlays */}
      <AboutOverlay
        isOpen={activeOverlay === "about"}
        onClose={handleCloseOverlay}
      />
      <WhatWeDoOverlay
        isOpen={activeOverlay === "whatwedo"}
        onClose={handleCloseOverlay}
      />
      <EventsOverlay
        isOpen={activeOverlay === "events"}
        onClose={handleCloseOverlay}
      />

      <main className="flex-1">
        {/* ===== HERO BANNER ===== */}
        <section className="w-full bg-gradient-to-r from-[#0C1738] via-[#142B67] to-[#1C398E] text-white py-14 sm:py-16 lg:py-20 relative overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-slate-300/80 uppercase mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-200">PRIVACY POLICY</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-3 leading-[1.1] text-white">
              Privacy Policy
            </h1>

            {/* Subtitle / Last updated */}
            <p className="text-sm sm:text-[15px] text-slate-300 font-normal">
              Last updated: August 2026
            </p>
          </div>
        </section>

        {/* ===== MAIN CONTENT SECTION ===== */}
        <section className="w-full bg-white py-14 sm:py-18 lg:py-22">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* --- LEFT SIDEBAR: CONTENTS --- */}
              <aside className="lg:col-span-3 sticky top-28 hidden lg:block">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
                  CONTENTS
                </h3>
                <nav className="relative border-l border-gray-200 pl-4 space-y-3.5 text-xs">
                  {contentsList.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`relative block text-left w-full transition-colors duration-200 py-0.5 ${
                          isActive
                            ? "text-[#2563EB] font-bold"
                            : "text-gray-500 hover:text-gray-900 font-medium"
                        }`}
                      >
                        {isActive && (
                          <span className="absolute -left-[17px] top-0 bottom-0 w-[2.5px] bg-[#2563EB] rounded-r-xs" />
                        )}
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </aside>

              {/* --- RIGHT COLUMN: POLICY DETAILS --- */}
              <div className="lg:col-span-9 space-y-12 sm:space-y-14">
                {/* Section 1: Introduction */}
                <div id="introduction" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                    Introduction
                  </h2>
                  <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75]">
                    <p>
                      Open Source Connect (OSC) Foundation (&apos;we&apos;, &apos;our&apos;, or &apos;us&apos;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or participate in our programs.
                    </p>
                    <p>
                      Please read this policy carefully. If you disagree with its terms, please discontinue use of our site and services. We reserve the right to make changes to this policy at any time and for any reason.
                    </p>
                  </div>
                </div>

                {/* Section 2: Information We Collect */}
                <div id="information-we-collect" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                    Information We Collect
                  </h2>
                  <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75]">
                    <p>
                      We may collect information about you in a variety of ways. The information we may collect includes: (a) Personal Data — personally identifiable information such as your name, email address, and organization that you voluntarily give to us when you register with the site or when you choose to participate in various activities; (b) Derivative Data — information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, access times, and the pages you have viewed; (c) Contribution Data — metadata about your open source contributions, including commit history, pull request activity, and project participation records.
                    </p>
                    <p>
                      We collect this information only as necessary to provide you with the services you request and to fulfill the legitimate purposes described in this policy.
                    </p>
                  </div>
                </div>

                {/* Section 3: How We Use Your Information */}
                <div id="how-we-use-your-information" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                    How We Use Your Information
                  </h2>
                  <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75]">
                    <p>
                      Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to: create and manage your account; process contributions and manage project memberships; send you newsletters, updates, and administrative communications; respond to your inquiries and support requests; compile anonymous statistical data for improving our services; monitor and analyze usage patterns to improve your experience; notify you of updates to programs, events, and governance changes.
                    </p>
                    <p>
                      We will never sell your personal information to third parties. We may share data with trusted partners who assist us in operating our website and services, provided those parties agree to keep this information confidential.
                    </p>
                  </div>
                </div>

                {/* Section 4: Data Retention */}
                <div id="data-retention" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                    Data Retention
                  </h2>
                  <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75]">
                    <p>
                      We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                    </p>
                    <p>
                      Contribution records and project participation histories may be retained indefinitely as part of the public open source record, consistent with the open source community norms of attribution and contribution transparency.
                    </p>
                  </div>
                </div>

                {/* Section 5: Your Privacy Rights */}
                <div id="your-privacy-rights" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                    Your Privacy Rights
                  </h2>
                  <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75]">
                    <p>
                      Depending on your location, you may have certain rights regarding your personal information, including: the right to access the personal information we hold about you; the right to request correction of inaccurate personal information; the right to request deletion of your personal information; the right to data portability; the right to opt out of marketing communications at any time.
                    </p>
                    <p>
                      To exercise any of these rights, please contact us at privacy@oscfoundation.org. We will respond to all legitimate requests within 30 days.
                    </p>
                  </div>
                </div>

                {/* Section 6: Cookies & Tracking */}
                <div id="cookies-and-tracking" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                    Cookies &amp; Tracking
                  </h2>
                  <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75]">
                    <p>
                      We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>
                    <p>
                      We use session cookies for site functionality, analytics cookies (anonymized) to understand usage patterns, and preference cookies to remember your settings.
                    </p>
                  </div>
                </div>

                {/* Section 7: Security */}
                <div id="security" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                    Security
                  </h2>
                  <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75]">
                    <p>
                      We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
                    </p>
                    <p>
                      In the event of a security breach that affects your personal information, we will notify you promptly in accordance with applicable law.
                    </p>
                  </div>
                </div>

                {/* Section 8: Contact Us */}
                <div id="contact-us" className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B0F1A] tracking-tight mb-4 pb-2.5 border-b border-gray-100">
                    Contact Us
                  </h2>
                  <div className="space-y-4 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.75]">
                    <p>
                      If you have questions or comments about this Privacy Policy, please contact us at: privacy@oscfoundation.org. Open Source Connect Foundation, Global Standards Entity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <FooterSection hideTopSections={true} />
    </div>
  );
}
