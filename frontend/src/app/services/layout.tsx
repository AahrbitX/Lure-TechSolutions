import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Entice Innovations' seven core service disciplines: Digital Marketing, IT Consulting, AI Consulting, Domain & Hosting, Tech Infrastructure, Brand Building, and Performance Marketing.",
  openGraph: {
    title: "Services — Entice Innovations",
    description:
      "Seven pillars of digital excellence. From AI consulting and brand building to performance marketing and cloud infrastructure — everything your business needs to grow.",
    url: "https://enticeinnovations.com/services",
  },
  alternates: {
    canonical: "https://enticeinnovations.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
