"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const contactDetails = [
  {
    label: "Phone",
    value: "+91 00000 00000",
    href: "tel:+910000000000",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hello@enticeinnovations.com",
    href: "mailto:hello@enticeinnovations.com",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Website",
    value: "enticeinnovations.com",
    href: "https://enticeinnovations.com",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
];

const services = [
  "Digital Marketing",
  "IT Consulting",
  "AI Consulting",
  "Domain & Hosting",
  "Tech Infrastructure",
  "Brand Building",
  "Marketing",
  "Multiple Services",
];

export default function Contact() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]     = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1400);
  }

  function handleReset() {
    setName(""); setEmail(""); setCompany(""); setService(""); setMessage("");
    setSubmitted(false); setSubmitting(false); setError("");
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-black/[0.10] bg-[#F8FAFF] text-[#1C1C1C] placeholder:text-[#C0CDD8] text-sm focus:outline-none focus:border-[#0F67FF] focus:bg-white transition-all duration-200";
  const labelClass = "text-xs text-[#6B7A8D] uppercase tracking-[0.1em] mb-1.5 block";

  return (
    <main style={{
      background: `
        radial-gradient(ellipse 72% 45% at 18% 12%, rgba(147,197,253,0.40) 0%, rgba(186,230,253,0.18) 45%, transparent 70%),
        radial-gradient(ellipse 50% 35% at 88% 8%, rgba(147,197,253,0.22) 0%, transparent 60%),
        #f5f8fc
      `,
    }}>

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center pt-32 pb-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto w-full">
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-6 block"
          >
            Get in Touch
          </motion.span>

          <motion.h1
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="text-[clamp(3rem,7vw,6rem)] font-normal text-[#1C1C1C] leading-[1.04] tracking-[-0.02em] mb-8 max-w-4xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Let's build something<br />extraordinary together.
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="text-[#6B7A8D] text-base sm:text-lg leading-relaxed max-w-xl"
          >
            Connect with Entice Innovations — your end-to-end digital partner. We respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="w-full py-16 sm:py-24 bg-transparent border-t border-black/[0.07]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

            {/* Left — sticky info */}
            <div className="w-full lg:w-[36%] flex-shrink-0 lg:sticky lg:top-28">
              <motion.span
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
              >
                Contact Details
              </motion.span>
              <motion.h2
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                className="text-[clamp(1.8rem,3vw,2.5rem)] font-normal text-[#1C1C1C] leading-[1.1] tracking-[-0.02em] mb-8"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                One conversation<br />changes everything.
              </motion.h2>

              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
                className="flex flex-col gap-4 mb-10"
              >
                {contactDetails.map((detail) => (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={detail.label === "Website" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#4A5568] hover:text-[#0F67FF] transition-colors duration-200 group"
                  >
                    <span className="w-8 h-8 rounded-full border border-black/[0.08] bg-white flex items-center justify-center text-[#9BAABB] group-hover:border-[#0F67FF] group-hover:text-[#0F67FF] transition-all duration-200 flex-shrink-0">
                      {detail.icon}
                    </span>
                    <span className="text-sm">{detail.value}</span>
                  </a>
                ))}
              </motion.div>

              {/* Response promise */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
                className="border border-black/[0.07] rounded-2xl p-5 bg-white/60"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <span className="text-xs font-medium text-[#1C1C1C]">Usually responds in &lt; 24 hours</span>
                </div>
                <p className="text-xs text-[#9BAABB] leading-relaxed">
                  We review every message personally and reach out with a thoughtful response — not a generic reply.
                </p>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="w-full lg:flex-1 bg-white border border-black/[0.07] rounded-3xl p-8 sm:p-10 shadow-[0_16px_48px_rgba(0,0,0,0.06)]"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      className="text-[#1C1C1C] mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 400 }}
                    >
                      Send us a message
                    </p>
                    <p className="text-[#9BAABB] text-sm mb-8">
                      Fill in the details below and we&apos;ll be in touch shortly.
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                      {/* Name */}
                      <div>
                        <label className={labelClass}>
                          Full Name <span className="text-[#0F67FF]">*</span>
                        </label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className={labelClass}>
                          Email Address <span className="text-[#0F67FF]">*</span>
                        </label>
                        <input
                          type="email"
                          className={inputClass}
                          placeholder="you@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className={labelClass}>
                          Company / Business{" "}
                          <span className="text-[#C0CDD8] normal-case tracking-normal">optional</span>
                        </label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Your company or business name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>

                      {/* Service */}
                      <div>
                        <label className={labelClass}>Service Interested In</label>
                        <select
                          className={inputClass}
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className={labelClass}>
                          Message <span className="text-[#0F67FF]">*</span>
                        </label>
                        <textarea
                          rows={5}
                          className={inputClass}
                          placeholder="Tell us about your project, goals, and timeline..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>

                      {/* Error */}
                      {error && (
                        <p className="text-red-500 text-xs">{error}</p>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-[#1C1C1C] text-white text-sm font-medium py-3.5 rounded-xl hover:bg-[#0F67FF] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? "Sending…" : "Send Message"}
                        {!submitting && (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        )}
                      </button>

                      <p className="text-[#C0CDD8] text-xs text-center">
                        We respect your privacy. No spam, ever.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center py-10 gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#0F67FF]/10 flex items-center justify-center mb-2">
                      <svg className="w-7 h-7 text-[#0F67FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3
                      className="text-[#1C1C1C]"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 400 }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-[#6B7A8D] text-sm leading-relaxed max-w-xs">
                      Thank you for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-2 text-xs text-[#9BAABB] hover:text-[#0F67FF] transition-colors duration-200"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full py-24 sm:py-32 border-t border-black/[0.07] px-6 sm:px-10">
        <div className="max-w-6xl mx-auto text-center">

          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-6 block"
          >
            What We Offer
          </motion.span>

          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="text-[clamp(2.6rem,6vw,5rem)] font-normal text-[#1C1C1C] leading-[1.05] tracking-[-0.02em] mb-5 max-w-3xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            From strategy to execution,<br />we handle it all.
          </motion.h2>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="text-[#6B7A8D] text-base leading-relaxed max-w-lg mx-auto mb-10"
          >
            Seven services. One partner. Every engagement is built around outcomes that move your business forward.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#1C1C1C] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#0F67FF] transition-colors duration-300"
            >
              Explore services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 text-sm text-[#6B7A8D] border border-black/10 rounded-full px-8 py-3.5 hover:border-[#0F67FF] hover:text-[#0F67FF] transition-all duration-200 bg-white/60"
            >
              See our work
            </a>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
