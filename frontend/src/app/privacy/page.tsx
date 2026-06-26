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
  { id: "collect",    label: "Information We Collect" },
  { id: "use",        label: "How We Use Your Data" },
  { id: "storage",    label: "Data Storage & Security" },
  { id: "cookies",    label: "Cookies & Tracking" },
  { id: "third-party",label: "Third-Party Services" },
  { id: "rights",     label: "Your Rights" },
  { id: "retention",  label: "Data Retention" },
  { id: "children",   label: "Children's Privacy" },
  { id: "contact",    label: "Contact Us" },
];

export default function PrivacyPage() {
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
            Privacy Policy
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

              <section id="collect" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}
                  className="text-[#1C1C1C] font-semibold mb-3">
                  1. Information We Collect
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  We collect information you provide directly to us, including your name, email address, company name, phone number, and any project details shared through our contact form or during onboarding. We also collect technical data such as IP address, browser type, and pages visited through standard web analytics tools.
                </p>
              </section>

              <section id="use" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}
                  className="text-[#1C1C1C] font-semibold mb-3">
                  2. How We Use Your Data
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-none flex flex-col gap-2">
                  {[
                    "Deliver and manage the services you've engaged us for",
                    "Communicate with you about your project, invoices, and updates",
                    "Improve our website and service quality",
                    "Send relevant communications where you have consented",
                    "Comply with legal obligations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#4A5568] text-sm leading-relaxed">
                      <div className="w-1 h-1 rounded-full bg-[#0F67FF] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="storage" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}
                  className="text-[#1C1C1C] font-semibold mb-3">
                  3. Data Storage &amp; Security
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Your data is stored on secure, access-controlled servers. We implement industry-standard security measures including encryption in transit (TLS), access controls, and regular security audits. No transmission over the internet is 100% secure, but we take every reasonable precaution to protect your information.
                </p>
              </section>

              <section id="cookies" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}
                  className="text-[#1C1C1C] font-semibold mb-3">
                  4. Cookies &amp; Tracking
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Our website uses cookies to improve your browsing experience and understand how visitors interact with our content. You may disable cookies in your browser settings, though some features of our site may not function correctly as a result. We use analytics tools such as Google Analytics to measure site performance.
                </p>
              </section>

              <section id="third-party" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}
                  className="text-[#1C1C1C] font-semibold mb-3">
                  5. Third-Party Services
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  We may use trusted third-party services to support our operations — including payment processors, cloud hosting providers, and analytics platforms. These parties have access to your data only to perform their services and are obligated to maintain confidentiality. We do not sell your personal data to third parties.
                </p>
              </section>

              <section id="rights" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}
                  className="text-[#1C1C1C] font-semibold mb-3">
                  6. Your Rights
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-none flex flex-col gap-2 mb-4">
                  {[
                    "Access the personal data we hold about you",
                    "Request correction of inaccurate data",
                    "Request deletion of your data where no legal obligation requires retention",
                    "Withdraw consent for communications at any time",
                    "Lodge a complaint with the relevant data protection authority",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#4A5568] text-sm leading-relaxed">
                      <div className="w-1 h-1 rounded-full bg-[#0F67FF] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  To exercise any of these rights, contact us at{" "}
                  <a href="mailto:privacy@enticeinnovations.com" className="text-[#0F67FF] hover:underline">
                    privacy@enticeinnovations.com
                  </a>.
                </p>
              </section>

              <section id="retention" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}
                  className="text-[#1C1C1C] font-semibold mb-3">
                  7. Data Retention
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  We retain client data for as long as necessary to fulfil the services contracted and to comply with legal, accounting, or reporting obligations. Prospect data collected through our website is retained for a maximum of 24 months from the date of last contact.
                </p>
              </section>

              <section id="children" className="pb-10 border-b border-black/[0.07] mb-10">
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}
                  className="text-[#1C1C1C] font-semibold mb-3">
                  8. Children's Privacy
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted personal data to us, please contact us immediately and we will delete it promptly.
                </p>
              </section>

              <section id="contact">
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem" }}
                  className="text-[#1C1C1C] font-semibold mb-3">
                  9. Contact Us
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  For privacy-related questions or requests, contact our team at{" "}
                  <a href="mailto:privacy@enticeinnovations.com" className="text-[#0F67FF] hover:underline">
                    privacy@enticeinnovations.com
                  </a>
                  . We aim to respond to all data-related requests within 5 business days.
                </p>
              </section>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
