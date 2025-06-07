'use client';

import React, { useEffect, useState } from "react";

export default function TopNavbar() {

const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
return (
    <nav className="flex flex-col w-full items-center justify-center text-white relative px-10 py-6">
        <div
            className={`transition-all duration-300 ${
            scrolled
                ? "fixed top-3 bg-white text-black shadow-lg"
                : "fixed top-5 bg-transparent text-white"
            } flex w-3/4 justify-between items-center px-5 z-50 rounded-full`}
        >
            <div className="w-20 h-16 relative">
            <a href="/">
                <img
                src="/assets/images/lure-logo/tech-solutions-logo.svg"
                alt="Logo"
                className="object-cover w-full h-full"
                />
            </a>
            </div>
            <ul className="flex space-x-8 text-sm font-semibold">
            {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact" },
            ].map((tab) => {
                const isActive =
                typeof window !== "undefined" &&
                window.location.pathname === tab.href;
                return (
                <li key={tab.name}>
                    <a
                    href={tab.href}
                    className={`relative transition-colors duration-300 ${
                        scrolled ? "text-black" : "text-white"
                    } ${isActive ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-green-500 after:rounded-full" : ""}`}
                    style={{
                        fontWeight: 600,
                    }}
                    >
                    {tab.name}
                    {isActive && (
                        <span
                        className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 rounded-full animate-[slideIn_0.3s_ease]"
                        style={{}}
                        />
                    )}
                    </a>
                </li>
                );
            })}
            </ul>
        </div>
    </nav>
    );
}