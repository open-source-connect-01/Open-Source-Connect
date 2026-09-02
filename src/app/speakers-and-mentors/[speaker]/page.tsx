import SpeakersAndMentorsClient from "../SpeakersAndMentorsClient";
import { teamMembers, getSpeakerSlug } from "@/components/ResearchLeadershipSection";

type PageProps = {
  params: Promise<{
    speaker: string;
  }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    speaker: member.slug || getSpeakerSlug(member.name),
  }));
}

export default async function SpeakerModalPage({ params }: PageProps) {
  const { speaker } = await params;
  return <SpeakersAndMentorsClient initialSpeakerSlug={speaker} />;
}
