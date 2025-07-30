import React from "react";

export default function Contact() {
  return (
    <div className="bg-gradient-to- top-[20%] from-[#000000] via-[#54AF33] to-[#24243e] min-h-screen font-poppins text-white py-20">

      <section className="max-w-5xl mx-auto px-6 pt-12 pb-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute left-0 top-0 text-[90px] md:text-[140px] font-extrabold text-[#54AF33] z-0 select-none pointer-events-none" style={{letterSpacing: "-0.05em", lineHeight: 1, writingMode: "vertical-lr", opacity: 0.2}}>LURE</div>
              <div className="relative z-10 mt-8 md:mt-0">
                <h1 className="text-2xl md:text-3xl font-extrabold mb-2 text-white">Let’s Grow Your Brand</h1>
                <p className="text-[#d4ffd4] mb-6">Connect with Lure Tech Solutions — your partner for digital innovation, branding, and growth.</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="/assets/images/workspace.png"
                alt="Creative Workspace"
                className="rounded-2xl shadow-2xl w-full h-56 object-cover border-4 border-[#54AF33]"
              />
              <img
                src="/assets/images/office.png"
                alt="Team Collaboration"
                className="rounded-2xl shadow-2xl w-full h-56 object-cover border-4 border-[#ffffff]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 text-center m-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white">Ready to Elevate Your Business?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 m-6">
          <div className="flex flex-col items-center min-w-60">
            <div className="bg-[#54AF33] rounded-full w-14 h-14 flex items-center justify-center mb-2 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div className="font-medium">+91 99948 60392</div>
          </div>
          <div className="flex flex-col items-center min-w-60">
            <div className="bg-[#54AF33] rounded-full w-14 h-14 flex items-center justify-center mb-2 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 0 1-1.9.73 4.19 4.19 0 0 0-7.1 3.81A11.66 11.66 0 0 1 3 6.13a4.19 4.19 0 0 0 1.3 5.59A4.07 4.07 0 0 1 2.8 11v.05a4.19 4.19 0 0 0 3.36 4.1 4.09 4.09 0 0 1-1.1.15 4.23 4.23 0 0 1-.79-.07 4.19 4.19 0 0 0 3.91 2.91A8.39 8.39 0 0 1 2 19.54a11.72 11.72 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 23 5.92a8.36 8.36 0 0 1-2.4.66A4.19 4.19 0 0 0 21 10.5z"/></svg>
            </div>
            <div className="font-medium">www.luretechsolutions.com</div>
          </div>
          <div className="flex flex-col items-center min-w-60">
            <div className="bg-[#54AF33] rounded-full w-14 h-14 flex items-center justify-center mb-2 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" fill="none"/>
                <path d="M3 5l9 7 9-7" stroke="currentColor" fill="none"/>
              </svg>
            </div>
            <div className="font-medium">luretechsolutions@gmail.com</div>
          </div>
        </div>
        <a href="mailto:luretechsolutions@gmail.com" className="bg-[#54AF33] shadow-md rounded-full px-8 py-3 font-semibold text-black hover:bg-white transition">Contact Us</a>
      </section>

      <section className="max-w-5xl mx-auto px-6 m-12">
        <div className="rounded-3xl min-h-[10px] overflow-hidden shadow-2xl border-4 border-[#54AF33] bg-black bg-opacity-60">
            <iframe
              title="Lure Tech Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1234567890123!2d78.1234567890123!3d11.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babc12345678901%3A0xabcdefabcdefabcd!2sLure%20Tech%20Solutions!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-20 px-6 pb-12 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4 text-white">Let’s Make Your Brand Unmissable</h3>
          <p className="text-[#d4ffd4]">
            From startups to icons, we help brands shine online and offline. Say YES to growth with Lure Tech Solutions!
          </p>
        </div>
        <div className="flex-1 min-w-80 items-end justify-center flex flex-col gap-2">
          <div className="font-medium">+91 99948 60392</div>
          <div className="font-medium">luretechsolutions@gmail.com</div>
          <div className="font-medium">www.luretechsolutions.com</div>
          <a href="mailto:luretechsolutions@gmail.com" className="bg-[#54AF33] shadow-md rounded-full px-8 py-3 font-semibold text-black mt-8 w-max hover:bg-white transition">Start Your Project</a>
        </div>
      </section>
  </div>
  );
}