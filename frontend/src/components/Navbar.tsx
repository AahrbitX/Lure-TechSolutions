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
        <nav className="w-full flex justify-end absolute top-0 right-0 p-4 ">
            <div className={`w-full absolute top-0 right-0 transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-500 ease-in-out`}>
                <ul className="flex font-bold w-[400px] justify-between list-none bg-cblack rounded-xl shadow-2xl p-4 absolute top-1 right-[100px] ">
                    <li className="text-cwhite rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300 ease-in-out">Home</li>
                    <li className="text-cwhite rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300 ease-in-out">About</li>
                    <li className="text-cwhite rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300 ease-in-out">Service</li>
                    <li className="text-cwhite rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 transition-transform duration-300 ease-in-out">Contact</li>
                </ul>
            </div>
            <button className="bg-transparent border-0 absolute top-9 right-10" onClick={toggleMenu}>
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