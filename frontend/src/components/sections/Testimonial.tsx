'use client';

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Menon",
    role: "Marketing Manager, Urban Tree Interio",
    message: "Entice Innovations completely transformed our brand presence. Their branding and digital marketing strategies helped us reach a wider audience and establish a strong identity in our market.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    service: "Brand Building",
  },
  {
    name: "Ravi Kumar",
    role: "Owner, Pious Motor Park",
    message: "The social media campaigns and influencer collaborations brought in more leads than we ever expected. Their team is creative, responsive, and results-driven.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    service: "Digital Marketing",
  },
  {
    name: "Anjali S.",
    role: "Brand Manager, Kanyakumari Polymers",
    message: "From branding to SEO and media production, they handled everything seamlessly. Our online visibility and customer engagement have grown significantly.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    service: "SEO & Media",
  },
  {
    name: "Vikash Sampath",
    role: "Influencer & Fashion Designer",
    message: "Collaborating with Entice Innovations for influencer campaigns was a fantastic experience. Their team understands both branding and digital trends.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    service: "Influencer Campaigns",
  },
  {
    name: "Nisha Jerlin",
    role: "Actor & Model",
    message: "The personal branding and video marketing services helped me grow my audience and connect with brands. Highly recommended for anyone looking to build their digital presence.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    service: "Personal Branding",
  },
  {
    name: "Suresh Babu",
    role: "Founder, Infinity Pixel Studios",
    message: "Their media and digital marketing expertise helped us showcase our work to the right clients. The website and campaign results exceeded our expectations.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    service: "Digital Marketing",
  },
  {
    name: "Deepa Raj",
    role: "Manager, Seamoon Beach Resort",
    message: "Thanks to their branding and social media management, our resort has seen a surge in bookings and online engagement. Their creative approach truly stands out.",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    service: "Social Media",
  },
];

// Duplicate for seamless infinite scroll
const col1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
const col2 = [...testimonials.slice(3, 7), ...testimonials.slice(3, 7)];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-white border border-black/[0.07] rounded-2xl p-6 flex flex-col gap-4 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300 min-h-[200px]">
      {/* Service tag */}
      <span className="text-xs text-[#0F67FF] bg-[#EEF4FF] rounded-full px-3 py-1 w-fit font-medium">
        {t.service}
      </span>

      {/* Quote */}
      <p className="text-[#4A5568] text-sm leading-relaxed flex-1">
        "{t.message}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06]">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-9 h-9 rounded-full object-cover"
        />
        <div>
          <div className="text-[#1C1C1C] text-sm font-medium"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1rem" }}>
            {t.name}
          </div>
          <div className="text-[#9BAABB] text-xs">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-3 block"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Words from the<br />people we've helped.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <img key={i} src={t.avatar} alt={t.name}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <span className="text-sm text-[#6B7A8D]">50+ happy clients</span>
          </motion.div>
        </div>

        {/* Scrolling columns — desktop */}
        <div className="hidden md:grid grid-cols-2 gap-5 overflow-hidden" style={{ height: 520 }}>
          {/* Column 1 — scrolls up */}
          <div className="relative overflow-hidden">
            <div className="flex flex-col gap-5 testimonial-scroll-up">
              {col1.map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
            {/* Fade masks */}
            <div className="absolute inset-x-0 top-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, #f5f8fc, transparent)" }} />
            <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, #f5f8fc, transparent)" }} />
          </div>

          {/* Column 2 — scrolls down */}
          <div className="relative overflow-hidden">
            <div className="flex flex-col gap-5 testimonial-scroll-down">
              {col2.map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
            <div className="absolute inset-x-0 top-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, #f5f8fc, transparent)" }} />
            <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, #f5f8fc, transparent)" }} />
          </div>
        </div>

        {/* Mobile — stacked grid (2 columns) */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .testimonial-scroll-up {
          animation: scrollUp 22s linear infinite;
        }
        .testimonial-scroll-down {
          animation: scrollDown 22s linear infinite;
        }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
