"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

// ─── 3D Helpers ───────────────────────────────────────────────────────────────

function TiltCard({
  children,
  className,
  maxTilt = 10,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [maxTilt, -maxTilt]), { stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-maxTilt, maxTilt]), { stiffness: 180, damping: 18 });
  const scale = useSpring(1, { stiffness: 200, damping: 20 });

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        ref={ref}
        style={{ rotateX: rx, rotateY: ry, scale, transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
          const rect = ref.current!.getBoundingClientRect();
          mx.set((e.clientX - rect.left) / rect.width - 0.5);
          my.set((e.clientY - rect.top) / rect.height - 0.5);
          scale.set(1.015);
        }}
        onMouseLeave={() => { mx.set(0); my.set(0); scale.set(1); }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

function Float({
  children,
}: {
  children: React.ReactNode;
  delay?: number;
  amplitude?: number;
}) {
  return <>{children}</>;
}

function FlipCard({ front, back }: { front: React.ReactNode; back: React.ReactNode }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ perspective: 900 }} className="cursor-pointer h-full" onClick={() => setFlipped(!flipped)}>
      <motion.div
        style={{ transformStyle: "preserve-3d", position: "relative" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <div style={{ backfaceVisibility: "hidden" }} className="h-full">{front}</div>
        <div style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", position: "absolute", inset: 0 }}>{back}</div>
      </motion.div>
    </div>
  );
}

// ─── Animation preset ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32, rotateX: -8 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

// ─── SECTION: INDUSTRIES ──────────────────────────────────────────────────────

