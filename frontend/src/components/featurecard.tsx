"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import sIcon from "../../public/assets/icons/envelope-solid.svg";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string | StaticImageData;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title = "",
  description = "",
  icon = sIcon,
}) => {
  return (
    <div className="flex w-[30vh] md:w-[40vh] relative h-fit p-2 items-center justify-center">
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
