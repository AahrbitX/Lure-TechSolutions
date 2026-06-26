"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const perks = [
  "Digital growth strategies & case studies",
  "AI consulting insights & industry trends",
  "Early access to new services & offers",
];

export default function NewsLetters() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to subscribe.");
      setSubmitted(true);
      setEmail("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-transparent overflow-hidden">

      {/* Subtle background blob */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#0F67FF]/[0.04] blur-[80px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10">

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* LEFT — copy */}
          <div className="w-full lg:w-[48%]">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
            >
              Newsletter
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Stay ahead.<br />Stay informed.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#6B7A8D] text-base leading-relaxed mb-8"
            >
              Join our newsletter for the latest in digital strategy, AI insights, and growth tactics — delivered straight to your inbox. No spam, ever.
            </motion.p>

            {/* Perks */}
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              {perks.map((perk, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#6B7A8D]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0F67FF]/10 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-[#0F67FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {perk}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT — form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                  <p className="text-[#1C1C1C] font-normal text-lg mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem" }}>
                    Get the newsletter
                  </p>
                  <p className="text-[#9BAABB] text-sm mb-8">
                    Join 500+ founders and marketers already subscribed.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#6B7A8D] uppercase tracking-[0.1em]">Email address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-black/[0.10] bg-[#F8FAFF] text-[#1C1C1C] placeholder:text-[#C0CDD8] text-sm focus:outline-none focus:border-[#0F67FF] focus:bg-white transition-all duration-200"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#1C1C1C] text-white text-sm font-medium py-3.5 rounded-xl hover:bg-[#0F67FF] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "Subscribing…" : "Subscribe now"}
                      {!loading && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      )}
                    </button>
                  </form>

                  {error && (
                    <p className="text-red-500 text-xs mt-3 text-center">{error}</p>
                  )}

                  <p className="text-[#C0CDD8] text-xs mt-5 text-center">
                    No spam. Unsubscribe at any time.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center py-8 gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0F67FF]/10 flex items-center justify-center mb-2">
                    <svg className="w-7 h-7 text-[#0F67FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[#1C1C1C] text-2xl font-normal"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    You're subscribed!
                  </h3>
                  <p className="text-[#6B7A8D] text-sm leading-relaxed max-w-xs">
                    Welcome aboard. Expect thoughtful insights in your inbox — never noise.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs text-[#9BAABB] hover:text-[#0F67FF] transition-colors duration-200"
                  >
                    Subscribe another email
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
