'use client';

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function TopNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="w-full bg-transparent fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-[60px] flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="/assets/logo/entice-logo.svg"
              alt="Entice Innovations"
              className="h-9 w-auto"
            />
            <span
              className="text-[#1C1C1C] text-2xl tracking-[-0.01em] leading-none"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
            >
              Entice
            </span>
          </a>

          {/* Desktop nav — links in a single bordered pill (Sequence style) */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-0.5 bg-white border border-black/[0.10] rounded-full px-1.5 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-sm transition-all duration-150 whitespace-nowrap ${
                      isActive
                        ? "bg-[#F4F4F4] text-[#1A1A1A] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.07)]"
                        : "text-[#555] hover:text-[#1A1A1A]"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[20px] h-[1.5px] bg-[#1A1A1A] rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-[20px] h-[1.5px] bg-[#1A1A1A] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[20px] h-[1.5px] bg-[#1A1A1A] rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/10 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="fixed top-[60px] left-3 right-3 z-50 md:hidden bg-white rounded-2xl border border-black/[0.08] shadow-xl overflow-hidden"
            >
              <nav className="flex flex-col p-3 gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm transition-colors ${
                        isActive
                          ? "bg-[#F4F4F4] text-[#1A1A1A] font-medium"
                          : "text-[#555] hover:bg-[#F9F9F9]"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
                <a
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 bg-[#1A1A1A] text-white text-sm font-medium text-center py-3 rounded-xl hover:bg-[#0F67FF] transition-colors"
                >
                  Get in Touch
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
