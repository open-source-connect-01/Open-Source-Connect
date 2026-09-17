"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

export type ActiveOverlay = "about" | "whatwedo" | "resources" | "events" | "community" | null;

interface NavbarProps {
  onNavClick?: (label: ActiveOverlay) => void;
  activeOverlay?: ActiveOverlay;
  isMobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
  onMobileNavClick?: (label: ActiveOverlay) => void;
  ctaText?: string;
  ctaHref?: string;
}

const navItems: { label: string; key: ActiveOverlay }[] = [
  { label: "About", key: "about" },
  { label: "What We Do", key: "whatwedo" },
  { label: "Events", key: "events" },
];

const mobileAccordionData = [
  {
    key: "about" as ActiveOverlay,
    label: "ABOUT",
    subLinks: [
      { name: "About the OSC", key: "about" as ActiveOverlay },
      { name: "Meet the team", key: "about" as ActiveOverlay },
      { name: "Speakers & Mentors", key: "about" as ActiveOverlay, href: "/speakers-and-mentors" },
      { name: "Partners", key: "about" as ActiveOverlay, href: "/partners" },
    ],
  },
  {
    key: "whatwedo" as ActiveOverlay,
    label: "WHAT WE DO",
    subLinks: [
      { name: "Open Collaboration", key: "whatwedo" as ActiveOverlay, href: "/open-collaboration" },
      { name: "Open Hardware & Robotics", key: "whatwedo" as ActiveOverlay, href: "/open-hardware-robotics" },
      { name: "AI & Research Initiatives", key: "whatwedo" as ActiveOverlay, href: "/ai-research-initiatives" },
      { name: "Frontier Technology", key: "whatwedo" as ActiveOverlay, href: "/frontier-technology" },
    ],
  },
  {
    key: "events" as ActiveOverlay,
    label: "EVENTS",
    subLinks: [
      { name: "Upcoming Summits", key: "events" as ActiveOverlay },
      { name: "Meetups", key: "events" as ActiveOverlay },
    ],
  },
];

const emptySubscribe = () => () => {};

