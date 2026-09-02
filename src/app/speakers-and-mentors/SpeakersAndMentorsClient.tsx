"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import ResearchLeadershipSection from "@/components/ResearchLeadershipSection";
import { getSpeakerSlug, getSpeakerBySlug } from "@/data/speakers";
import ProfileModal from "@/components/ProfileModal";
import FooterSection from "@/components/FooterSection";
import AboutOverlay from "@/components/AboutOverlay";
import WhatWeDoOverlay from "@/components/WhatWeDoOverlay";
import EventsOverlay from "@/components/EventsOverlay";
import type { ProfileData } from "@/components/ProfileModal";
import type { ActiveOverlay } from "@/components/Navbar";

interface SpeakersAndMentorsClientProps {
  initialSpeakerSlug?: string;
}

export default function SpeakersAndMentorsClient({
  initialSpeakerSlug,
}: SpeakersAndMentorsClientProps) {
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<ProfileData | null>(() => {
    if (!initialSpeakerSlug) return null;
    const match = getSpeakerBySlug(initialSpeakerSlug);
    if (!match) return null;
    return {
      name: match.name,
      role: match.role,
      org: match.org,
      badge: match.badge,
      photo: match.photo,
      bioParagraphs: match.bioParagraphs,
      tags: match.tags,
      sessionTopic: match.sessionTopic,
      slug: match.slug || getSpeakerSlug(match.name),
      linkedinUrl: match.linkedinUrl,
    };
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  // Handle browser Back / Forward buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const parts = path.split("/").filter(Boolean);
      if (parts.length >= 2 && parts[0] === "speakers-and-mentors") {
        const slug = parts[1];
        const match = getSpeakerBySlug(slug);
        if (match) {
          setSelectedProfile({
            name: match.name,
            role: match.role,
            org: match.org,
            badge: match.badge,
            photo: match.photo,
            bioParagraphs: match.bioParagraphs,
            tags: match.tags,
            sessionTopic: match.sessionTopic,
            slug: match.slug || getSpeakerSlug(match.name),
            linkedinUrl: match.linkedinUrl,
          });
          return;
        }
      }
      setSelectedProfile(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleProfileSelect = useCallback((profile: ProfileData) => {
    setSelectedProfile(profile);
    const slug = profile.slug || getSpeakerSlug(profile.name);
    const targetUrl = `/speakers-and-mentors/${slug}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ speaker: slug }, "", targetUrl);
    }
  }, []);

  const handleProfileClose = useCallback(() => {
    setSelectedProfile(null);
    if (window.location.pathname !== "/speakers-and-mentors") {
      window.history.pushState(null, "", "/speakers-and-mentors");
    }
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
          onProfileSelect={handleProfileSelect}
          onProfileClose={handleProfileClose}
          hideFooter={true}
        />
      </main>

      <FooterSection hideTopSections={true} />

      {/* Profile Modal */}
      <ProfileModal
        profile={selectedProfile}
        onClose={handleProfileClose}
      />
    </div>
  );
}
