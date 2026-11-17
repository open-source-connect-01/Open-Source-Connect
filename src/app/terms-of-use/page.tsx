"use client";

import LegalPage, { legalLinkClass, legalListClass, type LegalSection } from "@/components/LegalPage";

const email = (
  <a href="mailto:hello@osconnect.org" className={legalLinkClass}>
    hello@osconnect.org
  </a>
);

const sections: LegalSection[] = [
  {
    id: "acceptance-of-terms",
    label: "Acceptance of Terms",
    title: "Acceptance of Terms",
    content: (
      <p>
        These Terms of Use (“Terms”) govern your access to and use of the Open Source Connect (“OSC,” “we,” “our,” or “us”) website, programs, events, and community spaces. By accessing or using any of them, you agree to be bound by these Terms and by our Privacy Policy and Code of Conduct. If you do not agree, please do not use our services.
      </p>
    ),
  },
  {
    id: "eligibility-and-accounts",
    label: "Eligibility and Accounts",
    title: "Eligibility and Accounts",
    content: (
      <p>
        You must be at least 16 years old to use our services. When you register, you agree to provide accurate information and keep it up to date. You are responsible for keeping your credentials secure and for all activity under your account. Notify us promptly at {email} if you suspect unauthorized access.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    label: "Acceptable Use",
    title: "Acceptable Use",
    content: (
      <>
        <p>You agree to use our services lawfully and in line with our Code of Conduct. You will not:</p>
        <ul className={legalListClass}>
          <li>Violate any applicable law or the rights of others.</li>
          <li>Harass, threaten, or discriminate against any person.</li>
          <li>Upload malware or attempt to disrupt, probe, or gain unauthorized access to our systems.</li>
          <li>Scrape or collect data from our services in an automated way without our written permission.</li>
          <li>Impersonate another person or misrepresent your affiliation with OSC.</li>
        </ul>
      </>
    ),
  },
  {
    id: "contributions-and-ip",
    label: "Contributions and IP",
    title: "Contributions and Intellectual Property",
    content: (
      <>
        <p>
          The OSC name, logo, website design, and original content are owned by OSC or its licensors and are protected by intellectual property laws. You may not use our marks without prior written permission.
        </p>
        <p>
          Contributions you make to hosted projects remain yours and are licensed under the license of the project you contribute to. You confirm that you have the right to submit your contributions and that doing so does not violate any third party’s rights.
        </p>
      </>
    ),
  },
  {
    id: "community-content",
    label: "Community Content",
    title: "Community Content",
    content: (
      <p>
        You are responsible for the content you post in our community spaces. You grant OSC a non-exclusive, worldwide, royalty-free license to host, display, and distribute that content as needed to operate our services. We may remove content that violates these Terms or the Code of Conduct.
      </p>
    ),
  },
  {
    id: "third-party-links",
    label: "Third-Party Links",
    title: "Third-Party Links and Services",
    content: (
      <p>
        Our services may link to third-party websites and tools, such as code hosting and chat platforms. We do not control them and are not responsible for their content or practices. Your use of them is subject to their own terms.
      </p>
    ),
  },
  {
    id: "disclaimers",
    label: "Disclaimers",
    title: "Disclaimers",
    content: (
      <p>
        Our services are provided “as is” and “as available,” without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that our services will be uninterrupted, secure, or error free.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    label: "Limitation of Liability",
    title: "Limitation of Liability",
    content: (
      <p>
        To the fullest extent permitted by law, OSC and its volunteers, contributors, and leaders will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, profits, or goodwill, arising from your use of our services.
      </p>
    ),
  },
  {
    id: "termination",
    label: "Termination",
    title: "Suspension and Termination",
    content: (
      <p>
        We may suspend or end your access to our services at any time if you breach these Terms or the Code of Conduct, or if required by law. You may stop using our services at any time and may ask us to close your account.
      </p>
    ),
  },
  {
    id: "changes-to-terms",
    label: "Changes to Terms",
    title: "Changes to These Terms",
    content: (
      <p>
        We may update these Terms from time to time. The “Last updated” date shows when changes were last made. Continued use of our services after changes take effect means you accept the updated Terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    label: "Governing Law",
    title: "Governing Law",
    content: (
      <p>
        These Terms are governed by the laws of the jurisdiction in which OSC is established, without regard to conflict of law principles. Any disputes will be resolved in the courts of that jurisdiction, unless applicable law requires otherwise.
      </p>
    ),
  },
  {
    id: "contact-us",
    label: "Contact Us",
    title: "Contact Us",
    content: <p>For questions about these Terms, contact us at {email}.</p>,
  },
];

export default function TermsOfUsePage() {
  return <LegalPage title="Terms of Use" subtitle="Last updated: November 2026" sections={sections} />;
}
