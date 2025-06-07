"use client";

// Use string path for public assets in Next.js
const onTop = "/assets/on-top-image.svg";
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
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a231a] to-black text-white relative">
      <HeroSection />
      <About />
      <Features/>
      <Achievements />
      <FAQSection />
      <Testimonial />
      <NewsLetters />
    </main>
  );
}