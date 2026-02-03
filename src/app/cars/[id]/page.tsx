"use client";

import { carData } from "@/data/cars";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Fuel,
  Gauge,
  Heart,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function CarDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const carId = Number(resolvedParams.id);
  const car = carData.find((item) => item.id === carId);

  if (!car)
    return <div className="text-center py-40 font-black text-slate-900 uppercase tracking-widest">Vehicle Not Found</div>;

  return (
    <div className="min-h-screen bg-[#F6F7F9] pb-24">
      <div className="container mx-auto px-4 md:px-6 pt-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* 1. Left Content Section */}
          <div className="flex-1 space-y-10">
            {/* Main Image Showcase */}
            <div className="bg-white p-10 rounded-[50px] border border-gray-100 shadow-2xl shadow-slate-200/50 relative group">
              <div className="absolute top-10 right-10 z-10">
                <button className="bg-slate-50 p-4 rounded-2xl hover:bg-red-50 transition-colors group/heart shadow-sm">
                  <Heart className="h-6 w-6 text-slate-300 group-hover/heart:text-red-500 transition-colors" />
                </button>
              </div>
              <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Premium Specifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Fuel, label: "Fuel Type", value: car.type },
                { icon: Gauge, label: "Transmission", value: car.trans },
                { icon: Users, label: "Capacity", value: `${car.seats} Person` },
                { icon: ShieldCheck, label: "Insurance", value: "Fully Insured" },
              ].map((spec, i) => (
                <div key={i} className="bg-white p-8 rounded-[40px] border border-gray-100 flex flex-col items-center text-center shadow-xl shadow-slate-100/50">
                  <div className="bg-amber-50 p-4 rounded-2xl mb-4">
                    <spec.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-[2px] mb-2">{spec.label}</p>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Vehicle Description */}
            <div className="bg-white p-10 rounded-[50px] border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Vehicle <span className="text-amber-500">Description</span></h2>
              <p className="text-slate-500 leading-relaxed font-medium text-lg">
                The {car.name} offers a perfect blend of power and luxury. Whether you're planning a weekend getaway or a business trip, this {car.brand} ensures a smooth and premium driving experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {["Air Conditioning", "GPS Navigation", "Bluetooth Connectivity", "Child Seat Available"].map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-sm font-black text-slate-700 uppercase tracking-tight">
                    <CheckCircle2 className="h-5 w-5 text-amber-500" /> {feat}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Right Sidebar: Booking */}
          <aside className="w-full lg:w-[450px] shrink-0">
            <div className="bg-white p-10 rounded-[50px] border border-gray-100 shadow-2xl shadow-slate-200/60 sticky top-24 space-y-10">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">{car.name}</h1>
                  <p className="text-amber-600 font-black text-[11px] uppercase tracking-[3px]">{car.brand} Premium Series</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-black text-slate-900 leading-none">${car.price}</p>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-2">per day</p>
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-4">
                <div className="p-5 bg-gray-50 rounded-[28px] border border-transparent hover:border-amber-200 transition-all space-y-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-500" /> Pickup Location
                  </p>
                  <p className="text-md font-black text-slate-900 uppercase tracking-tight">Dhaka International University</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-[28px] border border-transparent hover:border-amber-200 transition-all space-y-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-amber-500" /> Date Range
                  </p>
                  <p className="text-md font-black text-slate-900 uppercase tracking-tight">Select Booking Dates</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Link href={`/checkout?id=${car.id}`} className="block">
                  <button className="w-full bg-slate-900 text-white py-6 rounded-[30px] font-black text-lg hover:bg-amber-500 hover:text-slate-900 transition-all shadow-2xl shadow-slate-200 active:scale-95 uppercase tracking-[3px]">
                    Rent Now
                  </button>
                </Link>
                <div className="bg-amber-50 p-6 rounded-[30px] flex items-center gap-5 border border-amber-100">
                  <div className="bg-white p-4 rounded-2xl shadow-sm">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px]">Questions?</p>
                    <p className="text-lg font-black text-slate-900">+880 123 456 789</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Verified & Secure Booking</span>
              </div>
            </div>
          </aside>
        </div>

        {/* --- 3. Reviews Section --- */}
        <div className="mt-20 bg-white p-12 rounded-[50px] border border-gray-100 shadow-sm w-full">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Reviews</h3>
            <span className="bg-amber-500 text-slate-900 px-4 py-1.5 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-lg shadow-amber-200/50">13</span>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="h-20 w-20 rounded-[28px] bg-slate-100 shrink-0 overflow-hidden relative shadow-md">
                <Image src="/images/Profill.png" alt="Alex" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-black text-slate-900 text-xl uppercase tracking-tight">Alex Stanton</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] mt-1">CEO at Bukalapak</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">21 July 2022</p>
                    <div className="flex text-amber-500 gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed font-medium italic">
                  "The service was excellent! The {car.name} was in perfect condition and the booking process was very smooth."
                </p>
              </div>
            </div>
            <button className="w-full py-4 text-slate-400 font-black text-[11px] uppercase tracking-[4px] flex items-center justify-center gap-3 hover:text-amber-500 transition-colors border-t border-gray-50">
              Show All Reviews <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
        {/* --- 4. Recommendation Car Slider --- */}
