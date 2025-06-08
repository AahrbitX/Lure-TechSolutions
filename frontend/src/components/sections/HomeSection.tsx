import StarParticles from "@/components/commons/StarParticles";
import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Clients from "../commons/clients";

export default function HeroSection() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <StarParticles
        color="#bbf7d0"
        minSize={0.7}
        maxSize={2}
        minSpeed={0}
        maxSpeed={0.25}
        density={0.1}
        sparkle={true}
        bounce={true}
      />

      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 md:w-[1200px] h-[1000px] rounded-full bg-gradient-to-tr from-green-800 via-green-600 to-transparent blur-[160px] opacity-40 -z-10" />

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

      {/* Main Heading & CTA */}
      <div className="text-center py-48 px-14 relative z-10 mx-auto overflow-hidden bg-transparent">
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 2146 744"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                id="d"
                x1="43.176%"
                x2="50%"
                y1="12.436%"
                y2="97.744%"
              >
                <stop offset="0%" stopColor="#00ff0d" />
                <stop offset="100%" stopColor="#00ff0d" />
              </linearGradient>
              <linearGradient
                id="f"
                x1="19.609%"
                x2="50%"
                y1="14.544%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00ff0d" />
                <stop offset="100%" stopColor="#00ff0d" stopOpacity="0" />
              </linearGradient>
              <filter
                id="e"
                width="145.2%"
                height="187%"
                x="-22.6%"
                y="-43.5%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
              </filter>
              <filter
                id="g"
                width="165.1%"
                height="170.3%"
                x="-32.5%"
                y="-35.1%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
              </filter>
              <radialGradient
                id="c"
                cx="50%"
                cy="100%"
                r="77.678%"
                fx="50%"
                fy="100%"
                gradientTransform="matrix(0 -1 .37746 0 .123 1.5)"
              >
                <stop offset="0%" stopColor="#bbf7d0" />
                <stop offset="22.35%" stopColor="#00ff0d" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </radialGradient>
              <path id="a" d="M0 0h2440v921H0z" />
            </defs>
            <g
              fill="none"
              fillRule="evenodd"
              transform="translate(-140 -177)"
            >
              <mask id="b" fill="#fff">
                <use xlinkHref="#a" />
              </mask>
              <g mask="url(#b)">
                <path fill="url(#c)" d="M0 0h2440v921H0z" />
                <path
                  fill="url(#d)"
                  fillRule="nonzero"
                  d="M1975.72 781.763c-3.682-3-8.757-3.61-13.042-1.568a12.323 12.323 0 0 0-7.014 11.129v98.57h-430.368c-6.79 0-12.296 5.516-12.296 12.321v98.57c0 6.805 5.505 12.321 12.296 12.321h430.368v98.57a12.323 12.323 0 0 0 7.014 11.129 12.276 12.276 0 0 0 13.042-1.568l196.74-160.176a12.33 12.33 0 0 0 4.54-9.561 12.33 12.33 0 0 0-4.54-9.561l-196.74-160.176Z"
                  filter="url(#e)"
                />
                <path fill="url(#f)" d="m913 274 461 369-284 58z" filter="url(#g)" />
              </g>
            </g>
          </svg>
        </div>

        <div className="mb-4 inline-block bg-green-900/40 text-white px-4 py-1 rounded-full text-xs">
          Empowering brands with tech & digital innovation
        </div>

        <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-8">
          Let's Dominate the Digital Era
        </h1>

        <p className="text-[13px] md:text-lg text-white max-w-2xl mx-auto">
          Unleash growth with AI, tech, and digital magic. Lure—where brands lead.
        </p>
        
        <div className="mt-12 flex justify-center gap-6">
          <button className="bg-green-600 text-white hover:bg-green-500 md:px-8 md:py-3 px-4 py-2  rounded-full font-semibold shadow text-[13px] md:text-lg">
            Get Started
          </button>
          <button className="bg-black border border-green-700 hover:bg-green-900 md:px-8 md:py-3 px-4 py-2 rounded-full font-semibold shadow text-white text-[13px] md:text-lg">
            Let's Talk
          </button>
        </div>
      </div>

      {/* Rotating Circle Text - Top Right Corner */}
      <div className="hidden sm:block fixed md:absolute top-[60vh] right-20 z-30 pointer-events-none select-none">
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          className="animate-spin-slow"
          style={{
            animationDuration: "8s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            position: "relative",
            zIndex: 1,
          }}
        >
          <defs>
            <path
              id="circlePath"
              d="M70,70 m-55,0 a55,55 0 1,1 110,0 a55,55 0 1,1 -110,0"
            />
          </defs>
          <text fontSize="15" fill="#fff" letterSpacing="2">
            <textPath xlinkHref="#circlePath" startOffset="0%">
              LureTech - Innovating Your Digital -
            </textPath>
          </text>
        </svg>
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            // className="animate-bounce"
            style={{
              display: "block",
              margin: "0 auto",
              color: "#bbf7d0",
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5v14m0 0l-6-6m6 6l6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <Clients />

      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}