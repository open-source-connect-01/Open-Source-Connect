import type { ProfileData } from "@/components/ProfileModal";

export type SpeakerMember = ProfileData & {
  cardRole: string;
  photo: string;
  eventTag?: string;
  eventLink?: string;
};

export function getSpeakerSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const teamMembers: SpeakerMember[] = [
  {
    name: "Sebastiano Fuccio",
    slug: "sebastiano-fuccio",
    linkedinUrl: "https://www.linkedin.com/in/sebastiano-fuccio/",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Founder & CEO | Managing Partner",
    role: "Founder & CEO | Managing Partner",
    org: "AlpGuard",
    badge: "Keynote Speaker",
    photo: "/leaders/sebastiano_fuccio_v3.png",
    bioParagraphs: [
      "Sebastiano Fuccio is an AI strategist, entrepreneur, and digital transformation leader with over 30 years of experience across emerging technologies, enterprise innovation, and AI governance.",
      "His work focuses on AI strategy, sovereign innovation, digital transformation, and compliance, while building AlpGuard and advising organizations on responsible AI adoption, governance, and sustainable business outcomes.",
    ],
    sessionTopic: "AI for the open-source community",
    tags: ["AI Strategy", "Digital Transformation", "AI Governance"],
  },
  {
    name: "Olena Yara",
    slug: "olena-yara",
    linkedinUrl: "https://www.linkedin.com/in/olena-yara/",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Founder & Marketing Expert",
    role: "Founder & Marketing Expert",
    org: "Yara Agency",
    badge: "Keynote Speaker",
    photo: "/leaders/olena_yara_v3.png",
    bioParagraphs: [
      "Olena Yara is a marketing expert and founder of Yara Agency, working at the intersection of digital art, technology, and global communities.",
      "Her work focuses on marketing, curation, and strategic partnerships, helping artists, institutions, and companies amplify their work while connecting creativity, technology, and community through storytelling and collaboration.",
    ],
    sessionTopic: "Building a strong brand in the open-source ecosystem",
    tags: ["Marketing Strategy", "Digital Art", "Strategic Partnerships", "Storytelling"],
  },
  {
    name: "Chikahiro Tokoro",
    slug: "chikahiro-tokoro",
    linkedinUrl: "https://www.linkedin.com/in/chikahiro/",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Software Engineer, Podcaster",
    role: "Software Engineer, Podcaster",
    org: "OSS Developer / Public Speaker",
    badge: "Keynote Speaker",
    photo: "/leaders/chikahiro_tokoro_v3.png",
    bioParagraphs: [
      "Chikahiro Tokoro is a software engineer, podcaster, and public speaker with over 15 years of experience building and scaling impactful products across successful startups in Japan and Germany.",
      "His work focuses on software engineering, product development, open source, and sharing practical insights on software design while connecting global communities through his podcast and speaking engagements.",
    ],
    sessionTopic: "Strategy for finding a problem for OSS: With a real example – Generating Anonymized Database",
    tags: ["Software Engineering", "Product Development", "Open Source", "Public Speaker"],
  },
  {
    name: "Ekaterina Maevskaia",
    slug: "ekaterina-maevskaia",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Revenue Growth Leader",
    role: "Revenue Growth Leader",
    org: "Snap Inc. & TikTok",
    badge: "Keynote Speaker",
    photo: "/leaders/ekaterina_maevskaia.png",
    bioParagraphs: [
      "Ekaterina Maevskaia is a distinguished revenue growth leader focused on scaling multimillion dollar advertising portfolios, driving end to end go to market strategies, and transforming regional ecosystems across CEE and EMEA. Her work combines commercial strategy, business growth, and ecosystem development to create sustainable impact across markets.",
      "She engages with global technology networks through high impact commercial integrations, keynote presentations at conferences with 21,000+ attendees, and nonprofit community building. Her experience spans revenue growth, strategic partnerships, and building meaningful connections across the global technology ecosystem.",
    ],
    sessionTopic: "The creative QA gate: filtering assets before they burn your budget",
    tags: ["Revenue Growth", "Go-to-Market Strategy", "Strategic Partnerships", "Ecosystem Development"],
  },
  {
    name: "Kamesh Sampath",
    slug: "kamesh-sampath",
    linkedinUrl: "https://www.linkedin.com/in/kameshsampath/",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Developer Advocate",
    role: "Developer Advocate",
    org: "Snowflake",
    badge: "Keynote Speaker",
    photo: "/leaders/kamesh_sampath_v3.png",
    bioParagraphs: [
      "Kamesh Sampath is a Developer Advocate at Snowflake, author, and long time open source contributor with over two decades of experience in enterprise software and developer communities.",
      "His work focuses on cloud, data, and AI, helping developers turn complex technologies into real world solutions through advocacy, community building, storytelling, and knowledge sharing.",
    ],
    sessionTopic: "From milliseconds to insights: real-time PostgreSQL + CDC architecture for spatial analytics and AI in an AI data cloud",
    tags: ["Developer Advocacy", "Cloud & Data", "AI", "Open Source"],
  },
  {
    name: "Kateryna Tertiienko",
    slug: "kateryna-tertiienko",
    linkedinUrl: "https://www.linkedin.com/in/kate-tertiienko-1536663/",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Technical Lead",
    role: "Technical Lead",
    org: "Infonetica",
    badge: "Keynote Speaker",
    photo: "/leaders/kateryna_tertiienko.png",
    bioParagraphs: [
      "Kateryna Tertiienko is a technology leader and self-learner with around 20 years of experience across software engineering, diverse products, and engineering cultures in Ukraine, South Africa, and the UK.",
      "Her work focuses on technology leadership, software engineering, and building effective teams, with experience across multiple programming languages and frameworks.",
    ],
    sessionTopic: {
      title: "Engineering Culture & Technical Leadership Across Distributed Teams",
      description: "Strategies for leading high-performing engineering teams, navigating architectural challenges, and cultivating learning cultures in modern tech organizations.",
    },
    tags: ["Technology Leadership", "Software Engineering", "Team Building", "Engineering Culture"],
  },
  {
    name: "Dishant Gandhi",
    slug: "dishant-gandhi",
    linkedinUrl: "https://www.linkedin.com/in/dishant-gandhi/",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "AI/ML Consultant & Public Speaker",
    role: "AI/ML Consultant & Public Speaker",
    org: "Ruffalo Noel Levitz",
    badge: "Keynote Speaker",
    photo: "/leaders/dishant_gandhi_v3.png",
    bioParagraphs: [
      "Dishant Gandhi is an AI/ML Consultant with over 6 years of experience specializing in Generative AI, Conversational AI, and Large Language Models. He has built scalable chatbots, RAG pipelines, web applications, and AI powered widgets using technologies such as LangChain, Streamlit, and Kubernetes.",
      "With 25+ speaking sessions at global conferences, Dishant is known for simplifying complex AI concepts, driving innovation, and mentoring aspiring technologists to build impactful AI solutions.",
    ],
    sessionTopic: "Unlocking on-device intelligence with Small Language Models",
    tags: ["Generative AI", "LLMs", "Conversational AI", "RAG Pipelines"],
  },
  {
    name: "Nithin S.S",
    slug: "nithin-ss",
    linkedinUrl: "https://www.linkedin.com/in/nithin-ss/",
    eventTag: "OSC GLOBAL 2026",
    eventLink: "/Feb/2026",
    cardRole: "Founder & Leadership Strategist",
    role: "Founder & Leadership Strategist",
    org: "Synapse QA",
    badge: "Keynote Speaker",
    photo: "/leaders/nithin_ss.jpg",
    bioParagraphs: [
      "Nithin is a Software Engineering leader with over a decade of experience in Quality Engineering and team building. He is Head of QA at Lodgify and founder of Synapse QA, a community focused on accessible quality learning across Southeast Asia.",
      "He is also an international speaker, consultant, author of the Now to Next newsletter, and career coach who has guided over 200 professionals in their career growth.",
    ],
    sessionTopic: "My learning from the community: No one is an island",
    tags: ["Software Engineering", "Quality Engineering", "Leadership Strategy", "Career Coaching"],
  },
];

export function getSpeakerBySlug(slug: string) {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
  return teamMembers.find((member) => {
    const memberSlug = (member.slug || getSpeakerSlug(member.name))
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    return memberSlug === normalized;
  });
}
