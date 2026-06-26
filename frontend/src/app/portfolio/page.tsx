"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Identity System",
    category: "Brand Building",
    image: "/assets/images/creative-team.png",
    description:
      "Complete visual identity overhaul with logo, guidelines, and brand collateral.",
    tags: ["Branding", "Design"],
  },
  {
    id: 2,
    title: "Performance Marketing Campaign",
    category: "Digital Marketing",
    image: "/assets/images/meeting.png",
    description:
      "Multi-channel campaign delivering 40K+ qualified leads in 3 months.",
    tags: ["Google Ads", "Meta"],
  },
  {
    id: 3,
    title: "AI Chatbot Implementation",
    category: "AI Consulting",
    image: "/assets/images/workspace.png",
    description:
      "Custom GPT-powered customer support bot reducing response time by 80%.",
    tags: ["AI", "Automation"],
  },
  {
    id: 4,
    title: "Cloud Infrastructure Migration",
    category: "Tech Infrastructure",
    image: "/assets/images/office.png",
    description:
      "Full AWS migration for a 500K-user SaaS platform with zero downtime.",
    tags: ["AWS", "DevOps"],
  },
  {
    id: 5,
    title: "Digital Transformation Roadmap",
    category: "IT Consulting",
    image: "/assets/images/creative-team.png",
    description:
      "12-month digital transformation strategy for a 200-person enterprise.",
    tags: ["Strategy", "Consulting"],
  },
  {
    id: 6,
    title: "E-commerce Brand Launch",
    category: "Brand Building",
    image: "/assets/images/workspace.png",
    description:
      "End-to-end brand launch including identity, website, and marketing.",
    tags: ["Branding", "Marketing"],
  },
  {
    id: 7,
    title: "SEO & Content Strategy",
    category: "Digital Marketing",
    image: "/assets/images/office.png",
    description:
      "Organic traffic growth from 5K to 85K monthly visitors in 8 months.",
    tags: ["SEO", "Content"],
  },
  {
    id: 8,
    title: "ML-Powered Analytics Platform",
    category: "AI Consulting",
    image: "/assets/images/meeting.png",
    description:
      "Custom ML model for predictive sales analytics with 91% accuracy.",
    tags: ["ML", "Analytics"],
  },
  {
    id: 9,
    title: "Security Hardening & Compliance",
    category: "Tech Infrastructure",
    image: "/assets/images/workspace.png",
    description:
      "ISO 27001 compliance implementation for a fintech company.",
    tags: ["Security", "Compliance"],
  },
];

const categories = [
  "All",
  "Brand Building",
  "Digital Marketing",
  "AI Consulting",
  "Tech Infrastructure",
  "IT Consulting",
];

const stats = [
  { number: "50+", label: "Projects" },
  { number: "7", label: "Service Categories" },
  { number: "98%", label: "Client Retention" },
];

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-[#0A0F1E] py-24 px-6 relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-[-80px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#0F67FF]/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[#0F67FF]/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#0F67FF]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[#0F67FF]/80 text-xs tracking-widest uppercase font-semibold mb-5"
        >
          ✦ Our Work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white leading-none mb-6"
        >
          Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-[#BFDBFE] text-lg max-w-xl leading-relaxed mb-12"
        >
          A selection of projects across digital marketing, brand building, AI
          implementations, and tech infrastructure.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-wrap gap-8 sm:gap-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {stat.number}
              </span>
              <span className="text-[#BFDBFE] text-sm mt-0.5">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#0F67FF]/30 hover:shadow-xl hover:shadow-[#0F67FF]/8 transition-all group"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.style.background =
                "linear-gradient(135deg, #0A0F1E 0%, #0F67FF 100%)";
            }
          }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {/* Tags */}
        <div className="absolute top-3 right-3 flex gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/90 text-[#0F67FF] text-[10px] font-semibold px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-[10px] text-[#0F67FF] font-semibold uppercase tracking-widest">
          {project.category}
        </span>
        <h3 className="text-base font-bold text-[#0A0F1E] mt-1 mb-2">
          {project.title}
        </h3>
        <p className="text-[#6B7280] text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Filter Section ───────────────────────────────────────────────────────────

function FilterSection({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: (cat: string) => void;
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-4">
      <div className="flex flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeFilter === cat
                ? "bg-[#0F67FF] text-white shadow-md shadow-[#0F67FF]/25"
                : "bg-[#F9FAFB] text-[#374151] border border-[#E5E7EB] hover:border-[#0F67FF]/40 hover:text-[#0F67FF]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="bg-[#0A0F1E] py-24 px-6 relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-[-60px] right-[-100px] w-[450px] h-[450px] rounded-full bg-[#0F67FF]/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-80px] w-[350px] h-[350px] rounded-full bg-[#0F67FF]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
        >
          Ready to be our next success story?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-[#BFDBFE] text-base sm:text-lg mb-8 leading-relaxed"
        >
          Join 50+ premium clients who chose Entice Innovations as their digital
          partner.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <a
            href="/contact"
            className="inline-block bg-[#0F67FF] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#0D5AE0] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0F67FF]/30"
          >
            Start a Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div
      className="bg-white text-[#0A0F1E]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <HeroSection />
      <FilterSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Project grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-[#9CA3AF] text-sm">
            No projects found in this category.
          </div>
        )}
      </section>

      <CTASection />
    </div>
  );
}
