import React, { useState } from "react";

export default function NewsLetters() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative z-10 max-w-2xl mx-auto px-4 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
        Subscribe to our <span className="text-[#00ff0d]">Newsletter</span>
      </h2>
      <p className="text-gray-400 mb-8">
        Get the latest updates, news, and insights delivered straight to your inbox.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="px-5 py-3 rounded-full bg-[#101c13] border border-[#00ff0d]/40 text-white focus:outline-none focus:border-[#00ff0d] w-full sm:w-80"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#00ff0d] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#00d90a] transition"
        >
          Subscribe
        </button>
      </form>
      {submitted && (
        <div className="mt-4 text-green-400 font-semibold">
          Thank you for subscribing!
        </div>
      )}
    </section>
  );
}