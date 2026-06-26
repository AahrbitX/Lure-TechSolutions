import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPost, getAllSlugs, getAllPosts, formatDate } from "@/lib/blog";

// ─── Static generation ────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ─── Per-post SEO metadata ────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found" };

  const ogImage = post.image ?? "/assets/logo/entice-logo.svg";

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://enticeinnovations.com/blog/${slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
    alternates: { canonical: `https://enticeinnovations.com/blog/${slug}` },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([getPost(slug), getAllPosts()]);

  if (!post) notFound();

  // Related posts: same category, excluding current
  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://enticeinnovations.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Entice Innovations",
      url: "https://enticeinnovations.com",
      logo: { "@type": "ImageObject", url: "https://enticeinnovations.com/assets/logo/entice-logo.svg" },
    },
    image: post.image ? `https://enticeinnovations.com${post.image}` : undefined,
    mainEntityOfPage: `https://enticeinnovations.com/blog/${slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        style={{
          background: `
            radial-gradient(ellipse 72% 45% at 18% 12%, rgba(147,197,253,0.40) 0%, rgba(186,230,253,0.16) 45%, transparent 70%),
            radial-gradient(ellipse 50% 35% at 6% 5%, rgba(186,230,253,0.30) 0%, transparent 58%),
            #f5f8fc
          `,
        }}
      >
        {/* ── HEADER ── */}
        <section className="w-full pt-36 pb-10 px-6 sm:px-10 border-b border-black/[0.07]">
          <div className="max-w-3xl mx-auto">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[10px] text-[#C0CDD8] mb-8 uppercase tracking-[0.18em]">
              <Link href="/" className="hover:text-[#0F67FF] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#0F67FF] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#9BAABB] truncate max-w-[200px]">{post.title}</span>
            </nav>

            {/* Category + meta */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-[#0F67FF]/10 text-[#0F67FF]">
                {post.category}
              </span>
              <span className="text-[#C0CDD8] text-[10px]">{formatDate(post.date)}</span>
              <span className="w-1 h-1 rounded-full bg-[#E2E8F0]" />
              <span className="text-[#C0CDD8] text-[10px]">{post.readTime}</span>
            </div>

            {/* Title */}
            <h1
              className="text-[clamp(2rem,5vw,3.8rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em] mb-5"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-[#4A5568] text-base leading-relaxed mb-8">{post.description}</p>

            {/* Author + tags */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0F67FF] flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">EI</span>
                </div>
                <div>
                  <p className="text-[#1C1C1C] text-xs font-medium">{post.author}</p>
                  {post.authorRole && (
                    <p className="text-[#9BAABB] text-[10px]">{post.authorRole}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 ml-auto">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] px-2.5 py-0.5 rounded-md bg-[#F0F4FF] text-[#0F67FF] border border-[#0F67FF]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── COVER IMAGE ── */}
        {post.image && (
          <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 py-8">
            <div className="rounded-2xl overflow-hidden aspect-[16/7] bg-gradient-to-br from-[#e8edf5] to-[#c7d8ee]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* ── CONTENT ── */}
        <section className="px-6 sm:px-10 py-10 pb-20">
          <div className="max-w-3xl mx-auto">
            <article
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
            />
          </div>
        </section>

        {/* ── RELATED POSTS ── */}
        {related.length > 0 && (
          <section className="border-t border-black/[0.07] py-16 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto">
              <p className="text-[10px] text-[#C0CDD8] uppercase tracking-[0.22em] mb-8">
                Related Articles
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group flex gap-5 rounded-2xl border border-black/[0.07] bg-white/60 p-5 hover:border-[#0F67FF]/30 hover:shadow-[0_4px_24px_rgba(15,103,255,0.07)] transition-all duration-300"
                  >
                    <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-[#e8edf5] to-[#c7d8ee]">
                      {rp.image && (
                        <img src={rp.image} alt={rp.title} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-[#9BAABB] mb-1">{formatDate(rp.date)} · {rp.readTime}</p>
                      <h3
                        className="font-normal text-[#1C1C1C] leading-snug group-hover:text-[#0F67FF] transition-colors duration-200 line-clamp-2"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem" }}
                      >
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── BACK / CTA ── */}
        <section className="border-t border-black/[0.07] py-14 px-6 sm:px-10">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#6B7A8D] hover:text-[#0F67FF] transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All articles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F67FF] text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-[#0D5AE0] transition-colors duration-300"
            >
              Talk to our team →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
