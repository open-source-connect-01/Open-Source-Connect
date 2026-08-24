"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ResearchLeadershipSection from "@/components/ResearchLeadershipSection";
import ProfileModal from "@/components/ProfileModal";
import FooterSection from "@/components/FooterSection";
import AboutOverlay from "@/components/AboutOverlay";
import WhatWeDoOverlay from "@/components/WhatWeDoOverlay";
import EventsOverlay from "@/components/EventsOverlay";
import type { ProfileData } from "@/components/ProfileModal";
import type { ActiveOverlay } from "@/components/Navbar";

export default function SpeakersAndMentorsPage() {
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const handleNavClick = (label: ActiveOverlay) => {
    setActiveOverlay((prev) => (prev === label ? null : label));
    setIsMobileMenuOpen(false);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };

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
        <ResearchLeadershipSection
          selectedProfile={selectedProfile}
          onProfileSelect={(profile) => setSelectedProfile(profile)}
          onProfileClose={() => setSelectedProfile(null)}
          hideFooter={true}
        />
      </main>

      <FooterSection hideTopSections={true} />

      {/* Profile Modal */}
      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </div>
  );
}