function IndustriesSection() {
  const industries = [
    { num: "01", name: "Healthcare & Pharma", sub: "Hospitals, diagnostics, medtech" },
    { num: "02", name: "Education & EdTech", sub: "Universities, online platforms, LMS" },
    { num: "03", name: "Automotive & Transport", sub: "OEMs, fleet management, logistics" },
    { num: "04", name: "Defence & Aerospace", sub: "PSUs, government, defence tech" },
    { num: "05", name: "R&D & Research", sub: "Labs, institutes, innovation hubs" },
    { num: "06", name: "Manufacturing", sub: "Industrial, FMCG, process plants" },
    { num: "07", name: "Finance & Banking", sub: "NBFCs, fintech, insurance, lending" },
    { num: "08", name: "Retail & E-commerce", sub: "D2C, marketplace, omnichannel" },
    { num: "09", name: "Technology & SaaS", sub: "Startups, enterprise software" },
    { num: "10", name: "Legal & Compliance", sub: "LegalTech, advisory, governance" },
    { num: "11", name: "Real Estate & PropTech", sub: "Developers, property management" },
    { num: "12", name: "Energy & Infrastructure", sub: "Renewables, utilities, EPC" },
  ];

  return (
    <section className="border-t border-black/[0.07] py-16 sm:py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-14">
          <div className="w-full lg:w-[36%]">
            <motion.span
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
            >
              Industries We Serve
            </motion.span>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="text-[clamp(2rem,4vw,3.2rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Built for every<br />sector that matters.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="lg:flex-1 text-[#4A5568] text-base leading-relaxed self-end"
          >
            From regulated industries like healthcare and defence to high-growth sectors like fintech and SaaS — our solutions are calibrated to industry-specific compliance, scale, and commercial dynamics.
          </motion.p>
        </div>

        {/* Industry cards grid */}
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="relative group overflow-hidden rounded-xl border border-black/[0.07] bg-white px-6 py-5 cursor-default hover:border-[#0F67FF]/30 hover:shadow-[0_4px_24px_rgba(15,103,255,0.07)] transition-all duration-300"
            >
              {/* Animated left border */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0F67FF] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out rounded-r-full" />

              {/* Faded number watermark */}
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none font-normal leading-none text-black/[0.04] group-hover:text-[#0F67FF]/[0.06] transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "5rem" }}
              >
                {ind.num}
              </span>

              <div className="relative z-10">
                <span className="font-mono text-[10px] text-[#C0CDD8] group-hover:text-[#0F67FF]/60 transition-colors duration-200 block mb-2">
                  {ind.num}
                </span>
                <p className="text-[#1C1C1C] text-sm font-medium leading-snug mb-1.5">{ind.name}</p>
                <p className="text-[#9BAABB] text-[11px] leading-relaxed">{ind.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── SECTION: DIGITAL MARKETING ──────────────────────────────────────────────
// Professional campaign analytics dashboard — no consumer social aesthetics

function DigitalMarketingSection() {
  const channels = [
    { label: "Google Ads", pct: 88, value: "3.4× ROAS", color: "#0F67FF" },
    { label: "Meta Ads", pct: 72, value: "₹8.2 CPL", color: "#6B7A8D" },
    { label: "Organic SEO", pct: 64, value: "85K / mo", color: "#7AAAC8" },
    { label: "Email Automation", pct: 55, value: "42% open", color: "#9BAABB" },
  ];

  const projects = [
    {
      title: "E-commerce Growth Campaign",
      client: "RetailBrand Co. · 2024",
      desc: "Multi-channel paid campaign delivering 40K+ qualified leads across Meta and Google in 90 days.",
      tags: ["Meta Ads", "Google Ads"],
      metrics: [{ v: "3.4×", l: "ROAS" }, { v: "40K+", l: "Leads" }, { v: "−52%", l: "CPL drop" }],
      img: "/assets/images/meeting.png",
    },
    {
      title: "Content-Led Organic Growth",
      client: "B2B SaaS Platform · 2024",
      desc: "Programmatic SEO and long-form content strategy — 5K to 85K monthly organic visitors in 8 months.",
      tags: ["SEO", "Content Strategy"],
      metrics: [{ v: "85K", l: "Visitors/mo" }, { v: "#1", l: "Rankings" }, { v: "8 mo", l: "Timeline" }],
      img: "/assets/images/creative-team.png",
    },
    {
      title: "Enterprise Lead Generation",
      client: "FinTech Corp · 2023",
      desc: "ABM-driven LinkedIn and search campaigns targeting CFOs and CTOs across 6 verticals.",
      tags: ["ABM", "LinkedIn Ads"],
      metrics: [{ v: "12×", l: "Pipeline" }, { v: "C-suite", l: "ICP" }, { v: "90 days", l: "To pipeline" }],
      img: "/assets/images/workspace.png",
    },
  ];

  return (
    <section id="digital-marketing" className="border-t border-black/[0.07] py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-16">
          <div className="w-full lg:w-[36%]">
            <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block">
              Digital Marketing
            </motion.span>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="text-[clamp(2rem,4vw,3.2rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Campaigns that close deals,<br />not just clicks.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="lg:flex-1 text-[#4A5568] text-base leading-relaxed self-end">
            Every campaign is built around commercial outcomes. We define KPIs before touching a single ad account — then ship, test, and optimise until the numbers move.
          </motion.p>
        </div>

        {/* Campaign Analytics Dashboard + floating stats */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">

          {/* Dashboard card */}
          <div className="flex-1">
            <TiltCard maxTilt={6}>
              <motion.div
                initial={{ opacity: 0, rotateX: 14, y: 30 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-2xl border border-black/[0.07] bg-white/70 overflow-hidden shadow-xl shadow-blue-100/30"
              >
                {/* Dashboard header */}
                <div className="bg-[#F8FAFC] px-5 py-3.5 border-b border-black/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                    <span className="font-mono text-[10px] text-[#9BAABB] uppercase tracking-widest">
                      Campaign Dashboard · Q4 2024 · All Channels
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-[#C0CDD8]">Live</span>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-3 gap-px bg-black/[0.04] border-b border-black/[0.05]">
                  {[
                    { v: "3.4×", l: "ROAS" },
                    { v: "40K+", l: "Qualified Leads" },
                    { v: "−52%", l: "Cost Per Lead" },
                  ].map((kpi) => (
                    <div key={kpi.l} className="bg-white/90 px-4 py-4 flex flex-col gap-1">
                      <span className="font-normal text-[#0F67FF] leading-none"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem" }}>
                        {kpi.v}
                      </span>
                      <span className="text-[#9BAABB] text-[9px] uppercase tracking-widest">{kpi.l}</span>
                    </div>
                  ))}
                </div>

                {/* Channel performance bars */}
                <div className="px-6 pt-5 pb-6 space-y-4">
                  <p className="font-mono text-[9px] text-[#9BAABB] uppercase tracking-widest mb-4">
                    Channel Performance · 90-Day Window
                  </p>
                  {channels.map((ch, i) => (
                    <div key={ch.label} className="flex items-center gap-4">
                      <span className="text-[#6B7A8D] text-[10px] w-32 flex-shrink-0">{ch.label}</span>
                      <div className="flex-1 h-1.5 bg-black/[0.05] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: ch.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${ch.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.14, ease: "easeOut" }}
                        />
                      </div>
                      <span className="font-mono text-[10px] text-[#1C1C1C] font-semibold w-20 text-right flex-shrink-0">
                        {ch.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          </div>

          {/* Stats — horizontal row on mobile, vertical column on desktop */}
          <div className="flex flex-row gap-3 lg:flex-col lg:gap-5 lg:w-56">
            {[
              { v: "3.4×", l: "Avg. ROAS", d: 0 },
              { v: "127K+", l: "Leads generated", d: 0.3 },
              { v: "−52%", l: "Cost per lead", d: 0.6 },
            ].map((stat) => (
              <TiltCard key={stat.l} maxTilt={6} className="flex-1 lg:flex-none">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.d + 0.2, duration: 0.6 }}
                  className="bg-white/70 border border-black/[0.07] rounded-2xl px-4 py-4 lg:px-6 lg:py-5 flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-4 shadow-sm text-center lg:text-left"
                >
                  <span
                    className="font-normal text-[#0F67FF] leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.3rem, 4vw, 2.2rem)" }}
                  >
                    {stat.v}
                  </span>
                  <span className="text-[#6B7A8D] text-[10px] lg:text-sm leading-tight">{stat.l}</span>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Flip cards — click to see metrics */}
        <div>
          <p className="text-[#9BAABB] text-xs uppercase tracking-[0.2em] mb-5">Click any project to reveal results</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <motion.div key={p.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="h-72"
              >
                <FlipCard
                  front={
                    <div className="h-full rounded-2xl border border-black/[0.07] bg-white/60 overflow-hidden">
                      <div className="relative h-40 overflow-hidden">
                        <img src={p.img} alt={p.title} className="w-full h-full object-cover"
                          onError={(e) => {
                            const t = e.currentTarget as HTMLImageElement;
                            t.style.display = "none";
                            const par = t.parentElement;
                            if (par) par.style.background = "linear-gradient(135deg, #e8edf5, #c7d8ee)";
                          }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                        <div className="absolute top-3 left-3 flex gap-1">
                          {p.tags.map(t => (
                            <span key={t} className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/90 text-[#0F67FF]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-[10px] text-[#9BAABB] mb-1">{p.client}</p>
                        <h3 className="font-normal text-[#1C1C1C] text-base leading-tight"
                          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                          {p.title}
                        </h3>
                        <p className="text-[#0F67FF] text-[10px] mt-3">Tap to see results →</p>
                      </div>
                    </div>
                  }
                  back={
                    <div className="h-full rounded-2xl border border-[#0F67FF]/20 bg-[#0F67FF] p-6 flex flex-col justify-between">
                      <div>
                        <p className="text-white/60 text-[10px] mb-3 uppercase tracking-widest">{p.client}</p>
                        <h3 className="font-normal text-white leading-tight mb-4 text-lg"
                          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                          {p.title}
                        </h3>
                        <p className="text-white/75 text-xs leading-relaxed">{p.desc}</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/20">
                        {p.metrics.map(m => (
                          <div key={m.l} className="flex flex-col">
                            <span className="text-white font-black text-xl leading-none">{m.v}</span>
                            <span className="text-white/60 text-[9px] mt-1">{m.l}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION: IT CONSULTING ───────────────────────────────────────────────────
// 5 projects — alternating left/right browser-window reveal on hover; static cards on mobile

function ITConsultingSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const projects = [
    {
      title: "Enterprise Digital Transformation",
      url: "app.enterprisex.com/dashboard",
      client: "EnterpriseX Corp · 2024",
      desc: "Full ERP migration and digital transformation roadmap for a 2,000-person manufacturing enterprise. Delivered end-to-end in 12 weeks.",
      tags: ["ERP", "Roadmap"],
      metrics: [{ v: "40%", l: "Cost cut" }, { v: "2×", l: "Velocity" }, { v: "12 wk", l: "Roadmap" }],
      img: "/assets/images/office.png",
    },
    {
      title: "B2B SaaS Platform Architecture",
      url: "app.analyticsCo.com/overview",
      client: "AnalyticsCo · 2024",
      desc: "Built multi-tenant SaaS architecture from scratch — 500K users, 99.9% uptime, and a 4× performance improvement at launch.",
      tags: ["SaaS", "Architecture"],
      metrics: [{ v: "500K", l: "Users" }, { v: "99.9%", l: "Uptime" }, { v: "4×", l: "Faster" }],
      img: "/assets/images/workspace.png",
    },
    {
      title: "Corporate Technology Overhaul",
      url: "www.corporateco.com/home",
      client: "CorporateCo · 2023",
      desc: "Legacy system modernisation — replaced 12-year-old on-premise infrastructure with a cloud-native stack. Zero downtime migration.",
      tags: ["Migration", "Cloud"],
      metrics: [{ v: "3×", l: "Conversion" }, { v: "94", l: "PageSpeed" }, { v: "8 wk", l: "Delivered" }],
      img: "/assets/images/meeting.png",
    },
    {
      title: "Government Tech Procurement Advisory",
      url: "portal.govtech.in/advisory",
      client: "State PSU · 2024",
      desc: "End-to-end IT procurement consulting — RFP design, vendor evaluation, and compliance sign-off for a ₹45Cr state government contract.",
      tags: ["GovTech", "Advisory"],
      metrics: [{ v: "₹45Cr", l: "Procurement" }, { v: "6", l: "Vendors eval." }, { v: "ISO", l: "Compliant" }],
      img: "/assets/images/creative-team.png",
    },
    {
      title: "Healthcare IT Integration",
      url: "app.healthsys.in/emr",
      client: "Multi-Specialty Hospital · 2023",
      desc: "ABDM-compliant EMR and OPD management system rolled out across 3 hospital campuses with zero downtime and full staff training.",
      tags: ["HealthTech", "ABDM"],
      metrics: [{ v: "3", l: "Campuses" }, { v: "ABDM", l: "Compliant" }, { v: "Zero", l: "Downtime" }],
      img: "/assets/images/office.png",
    },
  ];

  return (
    <section id="it-consulting" className="border-t border-black/[0.07] py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-14">
          <div className="w-full lg:w-[36%]">
            <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block">
              IT Consulting
            </motion.span>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="text-[clamp(2rem,4vw,3.2rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Strategy that ships,<br />not just slides.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="lg:flex-1 text-[#4A5568] text-base leading-relaxed self-end">
            We build technology roadmaps and ship them. From enterprise ERP migrations to SaaS product architecture — every engagement ends with working software.
          </motion.p>
        </div>

        {/* Desktop hint */}
        <p className="hidden md:block text-[#9BAABB] text-[10px] uppercase tracking-[0.22em] mb-2">
          Hover to explore each project
        </p>

        {/* ── MOBILE: static cards ── */}
        <div className="md:hidden space-y-4">
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-2xl border border-black/[0.07] bg-white/70 overflow-hidden shadow-sm"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={proj.img} alt={proj.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.style.display = "none";
                    if (t.parentElement) t.parentElement.style.background = "linear-gradient(135deg,#e8edf5,#c7d8ee)";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {proj.tags.map(t => (
                    <span key={t} className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/90 text-[#0F67FF]">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <p className="text-[10px] text-[#9BAABB] mb-1">{proj.client}</p>
                <h3 className="font-normal text-[#1C1C1C] mb-2 text-xl leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {proj.title}
                </h3>
                <p className="text-[#6B7A8D] text-xs leading-relaxed mb-4">{proj.desc}</p>
                <div className="flex gap-5 pt-3.5 border-t border-black/[0.06]">
                  {proj.metrics.map(m => (
                    <div key={m.l} className="flex flex-col">
                      <span className="font-normal text-[#1C1C1C] leading-none"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem" }}>
                        {m.v}
                      </span>
                      <span className="text-[#9BAABB] text-[9px] mt-0.5">{m.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── DESKTOP: alternating reveal ── */}
        <div className="hidden md:block divide-y divide-black/[0.07]">
          {projects.map((proj, i) => {
            const isEven = i % 2 === 0; // even → preview LEFT, info RIGHT; odd → info LEFT, preview RIGHT
            const active = hoveredIdx === i;

            // Shared browser window component (inline JSX)
            const previewCol = (
              <div className="relative">
                <motion.div
                  animate={{
                    x: active ? 0 : isEven ? -52 : 52,
                    opacity: active ? 1 : 0,
                    scale: active ? 1 : 0.94,
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 22 }}
                  className="rounded-2xl border border-black/[0.12] bg-white overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.11)]"
                >
                  {/* Browser chrome */}
                  <div className="bg-[#F1F3F4] px-4 py-2.5 flex items-center gap-2 border-b border-black/[0.06]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 bg-white rounded-md px-3 py-1 ml-1 overflow-hidden">
                      <span className="font-mono text-[8px] text-[#9BAABB] truncate block">{proj.url}</span>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={proj.img} alt={proj.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const t = e.currentTarget as HTMLImageElement;
                        t.style.display = "none";
                        if (t.parentElement) t.parentElement.style.background = "linear-gradient(135deg,#e8edf5,#c7d8ee)";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                  </div>
                  {/* Metrics row */}
                  <div className="px-5 py-4 flex gap-6 border-t border-black/[0.06]">
                    {proj.metrics.map(m => (
                      <div key={m.l} className="flex flex-col">
                        <span className="text-[#0F67FF] font-bold text-lg leading-none">{m.v}</span>
                        <span className="text-[#9BAABB] text-[8px] mt-0.5">{m.l}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );

            // Info column
            const infoCol = (
              <motion.div
                animate={{ x: active ? 0 : isEven ? 16 : -16 }}
                transition={{ type: "spring", stiffness: 180, damping: 24 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] text-[#C0CDD8]">{proj.client}</span>
                  <div className="flex gap-1">
                    {proj.tags.map(t => (
                      <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded-md bg-[#F0F4FF] text-[#0F67FF] border border-[#0F67FF]/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3
                  className="font-normal text-[#1C1C1C] leading-tight mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.4rem,2vw,1.9rem)" }}
                >
                  {proj.title}
                </h3>
                <p className="text-[#6B7A8D] text-sm leading-relaxed max-w-sm">{proj.desc}</p>
                <span className="mt-5 block font-mono text-[10px] text-[#C0CDD8]">
                  {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
              </motion.div>
            );

            return (
              <motion.div
                key={proj.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5}
                className="grid grid-cols-2 gap-10 items-center min-h-[280px] py-10 cursor-default"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Even: preview left | info right */}
                {/* Odd:  info left  | preview right */}
                {isEven ? (
                  <>
                    {previewCol}
                    {infoCol}
                  </>
                ) : (
                  <>
                    {infoCol}
                    {previewCol}
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// ─── SECTION: AI CONSULTING ───────────────────────────────────────────────────
// Terminal card with 3D floating metric orbs

function AIConsultingSection() {
  const orbs = [
    { v: "80%", l: "Faster response", d: 0, color: "#0F67FF" },
    { v: "91%", l: "ML accuracy", d: 0.4, color: "#6D28D9" },
    { v: "10K+", l: "Docs/day", d: 0.8, color: "#059669" },
  ];

  const bars = [
    { label: "Response speed improvement", pct: 88, val: "80%" },
    { label: "Queries auto-resolved", pct: 72, val: "70%" },
    { label: "Manual review eliminated", pct: 90, val: "−90%" },
  ];

  const projects = [
    {
      title: "ML Sales Prediction Engine",
      client: "SalesTech · 2023",
      desc: "91% accurate deal close prediction integrated into HubSpot CRM with real-time scoring.",
      tags: ["Python", "ML"],
      metrics: [{ v: "91%", l: "Accuracy" }, { v: "5×", l: "ROI" }, { v: "3 mo", l: "Build" }],
    },
    {
      title: "Document Intelligence Platform",
      client: "LegalTech LLP · 2024",
      desc: "AI pipeline processing 10K+ legal documents daily — replacing a 12-person manual review team.",
      tags: ["LLM", "RAG"],
      metrics: [{ v: "10K+", l: "Docs/day" }, { v: "99%", l: "Accuracy" }, { v: "−90%", l: "Review time" }],
    },
  ];

  return (
    <section id="ai-consulting" className="border-t border-black/[0.07] py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-16">
          <div className="w-full lg:w-[36%]">
            <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block">
              AI Consulting
            </motion.span>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="text-[clamp(2rem,4vw,3.2rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Models that work.<br />Systems that last.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="lg:flex-1 text-[#4A5568] text-base leading-relaxed self-end">
            We identify the highest-ROI AI use case, build a proof-of-concept in weeks, and ship production systems your team actually uses and measures.
          </motion.p>
        </div>

        {/* Terminal + floating orbs */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="flex-1 relative">
            <TiltCard maxTilt={6}>
              <motion.div
                initial={{ opacity: 0, rotateX: 15, y: 30 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-2xl border border-black/[0.07] bg-white/70 overflow-hidden shadow-xl shadow-blue-100/30"
              >
                {/* Terminal header */}
                <div className="bg-[#F1F3F4] px-5 py-3 flex items-center gap-3 border-b border-black/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <span className="font-mono text-[10px] text-[#9BAABB]">
                    model.predict(customer_query) → resolved: true · confidence: 0.97
                  </span>
                </div>
                {/* Visual area */}
                <div
                  className="relative h-52 overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #e8edf5 100%)" }}
                >
                  {/* Blueprint grid overlay */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(15,103,255,0.04) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(15,103,255,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "18px 18px",
                  }} />
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <p className="font-mono text-[9px] text-[#9BAABB] mb-5 uppercase tracking-widest">
                      Live model performance
                    </p>
                    <div className="space-y-3">
                      {bars.map((b, i) => (
                        <div key={b.label} className="flex items-center gap-3">
                          <span className="font-mono text-[8px] text-[#9BAABB] w-40 flex-shrink-0 truncate">
                            {b.label}
                          </span>
                          <div className="flex-1 h-1.5 bg-black/[0.06] rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-[#0F67FF]"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${b.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.4, delay: i * 0.18, ease: "easeOut" }}
                            />
                          </div>
                          <span className="font-mono text-[#1C1C1C] font-bold text-[10px] w-8 text-right">
                            {b.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[#7AAAC8] text-[10px] uppercase tracking-[0.22em] mb-2 block">
                    FinTech Corp · 2024
                  </span>
                  <h3 className="font-normal text-[#1C1C1C] text-xl leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    GPT-4 Customer Support Bot
                  </h3>
                </div>
              </motion.div>
            </TiltCard>
          </div>

          {/* Metric stats — horizontal row on mobile, vertical column on desktop */}
          <div className="flex flex-row gap-3 lg:flex-col lg:gap-5 lg:w-56">
            {orbs.map((orb) => (
              <TiltCard key={orb.l} maxTilt={8} className="flex-1 lg:flex-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: orb.d + 0.2, duration: 0.7 }}
                  className="rounded-2xl border border-black/[0.07] bg-white/70 px-4 py-4 lg:px-6 lg:py-5 text-center shadow-sm"
                >
                  <span
                    className="font-normal leading-none block mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.4rem, 4vw, 2.5rem)", color: orb.color }}
                  >
                    {orb.v}
                  </span>
                  <span className="text-[#9BAABB] text-[10px] lg:text-xs leading-tight block">{orb.l}</span>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Additional projects */}
        {projects.map((p, i) => (
          <motion.div key={p.title}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 border-t border-black/[0.07]"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-[#C0CDD8] text-[10px] font-mono">{p.client}</span>
                <div className="flex gap-1">
                  {p.tags.map(t => (
                    <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded-md bg-[#F0F4FF] text-[#0F67FF] border border-[#0F67FF]/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="font-normal text-[#1C1C1C] mb-1 text-xl"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {p.title}
              </h3>
              <p className="text-[#6B7A8D] text-xs leading-relaxed">{p.desc}</p>
            </div>
            <div className="flex gap-6 flex-shrink-0">
              {p.metrics.map(m => (
                <div key={m.l} className="flex flex-col">
                  <span className="font-normal text-[#1C1C1C] leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem" }}>
                    {m.v}
                  </span>
                  <span className="text-[#9BAABB] text-[9px] mt-1">{m.l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── SECTION: TECH INFRASTRUCTURE ────────────────────────────────────────────
// Isometric-angle blueprint card with orbiting status nodes

function TechInfraSection() {
  const projects = [
    {
      title: "ISO 27001 Security & Compliance",
      client: "FinSecure · 2024",
      desc: "Full ISO 27001 compliance — VAPT, remediation, and certification in under 6 months.",
      tags: ["ISO 27001", "VAPT"],
      metrics: [{ v: "ISO", l: "Certified" }, { v: "24/7", l: "Monitoring" }, { v: "0", l: "Incidents" }],
    },
    {
      title: "DevOps Pipeline Transformation",
      client: "ProductCo · 2023",
      desc: "Weekly manual releases to daily automated deploys with zero rollback incidents.",
      tags: ["Docker", "K8s"],
      metrics: [{ v: "Daily", l: "Releases" }, { v: "−85%", l: "Deploy time" }, { v: "Zero", l: "Rollbacks" }],
    },
  ];

  const nodes = [
    { label: "AWS EC2", x: "10%", y: "20%", color: "#0F67FF", d: 0 },
    { label: "RDS", x: "70%", y: "15%", color: "#22c55e", d: 0.3 },
    { label: "S3", x: "85%", y: "60%", color: "#f59e0b", d: 0.6 },
    { label: "CloudFront", x: "15%", y: "70%", color: "#6D28D9", d: 0.9 },
    { label: "Lambda", x: "50%", y: "80%", color: "#0F67FF", d: 1.2 },
  ];

  return (
    <section id="tech-infrastructure" className="border-t border-black/[0.07] py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-16">
          <div className="w-full lg:w-[36%]">
            <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block">
              Tech Infrastructure
            </motion.span>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="text-[clamp(2rem,4vw,3.2rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Infrastructure<br />that never sleeps.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="lg:flex-1 text-[#4A5568] text-base leading-relaxed self-end">
            Cloud migrations, DevOps pipelines, and security compliance — delivered without downtime. We take infrastructure off your plate completely.
          </motion.p>
        </div>

        {/* Architecture diagram card */}
        <TiltCard maxTilt={5} className="mb-16">
          <motion.div
            initial={{ opacity: 0, rotateX: 18, rotateY: -12, y: 40 }}
            whileInView={{ opacity: 1, rotateX: 4, rotateY: -3, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative rounded-2xl border border-[#0F67FF]/15 bg-white/60 overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-[#0F67FF]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="font-mono text-[9px] text-[#9BAABB] uppercase tracking-widest">
                  LIVE · AWS us-east-1 · SaaS Platform
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#C0CDD8]">2024</span>
            </div>

            {/* Architecture visual */}
            <div
              className="relative h-56 overflow-hidden"
              style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #eef2ff 100%)" }}
            >
              {/* Blueprint grid overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(15,103,255,0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(15,103,255,0.04) 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px",
              }} />

              {/* SVG connector lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
                <line x1="15%" y1="25%" x2="75%" y2="20%" stroke="#0F67FF" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="75%" y1="20%" x2="88%" y2="65%" stroke="#22c55e" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="88%" y1="65%" x2="50%" y2="83%" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="50%" y1="83%" x2="15%" y2="73%" stroke="#6D28D9" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="15%" y1="73%" x2="15%" y2="25%" stroke="#0F67FF" strokeWidth="1" strokeDasharray="4,4" />
              </svg>

              {/* Service nodes */}
              {nodes.map((node) => (
                <Float key={node.label} delay={node.d} amplitude={6}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: node.d + 0.3, duration: 0.5, type: "spring" }}
                    style={{ position: "absolute", left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-md"
                      style={{ background: node.color }}>
                      <div className="w-3 h-3 rounded-sm bg-white/40" />
                    </div>
                    <span className="font-mono text-[7px] mt-1 whitespace-nowrap font-semibold"
                      style={{ color: node.color }}>
                      {node.label}
                    </span>
                  </motion.div>
                </Float>
              ))}
            </div>

            <div className="p-6 grid grid-cols-3 gap-4">
              {[
                { v: "0s", l: "Migration downtime" },
                { v: "30%", l: "Cloud cost saved" },
                { v: "4×", l: "Deploy frequency" },
              ].map(m => (
                <div key={m.l} className="flex flex-col">
                  <span className="font-mono text-[#0F67FF] font-bold text-xl leading-none">{m.v}</span>
                  <span className="text-[#9BAABB] text-[9px] mt-1">{m.l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </TiltCard>

        {projects.map((p, i) => (
          <motion.div key={p.title}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 border-t border-black/[0.07]"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-[#C0CDD8] text-[10px] font-mono">{p.client}</span>
                <div className="flex gap-1">
                  {p.tags.map(t => (
                    <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded-md bg-[#F0F4FF] text-[#0F67FF] border border-[#0F67FF]/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="font-normal text-[#1C1C1C] mb-1 text-xl"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {p.title}
              </h3>
              <p className="text-[#6B7A8D] text-xs leading-relaxed">{p.desc}</p>
            </div>
            <div className="flex gap-6 flex-shrink-0">
              {p.metrics.map(m => (
                <div key={m.l} className="flex flex-col">
                  <span className="font-mono font-bold text-[#0F67FF] leading-none" style={{ fontSize: "1.2rem" }}>
                    {m.v}
                  </span>
                  <span className="text-[#9BAABB] text-[9px] mt-1">{m.l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── SECTION: BRAND BUILDING ──────────────────────────────────────────────────
// 3D product-shot angle cards — flat-lay aesthetic

function BrandBuildingSection() {
  const projects = [
    {
      title: "Premium D2C Brand Identity",
      client: "LuxBrand D2C",
      year: "2024",
      desc: "Complete brand system — naming, logo, guidelines, packaging, and launch collateral. Drove ₹2Cr in first-month sales.",
      tags: ["Identity", "Packaging"],
      palette: ["#1C1C1C", "#C9A96E", "#F5F0E8", "#8B7355"],
      metrics: [{ v: "2.7×", l: "Price premium" }, { v: "4 wk", l: "To brand" }, { v: "₹2Cr", l: "Sales month 1" }],
      img: "/assets/images/creative-team.png",
      rotY: -8,
    },
    {
      title: "Series A Startup Rebrand",
      client: "Series A Startup",
      year: "2024",
      desc: "Repositioned a B2B SaaS for Series A — new identity, pitch deck, and investor-ready website. Closed ₹8Cr.",
      tags: ["Rebrand", "Pitch Deck"],
      palette: ["#0A0F1E", "#0F67FF", "#BFDBFE", "#F0F4FF"],
      metrics: [{ v: "₹8Cr", l: "Series A raised" }, { v: "3", l: "Term sheets" }, { v: "6 wk", l: "Brand to close" }],
      img: "/assets/images/office.png",
      rotY: 8,
    },
  ];

  return (
    <section id="brand-building" className="border-t border-black/[0.07] py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-16">
          <div className="w-full lg:w-[36%]">
            <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block">
              Brand Building
            </motion.span>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="text-[clamp(2rem,4vw,3.2rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Brands worth<br />charging premium for.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="lg:flex-1 text-[#4A5568] text-base leading-relaxed self-end">
            A premium brand is a complete system that communicates value at every touchpoint — before a single word is spoken.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <TiltCard key={p.title} maxTilt={8}>
              <motion.div
                initial={{ opacity: 0, rotateX: 20, rotateY: p.rotY * 2, y: 40 }}
                whileInView={{ opacity: 1, rotateX: 6, rotateY: p.rotY, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-2xl border border-black/[0.07] bg-white/70 overflow-hidden shadow-xl shadow-blue-100/20"
              >
                {/* Image with 3D depth layer */}
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.style.display = "none";
                      const par = t.parentElement;
                      if (par) par.style.background = "linear-gradient(135deg, #e8edf5, #c7d8ee)";
                    }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />

                  {/* Floating color swatches */}
                  <div style={{ transform: "translateZ(20px)" }} className="absolute bottom-4 left-5 flex gap-2">
                    {p.palette.map((color, ci) => (
                      <Float key={ci} delay={ci * 0.2} amplitude={5}>
                        <div className="w-6 h-6 rounded-full border-2 border-white/50 shadow-md"
                          style={{ background: color }} />
                      </Float>
                    ))}
                  </div>

                  {/* Year */}
                  <div className="absolute top-4 right-4">
                    <span className="text-white/50 font-mono text-[9px] tracking-widest">{p.year}</span>
                  </div>

                  {/* Typeface preview */}
                  <div className="absolute bottom-4 right-5" style={{ transform: "translateZ(10px)" }}>
                    <span className="text-white/25 text-3xl font-normal"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                      Aa
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <span className="text-[#7AAAC8] text-[10px] uppercase tracking-[0.22em] mb-2 block">{p.client}</span>
                  <h3 className="text-[clamp(1.3rem,2.2vw,1.9rem)] font-normal text-[#1C1C1C] leading-[1.06] tracking-[-0.02em] mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    {p.title}
                  </h3>
                  <p className="text-[#4A5568] text-xs leading-relaxed mb-5">{p.desc}</p>
                  <div className="flex gap-2 mb-6">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full border border-black/10 text-[#6B7A8D]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-7 pt-5 border-t border-black/[0.07]">
                    {p.metrics.map(m => (
                      <div key={m.l} className="flex flex-col">
                        <span className="font-normal text-[#1C1C1C] leading-none"
                          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem" }}>
                          {m.v}
                        </span>
                        <span className="text-[#9BAABB] text-[9px] mt-1.5">{m.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <main
      style={{
        background: `
          radial-gradient(ellipse 72% 45% at 18% 12%, rgba(147,197,253,0.50) 0%, rgba(186,230,253,0.22) 45%, transparent 70%),
          radial-gradient(ellipse 50% 35% at 6%  5%,  rgba(186,230,253,0.40) 0%, transparent 58%),
          radial-gradient(ellipse 55% 40% at 88% 42%, rgba(147,197,253,0.26) 0%, transparent 62%),
          radial-gradient(ellipse 40% 30% at 70% 85%, rgba(186,230,253,0.18) 0%, transparent 55%),
          radial-gradient(ellipse 35% 25% at 20% 90%, rgba(147,197,253,0.14) 0%, transparent 50%),
          #f5f8fc
        `,
      }}
    >
      {/* ── HERO ── */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center pt-32 pb-20 px-6 sm:px-10"
        style={{ perspective: 1200 }}>
        <div className="max-w-6xl mx-auto w-full">
          <motion.span
            variants={fadeUp} initial="hidden" animate="visible"
            className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-6 block"
          >
            Our Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40, rotateX: -12 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", transformStyle: "preserve-3d" }}
            className="text-[clamp(3.2rem,8vw,7rem)] font-normal text-[#1C1C1C] leading-[1.03] tracking-[-0.02em] mb-8 max-w-4xl"
          >
            Work that<br />moves numbers.
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-[#6B7A8D] text-base sm:text-lg leading-relaxed max-w-xl mb-10"
          >
            A curated selection of client engagements across digital marketing, AI consulting, enterprise infrastructure, and brand building — spanning healthcare, finance, manufacturing, and beyond.
          </motion.p>

          {/* Hero stats */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              { v: "50+", l: "Engagements", d: 0 },
              { v: "98%", l: "Client retention", d: 0.25 },
              { v: "12+", l: "Industries served", d: 0.5 },
            ].map((stat) => (
              <motion.div
                key={stat.l}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + stat.d, duration: 0.7 }}
                className="bg-white/70 border border-black/[0.07] rounded-2xl px-5 py-3.5 sm:px-6 sm:py-4 flex items-center gap-3 sm:gap-4 shadow-sm"
              >
                <span className="font-normal text-[#1C1C1C] leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.4rem,4vw,2rem)" }}>
                  {stat.v}
                </span>
                <span className="text-[#9BAABB] text-xs sm:text-sm">{stat.l}</span>
              </motion.div>
            ))}
          </div>

          {/* Anchor nav */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="flex flex-wrap gap-2 mt-10"
          >
            {[
              { label: "Digital Marketing", id: "digital-marketing" },
              { label: "IT Consulting", id: "it-consulting" },
              { label: "AI Consulting", id: "ai-consulting" },
              { label: "Tech Infrastructure", id: "tech-infrastructure" },
              { label: "Brand Building", id: "brand-building" },
            ].map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-4 py-1.5 rounded-full text-xs text-[#6B7A8D] border border-black/[0.08] bg-white/60 hover:border-black/[0.18] hover:text-[#1C1C1C] transition-all duration-200"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <IndustriesSection />

      {/* ── DOMAIN SECTIONS ── */}
      <DigitalMarketingSection />
      <ITConsultingSection />
      <AIConsultingSection />
      <TechInfraSection />
      <BrandBuildingSection />

      {/* ── CTA ── */}
      <section className="border-t border-black/[0.07] py-24 sm:py-32 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <motion.span
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[#7AAAC8] text-xs uppercase tracking-[0.22em] mb-5 block"
            >
              Ready to Begin?
            </motion.span>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="text-[clamp(2.2rem,5vw,4rem)] font-normal text-[#1C1C1C] leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Ready to be our<br />next success story?
            </motion.h2>
          </div>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="/contact"
              className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#0F67FF] transition-colors duration-300 shadow-md">
              Start a project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/services"
              className="inline-flex items-center gap-2 text-sm text-[#6B7A8D] border border-black/10 rounded-full px-8 py-3.5 hover:border-[#0F67FF] hover:text-[#0F67FF] transition-all duration-200 bg-white/60">
              View our services
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
