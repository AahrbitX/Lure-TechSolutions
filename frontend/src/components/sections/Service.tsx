"use client";

import Cards from "../cards";
import { TextAnimate } from "../ui/text-animate";
import Head from "next/head";

const Service = () => {
    return (
        <>
            <Head>
                <title>Services - Lure Tech Solutions</title>
                <meta name="description" content="Discover the range of services offered by Lure Tech Solutions. We provide innovative tech solutions to help your business grow." />
            </Head>
            <div className="h-fit w-screen overflow-hidden md:pt-60 pt-40" id="Services">
                <TextAnimate animation="slideLeft" by="character" className="md:text-6xl text-2xl w-full flex justify-center items-center text-white font-bold">
                    Services We Offer
                </TextAnimate>
                <div className="md:pt-20">
                    <Cards />
                </div>
            </div>
        </>
    );
};

export default Service;