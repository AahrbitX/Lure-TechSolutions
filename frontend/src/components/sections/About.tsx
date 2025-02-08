"use client";

import HeroVideoDialog from "../ui/hero-video-dialog";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

const About = () => {
    return (
        <div className="h-fit w-screen overflow-hidden" id="About">
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                    }}
                    className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-4xl">
                    <p className="md:w-full w-[300px] text-white md:text-6xl text-2xl font-bold">The story of <span className="text-white">Innovation</span> & <span className="text-cgreen">Impact</span></p>

                </motion.h1>

                <p className="md:w-[500px] w-[300px] text-white font-bold text-center m-20">We innovate tech solutions for your business growth. Let's build your brand together</p>

                <div className="md:w-full w-[500px] justify-center flex">
                <div className="relative md:w-[900px] w-[400px] rounded-3xl">
                    <HeroVideoDialog
                        className="dark:hidden block"
                        animationStyle="top-in-bottom-out"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                        thumbnailAlt="Hero Video"
                    />
                    <HeroVideoDialog
                        className="hidden dark:block"
                        animationStyle="top-in-bottom-out"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                        thumbnailAlt="Hero Video"
                    />
                </div>
            </div>
            </LampContainer>
        </div>


    );
};
export default About;
