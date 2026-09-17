import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.osconnect.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Open Source Connect | Connecting The World Through Open Source",
    template: "%s | Open Source Connect",
  },
  description:
    "Open Source Connect (OSC) provides community infrastructure, operational support, educational programs, and collaboration opportunities to help open source projects, contributors, and organizations grow sustainably.",
  keywords: [
    "Open Source",
    "OSC",
    "Open Source India",
    "Open Source Community",
    "Software Collaboration",
    "Tech Community",
    "Open Source Infrastructure",
  ],
  authors: [{ name: "Open Source Connect Team" }],
  openGraph: {
    title: "Open Source Connect | Connecting The World Through Open Source",
    description:
      "Open Source Connect (OSC) provides community infrastructure, operational support, educational programs, and collaboration opportunities to help open source projects, contributors, and organizations grow sustainably.",
    url: SITE_URL,
    siteName: "Open Source Connect (OSC)",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        secureUrl: `${SITE_URL}/og-image.jpg`,
        width: 1024,
        height: 537,
        alt: "Open Source Connect - Connecting The World Through Open Source",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@osconnect1",
    creator: "@osconnect1",
    title: "Open Source Connect | Connecting The World Through Open Source",
    description:
      "Open Source Connect (OSC) provides community infrastructure, operational support, educational programs, and collaboration opportunities to help open source projects, contributors, and organizations grow sustainably.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1024,
        height: 537,
        alt: "Open Source Connect - Connecting The World Through Open Source",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
