import React from "react";

export default function Contact() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen font-sans text-[#222]">


      {/* Top Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute left-0 top-0 text-[90px] md:text-[140px] font-extrabold text-gray-100 z-0 select-none pointer-events-none" style={{letterSpacing: "-0.05em", lineHeight: 1, writingMode: "vertical-lr", opacity: 0.5}}>CONTACT</div>
              <div className="relative z-10 mt-8 md:mt-0">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Contact Us</h1>
                <p className="text-gray-600 mb-6">We are always happy to assist you kindly.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex gap-6">
            <img src="/assets/contact/office1.jpg" alt="Office" className="rounded-2xl shadow-lg w-56 h-56 object-cover" />
            <img src="/assets/contact/office2.jpg" alt="Desk" className="rounded-2xl shadow-lg w-56 h-56 object-cover" />
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-3xl mx-auto px-6 text-center mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Let us know how we can help</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-6">
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full w-14 h-14 flex items-center justify-center mb-2">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div className="font-medium">02-574-9497</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full w-14 h-14 flex items-center justify-center mb-2">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 0 1-1.9.73 4.19 4.19 0 0 0-7.1 3.81A11.66 11.66 0 0 1 3 6.13a4.19 4.19 0 0 0 1.3 5.59A4.07 4.07 0 0 1 2.8 11v.05a4.19 4.19 0 0 0 3.36 4.1 4.09 4.09 0 0 1-1.1.15 4.23 4.23 0 0 1-.79-.07 4.19 4.19 0 0 0 3.91 2.91A8.39 8.39 0 0 1 2 19.54a11.72 11.72 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 23 5.92a8.36 8.36 0 0 1-2.4.66A4.19 4.19 0 0 0 21 10.5z"/></svg>
            </div>
            <div className="font-medium">110 Sejong-daero, Jung-gu, Seoul, South Korea</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-black rounded-full w-14 h-14 flex items-center justify-center mb-2">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="none"/><path d="M22 6l-10 7L2 6" /></svg>
            </div>
            <div className="font-medium">info@tenpointeight.com</div>
          </div>
        </div>
        <button className="bg-white shadow-md rounded-full px-8 py-3 font-semibold text-gray-800 hover:bg-gray-100 transition">SEND REQUEST</button>
      </section>

      {/* Map Section */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img src="/assets/contact/map.jpg" alt="Map" className="object-cover w-full h-72" />
        </div>
      </section>

      {/* Get in touch */}
      <section className="max-w-5xl mx-auto px-6 pb-12 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Get in touch with us</h3>
          <p className="text-gray-600">
            We are ready to lead you into the exciting world of architecture and interior design.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="font-medium">02 574 9497</div>
          <div className="font-medium">10.8info@sohome.com</div>
          <div className="font-medium">110 Sejong-daero, Jung-gu, Seoul, South Korea</div>
          <button className="bg-white shadow-md rounded-full px-8 py-3 font-semibold text-gray-800 mt-4 w-max hover:bg-gray-100 transition">SEND REQUEST</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-between items-center px-8 py-6 text-gray-400 text-xs">
        <div>10<span className="align-super text-[10px]">8</span> Copyright ⓒ 10.8 2023</div>
        <div>Privacy Policy</div>
      </footer>
    </main>
  );
}