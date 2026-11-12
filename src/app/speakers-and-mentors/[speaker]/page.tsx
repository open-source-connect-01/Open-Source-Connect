import SpeakersAndMentorsClient from "../SpeakersAndMentorsClient";
import { teamMembers, mentors, getSpeakerSlug } from "@/data/speakers";

type PageProps = {
  params: Promise<{
    speaker: string;
  }>;
};

export function generateStaticParams() {
  return [...teamMembers, ...mentors].map((member) => ({
    speaker: member.slug || getSpeakerSlug(member.name),
  }));
}

export default async function SpeakerModalPage({ params }: PageProps) {
  const { speaker } = await params;
  return <SpeakersAndMentorsClient initialSpeakerSlug={speaker} />;
}
