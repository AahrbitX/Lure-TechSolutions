"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, type: "spring", stiffness: 80 }
  }),
};

const orbVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { type: "spring", duration: 1 } }
};



const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });


  // Mouse parallax handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // max 15px left/right
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30; // max 15px up/down
    setParallax({ x, y });
  };

    const headline = [
    { text: "Elevate", highlight: true },
    { text: "Your" },
    { text: "Brand" },
    { text: "With" },
    { text: "LURE" }
  ];

  const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.08, type: "spring", stiffness: 70 }
  }),
};


  return (
  <section
    ref={sectionRef}
    className="relative z-10 max-w-6xl mx-auto px-4 py-16"
    onMouseMove={handleMouseMove}
    onMouseLeave={() => setParallax({ x: 0, y: 0 })}
  >
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 flex flex-wrap justify-center gap-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
          custom={0}
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              className={word.highlight ? "text-[#00ff0d]" : ""}
              variants={textVariants}
              custom={i}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          className="text-[#bbf7d0] max-w-2xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
          custom={headline.length + 1}
        >
          From strategic branding and media production to AI-driven digital marketing — we bring your vision to life with innovation, design, and impact.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
           <motion.div
            className="bg-gradient-to-br from-[#0a1e12] to-[#0e2d1a] rounded-2xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden group"
            style={{
              transform: `translateX(${parallax.x}px) translateY(${parallax.y}px)`,
              transition: "transform 0.2s cubic-bezier(.4,2,.6,1)"
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={0}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 #00ff0d33",
              transition: { type: "spring", stiffness: 200 }
            }}
          >
            <span className="bg-[#1a3d2c] text-[#00ff0d] px-4 py-1 rounded-full text-xs font-semibold mb-4 w-fit animate-pulse">
              Innovation
            </span>
            <motion.h3
              className="text-3xl font-bold text-white mb-4"
              variants={textVariants}
              custom={1}
            >
              AI-Powered Marketing Meets Design
            </motion.h3>
            <motion.p
              className="text-[#bbf7d0]"
              variants={textVariants}
              custom={2}
            >
              We blend storytelling, artificial intelligence, and branding strategy to deliver impactful campaigns that drive results.
            </motion.p>
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#00ff0d" strokeWidth="1" strokeDasharray="8,8" />
              </svg>
            </div>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden flex items-center justify-center bg-[#1a2d1c] min-h-[300px]"
            style={{
              transform: `translateX(${-parallax.x}px) translateY(${-parallax.y}px)`,
              transition: "transform 0.2s cubic-bezier(.4,2,.6,1)"
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={1}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px 0 #00ff0d22",
              transition: { type: "spring", stiffness: 200 }
            }}
          >
            <img
              src="/assets/images/creative-team.png"
              alt="Creative team in action"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div className="bg-gradient-to-br from-[#101c13] to-[#1a2d1c] rounded-2xl p-6 flex flex-col justify-between min-h-[180px]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
          custom={2}
            whileHover={{
            scale: 1.07,
            boxShadow: "0 8px 32px 0 #00ff0d33",
            transition: { type: "spring", stiffness: 200 }
          }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#00ff0d] rounded-full w-6 h-6 flex items-center justify-center">
              <svg width="16" height="16" fill="none"><circle cx="8" cy="8" r="8" fill="#101c13"/><path d="M5 8l2 2 4-4" stroke="#00ff0d" strokeWidth="2" fill="none"/></svg>
            </span>
            <div className="text-white font-bold text-lg">Trusted by Brands</div>
          </div>
            <div className="text-white font-bold text-lg mb-1">Results-Driven Strategy</div>

            <p className="text-[#bbf7d0] text-[13px]">
            Our campaigns, like our Christmas drive, reached 100K+ impressions and viral engagement.
            </p>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-[#101c13] to-[#1a2d1c] rounded-2xl p-6 flex flex-col items-center justify-center min-h-[180px]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
          custom={2}
            whileHover={{
            scale: 1.07,
            boxShadow: "0 8px 32px 0 #00ff0d33",
            transition: { type: "spring", stiffness: 200 }}}>
          <div className="w-full flex items-end gap-1 h-16 mb-3 px-7">
            {[8, 12, 6, 14, 10, 16, 12, 14, 8, 15,10,13, 20, 25].map((h, i) => (
              <div key={i} className="bg-[#00ff0d] rounded w-2" style={{ height: `${h * 5}%` }} />
            ))}
          </div>
          <div className="text-3xl font-extrabold text-white mb-1">150K+</div>
          <div className="text-[#bbf7d0] text-sm">Leads Generated</div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-[#101c13] to-[#1a2d1c] rounded-2xl p-6 flex flex-col items-center justify-center min-h-[180px]" initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
          custom={2}
            whileHover={{
            scale: 1.07,
            boxShadow: "0 8px 32px 0 #00ff0d33",
            transition: { type: "spring", stiffness: 200 }}}>
            <div className="flex -space-x-2 mb-2">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User1" alt="User 1" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User2" alt="User 2" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User3" alt="User 3" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User4" alt="User 4" className="w-8 h-8 rounded-full border-2 border-white" />
            </div>
          <div className="text-[#bbf7d0] text-center text-sm">
            Trusted by creative minds, influencers, and brands alike.
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-br from-[#101c13] to-[#1a2d1c] rounded-2xl p-6 flex flex-col justify-between min-h-[180px]" initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
          custom={2}
            whileHover={{
            scale: 1.07,
            boxShadow: "0 8px 32px 0 #00ff0d33",
            transition: { type: "spring", stiffness: 200 }}}>
          <div className="text-white font-bold text-lg mb-1">Creative Intelligence</div>
          <p className="text-[#bbf7d0] text-sm">
            Our AI-enhanced insights help brands tailor their content to match market trends and user behavior with precision.
          </p>
        </motion.div>

      </div>
    </section>
  </section>
  );
};

export default About;