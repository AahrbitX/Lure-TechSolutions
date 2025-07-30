import React from "react";

export default function About() {
  return (
  <div className="bg-[#000000] min-h-screen text-[#ffffff]  top-[20%] font-poppins py-24">
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-10 flex flex-col md:flex-row items-center gap-10 relative">
        <div className="flex-1">
          <div
        className="text-[36px] md:text-[60px] font-extrabold text-[#181f1b] absolute left-0 top-0 z-0 select-none pointer-events-none"
        style={{ letterSpacing: "-0.05em", lineHeight: 1 }}
          >
        WORDS FROM OUR FOUNDER
          </div>
          {/* <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold mb-4 text-[#54AF33]">
        NandhaKrishna, Founder of Lure Tech Solutions
          </h1> */}
          <p className="relative z-10 text-lg text-[#bbf7d0] mb-4 font-semibold">
        "At Lure Tech Solutions, our mission is to empower brands and businesses to thrive in the digital era. We believe in the power of innovation, creativity, and collaboration to drive real growth and lasting impact. Every project we take on is a partnership—your vision becomes our mission. Thank you for trusting us to be a part of your journey."
          </p>
        </div>
        {/* <div className="flex-1 flex justify-end items-center relative z-10">
          <div className=" shadow-xl">
        <img
          src="/assets/images/person.png"
          alt="NandhaKrishna, Founder"
          className="object-cover w-full h-full"
        />
          </div>
        </div> */}
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/assets/images/office.png"
              alt="Office"
              className="object-cover w-full h-48"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#54AF33]">
            Our Mission
          </h2>
          <p className="text-[#bbf7d0] mb-6">
            To empower businesses and brands to thrive in the digital era by delivering innovative, data-driven, and creative solutions that drive real growth and lasting impact.
          </p>
        </div>



        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#54AF33]">
            Our Vision
          </h2>
          <p className="text-[#bbf7d0]">
            To be the most trusted partner for digital transformation, recognized for our creativity, integrity, and results across India and beyond.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/assets/images/workspace.png"
              alt="Office"
              className="object-cover w-full h-48"
            />
          </div>
        </div>
      </section>

            {/* Founding Story */}
          <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
            {/* Left: Visual/Statue or Thematic Image */}
            <div className="flex-1 flex justify-center items-center relative">
              <div className="w-full md:w-[340px] h-[340px] bg-[#181f1b] rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="/assets/images/inovation.png"
                  alt="Founding Story"
                  className="object-cover w-full h-full opacity-90"
                />
                <span className="absolute top-8 left-8 text-5xl font-extrabold text-[#54AF33] opacity-20 select-none pointer-events-none" style={{letterSpacing: "-0.05em"}}>STORY</span>
              </div>
            </div>
            {/* Right: Text */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#54AF33] leading-tight">
                Founding<br />Story
              </h2>
              <p className="text-[#bbf7d0] text-lg md:text-xl font-medium mb-4">
                Lure Tech Solutions was born from a passion for creativity and a vision to bridge the gap between technology and business growth. Founded by a team of digital enthusiasts, we set out to empower brands of all sizes with innovative solutions that drive real results.
              </p>
              <p className="text-[#bbf7d0] text-base">
                Our journey began with a simple belief: every business deserves a powerful digital presence and a partner who truly cares about their success.
              </p>
            </div>
          </section>
            
            <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row-reverse items-center gap-10">
              {/* Left: Visual/Photo */}
              <div className="flex-1 flex justify-center items-center relative">
                <div className="w-full md:w-[340px] h-[340px] bg-[#181f1b] rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                  <img
                    src="/assets/images/promize.png"
                    alt="Our Promise"
                    className="object-cover w-full h-full opacity-90"
                  />
                  <span className="absolute top-8 left-8 text-5xl font-extrabold text-[#54AF33] opacity-20 select-none pointer-events-none" style={{letterSpacing: "-0.05em"}}>PROMISE</span>
                </div>
              </div>
              {/* Right: Text */}
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#54AF33] leading-tight">
                  Our Promise
                </h2>
                <p className="text-[#bbf7d0] text-xl md:text-2xl font-semibold italic">
                  “We promise to deliver creative solutions, transparent communication, and real results—empowering your brand to stand out and succeed.”
                </p>
              </div>
            </section>
      <section className="relative max-w-5xl mx-auto px-10 py-20 flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl overflow-hidden bg-gradient-to-br from-[#181f1b] via-[#232323] to-[#54AF33]/10 shadow-2xl mt-16">
        {/* Glow/Accent Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-tr from-[#54AF33]/30 via-[#232323]/60 to-transparent blur-2xl opacity-80 rounded-3xl" />
          <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-[#54AF33]/20 blur-2xl opacity-60 rounded-3xl" />
        </div>
        {/* Left: Tagline & Text */}
        <div className="flex-1 z-10 text-left">
          {/* <span className="inline-block mb-4 px-6 py-2 rounded-full bg-[#181f1b] border border-[#54AF33] text-[#54AF33] font-bold text-lg shadow-md tracking-wide">
            
          </span> */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white leading-tight drop-shadow">
            You're Just One <span className="text-[#54AF33]">"Yes"</span> Away from Success.
          </h2>
          <p className="text-[#bbf7d0] text-lg mb-6 font-medium">
            Take the leap—your next big win starts here.
          </p>
        </div>
        {/* Right: CTA Button */}
        <div className="flex-1 flex justify-center md:justify-end z-10">
          <a
            href="/contact"
            className="px-10 py-4 rounded-full bg-[#54AF33] text-[#000] font-bold text-lg shadow-xl hover:bg-[#43a025] transition duration-300 ease-in-out border-2 border-[#54AF33] hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}