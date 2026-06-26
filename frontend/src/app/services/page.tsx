"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/services-data";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ServicesPage() {
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
          <motion.span
            variants={fadeUp} initial="hidden" animate="visible"
            className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-6 block"
          >
            What We Do
          </motion.span>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-[clamp(3.2rem,8vw,7rem)] font-normal text-[#1C1C1C] leading-[1.03] tracking-[-0.02em] mb-8 max-w-4xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Seven pillars of<br />digital excellence.
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-[#6B7A8D] text-base sm:text-lg leading-relaxed max-w-xl mb-10"
          >
            End-to-end services built for ambitious businesses — from AI consulting and brand building to performance marketing and enterprise infrastructure.
          </motion.p>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-[#9BAABB] text-sm tracking-[0.04em]"
          >
            Digital Marketing &nbsp;·&nbsp; IT Consulting &nbsp;·&nbsp; AI Consulting &nbsp;·&nbsp;
            Domain & Hosting &nbsp;·&nbsp; Tech Infrastructure &nbsp;·&nbsp; Brand Building &nbsp;·&nbsp; Marketing
          </motion.p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="border-t border-black/[0.07] py-16 sm:py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => {
              return (
                <motion.a
                  key={svc.id}
                  href={`/services/${svc.id}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="group flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-black/[0.07] bg-white/60 hover:bg-white hover:border-black/[0.12] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#C0CDD8] font-normal"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1rem" }}
                    >
                      {svc.number}
                    </span>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full border"
                      style={{ color: svc.accent, borderColor: `${svc.accent}30`, background: svc.accentBg }}
                    >
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="font-normal text-[#1C1C1C] leading-tight group-hover:text-[#0F67FF] transition-colors duration-200"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem" }}
                  >
                    {svc.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-[#6B7A8D] text-xs leading-relaxed flex-1">{svc.subtitle}</p>

                  {/* Outcome pill */}
                  <p
                    className="text-xs px-0 italic leading-relaxed"
                    style={{ color: svc.accent }}
                  >
                    {svc.outcome}
                  </p>

                  {/* Arrow link */}
                  <div
                    className="flex items-center gap-1.5 text-xs font-medium pt-1 border-t border-black/[0.06] mt-1 transition-colors duration-200"
                    style={{ color: svc.accent }}
                  >
                    <span className="pt-3">View service</span>
                    <svg
                      className="w-3 h-3 mt-3 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full py-24 sm:py-32 border-t border-black/[0.07] px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <motion.span
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
              >
                Ready to Begin?
              </motion.span>
              <motion.h2
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                className="text-[clamp(2.2rem,5vw,4rem)] font-normal text-[#1C1C1C] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Not sure which service<br />fits your goals?
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
                Talk to us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm text-[#6B7A8D] border border-black/10 rounded-full px-8 py-3.5 hover:border-[#0F67FF] hover:text-[#0F67FF] transition-all duration-200 bg-white/60"
              >
                See our work
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
