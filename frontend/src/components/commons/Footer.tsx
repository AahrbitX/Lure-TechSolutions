const services = [
  { name: "Digital Marketing", href: "/services#digital-marketing" },
  { name: "IT Consulting",     href: "/services#it-consulting" },
  { name: "AI Consulting",     href: "/services#ai-consulting" },
  { name: "Domain & Hosting",  href: "/services#domain-hosting" },
  { name: "Tech Infrastructure", href: "/services#tech-infrastructure" },
  { name: "Brand Building",    href: "/services#brand-building" },
  { name: "Marketing",         href: "/services#marketing" },
];

const pages = [
  { name: "Home",      href: "/" },
  { name: "About",     href: "/about" },
  { name: "Services",  href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog",      href: "/blog" },
  { name: "Contact",   href: "/contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/enticeinnovations/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/entice-innovations/",
    path: "M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.67a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm15.11 12.78h-3.56v-5.6c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.47v6.27z",
  },
  {
    label: "Twitter / X",
    href: "https://x.com/EnticeInnov",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f5f8fc] border-t border-black/[0.07]">

      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-6">
              <img src="/assets/logo/entice-logo.svg" alt="Entice Innovations" className="h-9 w-auto" />
              <span
                className="text-[#1C1C1C] text-2xl tracking-[-0.01em] leading-none"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
              >
                Entice
              </span>
            </a>

            <p className="text-[#6B7A8D] text-sm leading-relaxed mb-6">
              End-to-end digital solutions for businesses that refuse to be average.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2.5 text-sm text-[#6B7A8D]">
              <a href="mailto:info@enticeinnovations.com"
                className="flex items-center gap-2.5 hover:text-[#0F67FF] transition-colors duration-200 group">
                <span className="w-4 h-4 flex-shrink-0 text-[#C0CDD8] group-hover:text-[#0F67FF] transition-colors">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                info@enticeinnovations.com
              </a>
              <a href="tel:+919994860392"
                className="flex items-center gap-2.5 hover:text-[#0F67FF] transition-colors duration-200 group">
                <span className="w-4 h-4 flex-shrink-0 text-[#C0CDD8] group-hover:text-[#0F67FF] transition-colors">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                +91 99948 60392
              </a>
              <address className="not-italic flex items-start gap-2.5 text-[#6B7A8D]">
                <span className="w-4 h-4 flex-shrink-0 text-[#C0CDD8] mt-0.5">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed">Nagercoil, Tamil Nadu<br />Near Tiruvananthapuram, India</span>
              </address>
            </div>
          </div>

          {/* Pages */}
          <div>
            <span className="text-[#9BAABB] text-xs uppercase tracking-[0.18em] mb-5 block">
              Pages
            </span>
            <ul className="flex flex-col gap-3">
              {pages.map((p) => (
                <li key={p.name}>
                  <a href={p.href}
                    className="text-sm text-[#4A5568] hover:text-[#0F67FF] transition-colors duration-200">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="text-[#9BAABB] text-xs uppercase tracking-[0.18em] mb-5 block">
              Services
            </span>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.name}>
                  <a href={s.href}
                    className="text-sm text-[#4A5568] hover:text-[#0F67FF] transition-colors duration-200">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <span className="text-[#9BAABB] text-xs uppercase tracking-[0.18em] mb-5 block">
              Connect
            </span>

            <div className="flex gap-3 mb-8">
              {socials.map(({ label, href, path }) => (
                <a key={label} href={href} target="_blank" rel="nofollow noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-black/[0.08] bg-white/60 hover:border-[#0F67FF] hover:bg-[#0F67FF] flex items-center justify-center transition-all duration-200 group"
                >
                  <svg className="w-3.5 h-3.5 text-[#6B7A8D] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* CTA */}
            <a href="/contact"
              className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#0F67FF] transition-colors duration-300">
              Start a project
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/[0.07] bg-[#f5f8fc]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9BAABB]">
            © {year} Entice Innovations. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-xs text-[#9BAABB] hover:text-[#0F67FF] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-[#9BAABB] hover:text-[#0F67FF] transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
