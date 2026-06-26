'use client';

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot — tight spring (fast follower)
  const dotX = useSpring(mouseX, { damping: 50, stiffness: 700, mass: 0.3 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 700, mass: 0.3 });

  // Ring — loose spring (lags slightly behind for effect)
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setVisible(true);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    window.addEventListener("mousemove", move, { passive: true });

    const bindHover = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    bindHover();

    const observer = new MutationObserver(bindHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  const dotSize = hovering ? 10 : 12;
  const ringSize = hovering ? 56 : 40;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: `-${dotSize / 2}px`,
          translateY: `-${dotSize / 2}px`,
        }}
      >
        <div
          className="rounded-full bg-[#0F67FF] transition-all duration-150"
          style={{ width: dotSize, height: dotSize }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: `-${ringSize / 2}px`,
          translateY: `-${ringSize / 2}px`,
        }}
      >
        <div
          className="rounded-full border border-[#0F67FF]/50 transition-all duration-200"
          style={{
            width: ringSize,
            height: ringSize,
            opacity: hovering ? 0.6 : 0.35,
          }}
        />
      </motion.div>
    </>
  );
}
