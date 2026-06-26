'use client';

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-transparent"
    >
      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto w-full py-20">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="text-[#6B7A8D] text-sm sm:text-base mb-8 tracking-normal"
        >
          End-to-end digital solutions — from strategy to execution
        </motion.p>

        {/* Headline — very large display serif, like Sequence */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3.8rem,10.5vw,9rem)] font-normal text-[#1C1C1C] leading-[1.0] tracking-[-0.02em] mb-10 w-full"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif" }}
        >
          Entice Innovations
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="text-[#6B7A8D] text-base sm:text-lg leading-relaxed max-w-[560px] mb-8"
        >
          We help businesses grow with AI consulting, IT infrastructure, digital marketing,
          brand building, domain & hosting, and performance marketing — all under one roof.
        </motion.p>

        {/* Tagline — mirrors the "Sep 18, 2025 · San Francisco" date line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#9BAABB] text-sm tracking-[0.04em] mb-10"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          AI Consulting &nbsp;·&nbsp; Brand Building &nbsp;·&nbsp; Digital Marketing &nbsp;·&nbsp; IT Infrastructure
        </motion.p>

        {/* CTA — dark rounded pill exactly like Sequence "Request an invite" */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="inline-flex items-center bg-[#1C1C1C] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#0F67FF] transition-colors duration-300 shadow-md"
        >
          Start Your Journey
        </motion.a>
      </div>

    </section>
  );
}
