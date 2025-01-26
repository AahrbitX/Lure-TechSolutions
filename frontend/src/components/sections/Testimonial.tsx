'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import TestimonialCard from "../testimonialCard";
import Slider from "react-slick";
import Image from "next/image";
import QouteLeft from "../../../public/assets/icons/quote-left-solid.svg";
import QouteRight from "../../../public/assets/icons/quote-right-solid.svg";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles

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


    useEffect(() => {
      Aos.init({
        duration: 1000,
        easing: "ease-in-out",
        offset: 0,
        delay: 10,
        mirror: true,
      });
    }, []);

  return (
    <div className="w-screen overflow-hidden  h-[1000px] md:pt-40 pt-20">
      <div className="md:flex flex md:flex-row flex-col md:justify-between items-center pt-10">
        {/* Left Content */}
        <div className="flex justify-center items-start">
          <h1 className="w-3/4 md:text-6xl text-2xl font-bold text-white"data-aos="fade-down"
      data-aos-anchor-placement="top-center">
            Here is what our <span className="font-bold text-cgreen">clients</span> say about us
          </h1>
        </div>

        {/* Testimonial Slider */}
        <div className="testimonial-carousel md:w-1/2 md:pt-0 flex justify-center items-center pt-10">
          <div className="md:w-3/4 w-[350px] flex flex-col justify-end p-16 bg-neutral-900 rounded-3xl shadow-2xl shadow-cgreen" 
                data-aos="fade-left"
                data-aos-anchor-placement="top-center">
            {/* Left Quote */}
            <div className="w-full flex justify-start">
              <Image src={QouteLeft} alt="..." className="md:w-20 md:h-20 w-10 h-20 text-white" />
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
              <Image src={QouteRight} alt="..." className="md:w-20 md:h-20 w-10 h-20 text-white" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
