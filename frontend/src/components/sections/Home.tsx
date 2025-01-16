"use client";

import 'aos/dist/aos.css'; // You can also use <link> for styles
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";


const Home = ()=>{
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
                    className="text-xl px-4 md:text-4xl lg:text-5xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto " >
                        <div className="h-[10rem] flex items-center justify-center">
                            <TextHoverEffect text="Lure Tech" />
                        </div>
                        We Inovate Your Business,
                        <Highlight className=' rounded-lg text-black'>
                            <br />Brand, Digitaly
                        </Highlight>
                </motion.h1>
            </HeroHighlight>
      );
}
export default Home;