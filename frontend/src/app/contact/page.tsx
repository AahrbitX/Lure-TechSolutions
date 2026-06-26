"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#E5E7EB] focus:outline-none focus:border-[#0F67FF] focus:ring-2 focus:ring-[#0F67FF]/10 text-[#0A0F1E] text-sm bg-white transition-all";

const labelClass = "text-sm font-semibold text-[#374151] mb-1.5 block";

const contactCards = [
  {
    label: "Phone",
    value: "+91 00000 00000",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hello@enticeinnovations.com",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" d="M3 5l9 7 9-7" />
      </svg>
    ),
  },
  {
    label: "Website",
    value: "enticeinnovations.com",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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
    }, 1500);
  }

  function handleReset() {
    setName("");
    setEmail("");
    setCompany("");
    setService("");
    setMessage("");
    setSubmitted(false);
    setSubmitting(false);
    setError("");
  }

  return (
    <div className="bg-white text-[#0A0F1E]">

      {/* ── Section 1: Hero ── */}
      <section className="bg-gradient-to-br from-[#FAF9F7] via-white to-[#EEF4FF] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Left text */}
          <motion.div {...fadeUp(0)} className="flex-1">
            <p className="text-[#0F67FF] text-xs tracking-widest uppercase font-semibold mb-4">
              ✦ Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-[#0A0F1E] mb-5 leading-tight">
              Let's Build Something Premium
            </h1>
            <p className="text-[#6B7280] text-base leading-relaxed">
              Connect with Entice Innovations — your partner for end-to-end digital transformation. We respond within 24 hours.
            </p>
          </motion.div>

          {/* Right images */}
          <motion.div {...fadeUp(0.15)} className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/assets/images/workspace.png"
                alt="Creative Workspace"
                width={300}
                height={208}
                className="rounded-2xl shadow-xl border-4 border-[#0F67FF]/20 object-cover w-full h-52"
              />
              <Image
                src="/assets/images/office.png"
                alt="Office"
                width={300}
                height={208}
                className="rounded-2xl shadow-xl border-4 border-[#0F67FF]/20 object-cover w-full h-52"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Section 2: Contact Form ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            {...fadeUp(0)}
            className="bg-white rounded-3xl shadow-xl border border-[#E5E7EB] p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold text-[#0A0F1E] mb-8">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="bg-[#EEF4FF] border border-[#0F67FF]/30 rounded-2xl p-8 text-center">
                {/* Checkmark icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#0F67FF]/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#0F67FF]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[#0A0F1E] text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-[#6B7280] mb-6">We'll get back to you within 24 hours.</p>
                <button
                  onClick={handleReset}
                  className="bg-[#0F67FF] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-[#0D5AE0] transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                {/* Full Name */}
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
                    Company / Business Name{" "}
                    <span className="text-[#9CA3AF] font-normal">(optional)</span>
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
                    <option value="">Select a Service</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="AI Consulting">AI Consulting</option>
                    <option value="Domain & Hosting">Domain &amp; Hosting</option>
                    <option value="Tech Infrastructure">Tech Infrastructure</option>
                    <option value="Brand Building">Brand Building</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Multiple Services">Multiple Services</option>
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
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#0F67FF] hover:bg-[#0D5AE0] text-white font-semibold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0F67FF]/30 text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>

              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Contact Info Cards ── */}
      <section className="bg-gradient-to-br from-[#FAF9F7] via-white to-[#EEF4FF] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.label}
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#0F67FF]/30 transition-all text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0F67FF] flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-1">
                  {card.label}
                </p>
                <p className="text-[#0A0F1E] font-semibold text-sm">{card.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Map ── */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeUp(0)}
            className="rounded-3xl overflow-hidden border-4 border-[#0F67FF]/20 shadow-xl"
            style={{ height: 400 }}
          >
            <iframe
              title="Entice Innovations Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1234567890123!2d78.1234567890123!3d11.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babc12345678901%3A0xabcdefabcdefabcd!2sLure%20Tech%20Solutions!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: Bottom CTA ── */}
      <section className="bg-[#0A0F1E] py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left */}
          <motion.div {...fadeUp(0)} className="flex-1">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Let's Build Your Vision Together
            </h3>
            <p className="text-[#BFDBFE] leading-relaxed">
              From strategy to execution, we're your end-to-end digital partner. Reach out and let's create something extraordinary.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div {...fadeUp(0.15)} className="flex-shrink-0 flex flex-col items-end gap-3">
            <p className="text-[#BFDBFE] text-sm">+91 00000 00000</p>
            <p className="text-[#BFDBFE] text-sm">hello@enticeinnovations.com</p>
            <p className="text-[#BFDBFE] text-sm">enticeinnovations.com</p>
            <a
              href="mailto:hello@enticeinnovations.com"
              className="mt-3 inline-block bg-[#0F67FF] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-[#0D5AE0] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0F67FF]/30"
            >
              Start Your Project →
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
