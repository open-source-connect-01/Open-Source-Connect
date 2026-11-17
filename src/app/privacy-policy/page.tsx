"use client";

import LegalPage, { legalLinkClass, legalListClass, type LegalSection } from "@/components/LegalPage";

const email = (
  <a href="mailto:hello@osconnect.org" className={legalLinkClass}>
    hello@osconnect.org
  </a>
);

const sections: LegalSection[] = [
  {
    id: "introduction",
    label: "Introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          Open Source Connect (“OSC,” “we,” “our,” or “us”) respects your privacy and is committed to protecting the personal information entrusted to us. This Privacy Policy explains how we collect, use, disclose, retain, and protect personal information when you access or use our website, register for or participate in our programs and events, join our community, communicate with us, or otherwise interact with Open Source Connect.
        </p>
        <p>
          By accessing or using our website or participating in our programs, events, or community initiatives, you acknowledge that you have read and understood this Privacy Policy. Where applicable law requires your consent to a particular processing activity, we will obtain that consent separately. If you do not agree with the practices described in this Privacy Policy, please discontinue your use of our website and services.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    label: "Information We Collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We collect information in the following ways:</p>
        <ul className={legalListClass}>
          <li><strong className="text-[#1E293B]">Information you provide.</strong> Your name, email address, organization, role, and any details you share when you register, apply for membership, sign up for events, subscribe to updates, or contact us.</li>
          <li><strong className="text-[#1E293B]">Information collected automatically.</strong> Your IP address, browser type, device and operating system, referring pages, pages viewed, and access times when you visit our website.</li>
          <li><strong className="text-[#1E293B]">Contribution information.</strong> Metadata about your open source participation in OSC programs, such as project memberships, commit history, pull request activity, and working group involvement.</li>
          <li><strong className="text-[#1E293B]">Communications.</strong> Messages, feedback, and support requests you send us, and records of our replies.</li>
        </ul>
        <p>We collect only the information needed to provide the services you request and to carry out the purposes described in this policy.</p>
      </>
    ),
  },
  {
    id: "how-we-use-your-information",
    label: "How We Use Your Information",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use personal information to:</p>
        <ul className={legalListClass}>
          <li>Create and manage your account and project memberships.</li>
          <li>Operate programs, events, and working groups, and recognize contributions.</li>
          <li>Send newsletters, updates, and administrative messages.</li>
          <li>Respond to your questions and support requests.</li>
          <li>Understand how our website is used and improve our services.</li>
          <li>Protect the community, prevent misuse, and meet our legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-share-information",
    label: "How We Share Information",
    title: "How We Share Information",
    content: (
      <>
        <p>
          We do not sell your personal information. We may share it with service providers who help us run our website, events, and communications, and who are bound to keep it confidential and use it only for our purposes. We may also disclose information where required by law, to protect the rights and safety of OSC and our community, or in connection with an organizational change such as a merger or restructuring.
        </p>
        <p>Contribution activity in public repositories and project records is public by nature and may be visible to anyone.</p>
      </>
    ),
  },
  {
    id: "data-retention",
    label: "Data Retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          We keep personal information only for as long as needed for the purposes in this policy, and as required to comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we delete or anonymize it.
        </p>
        <p>
          Contribution records and project participation histories may be retained indefinitely as part of the public open source record, consistent with community norms of attribution and transparency.
        </p>
      </>
    ),
  },
  {
    id: "your-privacy-rights",
    label: "Your Privacy Rights",
    title: "Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on where you live, you may have the right to access the personal information we hold about you, request correction of inaccurate information, request deletion, receive a portable copy of your data, object to or restrict certain processing, and opt out of marketing communications at any time.
        </p>
        <p>To exercise any of these rights, contact us at {email}. We will respond to all legitimate requests within 30 days.</p>
      </>
    ),
  },
  {
    id: "cookies-and-tracking",
    label: "Cookies & Tracking",
    title: "Cookies & Tracking",
    content: (
      <p>
        We use cookies and similar technologies to operate our website and remember your settings. These include session cookies for site functionality, anonymized analytics cookies to understand usage patterns, and preference cookies such as your display theme. You can set your browser to refuse cookies or to alert you when one is sent, though some features may not work as intended.
      </p>
    ),
  },
  {
    id: "security",
    label: "Security",
    title: "Security",
    content: (
      <p>
        We use administrative, technical, and physical safeguards to protect personal information. While we take reasonable steps to secure the information you provide, no method of transmission or storage is completely secure. If a security breach affects your personal information, we will notify you promptly in accordance with applicable law.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    label: "Children’s Privacy",
    title: "Children’s Privacy",
    content: (
      <p>
        Our website and programs are not directed to children under 16, and we do not knowingly collect their personal information. If you believe a child has given us personal information, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes-to-this-policy",
    label: "Changes to This Policy",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page shows when changes were last made. Where changes are material, we will provide additional notice.
      </p>
    ),
  },
  {
    id: "contact-us",
    label: "Contact Us",
    title: "Contact Us",
    content: <p>If you have questions or comments about this Privacy Policy, contact us at {email}.</p>,
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" subtitle="Last updated: November 2026" sections={sections} />;
}
