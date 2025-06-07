import React from "react";

const features = [
  {
    title: "Digital Marketing",
    description:
      "Grow your brand with SMM, SEO, Meta & Google Ads, influencer campaigns, email marketing, and more. We drive real results for your business.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="#101c13" />
        <path d="M18 38l10-20 10 20" stroke="#00ff0d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="38" r="2.5" fill="#00ff0d"/>
      </svg>
    ),
  },
  {
    title: "Branding & Identity",
    description:
      "Stand out with a unique brand identity, logo, strategy, and messaging. We craft memorable brands that connect and convert.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="#101c13" />
        <rect x="18" y="18" width="20" height="20" rx="6" stroke="#00ff0d" strokeWidth="3"/>
        <circle cx="28" cy="28" r="5" fill="#00ff0d"/>
      </svg>
    ),
  },
  {
    title: "Media Production",
    description:
      "From product shoots to corporate videos and editing, our creative team delivers high-impact media for every platform.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="#101c13" />
        <rect x="16" y="22" width="24" height="12" rx="4" stroke="#00ff0d" strokeWidth="3"/>
        <circle cx="22" cy="28" r="2" fill="#00ff0d"/>
        <circle cx="34" cy="28" r="2" fill="#00ff0d"/>
      </svg>
    ),
  },
  {
    title: "Web Solutions",
    description:
      "Get a stunning, responsive website—static, dynamic, or e-commerce. SEO-ready, fast, and tailored to your business.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="#101c13" />
        <rect x="16" y="20" width="24" height="16" rx="4" stroke="#00ff0d" strokeWidth="3"/>
        <rect x="22" y="28" width="12" height="4" rx="2" fill="#00ff0d"/>
      </svg>
    ),
  },
  {
    title: "App Development",
    description:
      "Launch Android, iOS, or cross-platform apps with beautiful UI/UX, backend integration, and analytics—fast and scalable.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="#101c13" />
        <rect x="20" y="16" width="16" height="24" rx="4" stroke="#00ff0d" strokeWidth="3"/>
        <circle cx="28" cy="36" r="2" fill="#00ff0d"/>
      </svg>
    ),
  },
  {
    title: "AI Solutions",
    description:
      "Automate, analyze, and innovate with custom AI tools, chatbots, dashboards, and business automation tailored for you.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="#101c13" />
        <path d="M20 36c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#00ff0d" strokeWidth="3"/>
        <circle cx="28" cy="24" r="4" fill="#00ff0d"/>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
        Why <span className="text-[#00ff0d]">Lure </span>Tech Solutions?
      </h2>
      <div className="text-gray-400 max-w-2xl mb-12">
        We help you innovate digitally—offering everything from digital marketing and branding to web, app, media, and AI solutions. Grow your business with a single, creative partner.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
            <div
            key={feature.title}
            className={`
              group
              bg-gradient-to-br from-[#101c13] via-[#1a2d1c] to-[#101c13]
              rounded-2xl p-10 text-center shadow-lg flex flex-col items-center
              min-h-[320px] transition-all duration-300
              hover:bg-[#00ff0d] hover:from-transparent hover:via-transparent hover:to-transparent
              hover:shadow-2xl hover:scale-105
            `}
            >
            <div className="mb-6 transition-transform duration-300 group-hover:scale-110">{feature.icon}</div>
            <div className="text-white text-2xl font-bold mb-2 group-hover:text-[#000000] transition-colors duration-300">
              {feature.title}
            </div>
            <div className="text-gray-400 text-base mb-6 group-hover:text-[#000000] transition-colors duration-300">
              {feature.description}
            </div>
            <button className="bg-black text-[#00ff0d] px-5 py-2 rounded-full font-semibold text-base hover:bg-[#101c13] transition w-fit mx-auto mt-auto">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}