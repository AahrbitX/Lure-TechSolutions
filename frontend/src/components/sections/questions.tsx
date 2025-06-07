import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Lure Tech Solutions offer?",
    answer:
      "We provide digital marketing, branding, media production, website development, app development, and AI solutions to help your business grow online and offline.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "Simply contact us via our website, email, or phone. We'll schedule a free consultation to understand your needs and recommend the best solutions.",
  },
  {
    question: "What makes your digital marketing unique?",
    answer:
      "We combine creative content, data-driven strategies, influencer collaborations, and advanced analytics to maximize your brand’s reach and ROI.",
  },
  {
    question: "Can you help with both branding and rebranding?",
    answer:
      "Absolutely! We specialize in building new brands and refreshing existing ones with strategy, design, and messaging tailored to your goals.",
  },
  {
    question: "What is included in your website packages?",
    answer:
      "Our packages cover everything from static sites to dynamic e-commerce platforms, including design, development, SEO, hosting, and post-launch support.",
  },
  {
    question: "Do you offer app development for both Android and iOS?",
    answer:
      "Yes, we build apps for Android, iOS, and cross-platform solutions, from simple business apps to advanced, scalable platforms.",
  },
  {
    question: "How do you price your services?",
    answer:
      "We offer transparent, package-based pricing for most services. Custom solutions are quoted based on your requirements after a free consultation.",
  },
  {
    question: "Can you manage my social media accounts?",
    answer:
      "Yes, we provide end-to-end social media management, including content creation, posting, engagement, and analytics reporting.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We serve a wide range of industries, including retail, hospitality, manufacturing, creative studios, and personal brands.",
  },
  {
    question: "How do I see results from your campaigns?",
    answer:
      "We provide regular reports and analytics dashboards so you can track performance, leads, engagement, and ROI in real time.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 py-24">
      <div className="flex justify-center mb-4">
        <span className="px-4 py-1 rounded-full border border-[#00ff0d] text-[#00ff0d] font-semibold text-sm bg-black/70 flex items-center gap-2">
          <span role="img" aria-label="help">💡</span> FAQ
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-white text-center">
        Frequently Asked <span className="text-[#bbf7d0]">Questions</span>
      </h2>
      <div className="text-[#bbf7d0] max-w-2xl mb-12 mx-auto text-center text-base md:text-lg">
        Find answers to the most common questions about our digital, branding, media, and tech solutions.
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-[#00ff0d] rounded-xl bg-[#181f1b] shadow-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-medium focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span>{faq.question}</span>
              <span className="ml-4 text-[#00ff0d] text-xl">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4 text-[#bbf7d0] text-base animate-fadeIn" style={{ fontFamily: "Poppins, sans-serif" }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
      `}</style>
    </section>
  );
}