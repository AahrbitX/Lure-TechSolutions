import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Entice Innovations. Tell us about your project and we'll get back to you within one business day.",
  openGraph: {
    title: "Contact Entice Innovations",
    description:
      "Ready to transform your business? Contact our team for AI consulting, digital marketing, IT strategy, brand building, or any of our seven core service disciplines.",
    url: "https://enticeinnovations.com/contact",
  },
  alternates: {
    canonical: "https://enticeinnovations.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
