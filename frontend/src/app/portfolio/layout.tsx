import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See how Entice Innovations has transformed businesses across healthcare, defence, finance, automotive, education, and more. Browse our case studies and work samples.",
  openGraph: {
    title: "Portfolio — Entice Innovations",
    description:
      "50+ premium clients served. Explore our work across AI consulting, brand building, digital marketing, IT infrastructure, and tech delivery.",
    url: "https://enticeinnovations.com/portfolio",
  },
  alternates: {
    canonical: "https://enticeinnovations.com/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
