"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-20 lg:pb-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Mobile */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* 1. Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest">
              <Star className="h-4 w-4 fill-blue-600" />
              Over 10,000+ Happy Customers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter font-[family-name:var(--font-montserrat)] text-gray-900">
              Drive Your <span className="text-blue-600">Dreams</span> <br />
              With Premium Style.
            </h1>
            
            <p className="text-base lg:text-lg text-gray-600 max-w-[550px] mx-auto lg:mx-0 leading-relaxed font-medium">
              Experience the ultimate freedom with our luxury car rental service. 
              Top-notch vehicles, seamless booking, and 24/7 support for your journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <Link 
                href="/cars" 
                className="border-gray-100 text-gray-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 hover:text-white transition shadow-2xl shadow-blue-200 flex items-center gap-3 group active:scale-95 duration-300"
              >
                Find Your Car
                <MoveRight className="h-5 w-5 group-hover:translate-x-2 transition" />
              </Link>
              <Link 
                href="/about" 
                className="border-gray-100 text-gray-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 hover:text-white transition shadow-2xl shadow-blue-200 flex items-center gap-3 group active:scale-95 duration-300"
              >
                How it Works
              </Link>
            </div>
          </div>

          {/* 2. Image Section */}
          <div className="flex-1 relative w-full h-[300px] sm:h-[400px] lg:h-[550px] overflow-visible lg:block hidden lg:flex">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-50 rounded-full blur-[100px] -z-10"></div>
            
            <div className="relative w-full h-full">
              <Image
                src="/images/hero/hero.png" 
                alt="Premium Rental Car"
                fill
                className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;