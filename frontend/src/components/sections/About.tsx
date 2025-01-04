"use client";

import Image from "next/image";
import img from "../../../public/assets/images/media1.jpg";
import Counter from "../couter";
import Heading from "../heading";
import arrow from "../../../public/assets/icons/arrow-right-solid.svg"

const About = () => {
    return (
        <div className="sections w-full h-[840px] relative">
            {/* Heading Section */}
            <Heading value={"About Us"} />

            {/* About Section One */}
            <div className="w-full justify-center md:flex">
                {/* Years Counter */}
                <div className="w-1/4 h-fit p-1 relative">
                    <Counter value={4} />
                    <p className="text-cgreen text-4xl w-1/2 text-right absolute right-32 top-40 pt-2">
                        Years
                    </p>
                </div>

                {/* Image Section */}
                <div className="z-10 w-2/4">
                    <Image
                        src={img}
                        className="rounded-[70px] w-full h-[500px]"
                        alt="About Us Image"
                    />
                </div>

                {/* Clients Counter */}
                <div className="w-1/4 h-fit p-1 relative">
                    <Counter value={40} />
                    <p className="text-cgreen text-4xl w-1/2 text-right absolute right-32 top-40 pt-2">
                        Clients
                    </p>
                </div>
            </div>

            {/* About Section Two */}
            <div className="bg-cgreen pt-[120px] pb-10 rounded-t-3xl absolute top-[485px] w-full">
                <div className="w-full flex justify-center text-center">
                    <p className="text-cwhite text-2xl w-1/2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="flex justify-center pt-8">
                    <a href="#" className="p-3 relative flex justify-center items-center bg-white w-60 rounded-full text-center text-cblack font-bold no-underline">
                        Our Works 

                        <div className="w-fit absolute right-6 flex justify-end items-center"><Image className="w-5 h-5 pl-10" src={arrow} alt="..."></Image></div>

                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
