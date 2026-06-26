import React from "react";

const clientSvgs = [
  { name: "Urban Trees", file: "/assets/logo/urban tree.svg" },
  { name: "Pious", file: "/assets/logo/pious logo.svg" },
  { name: "Kanyakumari Polymers", file: "/assets/logo/polymers.svg" },
  { name: "VOG", file: "/assets/logo/VOG-enhanced-final.svg" },
  { name: "Vins Aluminium", file: "/assets/logo/vins aluminiyum.svg" },
  { name: "Infinity Pixel", file: "/assets/logo/IP LOGOb.svg" },
  { name: "Make Me Up", file: "/assets/logo/make me up.svg" },
];

export default function Clients() {
  const logos = [...clientSvgs, ...clientSvgs];

  return (
    <div className="py-8 px-4">
      <p className="text-center text-[10px] text-[#9CA3AF] uppercase tracking-[0.2em] mb-6">
        Trusted by leading brands
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-10 sm:gap-14"
          style={{
            animation: "slideLogos 28s linear infinite",
            width: "max-content",
          }}
        >
          {logos.map((client, i) => (
            <div
              key={client.name + i}
              className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              style={{ width: 140, height: 56 }}
            >
              <img
                src={client.file}
                alt={client.name}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