<div className="mt-24 space-y-10 w-full max-w-[1320px] mx-auto overflow-hidden">
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end px-4 gap-6">
    <div className="space-y-2">
      <p className="text-[11px] font-black text-amber-500 uppercase tracking-[4px]">More For You</p>
      <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">
        Recommendation <span className="text-amber-500">Cars</span>
      </h3>
    </div>
    
    {/* Navigation Buttons */}
    <div className="flex gap-3">
      <button
        onClick={() => document.getElementById("recommendation-slider")?.scrollBy({ left: -320, behavior: "smooth" })}
        className="p-4 bg-white rounded-2xl border border-gray-100 shadow-xl hover:bg-slate-900 hover:text-white transition-all active:scale-90"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => document.getElementById("recommendation-slider")?.scrollBy({ left: 320, behavior: "smooth" })}
        className="p-4 bg-white rounded-2xl border border-gray-100 shadow-xl hover:bg-slate-900 hover:text-white transition-all active:scale-90"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  </div>

  {/* Slider Container */}
  <div
    id="recommendation-slider"
    className="flex gap-10 overflow-x-auto snap-x snap-mandatory px-4 pb-12 scroll-smooth no-scrollbar"
    style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
  >
    {carData.filter((c) => c.id !== car.id).map((item) => (
      <div 
        key={item.id} 
        className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] snap-start bg-white p-7 rounded-[40px] border border-gray-100 shadow-2xl shadow-slate-200/40 hover:shadow-amber-100 transition-all group/card flex-shrink-0"
      >
        <div className="flex justify-between items-start mb-6">
          <h4 className="font-black text-xl text-slate-900 uppercase tracking-tighter leading-tight">
            {item.name}
          </h4>
          <Heart className="h-5 w-5 text-slate-200 group-hover/card:text-red-500 transition-colors cursor-pointer" />
        </div>

        {/* Image Container */}
        <div className="relative h-44 w-full mb-8">
          <Image 
            src={item.image} 
            alt={item.name} 
            fill 
            className="object-contain p-2 group-hover/card:scale-110 transition-transform duration-700" 
          />
        </div>

        {/* Specs Row */}
        <div className="flex items-center justify-between border-y border-gray-50 py-5 mb-8 mt-auto">
          <div className="flex flex-col items-center gap-1.5">
            <Fuel className="h-4 w-4 text-amber-500" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.type}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 border-x border-gray-50 px-4">
            <Gauge className="h-4 w-4 text-amber-500" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.trans}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Users className="h-4 w-4 text-amber-500" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.seats} Seats</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-black text-2xl text-slate-900">${item.price}</p>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">/ day</p>
          </div>
          <Link href={`/cars/${item.id}`}>
            <button className="bg-slate-900 text-white px-7 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg">
              Details
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
}