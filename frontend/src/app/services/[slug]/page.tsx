"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { services, getServiceBySlug } from "@/lib/services-data";
import { use } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const svc = getServiceBySlug(slug);

  if (!svc) notFound();

  const currentIndex = services.findIndex((s) => s.id === slug);
  const prev = currentIndex > 0 ? services[currentIndex - 1] : null;
  const next = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <main
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
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center pt-32 pb-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto w-full">

          {/* Back navigation */}
          <motion.a
            href="/services"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs text-[#9BAABB] hover:text-[#0F67FF] transition-colors duration-200 mb-10 group"
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All Services
          </motion.a>

          {/* Number + badge row */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible"
            className="flex items-center gap-3 mb-6"
          >
            <span
              className="text-[#C0CDD8] font-normal"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1rem" }}
            >
              {svc.number}
            </span>
            <span
              className="text-xs font-medium px-3 py-1 rounded-full border"
              style={{
                color: svc.accent,
                borderColor: `${svc.accent}30`,
                background: svc.accentBg,
              }}
            >
              {svc.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-[clamp(3rem,7vw,6rem)] font-normal text-[#1C1C1C] leading-[1.03] tracking-[-0.02em] mb-8"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {svc.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-[#6B7A8D] text-base sm:text-lg leading-relaxed max-w-xl mb-6"
          >
            {svc.subtitle}
          </motion.p>

          {/* Outcome highlight */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-sm italic font-medium"
            style={{ color: svc.accent }}
          >
            {svc.outcome}
          </motion.p>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="border-t border-black/[0.07] py-14 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/[0.06] rounded-2xl overflow-hidden">
            {svc.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="bg-white/70 px-8 py-10 flex flex-col gap-2"
              >
                <span
                  className="text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-none tracking-[-0.03em]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: svc.accent }}
                >
                  {m.value}
                </span>
                <span className="text-[#6B7A8D] text-sm">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section className="border-t border-black/[0.07] py-16 sm:py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left sticky label */}
            <div className="w-full lg:w-[32%] flex-shrink-0 lg:sticky lg:top-28 self-start">
              <motion.span
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
              >
                Overview
              </motion.span>
              <motion.h2
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                className="text-[clamp(1.8rem,3vw,2.6rem)] font-normal text-[#1C1C1C] leading-[1.08] tracking-[-0.02em]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                What you get<br />when you work with us.
              </motion.h2>
            </div>

            {/* Right — description */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="lg:flex-1"
            >
              <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed">
                {svc.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES + INCLUDED ── */}
      <section className="border-t border-black/[0.07] py-16 sm:py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* What We Do */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <span className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-8 block">
              What We Do
            </span>
            <ul className="flex flex-col divide-y divide-black/[0.06]">
              {svc.features.map((feat, i) => (
                <motion.li
                  key={feat}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 py-4"
                >
                  <span
                    className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: svc.accentBg }}
                  >
                    <svg className="w-2 h-2" style={{ color: svc.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[#374151] text-sm leading-relaxed">{feat}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* What's Included */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          >
            <span className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-8 block">
              What&apos;s Included
            </span>
            <div className="flex flex-wrap gap-2.5">
              {svc.included.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="text-sm px-4 py-2 rounded-full border font-medium"
                  style={{
                    color: svc.accent,
                    borderColor: `${svc.accent}25`,
                    background: svc.accentBg,
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="border-t border-black/[0.07] py-16 sm:py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
          >
            How It Works
          </motion.span>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="text-[clamp(1.8rem,3vw,2.6rem)] font-normal text-[#1C1C1C] leading-[1.08] tracking-[-0.02em] mb-14"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Our engagement process.
          </motion.h2>

          <div className="flex flex-col divide-y divide-black/[0.07]">
            {svc.process.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_14rem_1fr] gap-6 sm:gap-10 py-10 items-start"
              >
                {/* Step number */}
                <span
                  className="text-[#C0CDD8] font-normal leading-none mt-0.5"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem" }}
                >
                  {step.step}
                </span>

                {/* Title */}
                <h3
                  className="text-[#1C1C1C] font-normal leading-snug tracking-[-0.01em]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#4A5568] text-sm leading-relaxed sm:col-start-3">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="border-t border-black/[0.07] py-16 sm:py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left label */}
            <div className="w-full lg:w-[32%] flex-shrink-0 lg:sticky lg:top-28 self-start">
              <motion.span
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
              >
                Who It&apos;s For
              </motion.span>
              <motion.h2
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                className="text-[clamp(1.8rem,3vw,2.6rem)] font-normal text-[#1C1C1C] leading-[1.08] tracking-[-0.02em]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Built for businesses<br />with high ambitions.
              </motion.h2>
            </div>

            {/* Right — audience list */}
            <div className="lg:flex-1 flex flex-col divide-y divide-black/[0.06]">
              {svc.whoFor.map((audience, i) => (
                <motion.div
                  key={audience}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-center gap-4 py-5"
                >
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: svc.accent }}
                  />
                  <span className="text-[#374151] text-base leading-relaxed">{audience}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT ── */}
      <section className="border-t border-black/[0.07] py-12 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {prev ? (
            <a
              href={`/services/${prev.id}`}
              className="flex items-center gap-3 group"
            >
              <svg className="w-4 h-4 text-[#9BAABB] group-hover:text-[#0F67FF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <div>
                <p className="text-[#C0CDD8] text-[10px] uppercase tracking-[0.18em]">Previous</p>
                <p
                  className="text-[#1C1C1C] font-normal group-hover:text-[#0F67FF] transition-colors duration-200"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem" }}
                >
                  {prev.title}
                </p>
              </div>
            </a>
          ) : <div />}

          <a
            href="/services"
            className="text-xs text-[#9BAABB] hover:text-[#0F67FF] transition-colors uppercase tracking-[0.18em]"
          >
            All Services
          </a>

          {next ? (
            <a
              href={`/services/${next.id}`}
              className="flex items-center gap-3 text-right group"
            >
              <div>
                <p className="text-[#C0CDD8] text-[10px] uppercase tracking-[0.18em]">Next</p>
                <p
                  className="text-[#1C1C1C] font-normal group-hover:text-[#0F67FF] transition-colors duration-200"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem" }}
                >
                  {next.title}
                </p>
              </div>
              <svg className="w-4 h-4 text-[#9BAABB] group-hover:text-[#0F67FF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ) : <div />}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-black/[0.07] py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
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
              Let&apos;s build your<br />{svc.title.toLowerCase()} strategy.
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
              Get a consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-[#6B7A8D] border border-black/10 rounded-full px-8 py-3.5 hover:border-[#0F67FF] hover:text-[#0F67FF] transition-all duration-200 bg-white/60"
            >
              Browse all services
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
