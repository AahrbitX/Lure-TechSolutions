'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { services } from "./assets";
import Heading from "./heading";

// Define the type for card data
interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Dummy services array (replace with actual import if available)


// Card data
const cardData: CardData[] = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is the description for Card 1',
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="sections h-[800px]">
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="w-60 mx-auto">
            <div className="border border-gray-300 rounded-lg shadow-lg transition-transform hover:scale-105">
              <Image
                src={card.image}
                alt={`${card.title} image`}
                width={240}
                height={160}
                className="w-[500px] h-[500px] object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
