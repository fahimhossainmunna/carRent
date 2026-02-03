"use client";

import Image from "next/image";
import Link from "next/link";
import { Gauge, Fuel, Users, ArrowRight, Star } from "lucide-react";
import { carData } from "@/data/cars"; 

const FeaturedCars = () => {
  const brands = ["Audi", "BMW", "Toyota", "Mercedes", "Ferrari", "Lamborghini"];
  
  const displayedCars = brands.map(brand => 
    carData.find(c => c.brand === brand) || carData[0]
  ).slice(0, 6);

  return (
    <section className="py-15 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-[11px] font-black text-amber-500 uppercase tracking-[4px]">Our Premium Fleet</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
              Explore Our <span className="text-amber-500">Featured</span> Cars
            </h3>
          </div>
          <Link href="/cars" className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-amber-500 hover:text-slate-900 transition-all duration-500 shadow-xl">
            View All Vehicles <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* --- Fixed Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {displayedCars.map((car, index) => (
            <div key={index} className="group bg-white border border-gray-100 rounded-[45px] p-6 hover:shadow-2xl transition-all duration-500 flex flex-col">
              
              {/* Image Container with Fixed Height */}
              <div className="relative w-full h-[220px] bg-[#F6F7F9] rounded-[35px] overflow-hidden mb-8 flex-shrink-0">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">
                  {car.brand}
                </div>
              </div>

                 {/* =========== */}
              <div className="flex flex-col flex-grow space-y-6">
                <div className="flex justify-between items-start min-h-[60px]"> 
                  <div>
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter line-clamp-2">
                      {car.name}
                    </h4>
                    <div className="flex items-center gap-1 mt-1 text-amber-500">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-slate-900 text-xl font-black">${car.price}</span>
                    <span className="text-gray-400 text-[9px] font-bold uppercase block tracking-widest">/ day</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 border-y border-gray-50 py-6 mt-auto">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <Fuel className="h-5 w-5 text-amber-500" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{car.type}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 border-x border-gray-50 text-center">
                    <Gauge className="h-5 w-5 text-amber-500" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{car.trans}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <Users className="h-5 w-5 text-amber-500" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{car.seats} Seats</span>
                  </div>
                </div>

                <Link 
                  href={`/cars/${car.id}`}
                  className="block w-full text-center bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[2px] text-xs hover:bg-amber-500 hover:text-slate-900 transition-all duration-500 mt-auto"
                >
                  Rent Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;