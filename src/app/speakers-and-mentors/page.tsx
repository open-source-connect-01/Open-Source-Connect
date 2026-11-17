import SpeakersAndMentorsClient from "./SpeakersAndMentorsClient";

type PageProps = {
  searchParams: Promise<{
    tab?: string | string[];
  }>;
};

export default async function SpeakersAndMentorsPage({ searchParams }: PageProps) {
  const { tab } = await searchParams;
  return <SpeakersAndMentorsClient initialTab={tab === "mentors" ? "mentors" : "speakers"} />;
}
