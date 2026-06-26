"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
  tags: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};

export default function BlogPreview({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;

  const [featured, ...rest] = posts;

  return (
    <section className="border-t border-black/[0.07] py-20 sm:py-28 px-6 sm:px-10 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.span
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
            >
              From the Blog
            </motion.span>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="text-[clamp(2rem,4vw,3.2rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Ideas worth<br />thinking about.
            </motion.h2>
          </div>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#6B7A8D] border border-black/[0.10] rounded-full px-6 py-2.5 hover:border-[#0F67FF] hover:text-[#0F67FF] transition-all duration-200 bg-white whitespace-nowrap"
            >
              All articles →
            </Link>
          </motion.div>
        </div>

        {/* Grid — featured large left + 2 smaller right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5">

          {/* Featured post */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group flex flex-col h-full rounded-2xl border border-black/[0.07] bg-[#f5f8fc]/60 overflow-hidden hover:border-[#0F67FF]/25 hover:shadow-[0_6px_40px_rgba(15,103,255,0.08)] transition-all duration-300"
            >
              {/* Cover */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#e8edf5] to-[#c7d8ee]"
                style={{ aspectRatio: "16/8" }}>
                {featured.image && (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span className="absolute top-4 left-4 text-[9px] font-semibold px-2.5 py-0.5 rounded-full bg-white/90 text-[#0F67FF]">
                  {featured.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#C0CDD8] text-[10px] font-mono">
                    {new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#E2E8F0]" />
                  <span className="text-[#C0CDD8] text-[10px]">{featured.readTime}</span>
                </div>

                <h3
                  className="font-normal text-[#1C1C1C] mb-3 leading-[1.12] group-hover:text-[#0F67FF] transition-colors duration-200"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.4rem,2.4vw,2rem)" }}
                >
                  {featured.title}
                </h3>

                <p className="text-[#6B7A8D] text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
                  {featured.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
                  <div className="flex gap-1.5">
                    {featured.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[9px] px-2 py-0.5 rounded-md bg-[#F0F4FF] text-[#0F67FF] border border-[#0F67FF]/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#0F67FF] text-xs font-medium group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Two smaller posts stacked */}
          <div className="flex flex-col gap-5">
            {rest.slice(0, 2).map((post, i) => (
              <motion.div
                key={post.slug}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 2}
                className="flex-1"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-black/[0.07] bg-[#f5f8fc]/60 overflow-hidden hover:border-[#0F67FF]/25 hover:shadow-[0_4px_28px_rgba(15,103,255,0.07)] transition-all duration-300"
                >
                  {/* Cover */}
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#e8edf5] to-[#c7d8ee]">
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                    <span className="absolute top-3 left-3 text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/90 text-[#0F67FF]">
                      {post.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#C0CDD8] text-[10px] font-mono">
                        {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#E2E8F0]" />
                      <span className="text-[#C0CDD8] text-[10px]">{post.readTime}</span>
                    </div>

                    <h3
                      className="font-normal text-[#1C1C1C] leading-snug group-hover:text-[#0F67FF] transition-colors duration-200 flex-1 mb-3 line-clamp-2"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem" }}
                    >
                      {post.title}
                    </h3>

                    <span className="text-[#0F67FF] text-[10px] font-medium group-hover:translate-x-0.5 transition-transform duration-200 inline-block">
                      Read article →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
