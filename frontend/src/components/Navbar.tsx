"use client"
import MenuBar from '../../public/assets/icons/menuBar.svg'
import Close from '../../public/assets/icons/close.svg'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from "../../public/assets/logo/LURE logo.svg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5); // Adjust threshold as needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
            <div className={`${isScrolled?"fixed z-50 h-40 w-screen overflow-hidden":" overflow-hidden"}`}>
            <div className={`bg-transparent ${isScrolled?"z-50 fixed top-10 left-5":"w-full absolute md:h-[750px] sm:h-[650px] h-[500px] bg-transparent flex justify-center items-center"}`}>
                <Image src={logo} alt="alt" className={`${isScrolled?"w-10 h-10 transition-all duration-300 ease-in-out":"w-[100px] h-[100px] z-40 transition-all duration-300 ease-in-out"}`}/>
                </div>
                <div className={`${isOpen?"translate-x-0":"translate-x-full"}`}>
                    <ul className="flex font-bold sm:w-[400px] w-[300px] md:justify-between justify-center z-50 list-none md:bg-cblack bg-transparent rounded-xl absolute shadow-2xl p-4 pr-20 md:top-10 top-8 md:right-[100px] sm:right-2 right-1">
                        <li className="text-cgreen rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 md:text-lg text-xs transition-transform duration-300 ease-in-out">Home</li>
                        <li className="text-cgreen rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 md:text-lg text-xs transition-transform duration-300 ease-in-out">About</li>
                        <li className="text-cgreen rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 md:text-lg text-xs transition-transform duration-300 ease-in-out">Services</li>
                        <li className="text-cgreen rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 md:text-lg text-xs transition-transform duration-300 ease-in-out">Contact</li>
                    </ul>
                </div>
                <button className={`${isScrolled?"bg-transparent border-0 top-9 absolute sm:right-10 z-50 right-5":"hidden"}`} onClick={toggleMenu}>
                    {isOpen ? (
                        <Image src={Close} alt="Close" width={30} height={30} />
                    ) : (
                        <Image src={MenuBar} alt="Menu" width={30} height={30} />
                    )}
                </button>
            </div>
    );
};

export default Navbar;