"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  TrendingUp,
  Settings,
  Brain,
  Globe,
  Server,
  Palette,
  Megaphone,
  LucideIcon,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Service {
  id: string;
  title: string;
  badge: string;
  icon: string;
  subtitle: string;
  description: string;
  features: string[];
  included: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const services: Service[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    badge: "Growth Engine",
    icon: "TrendingUp",
    subtitle: "Dominate your market with data-driven campaigns that convert.",
    description:
      "We design and execute comprehensive digital marketing strategies that put your brand in front of the right audience at the right time. From organic search to paid media, every campaign is built around measurable outcomes — not vanity metrics.",
    features: [
      "SEO & organic search optimization",
      "SEM & Google Ads management",
      "Social media marketing & management",
      "Content marketing & strategy",
      "PPC campaign management",
      "Email marketing automation",
    ],
    included: [
      "Monthly performance reports",
      "Competitor analysis",
      "Keyword research & strategy",
      "Ad creative design",
      "Audience targeting",
      "Conversion tracking setup",
    ],
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    badge: "Strategic Advisory",
    icon: "Settings",
    subtitle: "Transform your technology strategy for the next decade.",
    description:
      "Our IT consulting practice helps businesses navigate the complexity of modern technology. We assess your current state, design a transformation roadmap, and guide implementation — ensuring every technology decision creates business value.",
    features: [
      "Technology assessment & audit",
      "Digital transformation roadmap",
      "IT strategy & governance",
      "System integration consulting",
      "Vendor selection & evaluation",
      "Change management support",
    ],
    included: [
      "Technology audit report",
      "Transformation roadmap",
      "Vendor recommendation matrix",
      "Risk assessment",
      "Implementation plan",
      "Governance framework",
    ],
  },
  {
    id: "ai-consulting",
    title: "AI Consulting",
    badge: "Future-Ready",
    icon: "Brain",
    subtitle:
      "Implement artificial intelligence that creates real competitive advantage.",
    description:
      "AI is no longer optional for premium businesses — it's the differentiator. We help you identify the highest-ROI AI opportunities in your business, design the implementation architecture, and build solutions that your team can actually use.",
    features: [
      "AI readiness assessment",
      "ML model strategy & selection",
      "Workflow automation design",
      "Custom chatbot development",
      "AI integration planning",
      "ROI modeling & measurement",
    ],
    included: [
      "AI opportunity assessment",
      "Use-case prioritization",
      "Architecture design",
      "POC development",
      "Integration roadmap",
      "Training & handover",
    ],
  },
  {
    id: "domain-hosting",
    title: "Domain & Hosting",
    badge: "Infrastructure Foundation",
    icon: "Globe",
    subtitle: "Your digital foundation — fast, secure, and always available.",
    description:
      "We handle the complete lifecycle of your web infrastructure — from domain registration and management to enterprise-grade hosting, SSL certificates, CDN configuration, and 24/7 uptime monitoring.",
    features: [
      "Domain registration & renewal",
      "Managed WordPress & static hosting",
      "SSL certificate management",
      "CDN setup & optimization",
      "Business email hosting",
      "Uptime monitoring & alerts",
    ],
    included: [
      "Domain portfolio management",
      "Hosting setup & migration",
      "SSL installation",
      "CDN configuration",
      "DNS management",
      "Monthly uptime reports",
    ],
  },
  {
    id: "tech-infrastructure",
    title: "Tech Infrastructure",
    badge: "Enterprise Grade",
    icon: "Server",
    subtitle: "Scalable, secure infrastructure built for enterprise demands.",
    description:
      "We design and manage cloud architecture that scales with your business. From AWS and GCP to Azure, we provision, optimize, and secure your infrastructure — with DevOps pipelines that accelerate your team's delivery velocity.",
    features: [
      "Cloud architecture design (AWS/GCP/Azure)",
      "DevOps & CI/CD pipeline setup",
      "Server provisioning & management",
      "Security hardening & compliance",
      "Disaster recovery planning",
      "Performance monitoring & optimization",
    ],
    included: [
      "Infrastructure audit",
      "Architecture blueprint",
      "CI/CD pipeline",
      "Security checklist",
      "Monitoring dashboard",
      "DR runbook",
    ],
  },
  {
    id: "brand-building",
    title: "Brand Building",
    badge: "Identity & Presence",
    icon: "Palette",
    subtitle: "Build a brand identity that commands premium positioning.",
    description:
      "A premium brand isn't just a logo — it's a complete system that communicates value at every touchpoint. We craft brand identities that create instant recognition, communicate quality, and give your business the authority to charge what you're worth.",
    features: [
      "Brand strategy workshop",
      "Logo & visual identity design",
      "Brand guidelines document",
      "Tone of voice development",
      "Brand application design",
      "Visual content creation",
    ],
    included: [
      "Brand strategy deck",
      "Logo package (all formats)",
      "Brand guidelines PDF",
      "Color & typography system",
      "Icon & illustration set",
      "Social media kit",
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    badge: "Performance Driven",
    icon: "Megaphone",
    subtitle: "Multi-channel marketing that drives revenue, not just reach.",
    description:
      "We build and execute marketing strategies that generate real business outcomes. From campaign planning to analytics and optimization, our performance marketing team manages every channel with a focus on the metrics that matter: leads, conversions, and revenue.",
    features: [
      "Performance marketing campaigns",
      "Multi-channel campaign planning",
      "Analytics & attribution setup",
      "Audience targeting & segmentation",
      "A/B testing & CRO",
      "Marketing dashboard & reporting",
    ],
    included: [
      "Marketing strategy document",
      "Campaign setup & launch",
      "Analytics dashboard",
      "Weekly performance updates",
      "Monthly strategy review",
      "Quarterly growth report",
    ],
  },
];

// ─── Icon Map ────────────────────────────────────────────────────────────────

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Settings,
  Brain,
  Globe,
  Server,
  Palette,
  Megaphone,
};

