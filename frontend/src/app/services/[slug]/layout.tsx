import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);

  if (!svc) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: svc.title,
    description: svc.description,
    openGraph: {
      title: `${svc.title} — Entice Innovations`,
      description: svc.description,
      url: `https://enticeinnovations.com/services/${slug}`,
    },
    alternates: {
      canonical: `https://enticeinnovations.com/services/${slug}`,
    },
  };
}

export default function ServiceSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
