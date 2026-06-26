"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";


const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { value: 150, suffix: "K+", label: "Leads Generated" },
  { value: 50,  suffix: "+",  label: "Clients Served" },
  { value: 100, suffix: "K+", label: "Impressions Delivered" },
  { value: 7,   suffix: "",   label: "Core Services" },
];

function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-transparent">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <motion.div
          ref={statsRef}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-t border-b border-black/[0.07] py-10"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center text-center py-4 sm:py-0 ${
                i < stats.length - 1 ? "border-r border-black/[0.07]" : ""
              }`}
            >
              <span
                className="text-[clamp(2rem,4vw,3rem)] font-normal text-[#1C1C1C] leading-none mb-2"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {statsInView ? (
                  <CountUp start={0} end={s.value} duration={2.2} suffix={s.suffix} />
                ) : (
                  `0${s.suffix}`
                )}
              </span>
              <span className="text-[#9BAABB] text-xs uppercase tracking-[0.15em]">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const commitments = [
  {
    num: "01",
    title: "Senior-Led Every Engagement",
    body: "Your account is owned by a domain expert from day one — not handed to juniors after the pitch. Every strategic decision has an experienced architect behind it.",
  },
  {
    num: "02",
    title: "Complete IP Ownership",
    body: "Every deliverable we create — code, brand assets, data pipelines, documentation — transfers to you in full. No vendor lock-in, no licensing dependencies.",
  },
  {
    num: "03",
    title: "Real-Time Transparency",
    body: "Live project dashboards, weekly standups, and monthly strategy reviews. You always know exactly where your engagement stands and what's shipping next.",
  },
  {
    num: "04",
    title: "Compliance & Security First",
    body: "ISO 27001 awareness, GDPR readiness, and security-hardened infrastructure are built into every engagement — not retrofitted at the end.",
  },
  {
    num: "05",
    title: "Outcome-Linked Delivery",
    body: "Every scope is tied to commercial KPIs agreed upfront. We don't declare success until your metrics move — leads, revenue, uptime, or automation rate.",
  },
  {
    num: "06",
    title: "Scales With Your Ambition",
    body: "From a focused sprint to an enterprise-wide transformation — our team expands to match your mandate without compromising quality or speed.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Founded",
    description:
      "Entice Innovations was born with a clear mission — be the premium digital partner that ambitious businesses trust. Started with a small team and a big vision.",
  },
  {
    year: "2023",
    title: "First 10 Clients",
    description:
      "Secured our first enterprise partnerships across fintech, retail, and professional services. Delivered measurable growth for every single one.",
  },
  {
    year: "2024",
    title: "AI Expansion",
    description:
      "Launched dedicated AI consulting and tech infrastructure practices to serve the next generation of businesses. Added ML strategy and automation to our core offering.",
  },
  {
    year: "2025",
    title: "50+ Clients",
    description:
      "Delivered 150K+ leads and 100K+ impressions. Became a trusted growth partner for premium brands across India with a full suite of 7 core services.",
  },
];

const beliefs = [
  {
    tag: "On AI",
    statement: "AI first. Always.",
    detail: "Every engagement starts with an AI readiness assessment. We don't bolt on AI as an afterthought — we architect your entire digital strategy around it.",
  },
  {
    tag: "On Structure",
    statement: "Integrated, not fragmented.",
    detail: "Seven disciplines, one team. Strategy, technology, creative, and growth working in parallel — not in silos handed off between agencies.",
  },
  {
    tag: "On Results",
    statement: "Your KPIs are our brief.",
    detail: "We define measurable outcomes before opening a single design file. Vanity metrics don't interest us — revenue, leads, and retention do.",
  },
  {
    tag: "On Partnerships",
    statement: "Long-term or not at all.",
    detail: "We turn down short-term projects. Every client we take on, we intend to grow with for years — not campaigns. Your success is literally our business model.",
  },
];

function TimelineRow({
  item,
}: {
  item: { year: string; title: string; description: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="flex items-start gap-6 sm:gap-10 py-10 pl-2 border-b border-black/[0.07]"
    >
      {/* Year */}
      <div className="w-16 sm:w-20 flex-shrink-0 text-right relative">
        <motion.span
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#1C1C1C] font-normal text-base sm:text-lg block"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {item.year}
        </motion.span>

        {/* Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.15, type: "spring", stiffness: 260, damping: 20 }}
          className="absolute -right-[1.7rem] sm:-right-[2.2rem] top-1.5 w-3 h-3 rounded-full bg-[#0F67FF] border-2 border-white shadow-[0_0_0_3px_rgba(15,103,255,0.15)]"
        />
      </div>

      {/* Content */}
      <div className="flex-1 pl-4">
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#1C1C1C] font-normal mb-2.5"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem" }}
        >
          {item.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#6B7A8D] text-sm leading-relaxed max-w-xl"
        >
          {item.description}
        </motion.p>
      </div>
    </div>
  );
}

export default function About() {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true });

  return (
    <main
      className="min-h-screen text-[#0A0F1E]"
      style={{
        background: `
          radial-gradient(ellipse 72% 45% at 18% 12%, rgba(147,197,253,0.50) 0%, rgba(186,230,253,0.22) 45%, transparent 70%),
          radial-gradient(ellipse 50% 35% at 6%  5%,  rgba(186,230,253,0.40) 0%, transparent 58%),
          radial-gradient(ellipse 55% 40% at 88% 42%, rgba(147,197,253,0.26) 0%, transparent 62%),
          radial-gradient(ellipse 40% 30% at 70% 85%, rgba(186,230,253,0.18) 0%, transparent 55%),
          radial-gradient(ellipse 35% 25% at 20% 90%, rgba(147,197,253,0.14) 0%, transparent 50%),
          #f5f8fc
        `,
      }}
    >

      {/* ── HERO ── */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full py-20 pt-32">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="text-[#6B7A8D] text-sm sm:text-base mb-8 tracking-normal"
          >
            The story behind the work
          </motion.p>

          {/* Headline — same scale as homepage */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3.8rem,10.5vw,9rem)] font-normal text-[#1C1C1C] leading-[1.0] tracking-[-0.02em] mb-10 w-full"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Who We Are
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="text-[#6B7A8D] text-base sm:text-lg leading-relaxed max-w-[560px] mb-8"
          >
            Entice Innovations is a premium end-to-end digital partner — combining AI, technology, and creative strategy to help ambitious businesses grow, compete, and lead.
          </motion.p>

          {/* Tagline dots — mirrors homepage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[#9BAABB] text-sm tracking-[0.04em] mb-10"
          >
            Digital Marketing &nbsp;·&nbsp; AI Consulting &nbsp;·&nbsp; Brand Building &nbsp;·&nbsp; Tech Infrastructure
          </motion.p>

          {/* CTA — dark rounded pill, same as homepage */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="/contact"
              className="inline-flex items-center bg-[#1C1C1C] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#0F67FF] transition-colors duration-300 shadow-md"
            >
              Start Your Journey
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-[#6B7A8D] border border-black/10 rounded-full px-8 py-3.5 hover:border-[#0F67FF] hover:text-[#0F67FF] transition-all duration-200 bg-white/60"
            >
              Explore services
            </a>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#C0CDD8] text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#C0CDD8] to-transparent"
          />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <StatsSection />

      {/* ── HOW WE THINK ── bold manifesto statements */}
      <section className="w-full py-24 sm:py-32 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">

          {/* Section header */}
          <div className="mb-16 sm:mb-20 max-w-3xl">
            <motion.span
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
            >
              How We Think
            </motion.span>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="text-[clamp(2.8rem,6vw,5rem)] font-normal text-[#1C1C1C] leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              A different kind of<br />digital partner.
            </motion.h2>
          </div>

          {/* Belief rows — large typographic statements */}
          <div className="divide-y divide-black/[0.07] border-t border-black/[0.07]">
            {beliefs.map((b, i) => (
              <motion.div
                key={b.tag}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.4}
                className="py-10 sm:py-14 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-16"
              >
                {/* Tag — left anchor */}
                <div className="flex-shrink-0 sm:w-36 pt-1">
                  <span className="text-xs text-[#9BAABB] uppercase tracking-[0.2em]">{b.tag}</span>
                </div>

                {/* Statement + detail */}
                <div className="flex-1">
                  <p
                    className="text-[clamp(1.8rem,4vw,3rem)] font-normal text-[#1C1C1C] leading-[1.1] tracking-[-0.02em] mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {b.statement}
                  </p>
                  <p className="text-[#6B7A8D] text-sm sm:text-base leading-relaxed max-w-xl">
                    {b.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── OUR COMMITMENT ── */}
      <section className="w-full py-24 sm:py-32 bg-transparent border-t border-black/[0.07]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">

          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-14">
            <div className="lg:w-[40%]">
              <motion.span
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
              >
                Our Commitment
              </motion.span>
              <motion.h2
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                What premium clients deserve. What we deliver.
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              className="lg:flex-1 text-[#4A5568] text-base leading-relaxed self-end"
            >
              Enterprise engagements demand more than execution — they demand accountability, transparency, and a partner who treats your outcomes as their own. These are our non-negotiables.
            </motion.p>
          </div>

          {/* Commitment cards */}
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {commitments.map((c) => (
              <motion.div
                key={c.num}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="relative group overflow-hidden rounded-xl border border-black/[0.07] bg-white px-7 py-6 hover:border-[#0F67FF]/25 hover:shadow-[0_4px_24px_rgba(15,103,255,0.07)] transition-all duration-300"
              >
                {/* Animated left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0F67FF] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out rounded-r-full" />

                {/* Faded number watermark */}
                <span
                  className="absolute right-5 top-1/2 -translate-y-1/2 select-none pointer-events-none font-normal leading-none text-black/[0.035] group-hover:text-[#0F67FF]/[0.055] transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "5.5rem" }}
                >
                  {c.num}
                </span>

                <div className="relative z-10">
                  <span className="font-mono text-[10px] text-[#C0CDD8] group-hover:text-[#0F67FF]/60 transition-colors duration-200 block mb-3">
                    {c.num}
                  </span>
                  <h3
                    className="text-[#1C1C1C] font-normal leading-snug mb-3 group-hover:text-[#0F67FF] transition-colors duration-200"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem" }}
                  >
                    {c.title}
                  </h3>
                  <div className="w-6 h-px bg-black/10 group-hover:bg-[#0F67FF] group-hover:w-10 transition-all duration-300 mb-3" />
                  <p className="text-[#6B7A8D] text-[13px] leading-relaxed">{c.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="w-full py-24 sm:py-32 bg-transparent border-t border-black/[0.07]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <motion.span
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-3 block"
              >
                Our Journey
              </motion.span>
              <motion.h2
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                From idea to impact<br />in four years.
              </motion.h2>
            </div>
          </div>

          {/* Timeline list */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[4.5rem] sm:left-[5.5rem] top-0 bottom-0 w-px overflow-hidden">
              <motion.div
                ref={lineRef}
                className="w-full bg-gradient-to-b from-[#0F67FF] via-[#93C5FD] to-transparent"
                initial={{ scaleY: 0 }}
                animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "top", height: "100%" }}
              />
            </div>

            <div className="flex flex-col border-t border-black/[0.07]">
              {timeline.map((item) => (
                <TimelineRow key={item.year} item={item} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ── matching homepage button style exactly */}
      <section className="w-full py-24 sm:py-32 bg-transparent border-t border-black/[0.07]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">

            <div className="max-w-2xl">
              <motion.span
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
              >
                Ready to Start?
              </motion.span>
              <motion.h2
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                className="text-[clamp(2.2rem,5vw,4rem)] font-normal text-[#1C1C1C] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                You&apos;re one conversation<br />away from extraordinary.
              </motion.h2>
            </div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#0F67FF] transition-colors duration-300 shadow-md"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-[#6B7A8D] border border-black/10 rounded-full px-8 py-3.5 hover:border-[#0F67FF] hover:text-[#0F67FF] transition-all duration-200 bg-white/60"
              >
                Explore services
              </a>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