export default function Navbar({
  onNavClick,
  activeOverlay,
  isMobileMenuOpen,
  onMobileMenuToggle,
  onMobileNavClick,
  ctaText = "DONATE US",
  ctaHref = "https://ko-fi.com/opensourceconnect",
}: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    about: true,
    whatwedo: true,
    events: false,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLogoClick = () => {
    onNavClick?.(null);
    if (isMobileMenuOpen) {
      onMobileMenuToggle?.();
    }
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-white relative border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px]">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between w-full h-full">
            {/* Logo */}
            <Link href="/" onClick={handleLogoClick} className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Open Source Connect"
                width={160}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            {/* Right side: Nav links + CTA Button */}
            <div className="flex items-center gap-7 lg:gap-8 ml-auto h-full">
              {navItems.map((item) => {
                const isActive = activeOverlay === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick?.(item.key);
                    }}
                    className={`relative h-full flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.18em] uppercase transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-accent-blue"
                        : "text-gray-500 hover:text-[#0B0F1A]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 opacity-60 ${
                        isActive ? "rotate-180 text-accent-blue opacity-100" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    {isActive && (
                      <span className="absolute -bottom-px left-0 w-full h-[3px] bg-accent-blue rounded-full z-10" />
                    )}
                  </button>
                );
              })}

              {/* Right Action: CTA Button */}
              <Link
                href={ctaHref}
                target={ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center h-[38px] px-6 bg-[#0A1B3D] text-white text-[10px] font-extrabold tracking-[0.18em] uppercase rounded-[2px] hover:bg-[#122752] transition-all duration-200 shrink-0 shadow-xs ml-2"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Left: Logo */}
            <Link href="/" onClick={handleLogoClick} className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Open Source Connect"
                width={135}
                height={34}
                className="h-7 w-auto object-contain"
                priority
              />
            </Link>

            {/* Right: Search Icon + Staggered Hamburger Icon */}
            <div className="flex items-center gap-4">
              {/* Search Toggle Button */}
              <button
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center text-[#0B0F1A] hover:opacity-75 transition-opacity touch-manipulation cursor-pointer"
                aria-label="Search"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B0F1A"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              {/* Staggered Hamburger Menu Button */}
              <button
                onClick={onMobileMenuToggle}
                className="relative min-w-[40px] min-h-[40px] flex flex-col items-end justify-center group transition-opacity duration-200 cursor-pointer touch-manipulation"
                aria-label="Open menu"
              >
                <div className="flex flex-col items-end justify-between w-5 h-[14px]">
                  <span className="w-5 h-[2px] bg-[#0B0F1A] rounded-full" />
                  <span className="w-5 h-[2px] bg-[#0B0F1A] rounded-full" />
                  <span className="w-3.5 h-[2px] bg-[#0B0F1A] rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="md:hidden py-3 border-t border-gray-100 animate-slideDown">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search resources, projects, events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 text-base sm:text-xs bg-slate-50 border border-gray-200 rounded-md outline-none focus:border-accent-blue text-slate-800 placeholder-gray-400"
                autoFocus
              />
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute left-3 text-gray-400 pointer-events-none"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* ===== MOBILE SLIDE-OVER DRAWER FROM THE RIGHT (PORTALED DIRECTLY TO BODY) ===== */}
      {mounted &&
        createPortal(
          <div className="md:hidden">
            {/* Dimmed Overlay Backdrop */}
            <div
              className={`fixed inset-0 z-[9998] bg-[#0B0F1A]/50 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              onClick={onMobileMenuToggle}
              aria-hidden="true"
            />

            {/* Slide-Over Drawer Container (Appears from the Right side) */}
            <aside
              className={`fixed top-0 right-0 bottom-0 z-[9999] w-[88vw] max-w-[320px] bg-white shadow-2xl overflow-y-auto overscroll-contain transition-transform duration-300 ease-in-out flex flex-col ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              aria-label="Mobile Navigation Menu"
            >
              {/* Drawer Header with Close 'X' Button */}
              <div className="p-4 sm:p-6 pb-2 flex items-center justify-end">
                <button
                  onClick={onMobileMenuToggle}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#0B0F1A] hover:bg-slate-50 rounded-full transition-colors cursor-pointer touch-manipulation"
                  aria-label="Close menu"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B0F1A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Drawer Inner Content */}
              <div className="px-6 pb-8 flex-1">
                {/* DONATE US CTA Button at the top */}
                <Link
                  href="https://ko-fi.com/opensourceconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onMobileMenuToggle}
                  className="w-full bg-[#0A1B3D] text-white text-xs font-extrabold tracking-[0.18em] uppercase py-3.5 rounded-[2px] mb-8 shadow-md flex items-center justify-center text-center hover:bg-[#122752] transition-colors"
                >
                  DONATE US
                </Link>

                {/* Accordion Categories */}
                <div className="space-y-6">
                  {mobileAccordionData.map((cat) => {
                    const isOpen = !!openAccordions[cat.key as string];
                    return (
                      <div key={cat.label} className="border-b border-gray-100/80 pb-4">
                        {/* Category Header */}
                        <button
                          onClick={() => toggleAccordion(cat.key as string)}
                          className="w-full flex items-center justify-between text-left py-1 text-sm font-extrabold text-[#0B0F1A] tracking-[0.14em] uppercase cursor-pointer"
                        >
                          <span>{cat.label}</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`text-gray-500 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>

                        {/* Sub-links */}
                        {isOpen && (
                          <div className="mt-3 pl-2 space-y-3">
                            {cat.subLinks.map((sub) =>
                              "href" in sub && sub.href ? (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => onMobileMenuToggle?.()}
                                  className="block text-left text-xs font-medium text-gray-500 hover:text-accent-blue transition-colors py-1"
                                >
                                  {sub.name}
                                </Link>
                              ) : (
                                <button
                                  key={sub.name}
                                  onClick={() => {
                                    onMobileMenuToggle?.();
                                    onMobileNavClick?.(sub.key);
                                  }}
                                  className="block text-left text-xs font-medium text-gray-500 hover:text-accent-blue transition-colors py-1 cursor-pointer"
                                >
                                  {sub.name}
                                </button>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </nav>
  );
}
