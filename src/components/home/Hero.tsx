"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight, Star, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left space-y-6 z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/80 border border-orange-200 rounded-full"
            >
              <Sparkles className="h-3.5 w-3.5 text-orange-600 fill-orange-600" />
              <span className="text-orange-700 font-bold text-xs uppercase tracking-wider">
                Over 10,000+ Happy Customers
              </span>
              <div className="flex -space-x-0.5 ml-1">
                <Star className="h-3 w-3 text-orange-500 fill-orange-500" />
                <Star className="h-3 w-3 text-orange-500 fill-orange-500" />
                <Star className="h-3 w-3 text-orange-500 fill-orange-500" />
              </div>
            </motion.div>
            
            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight"
            >
              <span className="text-slate-900">Drive Your</span>
              <br />
              <span className="text-orange-500">Dreams With</span>
              <br />
              <span className="text-slate-900"></span>
              
              <span className="text-slate-900"> Premium</span>
              <br />
              <span className="text-slate-900">Style.</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm lg:text-base text-slate-600 max-w-[500px] mx-auto lg:mx-0 leading-relaxed"
            >
              Experience the ultimate freedom with our luxury car rental service. 
              Top-notch vehicles, seamless booking, and 24/7 support for your journey.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 lg:gap-5 justify-center lg:justify-start"
            >
              {[
                { icon: CheckCircle2, text: "24/7 Support" },
                { icon: CheckCircle2, text: "Best Price Guarantee" },
                { icon: CheckCircle2, text: "Premium Fleet" }
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <feature.icon className="h-4 w-4 text-orange-600" />
                  <span className="text-xs font-semibold text-slate-700">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start pt-2"
            >
              <Link 
                href="/cars" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 active:scale-95"
              >
                Find Your Car
                <MoveRight className="h-4 w-4" />
              </Link>

              <Link 
                href="/about" 
                className="bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 active:scale-95"
              >
                How it Works
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative w-full h-[300px] sm:h-[350px] lg:h-[450px] xl:h-[500px]"
          >
            {/* Rating Badge - Fixed Position */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-white rounded-xl shadow-xl p-3 border border-orange-100 z-20"
            >
              <div className="flex items-center gap-2">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Star className="h-4 w-4 text-white fill-white" />
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900">4.9</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Car Image Container */}
            <div className="relative w-full h-full">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/hero/hero.png" 
                  alt="Premium Rental Car"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;