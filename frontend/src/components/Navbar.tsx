"use client";

import MenuBar from '../../public/assets/icons/menuBar.svg';
import Close from '../../public/assets/icons/close.svg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from "../../public/assets/logo/tech-solutions-logo.svg";

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
    <div className={`overflow-hidden ${isScrolled ? "fixed z-50 h-40 w-screen" : ""}`}>
      <div className={`bg-transparent ${isScrolled ? "fixed top-0 left-5 z-50" : "absolute w-full md:h-[750px] sm:h-[650px] h-[500px] flex justify-center items-center"}`}>
        <Image
          src={logo}
          alt="Logo"
          className={`transition-all duration-300 ease-in-out ${isScrolled ? "w-[100px] h-[100px]" : "w-[200px] h-[200px] z-40 p-5"}`}
        />
      </div>
      <div className={`transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0 z-50 bg-black" : "-translate-x-full"}`}>
        <ul className="sm:flex sm:flex-row flex-col font-bold sm:w-[400px] w-[200px] sm:h-fit h-[200px] md:justify-between justify-center z-50 list-none md:bg-cblack bg-transparent rounded-xl absolute shadow-2xl sm:p-4 p-2 pr-20 md:top-10 top-8 md:right-[100px] sm:right-2 right-1">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item} className="text-cgreen rounded-md px-3 py-2 hover:text-cgreen transform hover:scale-110 hover:-translate-y-1 md:text-lg text-xs transition-transform duration-300 ease-in-out">
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <button className={`bg-transparent border-0 top-9 absolute sm:right-10 right-5 z-50 ${isScrolled ? "" : "hidden"}`} onClick={toggleMenu}>
        <Image src={isOpen ? Close : MenuBar} alt={isOpen ? "Close" : "Menu"} width={30} height={30} />
      </button>
    </div>
  );
};

export default Navbar;