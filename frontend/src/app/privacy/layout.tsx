import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Entice Innovations' privacy policy — how we collect, use, store, and protect your personal data.",
  openGraph: {
    title: "Privacy Policy — Entice Innovations",
    description:
      "Our commitment to your privacy. Learn how Entice Innovations handles your personal data.",
    url: "https://enticeinnovations.com/privacy",
  },
  alternates: {
    canonical: "https://enticeinnovations.com/privacy",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
