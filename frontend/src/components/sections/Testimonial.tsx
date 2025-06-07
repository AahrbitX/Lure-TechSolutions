'use client';

import React from "react";

const testimonials = [
  {
    name: "Priya Menon",
    role: "Marketing Manager, Urban Tree Interio",
    message:
      "Lure Tech Solutions completely transformed our brand presence. Their branding and digital marketing strategies helped us reach a wider audience and establish a strong identity in our market.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ravi Kumar",
    role: "Owner, Pious Motor Park",
    message:
      "The social media campaigns and influencer collaborations by Lure Tech Solutions brought in more leads than we ever expected. Their team is creative, responsive, and results-driven.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Anjali S.",
    role: "Brand Manager, Kanyakumari Polymers",
    message:
      "From branding to SEO and media production, Lure Tech Solutions handled everything seamlessly. Our online visibility and customer engagement have grown significantly.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Vikash Sampath",
    role: "Influencer & Fashion Designer",
    message:
      "Collaborating with Lure Tech Solutions for influencer campaigns was a fantastic experience. Their team understands both branding and digital trends, making every campaign a success.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nisha Jerlin",
    role: "Actor & Model",
    message:
      "The personal branding and video marketing services from Lure Tech Solutions helped me grow my audience and connect with brands. Highly recommended for anyone looking to build their digital presence.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Suresh Babu",
    role: "Founder, Infinity Pixel Studios",
    message:
      "Their media and digital marketing expertise helped us showcase our work to the right clients. The website and campaign results exceeded our expectations.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Deepa Raj",
    role: "Manager, Seamoon Beach Resort",
    message:
      "Thanks to Lure Tech Solutions’ branding and social media management, our resort has seen a surge in bookings and online engagement. Their creative approach stands out.",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

export default function Testimonial() {
  // Duplicate testimonials for seamless scroll
  const leftTestimonials = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const rightTestimonials = [...testimonials.slice(3, 7), ...testimonials.slice(3, 7)];

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 py-24">
      <div className="flex justify-center mb-4">
        <span className="px-4 py-1 rounded-full border border-[#00ff0d] text-[#00ff0d] font-semibold text-sm bg-black/70 flex items-center gap-2">
          <span role="img" aria-label="star">✨</span> Testimonials
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-white text-center">
        What our users are <span className="text-[#bbf7d0]">saying</span>
      </h2>
      <div className="text-[#bbf7d0] max-w-2xl mb-12 mx-auto text-center text-base md:text-lg">
        Our AI platform has transformed our customer service operations, delivering remarkable efficiency and elevating our customer satisfaction to new heights.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column - Infinite scroll downwards */}
        <div className="flex flex-col gap-6 overflow-hidden relative" style={{ height: "390px" }}>
          <div className="flex flex-col gap-6 scroll-down">
            {leftTestimonials.map((t, idx) => (
              <div
                key={t.name + "-left-" + idx}
                className="bg-[#181f1b] border border-[#2e3e2e] rounded-xl p-6 shadow-lg flex flex-col min-h-[180px]"
              >
                <div className="text-white text-base mb-4">{t.message}</div>
                <div className="flex items-center gap-3 mt-auto">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full border-2 border-[#00ff0d]" />
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-[#bbf7d0] text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right column - Infinite scroll upwards */}
        <div className="flex flex-col gap-6 overflow-hidden relative" style={{ height: "390px" }}>
          <div className="flex flex-col gap-6 scroll-up">
            {rightTestimonials.map((t, idx) => (
              <div
                key={t.name + "-right-" + idx}
                className="bg-[#181f1b] border border-[#2e3e2e] rounded-xl p-6 shadow-lg flex flex-col min-h-[180px]"
              >
                <div className="text-white text-base mb-4">{t.message}</div>
                <div className="flex items-center gap-3 mt-auto">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full border-2 border-[#00ff0d]" />
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-[#bbf7d0] text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollUp {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .scroll-down {
          animation: scrollDown 14s linear infinite;
        }
        .scroll-up {
          animation: scrollUp 14s linear infinite;
        }
      `}</style>
    </section>
  );
}