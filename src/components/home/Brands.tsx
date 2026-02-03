"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Brands = () => {
  const brands = [
    { name: "Audi", src: "/images/brands/audi.png" },
    { name: "BMW", src: "/images/brands/bmw.png" },
    { name: "Ferrari", src: "/images/brands/ferrari.png" },
    { name: "Ford", src: "/images/brands/ford.png" },
    { name: "Toyota", src: "/images/brands/toyota.png" },
    { name: "Honda", src: "/images/brands/honda.png" },
    { name: "Lamborghini", src: "/images/brands/Lamborghini.png" },
    { name: "Mercedes", src: "/images/brands/Mercedes.png" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl" />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-orange-600 fill-orange-600" />
            <span className="text-orange-700 font-bold text-xs uppercase tracking-wider">
              Trusted Partners
            </span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-2">
            Available Premium Brands
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Choose from the world's most prestigious automotive brands
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-orange-200 overflow-hidden">
                {/* Gradient Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />

                {/* Logo Container */}
                <div className="relative w-full h-16 lg:h-20">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                  />
                </div>

                {/* Brand Name (shows on hover) */}
                <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {brand.name}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </div>

              {/* Floating Dots */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-500 blur-sm"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-2xl shadow-lg border border-slate-100">
            <div>
              <div className="text-2xl font-black text-slate-900">8+</div>
              <div className="text-xs text-slate-500 font-semibold">Premium Brands</div>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <div className="text-2xl font-black text-slate-900">240+</div>
              <div className="text-xs text-slate-500 font-semibold">Luxury Vehicles</div>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <div className="text-2xl font-black text-slate-900">10k+</div>
              <div className="text-xs text-slate-500 font-semibold">Happy Customers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;