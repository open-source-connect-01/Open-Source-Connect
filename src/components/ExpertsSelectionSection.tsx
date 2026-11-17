import type { ExpertsTab } from "@/components/ResearchLeadershipSection";

const TRACKS: Record<
  ExpertsTab,
  {
    title: string;
    cta: { label: string; href: string };
    steps: [title: string, text: string, time: string][];
    look: string[];
    get: string[];
  }
> = {
  mentors: {
    title: "How mentors are selected",
    cta: { label: "Apply to mentor", href: "mailto:hello@osconnect.org" },
    steps: [
      ["Apply or nominate", "Members, working groups, or experts submit a profile with experience and focus areas.", "Open all year"],
      ["Eligibility screening", "Staff verify experience, affiliations, and Code of Conduct acceptance.", "3 business days"],
      ["Committee review", "The Mentorship Committee scores each candidate against the published rubric.", "About 1 week"],
      ["Intro conversation", "A 30 minute call confirms availability, mentoring approach, and domains.", "About 1 week"],
      ["Onboard and match", "Approved mentors join the directory and are matched to mentees by goals.", "Within 5 days"],
    ],
    look: [
      "5 or more years of hands-on industry experience",
      "Active contributions to open source or standards work",
      "Record of coaching and helping others grow",
      "Commitment of 2 or more hours per month",
    ],
    get: [
      "Public profile in the experts directory",
      "Recognition at OSC events",
      "Access to the mentor network and working groups",
      "Dedicated support from the foundation team",
    ],
  },
  speakers: {
    title: "How speakers are selected",
    // shortcut: placeholder link, swap in the real CFP form when it exists
    cta: { label: "Submit a proposal", href: "#" },
    steps: [
      ["Submit a proposal", "Speakers respond to the call with a session abstract, outline, and short bio.", "Per event call"],
      ["Eligibility screening", "Staff check completeness, relevance, and vendor neutrality of the proposal.", "1 week"],
      ["Blind peer review", "Program committee members score proposals without seeing names or employers.", "2 weeks"],
      ["Program selection", "The committee balances topics, formats, and perspectives for the final lineup.", "1 week"],
      ["Briefing and rehearsal", "Accepted speakers receive guidelines and a rehearsal slot before the event.", "Before event"],
    ],
    look: [
      "Original, technically sound content with real examples",
      "Relevance to the event theme and audience",
      "Clear delivery and a record of public speaking",
      "Vendor neutral talks with no product pitches",
    ],
    get: [
      "Speaker profile in the experts directory",
      "Complimentary event registration",
      "Session recording shared with the community",
      "Editorial support on slides and abstract",
    ],
  },
};

export default function ExpertsSelectionSection({ activeTab }: { activeTab: ExpertsTab }) {
  const track = TRACKS[activeTab];

  return (
    <section aria-labelledby="selection-heading" className="w-full bg-[#F1F5F9] border-y border-slate-200 py-14 sm:py-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 lg:items-end mb-10 sm:mb-12">
          <h2 id="selection-heading" className="text-2xl sm:text-4xl lg:text-[38px] font-extrabold text-[#0B0F1A] tracking-tight leading-tight">
            {track.title}
          </h2>
          <p className="text-sm sm:text-[17px] text-slate-600 leading-relaxed">
            Every application follows a documented, merit based review with independent evaluation. Here are the stages, timeline, and criteria.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-6 border-t-[3px] border-[#0F172A]">
          {track.steps.map(([title, text, time], i) => (
            <li key={title} className="pt-6 lg:pr-5 lg:[&+li]:border-l lg:[&+li]:border-slate-200 lg:[&+li]:pl-5">
              <span className="inline-grid place-items-center w-8 h-8 bg-[#0F172A] text-white text-sm font-bold mb-4">
                {i + 1}
              </span>
              <h3 className="text-[17px] font-bold text-[#0B0F1A] mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
              <p className="mt-3 text-[13px] font-semibold text-[#1D4ED8]">{time}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 sm:mt-14 grid lg:grid-cols-2 gap-6">
          {([["What we look for", track.look], ["What you get", track.get]] as const).map(([heading, items]) => (
            <div key={heading} className="bg-white border border-slate-200 border-l-4 border-l-[#1D4ED8] p-6 sm:p-7">
              <h3 className="text-lg font-bold text-[#0B0F1A] mb-3.5">{heading}</h3>
              <ul className="grid gap-2.5 text-[15px] text-slate-600">
                {items.map((item) => (
                  <li key={item} className="relative pl-[22px] before:absolute before:left-0 before:top-[0.7em] before:w-2.5 before:h-0.5 before:bg-[#F59E0B]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={track.cta.href}
            className="inline-block bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-[13px] font-extrabold tracking-[0.12em] uppercase px-5 py-3.5 rounded-[2px] transition-colors"
          >
            {track.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
