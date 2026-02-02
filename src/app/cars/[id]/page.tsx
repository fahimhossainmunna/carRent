"use client";

import { use } from "react";
import { carData } from "@/data/cars";
import {
  Fuel,
  Gauge,
  Users,
  Heart,
  Star,
  ShieldCheck,
  MapPin,
  Calendar,
  CheckCircle2,
  Phone,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CarDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const carId = Number(resolvedParams.id);
  const car = carData.find((item) => item.id === carId);

  if (!car)
    return <div className="text-center py-20 font-bold">Vehicle Not Found</div>;

  return (
    <div className="min-h-screen bg-[#F6F7F9] pb-20">
      <div className="container mx-auto px-4 md:px-6 pt-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* 1. Left Content Section: Showcase & Info */}
          <div className="flex-1 space-y-8">
            {/* Main Image Card */}
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm relative group">
              <div className="absolute top-8 right-8 z-10">
                <button className="bg-slate-50 p-3 rounded-full hover:bg-red-50 transition-colors group/heart">
                  <Heart className="h-6 w-6 text-gray-300 group-hover/heart:text-red-500 transition-colors" />
                </button>
              </div>
              <div className="relative h-[350px] md:h-[450px] w-full">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Fuel, label: "Fuel Type", value: car.type },
                { icon: Gauge, label: "Transmission", value: car.trans },
                {
                  icon: Users,
                  label: "Capacity",
                  value: `${car.seats} Person`,
                },
                {
                  icon: ShieldCheck,
                  label: "Insurance",
                  value: "Fully Insured",
                },
              ].map((spec, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-[32px] border border-gray-100 flex flex-col items-center text-center shadow-sm"
                >
                  <spec.icon className="h-6 w-6 text-blue-600 mb-3" />
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">
                    {spec.label}
                  </p>
                  <p className="text-sm font-black text-gray-900">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Car Description */}
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-4">
              <h2 className="text-2xl font-black text-gray-900">
                Vehicle Description
              </h2>
              <p className="text-gray-500 leading-relaxed font-medium">
                The {car.name} offers a perfect blend of power and luxury.
                Whether you're planning a weekend getaway or a business trip,
                this {car.brand} ensures a smooth and premium driving
                experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                {[
                  "Air Conditioning",
                  "GPS Navigation",
                  "Bluetooth Connectivity",
                  "Child Seat Available",
                ].map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 text-sm font-bold text-gray-600"
                  >
                    <CheckCircle2 className="h-4 w-4 text-blue-600" /> {feat}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Right Sidebar: Booking & Support */}
          <aside className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-2xl shadow-gray-200/40 sticky top-24 space-y-8">
              {/* Header Price */}
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-black text-gray-900 uppercase leading-none">
                    {car.name}
                  </h1>
                  <p className="text-blue-600 font-bold text-sm mt-1">
                    {car.brand} Premium Series
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-blue-600 leading-none">
                    ${car.price}
                  </p>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                    per day
                  </p>
                </div>
              </div>

              {/* Booking Inputs */}
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100 space-y-1">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-blue-600" /> Pickup Location
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    Dhaka International University
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-gray-100 space-y-1">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-blue-600" /> Date Range
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    Select Booking Dates
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button className="w-full bg-gray-900 text-white py-5 rounded-[24px] font-black text-lg hover:bg-blue-600 transition-all shadow-xl active:scale-95 uppercase tracking-widest">
                  Rent Now
                </button>
                <div className="bg-blue-50/50 p-5 rounded-[24px] flex items-center gap-4 border border-blue-50">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Questions?
                    </p>
                    <p className="text-sm font-black text-gray-900">
                      +880 123 456 789
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Verified & Secure Booking
                </span>
              </div>
            </div>
          </aside>
        </div>
        {/* --- 3. Reviews Section --- */}
        <div className="mt-16 bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-sm w-full">
          <div className="flex items-center gap-3 mb-10">
            <h3 className="text-xl font-black text-gray-900">Reviews</h3>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-bold">
              13
            </span>
          </div>

          <div className="space-y-10">
            {/* Single Review Card */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="h-14 w-14 rounded-full bg-slate-100 shrink-0 overflow-hidden relative">
                <Image
                  src="/images/Profill.png"
                  alt="Alex"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-black text-gray-900 text-lg">
                      Alex Stanton
                    </h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      CEO at Bukalapak
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-gray-400 mb-1">
                      21 July 2022
                    </p>
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                      <Star className="h-4 w-4 text-gray-200" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  The service was excellent! The {car.name} was in perfect
                  condition and the booking process was very smooth. Highly
                  recommended for premium car rentals in Dhaka.
                </p>
              </div>
            </div>

            <button className="w-full py-2 text-gray-400 font-bold text-sm flex items-center justify-center gap-2 hover:text-blue-600 transition">
              Show All <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* --- 4. Recommendation Car Section with Slider --- */}
        <div className="mt-20 space-y-8 w-full">
          <div className="flex justify-between items-center px-2">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[2px]">
              Recommendation Car
            </h3>
            <Link
              href="/cars"
              className="text-blue-600 font-bold text-sm hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="relative group">
            {/* Horizontal Scroll Container */}
            <div
              id="recommendation-slider"
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-2 pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
            >
              {carData
                .filter((c) => c.id !== car.id)
                .slice(0, 6)
                .map((item) => (
                  <div
                    key={item.id}
                    className="min-w-[320px] md:min-w-[380px] snap-start bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group/card"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h4 className="font-black text-xl text-gray-900 leading-tight">
                        {item.name}
                      </h4>
                      <Heart className="h-6 w-6 text-gray-300 group-hover/card:text-red-500 cursor-pointer transition-colors" />
                    </div>

                    <div className="relative h-44 w-full mb-8">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2 group-hover/card:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-50 pb-6">
                      <span className="flex items-center gap-1.5">
                        <Fuel className="h-4 w-4 text-blue-500" /> {item.type}
                      </span>
                      <span className="flex items-center gap-1.5 border-x px-4">
                        <Gauge className="h-4 w-4 text-blue-500" /> {item.trans}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-blue-500" /> {item.seats}{" "}
                        Seats
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="font-black text-2xl text-gray-900">
                        ${item.price}/
                        <span className="text-xs text-gray-400 font-normal">
                          day
                        </span>
                      </p>
                      <Link href={`/cars/${item.id}`}>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-blue-700 transition shadow-lg shadow-blue-100">
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
    </div>
  );
}
