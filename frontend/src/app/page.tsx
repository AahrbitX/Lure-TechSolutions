"use client";

import React from "react";
import HeroSection from "@/components/sections/HomeSection";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Testimonial from "@/components/sections/Testimonial";
import NewsLetters from "@/components/sections/NewsLetters";
import Achievements from "@/components/sections/achivements";
import FAQSection from "@/components/sections/questions";



export default function Home() {

  return (
    <main className="min-h-screen bg-white text-[#0A0F1E]">
      {/* Shared gradient background — hero + about + services flow as one continuous surface */}
      <div style={{
        background: `
          radial-gradient(ellipse 72% 45% at 18% 12%, rgba(147,197,253,0.50) 0%, rgba(186,230,253,0.22) 45%, transparent 70%),
          radial-gradient(ellipse 50% 35% at 6%  5%,  rgba(186,230,253,0.40) 0%, transparent 58%),
          radial-gradient(ellipse 55% 40% at 88% 42%, rgba(147,197,253,0.26) 0%, transparent 62%),
          radial-gradient(ellipse 40% 30% at 70% 85%, rgba(186,230,253,0.18) 0%, transparent 55%),
          radial-gradient(ellipse 35% 25% at 20% 90%, rgba(147,197,253,0.14) 0%, transparent 50%),
          #f5f8fc
        `,
      }}>
        <HeroSection />
        <About />
        <Features />
      </div>
      <Achievements />
      <FAQSection />
      <Testimonial />
      <NewsLetters />
    </main>
  );
}
