'use client';

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Logo1 from "../../../public/assets/logo/AahrbitX°.svg"
import Logo2 from "../../../public/assets/logo/ButterBytes Made with Finesse.svg"
import Logo3 from "../../../public/assets/logo/INIFINITY PIXELS studio.svg"
import Logo4 from "../../../public/assets/logo/KANYAKUMARI POLYMERS.svg"
import Logo5 from "../../../public/assets/logo/PIOUS Motor Park.svg"
import Logo6 from "../../../public/assets/logo/POMMI CATERS Elite Your Events.svg"
import Logo7 from "../../../public/assets/logo/URBUN TREE INTERIO.svg"
import Logo8 from "../../../public/assets/logo/VINS Automobile Glass.svg"



export function Clients() {
  return (
    <div className="w-screen h-fit p-0 rounded-md flex flex-col antialiased items-center justify-center relative -top-44 overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"/>
    </div>
  );
}

const testimonials = [
  {
    icon: Logo1
  },
  {
    icon: Logo2
  },
  {
    icon: Logo3
  },
  {
    icon: Logo4
  },
  {
    icon: Logo5
  },
  {
    icon: Logo6
  },
  {
    icon: Logo7
  },
  {
    icon: Logo8
  },
];