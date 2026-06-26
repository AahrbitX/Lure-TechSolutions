"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const toc = [
  { id: "acceptance",  label: "Acceptance of Terms" },
  { id: "services",    label: "Services" },
  { id: "ip",          label: "Intellectual Property" },
  { id: "payment",     label: "Payment & Billing" },
  { id: "confidential",label: "Confidentiality" },
  { id: "liability",   label: "Limitation of Liability" },
  { id: "termination", label: "Termination" },
  { id: "governing",   label: "Governing Law" },
  { id: "contact",     label: "Contact" },
];

export default function TermsPage() {
  return (
    <main
      style={{
        background: `
          radial-gradient(ellipse 72% 45% at 18% 12%, rgba(147,197,253,0.50) 0%, rgba(186,230,253,0.22) 45%, transparent 70%),
          radial-gradient(ellipse 50% 35% at 6%  5%,  rgba(186,230,253,0.40) 0%, transparent 58%),
          radial-gradient(ellipse 55% 40% at 88% 42%, rgba(147,197,253,0.26) 0%, transparent 62%),
          #f5f8fc
        `,
      }}
    >
      {/* ── HERO ── */}
      <section className="w-full pt-32 pb-16 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.span
            variants={fadeUp} initial="hidden" animate="visible"
            className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-6 block"
          >
            Legal
          </motion.span>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-[clamp(3rem,6vw,5rem)] font-normal text-[#1C1C1C] leading-[1.04] tracking-[-0.02em] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Terms &amp; Conditions
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-[#9BAABB] text-sm"
          >
            Last updated: June 2025
          </motion.p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="border-t border-black/[0.07] py-16 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-20">

            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C0CDD8] mb-4">Contents</p>
                <nav className="flex flex-col gap-0.5">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs text-[#6B7A8D] hover:text-[#0F67FF] py-1.5 transition-colors duration-200 border-l-2 border-transparent hover:border-[#0F67FF] pl-3"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="min-w-0">

              <section id="acceptance" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 className="text-[#1C1C1C] font-semibold text-base mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}>
                  1. Acceptance of Terms
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  By accessing or using any service offered by Entice Innovations, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all clients, visitors, and users who access or use our services.
                </p>
              </section>

              <section id="services" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 className="text-[#1C1C1C] font-semibold text-base mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}>
                  2. Services
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Entice Innovations provides digital marketing, IT consulting, AI consulting, domain and hosting management, tech infrastructure, brand building, and marketing services. The scope of services for each client is defined in a separate Statement of Work (SOW) or service agreement. We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice.
                </p>
              </section>

              <section id="ip" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 className="text-[#1C1C1C] font-semibold text-base mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}>
                  3. Intellectual Property
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  All intellectual property created by Entice Innovations under a client engagement — including designs, code, documentation, and creative assets — transfers fully to the client upon receipt of final payment, unless otherwise agreed in writing. Entice Innovations retains the right to reference the engagement for portfolio and marketing purposes unless the client requests confidentiality in writing.
                </p>
              </section>

              <section id="payment" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 className="text-[#1C1C1C] font-semibold text-base mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}>
                  4. Payment &amp; Billing
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  All fees are outlined in the applicable SOW or invoice. Payment terms are net-14 unless otherwise specified. Late payments may attract a penalty of 2% per month on the outstanding balance. Entice Innovations reserves the right to pause work on any engagement where payment is overdue by more than 15 days.
                </p>
              </section>

              <section id="confidential" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 className="text-[#1C1C1C] font-semibold text-base mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}>
                  5. Confidentiality
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. Entice Innovations will not disclose client data, strategies, or business information to third parties without written consent, except where required by law.
                </p>
              </section>

              <section id="liability" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 className="text-[#1C1C1C] font-semibold text-base mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}>
                  6. Limitation of Liability
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  To the maximum extent permitted by law, Entice Innovations shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid by the client in the three months preceding the claim.
                </p>
              </section>

              <section id="termination" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 className="text-[#1C1C1C] font-semibold text-base mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}>
                  7. Termination
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Either party may terminate a service agreement with 30 days' written notice. Upon termination, the client is responsible for payment of all work completed to date. Entice Innovations will deliver all completed assets within 10 business days of termination.
                </p>
              </section>

              <section id="governing" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 className="text-[#1C1C1C] font-semibold text-base mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}>
                  8. Governing Law
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of India. We encourage resolution of disputes through good-faith negotiation before pursuing legal action.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-[#1C1C1C] font-semibold text-base mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}>
                  9. Contact
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  For questions about these Terms and Conditions, contact us at{" "}
                  <a href="mailto:info@enticeinnovations.com" className="text-[#0F67FF] hover:underline">
                    info@enticeinnovations.com
                  </a>
                  {" "}or write to Entice Innovations, India.
                </p>
              </section>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
