"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does Entice Innovations offer?",
    answer: "We offer seven core services: Digital Marketing, IT Consulting, AI Consulting, Domain & Hosting, Tech Infrastructure, Brand Building, and Performance Marketing. Each is delivered end-to-end — from strategy to execution.",
  },
  {
    question: "How do I get started?",
    answer: "Start with a free discovery call. We'll understand your goals, assess your current position, and propose a tailored solution. Most projects begin within 2 weeks of sign-off.",
  },
  {
    question: "What makes your AI consulting different?",
    answer: "We don't just advise — we implement. Our AI consulting covers readiness assessments, model selection, workflow automation, custom chatbot development, and post-launch optimisation.",
  },
  {
    question: "Do you handle both strategy and implementation?",
    answer: "Yes. We are an end-to-end partner. From brand strategy to technology execution, you work with one team throughout — no handoffs to agencies or freelancers.",
  },
  {
    question: "What industries do you work with?",
    answer: "We work with clients across fintech, healthcare, retail, real estate, education, and professional services. Our approach is industry-agnostic but outcome-obsessed.",
  },
  {
    question: "How do you measure and report results?",
    answer: "Every client gets a custom dashboard with real-time KPIs. We deliver monthly reports covering leads, impressions, conversions, ROI, and growth vs. benchmarks.",
  },
  {
    question: "Can you manage our tech infrastructure?",
    answer: "Absolutely. We design cloud architecture, set up CI/CD pipelines, manage servers, implement security hardening, and provide monitoring for enterprise clients.",
  },
  {
    question: "Do you offer domain registration and hosting?",
    answer: "Yes. We handle domain registration, renewal, DNS management, managed hosting, SSL certificates, CDN configuration, and business email — fully handled.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 sm:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* Two-column layout: header left, accordion right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* LEFT — sticky header */}
          <div className="w-full lg:w-[36%] flex-shrink-0 lg:sticky lg:top-28">
            <motion.span
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
            >
              FAQ
            </motion.span>

            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="text-[clamp(2.2rem,4vw,3.4rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Questions we<br />hear often.
            </motion.h2>

            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              className="text-[#6B7A8D] text-sm sm:text-base leading-relaxed mb-8"
            >
              Can't find what you're looking for? Reach out directly — we respond within one business day.
            </motion.p>

            <motion.a
              href="/contact"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
              className="inline-flex items-center gap-2 text-sm text-[#1C1C1C] border border-black/10 rounded-full px-5 py-2.5 hover:border-[#0F67FF] hover:text-[#0F67FF] transition-all duration-200 bg-white/60"
            >
              Ask us directly
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>

          {/* RIGHT — accordion */}
          <div className="w-full lg:flex-1 divide-y divide-black/[0.07] border-t border-black/[0.07]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx * 0.4}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left py-6 flex items-start gap-4 group"
                    aria-expanded={isOpen}
                  >
                    {/* Question number */}
                    <span
                      className="text-sm flex-shrink-0 mt-0.5 w-7 transition-colors duration-200"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        color: isOpen ? "#0F67FF" : "#C0CDD8",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Question text */}
                    <span
                      className="flex-1 text-base sm:text-lg font-normal leading-snug transition-colors duration-200"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        color: isOpen ? "#1C1C1C" : "#3D4B5C",
                      }}
                    >
                      {faq.question}
                    </span>

                    {/* Toggle */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-shrink-0 mt-1 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200"
                      style={{
                        borderColor: isOpen ? "#0F67FF" : "#E2E8F0",
                        background: isOpen ? "rgba(15,103,255,0.06)" : "transparent",
                      }}
                    >
                      <svg
                        className="w-3 h-3"
                        style={{ color: isOpen ? "#0F67FF" : "#9BAABB" }}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="pl-11 pb-6 text-[#6B7A8D] text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
