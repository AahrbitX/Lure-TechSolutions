"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const timelineItems = [
  { year: "2022", text: "Founded with a vision to serve premium clients" },
  { year: "2023", text: "Secured our first 10 enterprise clients" },
  { year: "2024", text: "Expanded into AI consulting and tech infrastructure" },
  { year: "2025", text: "50+ premium clients, 150K+ leads delivered" },
];

const values = [
  {
    bg: "bg-[#0A0F1E]",
    iconBg: "bg-[#0F67FF]/20",
    titleColor: "text-white",
    bodyColor: "text-[#BFDBFE]/80",
    icon: (
      <svg className="w-6 h-6 text-[#0F67FF]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    title: "Premium Focus",
    body: "We partner exclusively with clients who demand excellence. Premium positioning isn't just a promise — it's how we operate every day.",
  },
  {
    bg: "bg-white border border-[#0F67FF]/15 shadow-sm",
    iconBg: "bg-[#EEF4FF]",
    titleColor: "text-[#0A0F1E]",
    bodyColor: "text-[#6B7280]",
    icon: (
      <svg className="w-6 h-6 text-[#0F67FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "End-to-End Ownership",
    body: "From strategy to execution to optimization — you work with one team. No briefings to external agencies, no lost context.",
  },
  {
    bg: "bg-[#0F67FF]",
    iconBg: "bg-white/20",
    titleColor: "text-white",
    bodyColor: "text-white/90",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Results First",
    body: "Every decision is tied to measurable outcomes. We define KPIs before we start and report against them every month.",
  },
];

function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-gradient-to-br from-white via-[#F0F4FF] to-[#EEF4FF] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl font-extrabold text-[#0A0F1E] text-center mb-16"
        >
          Our Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 overflow-hidden rounded-full">
            <motion.div
              ref={ref}
              className="w-full bg-gradient-to-b from-[#0F67FF] to-[#3B82F6]"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ transformOrigin: "top", height: "100%" }}
            />
          </div>

          <div className="space-y-10 pl-16">
            {timelineItems.map((item, i) => (
              <motion.div
                key={item.year}
                {...fadeUp(i * 0.15)}
                className="relative flex items-start gap-4"
              >
                {/* Dot */}
                <div className="absolute -left-[2.85rem] top-0.5 w-3 h-3 rounded-full bg-[#0F67FF] border-2 border-white shadow-md" />
                <span className="bg-[#0F67FF] text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  {item.year}
                </span>
                <p className="text-[#374151] text-sm leading-relaxed pt-0.5">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="bg-white text-[#0A0F1E]">

      {/* ── Section 1: Hero / Founder Quote ── */}
      <section className="relative bg-gradient-to-br from-[#FAF9F7] via-white to-[#EEF4FF] overflow-hidden">
        {/* Watermark */}
        <span className="absolute inset-0 flex items-center justify-center text-[8vw] font-black text-[#0F67FF]/5 select-none pointer-events-none whitespace-nowrap z-0">
          ENTICE INNOVATIONS
        </span>

        <div className="relative z-10 py-32 px-6 max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <p className="text-[#0F67FF] text-xs tracking-widest uppercase font-semibold mb-6">
              ✦ About Us
            </p>
            <blockquote className="text-[#374151] text-lg leading-relaxed italic mb-6">
              "At Entice Innovations, our mission is to be the premium digital partner that ambitious businesses trust when they need end-to-end solutions. We don't just deliver services — we build digital ecosystems that transform how you compete, grow, and lead."
            </blockquote>
            <p className="text-[#6B7280] text-sm font-medium">
              — Leadership Team, Entice Innovations
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Mission & Vision ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Mission row */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image left */}
            <motion.div {...fadeUp(0)}>
              <div className="rounded-3xl border-4 border-[#0F67FF]/20 shadow-xl overflow-hidden">
                <Image
                  src="/assets/images/office.png"
                  alt="Our Office"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="bg-gradient-to-br from-[#0F67FF]/20 to-[#EEF4FF] h-48 rounded-3xl hidden" />
              </div>
            </motion.div>

            {/* Text right */}
            <motion.div {...fadeUp(0.15)}>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F67FF] mb-4">
                Our Mission
              </h2>
              <p className="text-[#374151] leading-relaxed">
                To empower businesses and brands to thrive in the digital era by delivering innovative, AI-driven, and end-to-end solutions that create measurable growth and lasting competitive advantage.
              </p>
            </motion.div>
          </div>

          {/* Vision row (reversed) */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text left */}
            <motion.div {...fadeUp(0)} className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F67FF] mb-4">
                Our Vision
              </h2>
              <p className="text-[#374151] leading-relaxed">
                To be India's most trusted premium digital partner — recognized for transforming ambitious businesses through technology, strategy, and creative excellence.
              </p>
            </motion.div>

            {/* Image right */}
            <motion.div {...fadeUp(0.15)} className="order-1 md:order-2">
              <div className="rounded-3xl border-4 border-[#0F67FF]/20 shadow-xl overflow-hidden">
                <Image
                  src="/assets/images/workspace.png"
                  alt="Our Workspace"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="bg-gradient-to-br from-[#0F67FF]/20 to-[#EEF4FF] h-48 rounded-3xl hidden" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── Section 3: Founding Story (dark) ── */}
      <section className="bg-[#0A0F1E] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Image left */}
          <motion.div {...fadeUp(0)} className="flex-shrink-0">
            <div className="relative bg-[#0D1A3E] rounded-3xl shadow-2xl overflow-hidden w-full md:w-[340px] h-[340px]">
              <Image
                src="/assets/images/inovation.png"
                alt="Founding Story"
                fill
                className="object-cover opacity-90"
              />
              <span className="absolute top-6 left-6 text-6xl font-black text-[#0F67FF]/20 select-none pointer-events-none">
                STORY
              </span>
            </div>
          </motion.div>

          {/* Text right */}
          <motion.div {...fadeUp(0.2)} className="flex-1">
            <h2 className="text-4xl font-extrabold text-[#0F67FF] mb-6">
              Founding Story
            </h2>
            <p className="text-[#BFDBFE] text-lg leading-relaxed mb-4">
              Entice Innovations was born from a simple belief: that every ambitious business deserves a digital partner who thinks strategically, acts decisively, and cares genuinely about outcomes. Founded by a team of technology and marketing veterans, we set out to bridge the gap between premium digital strategy and flawless execution.
            </p>
            <p className="text-[#BFDBFE] text-lg leading-relaxed">
              Today, we serve 50+ premium clients across industries — from fintech and healthcare to real estate and professional services — delivering end-to-end solutions that span AI consulting, brand building, and technology infrastructure.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── Section 4: Team Values ── */}
      <section className="bg-gradient-to-br from-white via-[#F0F4FF] to-[#EEF4FF] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeUp(0)}
            className="text-3xl font-extrabold text-[#0A0F1E] text-center mb-12"
          >
            What We Stand For
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp(i * 0.1)}
                className={`${v.bg} rounded-2xl p-8`}
              >
                <div className={`${v.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                  {v.icon}
                </div>
                <h3 className={`text-lg font-bold mb-3 ${v.titleColor}`}>{v.title}</h3>
                <p className={`text-sm leading-relaxed ${v.bodyColor}`}>{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Our Promise (dark) ── */}
      <section className="bg-[#0A0F1E] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">

          {/* Image right */}
          <motion.div {...fadeUp(0)} className="flex-shrink-0">
            <div className="relative bg-[#0D1A3E] rounded-3xl shadow-2xl overflow-hidden w-full md:w-[340px] h-[340px]">
              <Image
                src="/assets/images/promize.png"
                alt="Our Promise"
                fill
                className="object-cover opacity-90"
              />
              <span className="absolute top-6 left-6 text-6xl font-black text-[#0F67FF]/20 select-none pointer-events-none">
                PROMISE
              </span>
            </div>
          </motion.div>

          {/* Text left */}
          <motion.div {...fadeUp(0.2)} className="flex-1">
            <h2 className="text-4xl font-extrabold text-[#0F67FF] mb-6">
              Our Promise
            </h2>
            <p className="text-[#BFDBFE] text-xl leading-relaxed italic">
              "We promise to deliver creative solutions, transparent communication, and real results — empowering your business to stand out, scale up, and succeed beyond expectations."
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── Section 6: Timeline ── */}
      <TimelineSection />

      {/* ── Section 7: CTA Banner ── */}
      <section className="relative bg-gradient-to-br from-[#0A0F1E] via-[#0D1A3E] to-[#0A0F1E] overflow-hidden py-24 px-6">
        {/* Glow blobs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#0F67FF]/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#0F67FF]/20 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              You're Just One{" "}
              <span className="text-[#0F67FF]">'Yes'</span>{" "}
              Away From Extraordinary.
            </h2>
            <p className="text-[#BFDBFE] text-lg mb-10">
              Take the leap — your next chapter starts here.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#0F67FF] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#0D5AE0] transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0F67FF]/30"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
