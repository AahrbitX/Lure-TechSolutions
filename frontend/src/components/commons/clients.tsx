import React from "react";

const clientSvgs = [
  { name: "Urban Trees", file: "/assets/logo/urban tree.svg" },
  { name: "Pious", file: "/assets/logo/pious logo.svg" },
  { name: "Kanyakumari Polymers", file: "/assets/logo/polymers.svg" },
  { name: "Seamoon", file: "/assets/logo/VOG-enhanced-final.svg" },
  { name: "D Calcifer", file: "/assets/logo/vins aluminiyum.svg" },
  { name: "Infinity Pixel", file: "/assets/logo/IP LOGOb.svg" },
  { name: "Make Me Up", file: "/assets/logo/make me up.svg" },
];

export default function Clients() {
  const logos = clientSvgs.concat(clientSvgs);

  return (
    <div className="text-center z-10 relative bg-gradient-to-r from-black/0 via-black/80 to-black/0 h-[170px] flex justify-center items-center">
      <div className="px-10 py-8 max-w-[1500px] mx-auto overflow-hidden">
        <div className="w-full relative">
          <div
            className="flex flex-nowrap items-center gap-14 animate-slide"
            style={{
              animation: "slide 30s linear infinite",
              width: "max-content",
            }}
          >
            {logos.map((client, i) => (
              <div
                key={client.name + i}
                className="opacity-90 hover:opacity-100 transition-opacity duration-200 flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{
                  width: 180,
                  height: 96,
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={client.file}
                  alt={client.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                    display: "block",
                  }}
                  className="mx-auto"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
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
  );
}