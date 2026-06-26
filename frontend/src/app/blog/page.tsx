import Link from "next/link";
import { getAllPosts, getAllCategories, formatDate } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI consulting, digital marketing, IT strategy, brand building, and tech infrastructure from the Entice Innovations team.",
  openGraph: {
    title: "Blog — Entice Innovations",
    description:
      "Practical insights on AI, digital marketing, IT strategy, and brand building for ambitious businesses.",
    url: "https://enticeinnovations.com/blog",
  },
  alternates: { canonical: "https://enticeinnovations.com/blog" },
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getAllPosts(), getAllCategories()]);

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <main
      style={{
        background: `
          radial-gradient(ellipse 72% 45% at 18% 12%, rgba(147,197,253,0.45) 0%, rgba(186,230,253,0.18) 45%, transparent 70%),
          radial-gradient(ellipse 50% 35% at 6% 5%, rgba(186,230,253,0.35) 0%, transparent 58%),
          radial-gradient(ellipse 55% 40% at 88% 42%, rgba(147,197,253,0.20) 0%, transparent 62%),
          #f5f8fc
        `,
      }}
    >
      {/* ── HERO ── */}
      <section className="w-full pt-36 pb-16 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <span className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-6 block">
            Insights
          </span>
          <h1
            className="text-[clamp(3rem,7vw,5.5rem)] font-normal text-[#1C1C1C] leading-[1.03] tracking-[-0.02em] mb-5 max-w-3xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Ideas worth<br />thinking about.
          </h1>
          <p className="text-[#6B7A8D] text-base max-w-xl leading-relaxed">
            Strategy, technology, and growth insights from the Entice Innovations team — written for decision-makers who want substance over noise.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      {featured && (
        <section className="border-t border-black/[0.07] py-14 px-6 sm:px-10">
          <div className="max-w-6xl mx-auto">
            <p className="text-[10px] text-[#C0CDD8] uppercase tracking-[0.22em] mb-6">Featured</p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#e8edf5] to-[#c7d8ee] aspect-[16/9]">
                  {featured.image && (
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-semibold px-3 py-1 rounded-full bg-white/90 text-[#0F67FF]">
                    {featured.category}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#9BAABB] text-xs">{formatDate(featured.date)}</span>
                    <span className="w-1 h-1 rounded-full bg-[#C0CDD8]" />
                    <span className="text-[#9BAABB] text-xs">{featured.readTime}</span>
                  </div>
                  <h2
                    className="text-[clamp(1.8rem,3vw,2.8rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em] mb-4 group-hover:text-[#0F67FF] transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-6">{featured.description}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0F67FF] flex items-center justify-center">
                      <span className="text-white text-[9px] font-bold">EI</span>
                    </div>
                    <div>
                      <p className="text-[#1C1C1C] text-xs font-medium">{featured.author}</p>
                      {featured.authorRole && (
                        <p className="text-[#9BAABB] text-[10px]">{featured.authorRole}</p>
                      )}
                    </div>
                    <span className="ml-auto text-[#0F67FF] text-xs font-medium group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      Read article →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── ALL POSTS ── */}
      <section className="border-t border-black/[0.07] py-14 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-xs border border-black/[0.08] bg-white/60 text-[#6B7A8D]"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          {rest.length === 0 && !featured && (
            <p className="text-[#9BAABB] text-sm">No posts yet. Check back soon.</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-black/[0.07] bg-white/60 overflow-hidden hover:border-[#0F67FF]/30 hover:shadow-[0_4px_32px_rgba(15,103,255,0.08)] transition-all duration-300"
              >
                {/* Cover */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#e8edf5] to-[#c7d8ee]">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <span className="absolute top-3 left-3 text-[9px] font-semibold px-2.5 py-0.5 rounded-full bg-white/90 text-[#0F67FF]">
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#C0CDD8] text-[10px]">{formatDate(post.date)}</span>
                    <span className="w-1 h-1 rounded-full bg-[#E2E8F0]" />
                    <span className="text-[#C0CDD8] text-[10px]">{post.readTime}</span>
                  </div>

                  <h3
                    className="font-normal text-[#1C1C1C] mb-2 leading-snug group-hover:text-[#0F67FF] transition-colors duration-200"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem" }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-[#6B7A8D] text-xs leading-relaxed flex-1 mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] px-2 py-0.5 rounded-md bg-[#F0F4FF] text-[#0F67FF] border border-[#0F67FF]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-2 pt-3.5 border-t border-black/[0.06]">
                    <div className="w-6 h-6 rounded-full bg-[#0F67FF] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[8px] font-bold">EI</span>
                    </div>
                    <span className="text-[#9BAABB] text-[10px]">{post.author}</span>
                    <span className="ml-auto text-[#0F67FF] text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-black/[0.07] py-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-3">Get in touch</p>
            <h2
              className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Ready to work together?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#0F67FF] transition-colors duration-300 whitespace-nowrap"
          >
            Start a project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
