import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Entice Innovations — an end-to-end digital partner for ambitious businesses across AI consulting, IT strategy, digital marketing, brand building, and tech infrastructure.",
  openGraph: {
    title: "About Entice Innovations — Digital Solutions Partner",
    description:
      "We are an integrated team — strategy, technology, creative, and growth working in parallel. 50+ clients. 12+ industries. Built for businesses that refuse to be average.",
    url: "https://enticeinnovations.com/about",
  },
  alternates: {
    canonical: "https://enticeinnovations.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
