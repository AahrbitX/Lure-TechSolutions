import type { Metadata } from "next";
import TopNavbar from "@/components/commons/TopNavbar";
import Footer from "@/components/commons/Footer";
import CustomCursor from "@/components/commons/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://enticeinnovations.com"),
  title: {
    default: "Entice Innovations — Digital Solutions Partner",
    template: "%s | Entice Innovations",
  },
  description:
    "Entice Innovations: End-to-end digital solutions — AI consulting, IT strategy, digital marketing, brand building, and tech infrastructure across 12+ industries.",
  keywords: [
    "Entice Innovations",
    "AI consulting",
    "IT consulting",
    "digital marketing",
    "brand building",
    "tech infrastructure",
    "domain hosting",
    "SEO",
    "performance marketing",
    "digital agency India",
    "India",
  ],
  authors: [{ name: "Entice Innovations", url: "https://enticeinnovations.com" }],
  creator: "Entice Innovations",
  publisher: "Entice Innovations",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://enticeinnovations.com",
    siteName: "Entice Innovations",
    title: "Entice Innovations — Digital Solutions Partner",
    description:
      "End-to-end digital solutions — AI consulting, IT strategy, digital marketing, brand building, and tech infrastructure across 12+ industries.",
    images: [
      {
        url: "/assets/logo/entice-logo.svg",
        width: 1200,
        height: 630,
        alt: "Entice Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entice Innovations — Digital Solutions Partner",
    description:
      "End-to-end digital solutions — AI consulting, IT strategy, digital marketing, brand building, and tech infrastructure across 12+ industries.",
    images: ["/assets/logo/entice-logo.svg"],
    creator: "@enticeinnovations",
    site: "@enticeinnovations",
  },
  icons: {
    icon: [
      { url: "/assets/logo/entice-logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/assets/logo/entice-logo.svg",
    apple: "/assets/logo/entice-logo.svg",
  },
  alternates: {
    canonical: "https://enticeinnovations.com",
  },
  category: "technology",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <TopNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
