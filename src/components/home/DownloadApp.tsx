"use client";

import Image from "next/image";
import { Apple, PlayCircle, CheckCircle2 } from "lucide-react";

const DownloadApp = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-[#0F172A] rounded-[50px] p-10 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-2xl shadow-indigo-100">
          
          {/* --- Left Side: Content --- */}
          <div className="flex-1 text-white z-10 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.3em]">Mobile App</h2>
              <h3 className="text-4xl md:text-6xl font-black leading-tight">
                Download our mobile app for <span className="text-amber-500">Free!</span>
              </h3>
              <p className="text-gray-400 text-lg font-medium max-w-lg leading-relaxed">
                Get the best experience on your mobile device. Rent cars, track bookings, and get exclusive offers.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Easy Booking", "24/7 Support", "Special Offers", "Track Location"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500" />
                  <span className="text-sm font-bold text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-amber-500 hover:text-white transition-all duration-500 shadow-xl">
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-60">Download on</p>
                  <p className="text-sm">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-amber-500 hover:text-white transition-all duration-500 shadow-xl">
                <PlayCircle className="h-6 w-6" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-60">Get it on</p>
                  <p className="text-sm">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          {/* --- Right Side: Mobile Mockups --- */}
          <div className="flex-1 relative w-full h-[400px] md:h-[600px] z-10">
            {/* Main Phone Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[350px] h-full">
              <Image 
                src="/images/mobile-app-mockup.png" // Tomar images folder-e thaka phone-er mockup
                alt="Mobile App"
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              />
            </div>
            
            {/* Decorative Amber Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/20 blur-[100px] rounded-full"></div>
          </div>

          {/* Background Decorative Pattern */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M44.7,-76.4C58.1,-69.2,70.1,-58.5,77.5,-45.3C84.8,-32.1,87.6,-16,86.2,-0.8C84.8,14.4,79.2,28.8,70.8,41.2C62.5,53.7,51.4,64.2,38.5,71.2C25.6,78.2,10.8,81.7,-3.7,88.1C-18.2,94.5,-32.4,103.8,-44.6,101.3C-56.8,98.8,-66.9,84.4,-74.6,70.4C-82.3,56.4,-87.5,42.7,-89.6,28.9C-91.7,15.1,-90.7,1.2,-87.3,-12.3C-83.9,-25.8,-78.1,-38.9,-69,-49.8C-59.9,-60.7,-47.5,-69.4,-34.5,-76.8C-21.5,-84.3,-8,-90.4,3.7,-96.8C15.4,-103.2,28.8,-110,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;