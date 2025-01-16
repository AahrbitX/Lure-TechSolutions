'use client';

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Logo from "../../../public/assets/logo/Lure.png"


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
    icon: Logo
  },
  {
    icon: Logo
  },
  {
    icon: Logo
  },
  {
    icon: Logo
  },
  {
    icon: Logo
  },
  {
    icon: Logo
  },
  {
    icon: Logo
  },
  {
    icon: Logo
  },
];