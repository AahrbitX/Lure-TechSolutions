import Image from "next/image";
import Logo from "../../public/assets/logo/LURE logo.svg"
import inIcon from "../../public/assets/icons/instagram-brands-solid.svg"
import liIcon from "../../public/assets/icons/linkedin-in-brands-solid.svg"
import ytIcon from "../../public/assets/icons/youtube-brands-solid.svg"
import waIcon from "../../public/assets/icons/whatsapp-brands-solid.svg"
import phIcon from "../../public/assets/icons/phone-solid.svg"
import locIcon from "../../public/assets/icons/location-dot-solid.svg"
import eIcon from "../../public/assets/icons/envelope-solid.svg"


export default function Footer() {
  return (
    <footer className="md:w-screen w-screen overflow-hidden rounded-t-3xl bg-cblack md:flex md:flex-col md:justify-between py-8">
      {/* Navigation Links */}
      <div className="flex flex-row justify-center items-center mb-6">
        <ul className="flex md:list-none text-cwhite md:text-lg text-xs gap-5 font-bold md:w-2/4 w-full md:justify-around justify-center">
          {["Home", "About", "Service", "Testimonials", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-cgreen hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="md:flex flex md:flex-row flex-col w-full justify-between p-10">
        {/* Contact Info */}
        <div className="md:w-fit w-full flex flex-col gap-4">
          <div className="flex items-center gap-2">
          <a href="#" className="hover:scale-105 transition-transform w-10 h-10 bg-cgreen flex justify-center items-center rounded-full">
            <Image src={phIcon} alt="Instagram" className="w-6 h-6" />
          </a>
            <a href="tel:+91 9994860392" className="text-cwhite hover:text-cgreen no-underline font-semibold">
              +91 9994860392
            </a>
          </div>
          <div className="flex items-center gap-2">
          <a href="#" className="hover:scale-105 transition-transform w-10 h-10 bg-cgreen flex justify-center items-center rounded-full">
            <Image src={eIcon} alt="Instagram" className="w-6 h-6" />
          </a>
            <a href="mailto:info@luretechsolutions.com" className="text-cwhite hover:text-cgreen no-underline font-semibold">
              info@luretechsolutions.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="hover:scale-105 transition-transform w-10 h-10 bg-cgreen flex justify-center items-center rounded-full">
              <Image src={locIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="text-cwhite hover:text-cgreen no-underline  font-semibold">
              1st Floor Krishna Store, Mettu Street, <br /> Vadiveeswaram, Nagercoil-629002
            </a>
          </div>
        </div>

        {/* Logo or Additional Content */}
        <div className="md:w-2/4  w-full flex md:pl-28 justify-center items-center p-10">
          <Image src={Logo} alt="Footer Logo" className="md:w-[220px] md:h-[150px] w-[100px] h-[100px]" />


        </div>

        {/* Social Media Links */}
        <div className="md:w-1/4 w-full flex justify-evenly items-center">
          <a href="#" className="hover:scale-105 transition-transform w-10 h-10 bg-cgreen flex justify-center items-center rounded-full" >
            <Image src={liIcon} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:scale-105 transition-transform w-10 h-10 bg-cgreen flex justify-center items-center rounded-full">
            <Image src={inIcon} alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:scale-105 transition-transform w-10 h-10 bg-cgreen flex justify-center items-center rounded-full">
            <Image src={waIcon} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="hover:scale-105 transition-transform w-10 h-10 bg-cgreen flex justify-center items-center rounded-full">
            <Image src={ytIcon} alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-cwhite text-xs text-center font-medium w-[100%] justify-center items-center">
        Copyright © 2024{" "}
        <a href="#" className="no-underline text-cgreen hover:underline">
          LURE TECH SOLUTIONS
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
