import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read Entice Innovations' terms and conditions governing the use of our services, including payment terms, intellectual property, confidentiality, and liability.",
  openGraph: {
    title: "Terms & Conditions — Entice Innovations",
    description: "Terms and conditions for clients and users of Entice Innovations.",
    url: "https://enticeinnovations.com/terms",
  },
  alternates: {
    canonical: "https://enticeinnovations.com/terms",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
