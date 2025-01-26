"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import sIcon from "../../public/assets/icons/envelope-solid.svg"; // Import the icon properly
import Image, { StaticImageData } from "next/image";

import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

// Initialize AOS in a useEffect
const FeatureCard = ({
  title = "",
  description = "",
  icon = sIcon,
}: {
  title: string;
  description: string;
  icon: string | StaticImageData; // Ensure the type matches Image src
}) => {


  return (
    <div
      className="flex w-[30vh] md:w-[40vh] relative h-fit p-2 items-center justify-center">
      <GlowingStarsBackgroundCard>
        <Image
          src={icon}
          alt="Feature Icon"
          className="h-[100px] w-[100px] absolute top-16 left-16 p-5 z-40 rounded-3xl bg-transparent flex items-center justify-center"
        />

        <GlowingStarsTitle>{title}</GlowingStarsTitle>
        <div className="flex p-2 justify-between items-center">
          <GlowingStarsDescription>{description}</GlowingStarsDescription>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
};

export default FeatureCard;
