"use client"

import MenuBar from '../../public/assets/icons/menuBar.svg'
import Close from '../../public/assets/icons/close.svg'
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
    // Fix initial state to boolean false
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function to open/close menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full flex justify-end absolute top-0 right-0 p-4 ">
            {/* Menu that toggles visibility */}
            <div className={`w-full absolute top-0 right-[50px] transform ${
                    isOpen ? "-translate-x-[800px]" : "translate-x-full"
                } transition-transform duration-500 ease-in-out`}>
                <ul className="flex w-[50%] justify-between list-none rounded-md absolute top-5 right-40">
                    <li className="text-cblack rounded-md px-3 py-2">Home</li>
                    <li className="text-cblack rounded-md px-3 py-2">About</li>
                    <li className="text-cblack rounded-md px-3 py-2">Service</li>
                    <li className="text-cblack rounded-md px-3 py-2">Contact</li>
                </ul>
            </div>

            {/* Button to toggle menu */}
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
