"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    description: "SEO, SEM, social media and performance campaigns engineered to drive measurable, compounding growth. We handle every channel — search, social, paid — so your brand stays ahead.",
    tags: ["SEO & SEM", "Social Media", "PPC Campaigns", "Content Strategy"],
    href: "/services#digital-marketing",
    accent: "#1D4ED8",
    bg: "rgba(219,234,254,0.5)",
  },
  {
    number: "02",
    title: "IT Consulting",
    description: "Technology assessments, digital roadmaps and governance frameworks that align your infrastructure with long-term business goals. We turn complexity into clarity.",
    tags: ["Tech Assessment", "Digital Roadmap", "IT Governance", "System Integration"],
    href: "/services#it-consulting",
    accent: "#0369A1",
    bg: "rgba(224,242,254,0.5)",
  },
  {
    number: "03",
    title: "AI Consulting",
    description: "AI readiness audits, ML strategy, automation pipelines and intelligent tooling built for real-world impact. We make AI practical, not theoretical.",
    tags: ["AI Readiness", "ML Strategy", "Automation", "Chatbots & Agents"],
    href: "/services#ai-consulting",
    accent: "#6D28D9",
    bg: "rgba(237,233,254,0.5)",
  },
  {
    number: "04",
    title: "Domain & Hosting",
    description: "Domain registration, managed hosting, SSL, CDN and business email — fully handled. Reliable infrastructure you never have to think about again.",
    tags: ["Domain Registration", "Managed Hosting", "SSL & CDN", "Business Email"],
    href: "/services#domain-hosting",
    accent: "#15803D",
    bg: "rgba(220,252,231,0.5)",
  },
  {
    number: "05",
    title: "Tech Infrastructure",
    description: "Cloud architecture, DevOps, CI/CD pipelines and security monitoring built for scale and resilience. Enterprise-grade infrastructure, right-sized for your business.",
    tags: ["Cloud Architecture", "DevOps", "CI/CD", "Security Monitoring"],
    href: "/services#tech-infrastructure",
    accent: "#A16207",
    bg: "rgba(254,249,195,0.5)",
  },
  {
    number: "06",
    title: "Brand Building",
    description: "Identity systems, visual language, tone of voice and creative direction that make your brand unmistakable. From logo to full brand guidelines — we build brands that last.",
    tags: ["Logo & Identity", "Visual System", "Brand Guidelines", "Creative Direction"],
    href: "/services#brand-building",
    accent: "#BE123C",
    bg: "rgba(255,228,230,0.5)",
  },
  {
    number: "07",
    title: "Marketing",
    description: "Performance campaigns, A/B testing, analytics dashboards and growth strategy across every channel. Data-driven marketing that actually moves the needle.",
    tags: ["Performance Campaigns", "A/B Testing", "Analytics", "Growth Strategy"],
    href: "/services#marketing",
    accent: "#1D4ED8",
    bg: "rgba(219,234,254,0.5)",
  },
];

export default function Features() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 sm:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-3 block"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Seven pillars of<br />digital excellence.
            </motion.h2>
          </div>

          <motion.a
            href="/services"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="self-start sm:self-auto inline-flex items-center gap-2 text-sm text-[#1C1C1C] border border-black/10 rounded-full px-5 py-2.5 hover:border-[#0F67FF] hover:text-[#0F67FF] transition-all duration-200 bg-white/60 flex-shrink-0"
          >
            Explore all services
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-black/[0.07] border-t border-black/[0.07]">
          {services.map((svc, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                {/* Row header — always visible */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-6 flex items-center gap-4 sm:gap-8 group"
                >
                  {/* Number */}
                  <span
                    className="text-sm flex-shrink-0 w-8 transition-colors duration-200"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: isOpen ? svc.accent : "#C0CDD8",
                    }}
                  >
                    {svc.number}
                  </span>

                  {/* Title */}
                  <span
                    className="text-xl sm:text-2xl font-normal flex-1 transition-colors duration-200 text-left"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: isOpen ? "#1C1C1C" : "#3D4B5C",
                    }}
                  >
                    {svc.title}
                  </span>

                  {/* Tags — visible only when closed, hidden on mobile */}
                  <div className="hidden md:flex gap-2 flex-shrink-0">
                    {!isOpen && svc.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs text-[#9BAABB] bg-black/[0.04] rounded-full px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Toggle icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200"
                    style={{
                      borderColor: isOpen ? svc.accent : "#E2E8F0",
                      background: isOpen ? svc.bg : "transparent",
                    }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      style={{ color: isOpen ? svc.accent : "#9BAABB" }}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="ml-12 sm:ml-16 mb-6 rounded-2xl p-6 sm:p-8"
                        style={{ background: svc.bg }}
                      >
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start">

                          {/* Description */}
                          <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed flex-1">
                            {svc.description}
                          </p>

                          {/* Tags + CTA */}
                          <div className="flex-shrink-0 flex flex-col gap-4 min-w-[200px]">
                            <div className="flex flex-wrap gap-2">
                              {svc.tags.map(tag => (
                                <span
                                  key={tag}
                                  className="text-xs px-3 py-1.5 rounded-full border font-medium"
                                  style={{
                                    borderColor: `${svc.accent}30`,
                                    color: svc.accent,
                                    background: `${svc.accent}0D`,
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <a
                              href={svc.href}
                              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-150 hover:opacity-70"
                              style={{ color: svc.accent }}
                            >
                              Learn more
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </a>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
