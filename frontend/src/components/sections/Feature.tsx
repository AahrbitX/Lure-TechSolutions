"use client";

import React from 'react'
import FeatureCard  from '../featurecard'
import { TextAnimate } from "../ui/text-animate";
import { SparklesCore } from "../ui/sparkles";
import Icon from "../../../public/assets/icons/linkedin-in-brands-solid.svg"

const features = [
  {
    title: "Fast Performance",
    description: "Our solutions are optimized for speed and reliability, ensuring seamless user experience.",
    icon: Icon,
  },
  {
    title: "Customizable Solutions",
    description: "Tailor-made software solutions designed to fit your specific business needs.",
    icon: Icon, // DefaultIcon will be used here
  },
  {
    title: "High Security",
    description: "We prioritize security in every aspect of development, ensuring your data is always safe.",
    icon: Icon,
  },
  {
    title: "Scalable Growth",
    description: "Our solutions are built with scalability in mind, ready to grow as your business expands.",
    icon: Icon,
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with our strategic digital marketing solutions and branding.",
    icon: Icon,
  },
  {
    title: "Innovative Branding",
    description: "We create unique branding strategies that help your business stand out in the market.",
    icon: Icon,
  },
];

const Feature = () => {
  return (
    <div className=' sections pt-0 h-fit flex flex-col justify-evenly items-center'>

        <div className="h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl font-bold text-center text-white relative z-20 p-10">
            <TextAnimate animation="blurInUp" by="character">
                Our Main features
            </TextAnimate>
        </h1>
        <div className="w-[60rem] h-60 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-cgreen to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-cgreen to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1300}
            className="w-full h-full"
            particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
          {features.map((features,index)=>(
            <FeatureCard key={index} title={features.title} description={features.description} icon={features.icon}/>
          ))}

        </div>
    </div>

  )
}

export default Feature