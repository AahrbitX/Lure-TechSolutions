"use client";

import React from "react";

export default function Achievements() {
  return (
    <section className="relative z-10 max-w-[1200px] mx-auto px-2 md:px-8 py-16 md:py-24 rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#232323]">
      <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-0" fill="none">
        <circle cx="30%" cy="20%" r="350" stroke="#00ff0d" strokeOpacity="0.09" strokeWidth="1.5" />
        <circle cx="80%" cy="80%" r="180" stroke="#00ff0d" strokeOpacity="0.07" strokeWidth="1.5" />
      </svg>
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between px-6 pt-16 pb-10">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            <span className="text-[#00ff0d] font-mono text-4xl md:text-5xl">Lure Tech Solutions</span>
            <br />
            Digital Growth, Real Results
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-end justify-center mt-8 md:mt-0">
          <div className="max-w-xs text-white/80 text-sm mb-6 text-right">
            <span className="block">
              50+ brands. 10+ industries. 150K+ leads. We deliver digital marketing, branding, media, web, apps & AI that drive your business forward.
            </span>
          </div>
          <button className="bg-[#181f1b] text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-[#2a2a2a] transition border border-[#00ff0d] shadow">
            GET IN TOUCH
          </button>
        </div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-6 px-4 md:px-0 mt-8">
        <div className="flex-1 flex justify-start">
          <div className="bg-[#181f1b] rounded-[2.5rem] px-12 py-10 flex flex-col items-start justify-center min-w-[260px] shadow-2xl border border-[#232323] relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="block w-2 h-2 rounded-full bg-[#00ff0d]" />
              <span className="block w-12 h-[2px] bg-[#00ff0d]" />
            </div>
            <div className="text-[3rem] md:text-[3.5rem] font-extrabold text-[#00ff0d] mb-2">150K+</div>
            <div className="text-white text-base opacity-80">Leads Generated</div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="bg-[#181f1b] rounded-[2.5rem] px-12 py-10 flex flex-col items-center justify-center min-w-[260px] shadow-2xl border border-[#232323] relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="block w-2 h-2 rounded-full bg-[#00ff0d]" />
              <span className="block w-12 h-[2px] bg-[#00ff0d]" />
            </div>
            <div className="text-[3rem] md:text-[3.5rem] font-extrabold text-[#00ff0d] mb-2">100K+</div>
            <div className="text-white text-base opacity-80">Impressions</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-end">
          <div className="flex items-center gap-2 bg-[#181f1b] rounded-full px-4 py-2 shadow-lg border border-[#232323]">
            <img src="/avatar1.jpg" alt="User 1" className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0" />
            <img src="/avatar2.jpg" alt="User 2" className="w-8 h-8 rounded-full border-2 border-white -ml-2" />
            <img src="/avatar3.jpg" alt="User 3" className="w-8 h-8 rounded-full border-2 border-white -ml-2" />
            <img src="/avatar4.jpg" alt="User 4" className="w-8 h-8 rounded-full border-2 border-white -ml-2" />
            <span className="text-[#00ff0d] text-base font-semibold ml-2">50+ Brands</span>
          </div>
        </div>
      </div>
    </section>
  );
}