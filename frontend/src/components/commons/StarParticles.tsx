import React, { useRef, useEffect } from "react";

type StarParticlesProps = {
  color?: string;
  minSize?: number;
  maxSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
  density?: number; // stars per 10,000px^2
  sparkle?: boolean;
  bounce?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function StarParticles({
  color = "#fff",
  minSize = 0.5,
  maxSize = 1.5,
  minSpeed = 0.05,
  maxSpeed = 0.3,
  density = 1.2, // stars per 10,000px^2
  sparkle = true,
  bounce = true,
  className = "",
  style = {},
}: StarParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<any[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    function getStarCount() {
      return Math.floor((width * height) / 10000 * density);
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (!canvas) return;
      canvas.width = width;
      canvas.height = height;
      // Recalculate star count on resize
      const count = getStarCount();
      if (stars.current.length < count) {
        // Add more stars
        for (let i = stars.current.length; i < count; i++) {
          stars.current.push(makeStar());
        }
      } else if (stars.current.length > count) {
        // Remove stars
        stars.current = stars.current.slice(0, count);
      }
    }

    function makeStar() {
      const r = randomBetween(minSize, maxSize);
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r,
        baseR: r,
        speed: randomBetween(minSpeed, maxSpeed),
        phase: Math.random() * Math.PI * 2,
        bouncePhase: Math.random() * Math.PI * 2,
        alpha: randomBetween(0.7, 1),
      };
    }

    window.addEventListener("resize", resize);
    resize();

    // Initialize stars
    stars.current = Array.from({ length: getStarCount() }).map(makeStar);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const star of stars.current) {
        // Sparkle (twinkle) effect
        let sparkleR = star.baseR;
        let sparkleAlpha = star.alpha;
        if (sparkle) {
          sparkleR = star.baseR * (0.85 + 0.3 * Math.abs(Math.sin(Date.now() / 400 + star.phase)));
          sparkleAlpha = star.alpha * (0.7 + 0.3 * Math.abs(Math.sin(Date.now() / 500 + star.phase)));
        }
        // Bounce effect (horizontal wiggle)
        let bounceX = star.x;
        if (bounce) {
          bounceX = star.x + Math.sin(Date.now() / 700 + star.bouncePhase) * 4;
        }
        ctx.save();
        ctx.globalAlpha = sparkleAlpha;
        ctx.beginPath();
        ctx.arc(bounceX, star.y, sparkleR, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.restore();

        // Move star
        star.y += star.speed;
        if (star.y > height) {
          star.x = Math.random() * width;
          star.y = 0;
          star.baseR = randomBetween(minSize, maxSize);
          star.speed = randomBetween(minSpeed, maxSpeed);
          star.phase = Math.random() * Math.PI * 2;
          star.bouncePhase = Math.random() * Math.PI * 2;
          star.alpha = randomBetween(0.7, 1);
        }
      }
      animationRef.current = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line
  }, [color, minSize, maxSize, minSpeed, maxSpeed, density, sparkle, bounce]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      style={{ position: "fixed", top: 0, left: 0, ...style }}
    />
  );
}