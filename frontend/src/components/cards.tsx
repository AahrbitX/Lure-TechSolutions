'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import type { StaticImageData } from 'next/image';
import { services } from "./assets";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

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
    description: 'Our Brand New Statergies, Help you to build your Brand',
    image: services[0],
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is the description for Card 2',
    image: services[1],
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'This is the description for Card 3',
    image: services[2],
  },

];

const Cards: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default value
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Screen width <= 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 768, // Screen width <= 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
      {
        breakpoint: 480, // Screen width <= 480px
        settings: {
          slidesToShow: 1, // Show 1 slide
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
                    <CardBody className="relative group/card shadow-2xl hover:shadow-cgreen bg-black border-cgreen/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {card.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        {card.description}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src={card.image}
                          height="1000"
                          width="1000"
                          className="h-72 w-72 object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-20">
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href="https://twitter.com/mannupaaji"
                          target="__blank"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                          Try now →
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          Sign up
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




