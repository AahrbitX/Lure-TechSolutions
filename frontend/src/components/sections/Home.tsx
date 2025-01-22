"use client";

import 'aos/dist/aos.css'; // You can also use <link> for styles
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import React from 'react';
import Typed from 'typed.js';


const Home = ()=>{
    const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Business', 'Tech','Brand'],
      typeSpeed: 50,
      smartBackspace: true,
      loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


    return (
            <HeroHighlight>
                <motion.h1
                    initial={{
                    opacity: 0,
                    y: 20,
                    }}
                    animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                    }}
                    transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="w-[500px] text-xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto " >
                        <div className="flex items-center justify-center">
                            <TextHoverEffect text="Lure Tech" />
                        </div>
                </motion.h1>
                        <div className="App w-full text-end" >
                            <p className='text-white text-5xl font-medium'>We Innovate Digitaly Your <span className='font-extrabold text-cgreen text-5xl w-full justify-end' ref={el} /></p>
                        </div>
            </HeroHighlight>
      );
}
export default Home;