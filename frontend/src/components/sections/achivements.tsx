"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const reasons = [
  {
    number: "01",
    title: "All-in-One Partner",
    description: "From AI consulting to brand identity — every service under one roof. No fragmented vendors, no dropped handoffs, no wasted cycles.",
  },
  {
    number: "02",
    title: "AI-First Thinking",
    description: "We apply AI across every engagement — automation pipelines, campaign insights, infrastructure — not as a buzzword, but as real leverage.",
  },
  {
    number: "03",
    title: "Speed to Market",
    description: "Strategy, design, and execution delivered in weeks, not quarters. We move fast without cutting corners on quality or craft.",
  },
  {
    number: "04",
    title: "Measurable Results",
    description: "Every engagement is tied to KPIs. We've generated 150K+ leads and 100K+ impressions — and we track every number that matters.",
  },
  {
    number: "05",
    title: "Focused Attention",
    description: "We work with a select group of clients at a time, so every project gets the full weight of our team's focus and expertise.",
  },
  {
    number: "06",
    title: "Radical Transparency",
    description: "Clear timelines, weekly updates, full dashboard access. You always know exactly where your project stands and what's coming next.",
  },
];

const stats = [
  { value: 150, suffix: "K+", label: "Leads Generated" },
  { value: 50,  suffix: "+",  label: "Clients Served" },
  { value: 100, suffix: "K+", label: "Impressions Delivered" },
  { value: 7,   suffix: "",   label: "Core Services" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Achievements() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="relative w-full py-24 sm:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className="mb-16 sm:mb-20 max-w-3xl">
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="text-[clamp(2.4rem,5vw,4rem)] font-normal text-[#1C1C1C] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Built different.<br />Proven to deliver.
          </motion.h2>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="text-[#6B7A8D] text-base sm:text-lg leading-relaxed max-w-xl"
          >
            We're not a typical agency. We're a focused team of strategists, engineers, and creatives who care about one thing — results that compound over time.
          </motion.p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.06] rounded-2xl overflow-hidden mb-20">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              className="group bg-white/80 hover:bg-[#F8FAFF] transition-colors duration-300 p-8 sm:p-10 flex flex-col gap-4"
            >
              {/* Number */}
              <span
                className="text-[3rem] font-normal leading-none select-none mb-2 block transition-colors duration-300"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "#E8EDF4",
                }}
              >
                {reason.number}
              </span>

              {/* Title */}
              <h3
                className="text-lg font-normal text-[#1C1C1C] leading-snug tracking-[-0.01em] group-hover:text-[#0F67FF] transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem" }}
              >
                {reason.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-[1.5px] bg-black/10 group-hover:bg-[#0F67FF] group-hover:w-12 transition-all duration-300" />

              {/* Description */}
              <p className="text-[#6B7A8D] text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
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

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#0F67FF] transition-colors duration-300"
          >
            Start your journey
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-[#6B7A8D] hover:text-[#1C1C1C] transition-colors duration-200"
          >
            Explore our services
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
