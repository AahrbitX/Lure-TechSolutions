"use client";

import StarParticles from "@/components/StarParticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import onTop from "./on-top-image.svg"
import Image from "next/image";
import React from "react";



export default function Home() {

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

    const cellCount = 144;
  const cells = Array.from({ length: cellCount });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a231a] to-black text-white relative">
      <StarParticles
        color="#bbf7d0"
        minSize={0.7}
        maxSize={2}
        minSpeed={0}
        maxSpeed={0.25}
        density={.1}
        sparkle={true}
        bounce={true}
      />
      {/* Glowing radial background */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-tr from-green-800 via-green-600 to-transparent blur-[160px] opacity-40 -z-10" />
      {/* Animated radial SVG effect */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00ff0d" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)" />
        </svg>
      </div>

      {/* Top navigation */}
      <nav className="flex justify-between items-center px-10 py-6 z-10 relative">
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 bg-green-600 rounded-full blur-md opacity-60 animate-pulse" />
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" fill="#00ff0d" opacity="0.7" />
            <circle cx="16" cy="16" r="8" fill="#fffff" opacity="0.1" />
          </svg>
        </div>
        <ul className="flex space-x-8 text-sm">
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Integrations</a></li>
          <li><a href="#" className="hover:text-white">Pricing</a></li>
          <li><a href="#" className="hover:text-white">Customers</a></li>
          <li><a href="#" className="hover:text-white">Changelog</a></li>
        </ul>
      </nav>
      <div className="text-center py-48 px-14 relative z-10 mx-auto overflow-hidden bg-transparent">
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none -z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 2146 744" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="d" x1="43.176%" x2="50%" y1="12.436%" y2="97.744%">
                <stop offset="0%" stopColor="#00ff0d" />
                <stop offset="100%" stopColor="#00ff0d" />
              </linearGradient>
              <linearGradient id="f" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stopColor="#00ff0d" />
                <stop offset="100%" stopColor="#00ff0d" stopOpacity="0" />
              </linearGradient>
              <filter id="e" width="145.2%" height="187%" x="-22.6%" y="-43.5%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
              </filter>
              <filter id="g" width="165.1%" height="170.3%" x="-32.5%" y="-35.1%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
              </filter>
              <radialGradient id="c" cx="50%" cy="100%" r="77.678%" fx="50%" fy="100%" gradientTransform="matrix(0 -1 .37746 0 .123 1.5)">
                <stop offset="0%" stopColor="#bbf7d0" />
                <stop offset="22.35%" stopColor="#00ff0d" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </radialGradient>
              <path id="a" d="M0 0h2440v921H0z" />
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(-140 -177)">
              <mask id="b" fill="#fff">
                <use xlinkHref="#a" />
              </mask>
              <g mask="url(#b)">
                <path fill="url(#c)" d="M0 0h2440v921H0z" />
                <path fill="url(#d)" fillRule="nonzero" d="M1975.72 781.763c-3.682-3-8.757-3.61-13.042-1.568a12.323 12.323 0 0 0-7.014 11.129v98.57h-430.368c-6.79 0-12.296 5.516-12.296 12.321v98.57c0 6.805 5.505 12.321 12.296 12.321h430.368v98.57a12.323 12.323 0 0 0 7.014 11.129 12.276 12.276 0 0 0 13.042-1.568l196.74-160.176a12.33 12.33 0 0 0 4.54-9.561 12.33 12.33 0 0 0-4.54-9.561l-196.74-160.176Z" filter="url(#e)" />
                <path fill="url(#f)" d="m913 274 461 369-284 58z" filter="url(#g)" />
              </g>
            </g>
          </svg>
        </div>

        <div className="mb-4 inline-block bg-green-900/40 text-white px-4 py-1 rounded-full text-xs">
          API Studio is now in beta →
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8">
          The API Security Framework
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto">
          Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
        </p>
        <div className="mt-12 flex justify-center gap-6">
          <button className="bg-green-600 text-white hover:bg-green-500 px-8 py-3 rounded-full font-semibold shadow text-lg">Get Started →</button>
          <button className="bg-black border border-green-700 hover:bg-green-900 px-8 py-3 rounded-full font-semibold shadow text-white text-lg">⚙ Read the docs</button>
        </div>
      </div>

      <div className="text-center z-10 relative bg-gradient-to-r from-black/0 via-black/80 to-black/0 h-[150px] flex justify-center items-center">
        <div className="px-10 py-8 max-w-[1500px] mx-auto overflow-hidden">
          <div className="w-full relative">
            <div
              className="flex flex-nowrap items-center gap-10 animate-slide"
              style={{
                animation: "slide 30s linear infinite",
                width: "max-content",
              }}
            >
              {[
                "Amazon",
                "Facebook",
                "Tinder",
                "Airbnb",
                "Netflix",
                "Google",
                "Slack",
                "Spotify",
                "Uber",
                "Stripe",
              ].concat([
                "Amazon",
                "Facebook",
                "Tinder",
                "Airbnb",
                "Netflix",
                "Google",
                "Slack",
                "Spotify",
                "Uber",
                "Stripe",
              ]) // duplicate for seamless loop
                .map((name, i) => (
                  <div
                    key={name + i}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                  >
                    <svg width="160" height="54" viewBox="0 0 160 54" fill="none">
                      <rect width="160" height="54" rx="8" fill="white" fillOpacity="0" />
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="30"
                        fontWeight="bold"
                        dominantBaseline="middle"
                      >
                        {name}
                      </text>
                    </svg>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Slider animation keyframes */}
        <style jsx>{`
        @keyframes slide {
        0% {
        transform: translateX(0);
        }
        100% {
        transform: translateX(-50%);
        }
        }
        `}</style>
      </div>
<section className="relative z-10 max-w-6xl mx-auto px-4 py-16">
  {/* Header Illustration */}
  <Image src={onTop} alt="on top" className="mx-auto mb-12" />

  {/* Main Section */}
  <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
    {/* Glowing Orb */}
    <div className="relative flex-1 flex items-center justify-center max-w-md w-full">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg width="320" height="160" viewBox="0 0 320 160" fill="none">
          <defs>
            <radialGradient id="orbGlowGreen" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00ff0d" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#00c97d" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="160" cy="80" rx="120" ry="50" fill="url(#orbGlowGreen)" />
        </svg>
      </div>
      <div className="relative z-10">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00ff0d] via-[#00c97d] to-[#003d1a] shadow-2xl flex items-center justify-center animate-pulse">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="36" fill="#00c97d" fillOpacity="0.7" />
            <circle cx="40" cy="40" r="28" fill="#00ff0d" fillOpacity="0.5" />
          </svg>
        </div>
      </div>
    </div>

    {/* Textual Info */}
    <div className="flex-1 max-w-lg w-full text-left">
      <p className="uppercase text-sm tracking-wider text-[#00ff0d] mb-3">Magic happens by data science</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Spot issues faster<br />with smart indicators
      </h2>
      <p className="text-[#bbf7d0] mb-8 text-base leading-relaxed">
        Our smart indicators leverage data science to help you identify trends, spot issues, and seize opportunities in real time.
      </p>
      <div className="flex items-center gap-4 flex-wrap">
        <button className="bg-[#00ff0d] text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#00c97d] transition">
          Learn More →
        </button>
        <span className="text-[#00ff0d] font-medium text-base cursor-pointer hover:underline">
          Ask a question?
        </span>
      </div>
    </div>
  </div>

  {/* Feature Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Seasonality",
        icon: (
          <polyline points="2,22 10,8 18,16 30,2" fill="none" stroke="#00ff0d" strokeWidth="3" />
        ),
        label: "Top Months: May, Jun, Jul",
        desc: "Spot when any keywords’ seasonality is trending and when losing.",
        note: "Example: Ice Cream",
      },
      {
        title: "Mobile Issue Detector",
        icon: (
          <>
            <rect x="2" y="8" width="28" height="8" fill="#00c97d" />
            <rect x="34" y="12" width="12" height="4" fill="#00ff0d" />
          </>
        ),
        label: "Desktop • Mobile",
        desc: "When you have issues on mobile pages, we find them out by ranking differences.",
      },
      {
        title: "Best Rank Spotter",
        icon: (
          <>
            <rect x="4" y="12" width="4" height="8" fill="#00ff0d" />
            <rect x="12" y="8" width="4" height="12" fill="#00c97d" />
            <rect x="20" y="6" width="4" height="14" fill="#00ff0d" />
            <rect x="28" y="10" width="4" height="10" fill="#00c97d" />
          </>
        ),
        label: "Keyword: iPhone 14 Pro Max",
        desc: "Analyzes the history of ranking and letting you know when you spot the best rank.",
      },
      {
        title: "Cannibalization Finder",
        icon: (
          <>
            <rect x="4" y="16" width="8" height="4" fill="#00ff0d" />
            <rect x="16" y="12" width="8" height="8" fill="#00c97d" />
            <rect x="28" y="8" width="8" height="12" fill="#00ff0d" />
          </>
        ),
        label: "Cannibalization",
        desc: "The pages that create cannibalization can be merged for a quick fix to regain positions.",
      },
      {
        title: "Market Intelligence Based on AI",
        icon: (
          <>
            <ellipse cx="16" cy="12" rx="12" ry="8" fill="#00c97d" />
            <ellipse cx="24" cy="16" rx="8" ry="4" fill="#00ff0d" />
          </>
        ),
        label: "AI Intelligence",
        desc: "The best market intelligence is provided by SERP feature-based CTR calculation.",
      },
      {
        title: "Opportunity Calculation",
        icon: (
          <>
            <circle cx="8" cy="16" r="4" fill="#00ff0d" />
            <circle cx="24" cy="8" r="4" fill="#00c97d" />
            <circle cx="28" cy="20" r="4" fill="#00ff0d" />
          </>
        ),
        label: "Opportunity",
        desc: "A few position changes can bring the most traffic by using the opportunity metric.",
      },
    ].map((card, idx) => (
      <div
        key={idx}
        className="bg-gradient-to-br from-[#101c13] via-[#0a231a] to-[#003d1a] border border-[#00ff0d] rounded-2xl p-6 shadow-xl flex flex-col min-h-[220px]"
      >
        <div className="flex items-center gap-3 mb-4">
          <svg width="32" height="24">{card.icon}</svg>
          <span className="text-sm text-[#bbf7d0]">{card.label}</span>
        </div>
        <h3 className="font-semibold text-lg text-white mb-2">{card.title}</h3>
        <p className="text-sm text-[#bbf7d0] leading-relaxed">{card.desc}</p>
        {card.note && <p className="text-xs text-[#00ff0d] mt-2">{card.note}</p>}
      </div>
    ))}
  </div>
</section>

      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          {/* Graph */}
          <div className="flex-1 w-full max-w-md bg-gradient-to-br from-[#101c13] via-[#1a2d1c] to-[#101c13] rounded-2xl p-8 shadow-lg relative min-h-[340px]">
            {/* Graph lines and nodes */}
            <svg width="100%" height="120" viewBox="0 0 400 120" fill="none" className="mb-6">
              <polyline points="0,100 80,60 160,80 240,40 320,60 400,20" stroke="#00ff0d" strokeWidth="3" fill="none" />
              <circle cx="80" cy="60" r="10" fill="#00ff0d" />
              <circle cx="240" cy="40" r="10" fill="#00ff0d" />
              <circle cx="400" cy="20" r="10" fill="#00ff0d" />
              {/* Crypto icons */}
              <text x="70" y="55" fontSize="18" fill="#fff" fontWeight="bold">₿</text>
              <text x="230" y="35" fontSize="18" fill="#fff" fontWeight="bold">Ξ</text>
              <text x="390" y="15" fontSize="18" fill="#fff" fontWeight="bold">Ł</text>
            </svg>
            {/* USD Card */}
            <div className="absolute left-8 top-8 bg-[#181f16] border border-[#00ff0d] rounded-xl px-6 py-4 shadow text-left">
              <div className="text-white text-lg font-bold">$4,528 USD</div>
              <div className="text-[#00ff0d] text-sm">+4.65% <span className="text-gray-400">24h</span></div>
            </div>
            {/* BTC Card */}
            <div className="absolute right-8 bottom-8 bg-[#181f16] border border-[#00ff0d] rounded-xl px-6 py-4 shadow text-left">
              <div className="text-white text-lg font-bold">1.44,528 BTC</div>
              <div className="text-gray-400 text-sm">Polkadot unites and secures a growing ecosystem of specialized blocks.</div>
            </div>
          </div>
          {/* Info */}
          <div className="flex-1 w-full max-w-lg">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Trusted <span className="text-[#00ff0d]">platform</span> anytime &amp; anywhere.
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#00ff0d] text-xl">★★★★★</span>
              <span className="text-gray-400 text-base">4.9/5.0</span>
            </div>
            <div className="text-gray-300 mb-8">
              This is a unites and secures a <span className="font-semibold text-white">growing ecosystem</span> of specialized blockchains called parachains. Apps and services on Polkadot can ecosystem of specialized unites.
            </div>
            <button className="bg-[#00ff0d] text-black px-7 py-3 rounded-full font-bold text-lg hover:bg-[#00d90b] transition">Learn More →</button>
            <span className="ml-6 text-[#00ff0d] font-semibold cursor-pointer hover:underline">Ask question ?</span>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Build your <span className="text-[#00ff0d]">crypto</span> portfolio
        </h2>
        <div className="text-gray-400 max-w-2xl mb-12">
          Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Polkadot can ecosystem of specialized called.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#101c13] via-[#1a2d1c] to-[#101c13] border border-[#2e3e2e] rounded-2xl p-10 text-center shadow-lg flex flex-col items-center min-h-[260px]">
            <div className="mb-6">
              {/* Fund Icon */}
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="28" fill="#101c13" />
                <path d="M28 16v24M16 28h24" stroke="#00ff0d" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="text-white text-2xl font-bold mb-2">Fund your account</div>
            <div className="text-gray-400 text-base">Add funds to your crypto account to start trading crypto. You can fund using a variety of payment methods.</div>
          </div>
          {/* Card 2 - Highlighted */}
          <div className="bg-[#00ff0d] border-2 border-[#00ff0d] rounded-2xl p-10 text-center shadow-2xl scale-105 z-10 flex flex-col items-center min-h-[260px]">
            <div className="mb-6">
              {/* Shield Icon */}
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="28" fill="#101c13" />
                <path d="M28 18l10 5v7c0 7-10 12-10 12s-10-5-10-12v-7l10-5z" stroke="#00ff0d" strokeWidth="2.5" fill="none"/>
              </svg>
            </div>
            <div className="text-black text-2xl font-bold mb-2">Verify your identity</div>
            <div className="text-black text-base mb-6">Complete the identity verification process to secure your account and transactions.</div>
            <button className="bg-black text-[#00ff0d] px-5 py-2 rounded-full font-semibold text-base hover:bg-[#101c13] transition w-fit mx-auto">Learn More →</button>
          </div>
          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#101c13] via-[#1a2d1c] to-[#101c13] border border-[#2e3e2e] rounded-2xl p-10 text-center shadow-lg flex flex-col items-center min-h-[260px]">
            <div className="mb-6">
              {/* Trading Icon */}
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="28" fill="#101c13" />
                <path d="M18 38l10-10 10 10" stroke="#00ff0d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="28" cy="28" r="4" fill="#00ff0d"/>
              </svg>
            </div>
            <div className="text-white text-2xl font-bold mb-2">Start trading</div>
            <div className="text-gray-400 text-base">You’re good to go! Buy/sell cryptos, set trading orders, and discover what Binance has to offer.</div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white text-center">
          What our <span className="text-[#00ff0d]">clients</span> say
        </h2>
        <div className="text-gray-400 max-w-2xl mb-12 mx-auto text-center">
          Real feedback from real users. We value every review and strive to deliver the best experience.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gradient-to-br from-[#101c13] via-[#1a2d1c] to-[#101c13] border border-[#2e3e2e] rounded-2xl p-8 shadow-lg flex flex-col items-center text-center min-h-[260px]">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#00ff0d" fillOpacity="0.15" />
                <text x="50%" y="60%" textAnchor="middle" fill="#00ff0d" fontSize="32" fontWeight="bold" dy=".3em">“</text>
              </svg>
            </div>
            <div className="text-white text-lg mb-4">“The platform is intuitive and secure. I was able to start trading in minutes!”</div>
            <div className="flex items-center gap-3 mt-auto">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-[#00ff0d]" />
              <div className="text-left">
                <div className="text-white font-semibold">Alex Johnson</div>
                <div className="text-gray-400 text-sm">Crypto Investor</div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 - Highlighted */}
          <div className="bg-[#00ff0d] border-2 border-[#00ff0d] rounded-2xl p-8 shadow-2xl scale-105 z-10 flex flex-col items-center text-center min-h-[260px]">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#101c13" />
                <text x="50%" y="60%" textAnchor="middle" fill="#101c13" fontSize="32" fontWeight="bold" dy=".3em">“</text>
              </svg>
            </div>
            <div className="text-black text-lg mb-4">“Verification was fast and easy. I feel safe knowing my assets are protected.”</div>
            <div className="flex items-center gap-3 mt-auto">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-black" />
              <div className="text-left">
                <div className="text-black font-semibold">Maria Lee</div>
                <div className="text-gray-700 text-sm">Day Trader</div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-gradient-to-br from-[#101c13] via-[#1a2d1c] to-[#101c13] border border-[#2e3e2e] rounded-2xl p-8 shadow-lg flex flex-col items-center text-center min-h-[260px]">
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#00ff0d" fillOpacity="0.15" />
                <text x="50%" y="60%" textAnchor="middle" fill="#00ff0d" fontSize="32" fontWeight="bold" dy=".3em">“</text>
              </svg>
            </div>
            <div className="text-white text-lg mb-4">“Support is responsive and helpful. Highly recommend this platform!”</div>
            <div className="flex items-center gap-3 mt-auto">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-[#00ff0d]" />
              <div className="text-left">
                <div className="text-white font-semibold">Samuel Green</div>
                <div className="text-gray-400 text-sm">Entrepreneur</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We'll create high-quality linkable content and build at least 40 high-authority links to each asset, paving the way for you to grow your rankings, improve brand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gradient-to-br from-[#101c13] via-[#1a2d1c] to-[#101c13] border border-[#2e3e2e] rounded-2xl shadow-2xl overflow-hidden">
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-between p-10 bg-gradient-to-br from-[#00ff0d]/90 to-[#00c97d]/80 min-h-[340px]">
            <div>
              <div className="text-black text-xl font-bold mb-2">Contact Information</div>
              <div className="text-black mb-6 text-sm">We’ll create high-quality linkable content and build at least 40 high-authority.</div>
              <div className="flex items-center gap-3 mb-4">
                <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#fff" fillOpacity="0.2"/><path d="M6 8l4 4 4-4" stroke="#101c13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-black font-mono text-base">+8801779871686</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#fff" fillOpacity="0.2"/><path d="M6 8l4 4 4-4" stroke="#101c13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-black font-mono text-base">+988678363686</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#fff" fillOpacity="0.2"/><path d="M4 6l8 8M12 6l-8 8" stroke="#101c13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-black text-base">Support@uprangly.com</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#fff" fillOpacity="0.2"/><path d="M10 4a6 6 0 016 6c0 4-6 8-6 8s-6-4-6-8a6 6 0 016-6z" stroke="#101c13" strokeWidth="2"/></svg>
                <span className="text-black text-base">New York, USA</span>
              </div>
            </div>
            {/* Decorative circle */}
            <div className="mt-12 flex justify-end">
              <div className="w-24 h-24 bg-white/30 rounded-full" />
            </div>
          </div>
          {/* Right: Contact Form */}
          <form className="p-10 grid grid-cols-1 gap-6 bg-transparent">
            <div>
              <label className="block text-gray-400 text-sm mb-1">Your Name</label>
              <input
                type="text"
                placeholder="John Trangely"
                className="w-full border-b-2 border-[#2e3e2e] focus:border-[#00ff0d] bg-transparent py-2 px-1 text-white font-semibold outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Your Email</label>
              <input
                type="email"
                placeholder="hello@nurency.com"
                className="w-full border-b-2 border-[#2e3e2e] focus:border-[#00ff0d] bg-transparent py-2 px-1 text-white font-semibold outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Your Subject</label>
              <input
                type="text"
                placeholder="I want to hire you quickly"
                className="w-full border-b-2 border-[#2e3e2e] focus:border-[#00ff0d] bg-transparent py-2 px-1 text-white font-semibold outline-none"
              />
            </div>
            <div>
              <label className="block text-[#00c97d] text-sm mb-1 font-bold">Message</label>
              <textarea
                placeholder="Write here your message"
                rows={3}
                className="w-full border-b-2 border-[#2e3e2e] focus:border-[#00ff0d] bg-transparent py-2 px-1 text-white outline-none"
              />
            </div>
            <div className="flex justify-start mt-2">
              <button
                type="submit"
                className="bg-[#00ff0d] hover:bg-[#00c97d] text-black font-semibold px-8 py-2 rounded-full shadow transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-[#003d1a] to-[#00ff0d] py-12 -mt-8 z-20 relative">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-6">
          <div className="text-2xl font-bold text-white mb-2 md:mb-0">Keep Updated About Our Product</div>
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-3 rounded-l-full bg-white/10 text-white placeholder-white focus:outline-none focus:bg-white/20 w-full md:w-80"
            />
            <button type="submit" className="bg-[#00ff0d] text-black font-bold px-8 py-3 rounded-r-full hover:bg-green-300 transition">SUBMIT</button>
          </form>
        </div>
      </section>

      <footer className="w-full bg-[#0a231a] pt-16 pb-8 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-12">
          {/* Logo & About */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#00ff0d] text-black font-bold text-2xl px-3 py-1 rounded">L</div>
              <span className="text-white font-bold text-xl">ureTech</span>
            </div>
            <div>API Security & Data Science Solutions</div>
          </div>
          {/* Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <div className="font-semibold text-white mb-3">Pages</div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white mb-3">Quick Links</div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Changelog</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white mb-3">Social</div>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-white"><svg width="24" height="24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.9 3.54a4.28 4.28 0 0 1-1.94-.54v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.7 8.7 0 0 0 24 4.59a8.51 8.51 0 0 1-2.54.7z"/></svg></a>
                <a href="#" className="hover:text-white"><svg width="24" height="24" fill="currentColor"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.24 8.93v-6.32h-2.48v-2.61h2.48V9.41c0-2.45 1.49-3.8 3.68-3.8 1.07 0 2.19.19 2.19.19v2.41h-1.24c-1.22 0-1.6.76-1.6 1.54v1.85h2.72l-.44 2.61h-2.28v6.32c4.64-.87 8.24-4.52 8.24-8.93 0-5.5-4.46-9.96-9.96-9.96z"/></svg></a>
                <a href="#" className="hover:text-white"><svg width="24" height="24" fill="currentColor"><path d="M21.35 2.65A3.37 3.37 0 0 0 18.67 2H5.33A3.37 3.37 0 0 0 2.65 2.65 3.37 3.37 0 0 0 2 5.33v13.34c0 .89.35 1.74.98 2.37A3.37 3.37 0 0 0 5.33 22h13.34c.89 0 1.74-.35 2.37-.98A3.37 3.37 0 0 0 22 18.67V5.33c0-.89-.35-1.74-.98-2.37zM20 18.67c0 .37-.15.72-.41.98a1.4 1.4 0 0 1-.98.41H5.33a1.4 1.4 0 0 1-.98-.41A1.4 1.4 0 0 1 4 18.67V5.33c0-.37.15-.72.41-.98.26-.26.61-.41.98-.41h13.34c.37 0 .72.15.98.41.26.26.41.61.41.98v13.34z"/><circle cx="12" cy="12" r="3.2"/></svg></a>
              </div>
              <div className="mt-4 text-xs">Our team is available 24/7 to answer your queries.</div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-600 mt-12">© {new Date().getFullYear()} LureTech. All rights reserved.</div>
      </footer>
    </div>
  );
}