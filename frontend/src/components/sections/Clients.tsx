'use client';

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Logo1 from "../../../public/assets/logo/AahrbitX°.svg";
import Logo2 from "../../../public/assets/logo/ButterBytes Made with Finesse.svg";
import Logo3 from "../../../public/assets/logo/INIFINITY PIXELS studio.svg";
import Logo4 from "../../../public/assets/logo/polymers.svg";
import Logo5 from "../../../public/assets/logo/pious logo.svg";
import Logo6 from "../../../public/assets/logo/POMMI CATERS Elite Your Events.svg";
import Logo7 from "../../../public/assets/logo/urban tree.svg";
import Logo8 from "../../../public/assets/logo/vins aluminiyum.svg";
import Logo9 from "../../../public/assets/logo/SEAMOON.svg";
import Logo10 from "../../../public/assets/logo/lure-tech-solutions.svg";
import Logo11 from "../../../public/assets/logo/VOG-enhanced-final.svg";
import Logo12 from "../../../public/assets/logo/Make me up saloon logo.svg";

export function Clients() {
  return (
    <div className="w-screen h-fit p-0 rounded-md flex flex-col antialiased items-center justify-center relative -top-44 overflow-hidden" id="Clients">
      <InfiniteMovingCards
        items={testimonials.map((testimonial) => ({
          ...testimonial,
          key: testimonial.id, // Ensure each item has a unique key
          content: (
            <a href={testimonial.link} key={testimonial.id} className="logo-container">
              <img src={testimonial.icon} alt={`Logo ${testimonial.id}`} className="logo" />
            </a>
          ),
        }))}
        direction="left"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    icon: Logo1,
    link: "https://client1.com"
  },
  {
    id: 2,
    icon: Logo2,
    link: "https://client2.com"
  },
  {
    id: 3,
    icon: Logo3,
    link: "https://client3.com"
  },
  {
    id: 4,
    icon: Logo4,
    link: "https://client4.com"
  },
  {
    id: 5,
    icon: Logo5,
    link: "https://client5.com"
  },
  {
    id: 6,
    icon: Logo6,
    link: "https://client6.com"
  },
  {
    id: 7,
    icon: Logo7,
    link: "https://client7.com"
  },
  {
    id: 8,
    icon: Logo8,
    link: "https://client8.com"
  },
  {
    id: 9,
    icon: Logo9,
    link: "https://client9.com"
  },
  {
    id: 10,
    icon: Logo10,
    link: "https://client10.com"
  },
  {
    id: 11,
    icon: Logo11,
    link: "https://client11.com"
  },
  {
    id: 12,
    icon: Logo12,
    link: "https://client12.com"
  },
];