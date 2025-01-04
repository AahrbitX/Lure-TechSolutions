'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Heading from "../heading";
import TestimonialCard from "../testimonialCard";
import Slider from "react-slick";
import Image from "next/image";
import QouteLeft from "../../../public/assets/icons/quote-left-solid.svg";
import QouteRight from "../../../public/assets/icons/quote-right-solid.svg";

interface Testimonial {
  id: number;
  name: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Johnson",
    message: "This service was absolutely amazing. Highly recommend!",
  },
  {
    id: 2,
    name: "Mark Spencer",
    message: "The quality of work was outstanding. Will use again.",
  },
  {
    id: 3,
    name: "Emily Clark",
    message: "Exceeded all my expectations. Fantastic team!",
  },
];

const Testimonial: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="sections">
      <Heading value="Testimonials" />
      <div className="flex justify-between">
        {/* Left Content */}
        <div className="flex pt-10 justify-center items-start">
          <h1 className="w-3/4 text-5xl font-normal">
            Here is what our <span className="font-bold">clients</span> say about us
          </h1>
        </div>

        {/* Testimonial Slider */}
        <div className="testimonial-carousel w-1/2">
          <div className="w-3/4 flex flex-col justify-end p-16">
            {/* Left Quote */}
            <div className="w-full flex justify-start">
              <Image src={QouteLeft} alt="..." className="w-20 h-20 text-gray-400" />
            </div>

            {/* Slider */}
            <Slider {...settings} className="border-none">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  message={testimonial.message}
                  author={testimonial.name}
                />
              ))}
            </Slider>

            {/* Right Quote */}
            <div className="w-full flex justify-end">
              <Image src={QouteRight} alt="..." className="w-20 h-20 text-gray-400" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
