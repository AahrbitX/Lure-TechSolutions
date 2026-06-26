"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 150, suffix: "K+", label: "Leads Generated" },
  { value: 50,  suffix: "+",  label: "Clients Served" },
  { value: 100, suffix: "K+", label: "Impressions Delivered" },
  { value: 7,   suffix: "",   label: "Core Services" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* — Eyebrow + Heading — */}
        <div className="mb-16 sm:mb-20 max-w-3xl">
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
          >
            What We Do
          </motion.span>

          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="text-[clamp(2.8rem,6vw,5rem)] font-normal text-[#1C1C1C] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            End-to-end digital solutions for every ambition.
          </motion.h2>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="text-[#6B7A8D] text-base sm:text-lg leading-relaxed max-w-xl"
          >
            We combine strategy, technology, and creativity to help businesses grow — from first impression to lasting impact. Every service we offer is built to work together.
          </motion.p>
        </div>

        {/* — Stats row — CountUp animation on scroll into view — */}
        <motion.div
          ref={statsRef}
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
          className="grid grid-cols-2 sm:grid-cols-4 gap-0 mb-16 sm:mb-20 border-t border-b border-black/[0.07] py-10"
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
