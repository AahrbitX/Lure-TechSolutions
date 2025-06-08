import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-tr from-[#0a231a] via-[#181f1b] to-[#232323] pt-12 pb-6 text-gray-400 font-poppins border-t border-[#00ff0d]/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[120px] sm:h-[200px] bg-[#00ff0d]/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 md:gap-12 relative z-10">
        {/* Logo & About */}
        <div className="flex-1 mb-8 md:mb-0 min-w-[220px]">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="/assets/images/lure-logo/tech-solutions-logo.svg"
              alt="LureTech Logo"
              className="w-20 h-16 sm:w-28 sm:h-24"
            />
          </div>
          <div className="text-[#bbf7d0] text-base mb-3 font-medium">
            Innovate Digitally.<br />
            <span className="text-white/80 text-sm font-normal">
              Web • App • AI • Media • Branding • Marketing
            </span>
          </div>
          <div className="text-xs text-[#bbf7d0] space-y-1">
            <span className="block">Email: <a href="mailto:luretechsolutions@gmail.com" className="hover:text-[#00ff0d] transition">luretechsolutions@gmail.com</a></span>
            <span className="block">Phone: <a href="tel:+919994860392" className="hover:text-[#00ff0d] transition">+91 99948 60392</a></span>
            <span className="block">Location: <a href="https://what3words.com/charm.space.blissful" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff0d] transition">charm.space.blissful</a></span>
          </div>
        </div>
        {/* Links */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="font-semibold text-[#00ff0d] mb-3 uppercase tracking-wider">Pages</div>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#00ff0d] transition">Home</a></li>
              <li><a href="/about" className="hover:text-[#00ff0d] transition">About</a></li>
              <li><a href="/portfolio" className="hover:text-[#00ff0d] transition">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-[#00ff0d] transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-[#00ff0d] mb-3 uppercase tracking-wider">Services</div>
            <ul className="space-y-2">
              <li><a href="/services/digital-marketing" className="hover:text-[#00ff0d] transition">Digital Marketing</a></li>
              <li><a href="/services/branding" className="hover:text-[#00ff0d] transition">Branding</a></li>
              <li><a href="/services/media" className="hover:text-[#00ff0d] transition">Media</a></li>
              <li><a href="/services/websites" className="hover:text-[#00ff0d] transition">Websites</a></li>
              <li><a href="/services/app-development" className="hover:text-[#00ff0d] transition">App Development</a></li>
              <li><a href="/services/ai-solutions" className="hover:text-[#00ff0d] transition">AI Solutions</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-[#00ff0d] mb-3 uppercase tracking-wider">Connect</div>
            <div className="flex gap-3 sm:gap-4 mt-2 flex-wrap">
              <a href="https://www.instagram.com/luretechsolutions" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff0d] transition" aria-label="Instagram">
                <svg width="24" height="24" fill="currentColor"><path d="M21.35 2.65A3.37 3.37 0 0 0 18.67 2H5.33A3.37 3.37 0 0 0 2.65 2.65 3.37 3.37 0 0 0 2 5.33v13.34c0 .89.35 1.74.98 2.37A3.37 3.37 0 0 0 5.33 22h13.34c.89 0 1.74-.35 2.37-.98A3.37 3.37 0 0 0 22 18.67V5.33c0-.89-.35-1.74-.98-2.37zM20 18.67c0 .37-.15.72-.41.98a1.4 1.4 0 0 1-.98.41H5.33a1.4 1.4 0 0 1-.98-.41A1.4 1.4 0 0 1 4 18.67V5.33c0-.37.15-.72.41-.98.26-.26.61-.41.98-.41h13.34c.37 0 .72.15.98.41.26.26.41.61.41.98v13.34z"/><circle cx="12" cy="12" r="3.2"/></svg>
              </a>
              <a href="https://www.facebook.com/luretechsolutions" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff0d] transition" aria-label="Facebook">
                <svg width="24" height="24" fill="currentColor"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.24 8.93v-6.32h-2.48v-2.61h2.48V9.41c0-2.45 1.49-3.8 3.68-3.8 1.07 0 2.19.19 2.19.19v2.41h-1.24c-1.22 0-1.6.76-1.6 1.54v1.85h2.72l-.44 2.61h-2.28v6.32c4.64-.87 8.24-4.52 8.24-8.93 0-5.5-4.46-9.96-9.96-9.96z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/luretechsolutions" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff0d] transition" aria-label="LinkedIn">
                <svg width="24" height="24" fill="currentColor"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.67a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm15.11 12.78h-3.56v-5.6c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.47v6.27z"/></svg>
              </a>
              <a href="mailto:luretechsolutions@gmail.com" className="hover:text-[#00ff0d] transition" aria-label="Email">
                <svg width="24" height="24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg>
              </a>
            </div>
            <div className="mt-4 text-xs text-[#bbf7d0]">Our team is available <span className="text-[#00ff0d] font-semibold">24/7</span> to answer your queries.</div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 mt-8 sm:mt-12 relative z-10 px-2">
        <span>
          © {new Date().getFullYear()} Lure Tech Solutions. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
