"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 72% 45% at 18% 12%, rgba(147,197,253,0.50) 0%, rgba(186,230,253,0.22) 45%, transparent 70%),
          radial-gradient(ellipse 50% 35% at 6%  5%,  rgba(186,230,253,0.40) 0%, transparent 58%),
          radial-gradient(ellipse 55% 40% at 88% 42%, rgba(147,197,253,0.26) 0%, transparent 62%),
          #f5f8fc
        `,
      }}
    >
      {/* Watermark */}
      <span
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none font-normal text-[#1C1C1C]/[0.04] leading-none"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(10rem, 30vw, 22rem)",
        }}
        aria-hidden
      >
        404
      </span>

      {/* Content */}
      <div className="relative z-10 max-w-xl w-full text-center">
        <motion.span
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-6 block"
        >
          Page Not Found
        </motion.span>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="text-[clamp(2.2rem,5vw,3.8rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em] mb-6"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Looks like you've<br />wandered off the map.
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="text-[#6B7A8D] text-base leading-relaxed mb-10 max-w-sm mx-auto"
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#0F67FF] transition-colors duration-300 shadow-md"
          >
            Back to Home
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-[#6B7A8D] border border-black/10 rounded-full px-8 py-3.5 hover:border-[#0F67FF] hover:text-[#0F67FF] transition-all duration-200 bg-white/60"
          >
            View Services
          </Link>
        </motion.div>

        {/* Quick links */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={4}
          className="flex items-center justify-center gap-6"
        >
          {[
            { label: "Portfolio", href: "/portfolio" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-[#9BAABB] hover:text-[#0F67FF] transition-colors duration-200 flex items-center gap-1 group"
            >
              {link.label}
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
