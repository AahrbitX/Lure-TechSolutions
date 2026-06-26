export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  number: string;
  title: string;
  badge: string;
  accent: string;
  accentBg: string;
  subtitle: string;
  description: string;
  outcome: string;
  features: string[];
  included: string[];
  process: ProcessStep[];
  whoFor: string[];
  metrics: { value: string; label: string }[];
}

export const services: ServiceData[] = [
  {
    id: "digital-marketing",
    number: "01",
    title: "Digital Marketing",
    badge: "Growth Engine",
    accent: "#1D4ED8",
    accentBg: "rgba(219,234,254,0.5)",
    subtitle: "Dominate your market with data-driven campaigns that convert.",
    outcome: "Avg. 3.4× increase in qualified leads within 90 days.",
    description:
      "We design and execute comprehensive digital marketing strategies that put your brand in front of the right audience at the right time. From organic search to paid media, every campaign is built around measurable outcomes — not vanity metrics. We define KPIs before we open a single ad account, so every decision has a clear commercial rationale.",
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
    process: [
      {
        step: "01",
        title: "Audit & Benchmark",
        description: "We assess your current digital presence, competitors, and keyword landscape. You get a clear picture of where you stand and where the biggest opportunities are.",
      },
      {
        step: "02",
        title: "Strategy & KPI Setting",
        description: "We define measurable goals — qualified leads, cost-per-acquisition, organic traffic growth — before any creative or campaign work begins.",
      },
      {
        step: "03",
        title: "Campaign Build & Launch",
        description: "Our team builds and launches across every relevant channel simultaneously — search, social, display, and email — with consistent creative and messaging.",
      },
      {
        step: "04",
        title: "Optimise & Scale",
        description: "Weekly performance reviews, A/B testing, and budget reallocation towards what's working. Monthly reports tie every metric back to your business goals.",
      },
    ],
    whoFor: [
      "E-commerce brands scaling revenue",
      "B2B companies generating enterprise leads",
      "Service businesses building local authority",
      "Startups launching into competitive markets",
      "Established brands entering new geographies",
    ],
    metrics: [
      { value: "3.4×", label: "Avg. lead increase" },
      { value: "60%", label: "Reduction in CPL" },
      { value: "90 days", label: "To first results" },
    ],
  },
  {
    id: "it-consulting",
    number: "02",
    title: "IT Consulting",
    badge: "Strategic Advisory",
    accent: "#0369A1",
    accentBg: "rgba(224,242,254,0.5)",
    subtitle: "Transform your technology strategy for the next decade.",
    outcome: "Reduce technology debt and align IT spend with business outcomes.",
    description:
      "Our IT consulting practice helps businesses navigate the complexity of modern technology. We assess your current state, design a transformation roadmap, and guide implementation — ensuring every technology decision creates business value, not just technical achievement. We work as an extension of your leadership team, not as a vendor.",
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
    process: [
      {
        step: "01",
        title: "Technology Audit",
        description: "A deep assessment of your current infrastructure, tools, and processes. We identify redundancies, security gaps, integration failures, and quick wins.",
      },
      {
        step: "02",
        title: "Stakeholder Alignment",
        description: "We interview leadership, department heads, and end-users to understand the business requirements behind every technology decision.",
      },
      {
        step: "03",
        title: "Roadmap Design",
        description: "A phased 12-to-24-month transformation roadmap with prioritised initiatives, resource requirements, and expected business outcomes at every stage.",
      },
      {
        step: "04",
        title: "Guided Implementation",
        description: "We stay engaged through execution — running vendor evaluations, overseeing integrations, and managing change across your teams.",
      },
    ],
    whoFor: [
      "Mid-market companies with legacy systems",
      "Fast-growing startups outpacing their tech stack",
      "Enterprises undergoing digital transformation",
      "Businesses preparing for M&A or investment",
      "Leadership teams without an internal CTO",
    ],
    metrics: [
      { value: "40%", label: "Avg. IT cost reduction" },
      { value: "2×", label: "Faster delivery velocity" },
      { value: "12 weeks", label: "To completed roadmap" },
    ],
  },
  {
    id: "ai-consulting",
    number: "03",
    title: "AI Consulting",
    badge: "Future-Ready",
    accent: "#6D28D9",
    accentBg: "rgba(237,233,254,0.5)",
    subtitle: "Implement AI that creates real competitive advantage.",
    outcome: "Identify the highest-ROI AI use cases before writing a single line of code.",
    description:
      "AI is no longer optional for premium businesses — it's the differentiator. We help you identify the highest-ROI AI opportunities in your business, design the implementation architecture, and build solutions that your team can actually use and measure. We don't sell AI hype — we build AI systems that solve real problems and move real numbers.",
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
      "Use-case prioritization matrix",
      "Architecture design document",
      "POC development",
      "Integration roadmap",
      "Team training & handover",
    ],
    process: [
      {
        step: "01",
        title: "AI Readiness Assessment",
        description: "We evaluate your data quality, infrastructure, and team capabilities to determine what's actually possible — and what will deliver ROI within your current constraints.",
      },
      {
        step: "02",
        title: "Use-Case Prioritisation",
        description: "We map every viable AI use case in your business against effort, impact, and feasibility. You leave with a ranked matrix of where to invest first.",
      },
      {
        step: "03",
        title: "Architecture & POC",
        description: "We design the implementation architecture and build a proof-of-concept for your top priority. This validates the approach before any significant investment.",
      },
      {
        step: "04",
        title: "Build, Integrate & Train",
        description: "We build the production solution, integrate it into your existing workflows, and train your team on adoption — ensuring the AI actually gets used.",
      },
    ],
    whoFor: [
      "Businesses with manual, repetitive workflows",
      "Companies sitting on large amounts of unstructured data",
      "Customer-facing teams looking to automate support",
      "Leadership teams making data-heavy decisions",
      "Enterprises preparing AI governance frameworks",
    ],
    metrics: [
      { value: "80%", label: "Task automation potential" },
      { value: "6 weeks", label: "POC to production" },
      { value: "5×", label: "Avg. ROI on top use case" },
    ],
  },
  {
    id: "domain-hosting",
    number: "04",
    title: "Domain & Hosting",
    badge: "Infrastructure Foundation",
    accent: "#15803D",
    accentBg: "rgba(220,252,231,0.5)",
    subtitle: "Your digital foundation — fast, secure, always available.",
    outcome: "99.9% uptime SLA with managed security and zero maintenance overhead.",
    description:
      "We handle the complete lifecycle of your web infrastructure — from domain registration and management to enterprise-grade hosting, SSL certificates, CDN configuration, and 24/7 uptime monitoring. Your team focuses on building the business. We make sure the lights never go out.",
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
    process: [
      {
        step: "01",
        title: "Domain Audit & Registration",
        description: "We audit your existing domain portfolio, secure any vulnerable variations, and establish a management cadence that ensures nothing ever expires unexpectedly.",
      },
      {
        step: "02",
        title: "Hosting Architecture",
        description: "We select and configure the right hosting environment for your traffic volume, tech stack, and security requirements — from shared managed to dedicated cloud.",
      },
      {
        step: "03",
        title: "Security & Performance",
        description: "SSL certificates, CDN configuration, firewall rules, and performance optimisation. Your site loads fast and stays secure — globally.",
      },
      {
        step: "04",
        title: "Ongoing Monitoring",
        description: "24/7 uptime monitoring, automated alerts, and monthly infrastructure reports. You'll know about a problem before your customers do.",
      },
    ],
    whoFor: [
      "Businesses migrating from unreliable hosts",
      "E-commerce platforms requiring high availability",
      "Startups launching their first web presence",
      "Companies consolidating fragmented domain portfolios",
      "Teams that want infrastructure off their plate entirely",
    ],
    metrics: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "< 48h", label: "Migration turnaround" },
      { value: "0", label: "Maintenance overhead for you" },
    ],
  },
  {
    id: "tech-infrastructure",
    number: "05",
    title: "Tech Infrastructure",
    badge: "Enterprise Grade",
    accent: "#A16207",
    accentBg: "rgba(254,249,195,0.5)",
    subtitle: "Scalable, secure infrastructure built for enterprise demands.",
    outcome: "Cloud architecture that scales with you — without scaling your ops team.",
    description:
      "We design and manage cloud architecture that scales with your business. From AWS and GCP to Azure, we provision, optimize, and secure your infrastructure — with DevOps pipelines that accelerate your team's delivery velocity and reduce deployment risk. Enterprise-grade infrastructure, right-sized for where you are today and where you're going.",
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
    process: [
      {
        step: "01",
        title: "Infrastructure Audit",
        description: "We map your existing stack, identify bottlenecks, security vulnerabilities, and cost inefficiencies. Most teams find 20–40% of cloud spend is wasted.",
      },
      {
        step: "02",
        title: "Architecture Design",
        description: "We design a cloud architecture blueprint that handles your current load and scales to 10× without requiring a rewrite. Documentation included.",
      },
      {
        step: "03",
        title: "DevOps & CI/CD Setup",
        description: "We implement automated deployment pipelines, testing gates, and rollback procedures — so your team ships faster with far less deployment risk.",
      },
      {
        step: "04",
        title: "Security, Monitoring & Handover",
        description: "Security hardening, compliance checks, monitoring dashboards, and alerting. Plus a full DR runbook so your team knows exactly what to do if something goes wrong.",
      },
    ],
    whoFor: [
      "SaaS companies experiencing scaling pain",
      "Enterprises migrating from on-premise to cloud",
      "Development teams with slow, fragile deployment pipelines",
      "Businesses requiring compliance (ISO, SOC2, GDPR)",
      "Startups building on cloud from day one",
    ],
    metrics: [
      { value: "30%", label: "Avg. cloud cost reduction" },
      { value: "4×", label: "Faster deployment cycles" },
      { value: "Zero", label: "Downtime during migrations" },
    ],
  },
  {
    id: "brand-building",
    number: "06",
    title: "Brand Building",
    badge: "Identity & Presence",
    accent: "#BE123C",
    accentBg: "rgba(255,228,230,0.5)",
    subtitle: "Build a brand identity that commands premium positioning.",
    outcome: "A brand system that earns trust before a single word is spoken.",
    description:
      "A premium brand isn't just a logo — it's a complete system that communicates value at every touchpoint. We craft brand identities that create instant recognition, communicate quality, and give your business the authority to charge what you're worth. From naming and positioning to visual language and tone of voice — we build brands that last.",
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
    process: [
      {
        step: "01",
        title: "Brand Discovery Workshop",
        description: "A structured session with your leadership team to uncover your positioning, audience, competitive landscape, and the emotional territory you want to own.",
      },
      {
        step: "02",
        title: "Strategy & Positioning",
        description: "We define your brand architecture, value proposition, personality, and messaging framework — the strategic foundation everything visual is built on.",
      },
      {
        step: "03",
        title: "Visual Identity Design",
        description: "Logo, colour palette, typography, iconography, photography style, and all application design. Multiple concepts, iterative refinement, final master files in all formats.",
      },
      {
        step: "04",
        title: "Guidelines & Rollout",
        description: "A comprehensive brand guidelines document covering every use case, plus social media kit and rollout support so your team can execute consistently from day one.",
      },
    ],
    whoFor: [
      "Startups building a brand from scratch",
      "Established companies undergoing a rebrand",
      "Businesses moving upmarket and repricing",
      "Founders raising funding who need boardroom-ready branding",
      "Companies expanding into new markets or segments",
    ],
    metrics: [
      { value: "2.7×", label: "Price premium after rebrand" },
      { value: "4 weeks", label: "Discovery to final brand" },
      { value: "100%", label: "Deliverable ownership — yours forever" },
    ],
  },
  {
    id: "marketing",
    number: "07",
    title: "Marketing",
    badge: "Performance Driven",
    accent: "#0F67FF",
    accentBg: "rgba(219,234,254,0.5)",
    subtitle: "Multi-channel marketing that drives revenue, not just reach.",
    outcome: "Every rupee tracked from impression to closed deal.",
    description:
      "We build and execute marketing strategies that generate real business outcomes. From campaign planning to analytics and optimization, our performance marketing team manages every channel with a focus on the metrics that matter: leads, conversions, and revenue. We close the loop between marketing activity and commercial results.",
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
    process: [
      {
        step: "01",
        title: "Market & Audience Research",
        description: "We map your total addressable market, segment your audience, and identify the channels and messages with the highest probability of conversion.",
      },
      {
        step: "02",
        title: "Strategy & Budget Planning",
        description: "We build a channel mix strategy with projected CAC, LTV, and payback period for each — so leadership can make informed investment decisions upfront.",
      },
      {
        step: "03",
        title: "Campaign Execution",
        description: "Multi-channel launch across paid, organic, and owned channels with consistent creative, tracking, and a clear attribution model from day one.",
      },
      {
        step: "04",
        title: "Test, Learn & Scale",
        description: "Continuous A/B testing, weekly optimisation, and budget reallocation towards the highest-performing channels. Quarterly strategy reviews to stay ahead of market shifts.",
      },
    ],
    whoFor: [
      "B2B companies with long sales cycles",
      "Consumer brands scaling acquisition",
      "SaaS businesses driving trial and activation",
      "Businesses with undefined CAC or attribution",
      "Teams ready to invest seriously in growth",
    ],
    metrics: [
      { value: "2.1×", label: "Avg. ROAS improvement" },
      { value: "35%", label: "Reduction in customer CAC" },
      { value: "Full", label: "Attribution from impression to revenue" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.id === slug);
}
