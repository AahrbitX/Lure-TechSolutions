'use client';

import React, { useEffect, useState } from "react";

export default function TopNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change or scroll
    useEffect(() => {
        if (menuOpen) {
            const closeMenu = () => setMenuOpen(false);
            window.addEventListener("resize", closeMenu);
            window.addEventListener("scroll", closeMenu);
            return () => {
                window.removeEventListener("resize", closeMenu);
                window.removeEventListener("scroll", closeMenu);
            };
        }
    }, [menuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="w-screen md:w-full flex flex-col items-center justify-center text-white relative px-4 sm:px-6 py-4 sm:py-6">
            <div
                className={`transition-all duration-300 ${
                    scrolled
                        ? "fixed top-2 sm:top-3 bg-white text-black shadow-lg"
                        : "fixed top-3 sm:top-5 bg-transparent text-white"
                } flex w-full sm:w-3/4 max-w-7xl justify-between items-center px-4 sm:px-5 z-50 rounded-full`}
            >
                <div className="w-16 h-12 sm:w-20 sm:h-16 relative flex-shrink-0">
                    <a href="/">
                        <img
                            src="/assets/images/lure-logo/tech-solutions-logo.svg"
                            alt="Logo"
                            className="object-cover w-full h-full"
                        />
                    </a>
                </div>

                {/* Hamburger menu for mobile */}
                <button
                    className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span
                        className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                            menuOpen ? "rotate-45 translate-y-1.5" : ""
                        }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-current my-1 transition-all duration-300 ${
                            menuOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                        }`}
                    />
                </button>

                {/* Desktop nav */}
                <ul className="hidden sm:flex space-x-6 md:space-x-8 text-sm font-semibold">
                    {navLinks.map((tab) => {
                        const isActive =
                            typeof window !== "undefined" &&
                            window.location.pathname === tab.href;
                        return (
                            <li key={tab.name}>
                                <a
                                    href={tab.href}
                                    className={`relative transition-colors duration-300 ${
                                        scrolled ? "text-black" : "text-white"
                                    } ${
                                        isActive
                                            ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-green-500 after:rounded-full"
                                            : ""
                                    }`}
                                    style={{
                                        fontWeight: 600,
                                    }}
                                >
                                    {tab.name}
                                    {isActive && (
                                        <span
                                            className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 rounded-full animate-[slideIn_0.3s_ease]"
                                        />
                                    )}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile nav */}
                <div
                    className={`sm:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-40 transition-opacity duration-300 ${
                        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                    onClick={() => setMenuOpen(false)}
                >
                    <ul
                        className={`absolute right-4 top-16 bg-white text-black rounded-xl shadow-lg py-6 px-8 flex flex-col space-y-6 text-base font-semibold min-w-[180px] transition-transform duration-300 ${
                            menuOpen ? "translate-y-0" : "-translate-y-8"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {navLinks.map((tab) => {
                            const isActive =
                                typeof window !== "undefined" &&
                                window.location.pathname === tab.href;
                            return (
                                <li key={tab.name}>
                                    <a
                                        href={tab.href}
                                        className={`relative transition-colors duration-300 ${
                                            isActive
                                                ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-green-500 after:rounded-full"
                                                : ""
                                        }`}
                                        style={{
                                            fontWeight: 600,
                                        }}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {tab.name}
                                        {isActive && (
                                            <span
                                                className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 rounded-full animate-[slideIn_0.3s_ease]"
                                            />
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}