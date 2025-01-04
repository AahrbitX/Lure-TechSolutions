"use client"

import MenuBar from '../../public/assets/icons/menuBar.svg'
import Close from '../../public/assets/icons/close.svg'
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="w-full h-[55px] flex justify-end relative top-0 overflow-x-hidden right-6 p-4">
            <div className={`w-full absolute top-0 right-0 transform ${
                    isOpen ? "translate-x-0" : "sm:translate-x-full translate-x-full"
                } transition-transform duration-500 ease-in-out`}>
                <ul className="flex font-bold sm:w-[400px] w-[260px] justify-between list-none bg-cblack rounded-xl shadow-2xl p-4 pr-20 absolute top-1 md:right-[100px] sm:right-2 right-1">
                    <li className="text-cgreen rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300 ease-in-out">Home</li>
                    <li className="text-cgreen rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300 ease-in-out">About</li>
                    <li className="text-cgreen rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300 ease-in-out">Service</li>
                    <li className="text-cgreen rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300 ease-in-out">Contact</li>
                </ul>
            </div>
            <button className="bg-transparent border-0 absolute top-9 sm:right-10 right-5" onClick={toggleMenu}>
                {isOpen ? (
                    <Image src={Close} alt="Close" width={30} height={30} />
                ) : (
                    <Image src={MenuBar} alt="Menu" width={30} height={30} />
                )}
            </button>
        </nav>
    );
};
export default Navbar;