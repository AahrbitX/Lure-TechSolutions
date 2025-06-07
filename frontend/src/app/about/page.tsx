import React from "react";

export default function About() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen text-[#222] font-sans">
      {/* Header */}


      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10 flex flex-col md:flex-row items-center gap-10 relative">
        <div className="flex-1">
          <div className="text-[120px] md:text-[180px] font-extrabold text-gray-200 absolute left-0 top-0 z-0 select-none pointer-events-none" style={{letterSpacing: "-0.05em", lineHeight: 1}}>ABOUT</div>
          <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold mb-4">About 10.8</h1>
          <p className="relative z-10 text-lg text-gray-600">We will kindly assist you anything.</p>
        </div>
        <div className="flex-1 flex justify-end items-center relative z-10">
          <div className="w-[220px] h-[220px] rounded-full overflow-hidden shadow-xl border-8 border-white">
            <img src="/assets/about/hero.jpg" alt="About Hero" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* Sharing is Caring */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/assets/about/office1.jpg" alt="Office" className="object-cover w-full h-48" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/assets/about/office2.jpg" alt="Office" className="object-cover w-full h-48" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Sharing is Caring</h2>
          <p className="text-gray-600 mb-6">
            At 10.8, we believe in the power of compassion, contribution, and action. Our model is simple: support those in need and create lasting change through expanding resources, empowering the underserved, and fostering collaboration. We are committed to making a difference—one act of kindness at a time.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/assets/about/hand.jpg" alt="Helping Hand" className="object-cover w-full h-48" />
          </div>
        </div>
      </section>

      {/* The Secret of Living is Giving */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-xl md:text-2xl font-bold mb-4">The Secret of Living is Giving</h3>
        <p className="text-gray-600 mb-8">
          At 10.8, we believe that true fulfillment comes from generosity. Every act of kindness, no matter how small it is, has the power to change a life. Giving is more than an action—it's a way of living, a mindset that transforms both the giver and the receiver.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/assets/about/hallway.jpg" alt="Hallway" className="object-cover w-full h-48" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/assets/about/emptyroom.jpg" alt="Empty Room" className="object-cover w-full h-48" />
          </div>
        </div>
      </section>

      {/* Endless Possibilities to Share */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Endless Possibilities to Share</h3>
        <p className="text-gray-600 mb-8">
          At 10.8, we believe that generosity knows no limits. Every person has something valuable to share—whether it's time, resources, skills, or kindness. When we come together, we unlock possibilities to uplift, empower, and transform lives.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
          <img src="/assets/about/cafe.jpg" alt="Cafe" className="object-cover w-full h-48" />
        </div>
      </section>

      {/* 4D Sharing */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-xl md:text-2xl font-bold mb-6">4D Sharing in the 21st century</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="font-bold text-lg mb-2">Designated</div>
            <div className="text-gray-500 text-sm">지정</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="font-bold text-lg mb-2">Delighted</div>
            <div className="text-gray-500 text-sm">기쁨</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="font-bold text-lg mb-2">Dedicated</div>
            <div className="text-gray-500 text-sm">헌신</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="font-bold text-lg mb-2">Dispersed</div>
            <div className="text-gray-500 text-sm">분산</div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="/assets/about/group.jpg" alt="Group" className="object-cover w-full h-48" />
        </div>
      </section>

      {/* Sharing in the 21st century */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Sharing is the 21st century's new way of contribution to the community.
        </h3>
        <p className="text-gray-600 mb-6">
          In today's world, giving is no longer just about donations—it's 4D sharing. Whether it's time, knowledge, skills, or resources, every contribution helps build stronger communities and creates opportunities for those in need.
        </p>
        <div className="flex items-center gap-2 mb-8">
          <span className="text-[#00b894] font-semibold">Share.</span>
          <span className="text-[#00b894] font-semibold">Support.</span>
          <span className="text-[#00b894] font-semibold">Strengthen.</span>
          <span className="text-gray-700">Together, we can make a lasting impact.</span>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="/assets/about/celebration.jpg" alt="Celebration" className="object-cover w-full h-48" />
        </div>
      </section>

      {/* Footer */}

    </main>
  );
}