// ─── Scroll Progress Bar ─────────────────────────────────────────────────────

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#0F67FF] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

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
          ✦ What We Do
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white leading-none mb-6"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-[#BFDBFE] text-lg max-w-xl leading-relaxed"
        >
          Seven core pillars of digital excellence — built for businesses that
          want to lead.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Service Section ──────────────────────────────────────────────────────────

function ServiceSection({ service }: { service: Service }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const IconComponent = iconMap[service.icon];

  return (
    <section
      id={service.id}
      ref={ref}
      className="scroll-mt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="space-y-6"
      >
        {/* Badge */}
        <span className="inline-block bg-[#EEF4FF] text-[#0F67FF] text-xs font-semibold px-3 py-1 rounded-full">
          {service.badge}
        </span>

        {/* Icon + Title row */}
        <div className="flex items-start gap-5">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0F67FF] to-[#3B82F6] rounded-2xl shadow-lg shadow-[#0F67FF]/30 flex items-center justify-center relative z-10">
              {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
            </div>
            <div className="absolute inset-0 rounded-2xl bg-[#0F67FF]/20 animate-ping" />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[#0A0F1E] leading-tight">
              {service.title}
            </h2>
            <p className="text-[#0F67FF] font-semibold mt-1">{service.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#374151] leading-relaxed text-base">
          {service.description}
        </p>

        {/* Features */}
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5">
              <span className="text-[#0F67FF] font-bold mt-0.5 flex-shrink-0">✓</span>
              <span className="text-[#374151] text-sm">{feat}</span>
            </li>
          ))}
        </ul>

        {/* What's Included card */}
        <div className="bg-[#0A0F1E] rounded-2xl p-6">
          <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
            What&apos;s Included
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.included.map((item) => (
              <span key={item} className="text-[#BFDBFE] text-sm">
                → {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div>
          <a
            href="/contact"
            className="bg-[#0F67FF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0D5AE0] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0F67FF]/30 inline-flex items-center gap-1"
          >
            Get a Free Consultation →
          </a>
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-[#0F67FF]/30 mt-12" />
      </motion.div>
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
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-[#BFDBFE] text-base sm:text-lg mb-8 leading-relaxed"
        >
          Let&apos;s discuss how Entice Innovations can help you think bigger,
          move faster, and win more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="bg-[#0F67FF] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#0D5AE0] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0F67FF]/30 text-center"
          >
            Schedule a Call
          </a>
          <a
            href="/portfolio"
            className="border border-white/30 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all text-center"
          >
            See Our Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState<string>(services[0].id);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    services.forEach((service) => {
      const el = document.getElementById(service.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(service.id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="bg-white text-[#0A0F1E]" style={{ fontFamily: "Poppins, sans-serif" }}>
      <ScrollProgressBar />
      <HeroSection />

      {/* Mobile tab bar */}
      <div className="lg:hidden sticky top-[72px] z-40 bg-white/95 backdrop-blur border-b border-[#E5E7EB] px-4 py-3">
        <div
          className="flex gap-2 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex-shrink-0 px-4 py-1.5 rounded-full border border-[#0F67FF]/30 text-[#0F67FF] text-xs font-semibold whitespace-nowrap hover:bg-[#EEF4FF] transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 flex gap-12">
        {/* Sidebar */}
        <aside className="hidden lg:block w-60 flex-shrink-0">
          <div className="sticky top-28 space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-[#0F67FF] mb-4 font-semibold">
              Services
            </p>
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm transition-all ${
                  activeSection === s.id
                    ? "bg-[#EEF4FF] text-[#0F67FF] font-semibold"
                    : "text-[#6B7280] hover:text-[#0A0F1E] hover:bg-[#F9FAFB]"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    activeSection === s.id ? "bg-[#0F67FF]" : "bg-[#D1D5DB]"
                  }`}
                />
                {s.title}
              </a>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 space-y-24 sm:space-y-32">
          {services.map((s) => (
            <ServiceSection key={s.id} service={s} />
          ))}
        </main>
      </div>

      <CTASection />
    </div>
  );
}
