'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider-arrows.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import type { StaticImageData } from 'next/image';
import { services } from "./assets";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

// Define the type for card data
interface CardData {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
}

// Card data
const cardData: CardData[] = [
  {
    id: 1,
    title: 'Digital Marketing',
    description: 'Our Brand new Statergies, Help you to build your Brand. Why you for Contact us now',
    image: services[0],
  },
  {
    id: 2,
    title: 'Software Solutions',
    description: 'We are the team of Expert Developer, Who worked on top MNC, We Build Solutions For your Business',
    image: services[1],
  },
  {
    id: 3,
    title: 'AI Solutions',
    description: 'We Develop Custom AI solutions acording to the INdustry needs, with our EXpert AI Developer team',
    image: services[2],
  },
];

// Custom arrow components
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow w-[25px] h-[25px]`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow w-[25px] h-[25px]`}
      style={{ ...style, display: "block", left: "10px" }}
      onClick={onClick}
    />
  );
};

const Cards: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-[800px]">
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="">
            <CardContainer className="inter-var">
              <CardBody className="relative group/card shadow-2xl hover:shadow-cgreen border-cgreen/[0.2] sm:w-[30rem] md:w-[380px] rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={card.image}
                    height={1000}
                    width={1000}
                    className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                    priority // Ensure images are loaded with priority
                  />
                </CardItem>
                <CardItem translateZ="50" className="text-xl font-bold text-cgreen pt-5">
                  {card.title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {card.description}
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-cgreen dark:bg-white dark:text-black text-white text-xs font-bold">
                    Get Offer Now
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;




