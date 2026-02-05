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
  Zap,
  Award,
  Shield,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

export default function CarDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const carId = Number(resolvedParams.id);
  const car = carData.find((item) => item.id === carId);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="h-10 w-10 text-slate-400" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">
            Vehicle Not Found
          </h2>
          <p className="text-slate-500">The requested vehicle doesn't exist</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fafbfc 0%, #fff 50%, #fef3c7 100%)" }}>
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 pt-20 pb-32 relative z-10">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/cars" className="text-slate-400 hover:text-amber-500 font-semibold transition-colors">
            Cars
          </Link>
          <ChevronRight className="h-4 w-4 text-slate-300" />
          <span className="text-slate-900 font-black">{car.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            {/* Premium Image Showcase */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-white/80 backdrop-blur-xl p-12 rounded-[45px] border border-slate-200/50 shadow-2xl overflow-hidden group"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Favorite Button */}
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-8 right-8 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-2xl hover:scale-110 transition-all shadow-lg group/heart"
              >
                <Heart 
                  className={`h-6 w-6 transition-all ${isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-300 group-hover/heart:text-red-500'}`} 
                />
              </button>

              {/* Badge */}
              <div className="absolute top-8 left-8 z-20 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg">
                <span className="text-white font-black text-xs uppercase tracking-[2px] flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Premium
                </span>
              </div>

              {/* Main Image */}
              <div className="relative h-[450px] md:h-[550px] w-full">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain p-8 group-hover:scale-110 group-hover:rotate-2 transition-all duration-1000"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                {[
                  { icon: Zap, label: "Performance", value: "High" },
                  { icon: Shield, label: "Safety", value: "5 Star" },
                  { icon: Award, label: "Rating", value: "4.9/5" },
                ].map((stat, i) => (
                  <div 
                    key={i}
                    className="flex-1 bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-white/50 shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-2.5 rounded-xl">
                        <stat.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider">{stat.label}</p>
                        <p className="text-xs font-black text-slate-900">{stat.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Premium Specs Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-5"
            >
              {[
                { icon: Fuel, label: "Fuel Type", value: car.type, gradient: "from-blue-500 to-cyan-500" },
                { icon: Gauge, label: "Transmission", value: car.trans, gradient: "from-purple-500 to-pink-500" },
                { icon: Users, label: "Capacity", value: `${car.seats} Person`, gradient: "from-green-500 to-emerald-500" },
                { icon: ShieldCheck, label: "Insurance", value: "Full Coverage", gradient: "from-orange-500 to-red-500" },
              ].map((spec, i) => (
                <div 
                  key={i} 
                  className="relative group/spec bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover/spec:opacity-10 transition-opacity duration-500`} />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`bg-gradient-to-br ${spec.gradient} p-4 rounded-2xl mb-4 group-hover/spec:scale-110 transition-transform shadow-lg`}>
                      <spec.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-[2px] mb-2">
                      {spec.label}
                    </p>
                    <p className="text-sm font-black text-slate-900 uppercase tracking-tight">
                      {spec.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Premium Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-xl p-10 rounded-[45px] border border-slate-200/50 shadow-lg space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
                  Vehicle <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Overview</span>
                </h2>
              </div>
              
              <p className="text-slate-600 leading-relaxed font-medium text-base">
                The <span className="font-black text-slate-900">{car.name}</span> represents the pinnacle of automotive excellence. 
                Combining breathtaking performance with luxurious comfort, this {car.brand} masterpiece delivers 
                an unparalleled driving experience that exceeds every expectation.
              </p>

              {/* Premium Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                {[
                  "Premium Air Conditioning",
                  "Advanced GPS Navigation",
                  "Bluetooth Connectivity",
                  "Child Seat Available",
                  "24/7 Roadside Assistance",
                  "Unlimited Mileage"
                ].map((feat, i) => (
                  <div 
                    key={feat} 
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-transparent rounded-2xl group/feat hover:from-amber-50 transition-all"
                  >
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-2 rounded-xl shadow-md group-hover/feat:scale-110 transition-transform">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-700 group-hover/feat:text-slate-900 transition-colors">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar - Premium Booking */}
          <aside className="w-full lg:w-[480px] shrink-0">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-xl p-10 rounded-[45px] border border-slate-200/50 shadow-2xl sticky top-24 space-y-8"
            >
              {/* Header */}
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full mb-3 border border-amber-200/50">
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                      <span className="text-[10px] font-black text-amber-600 uppercase tracking-[2px]">
                        {car.brand} Premium Series
                      </span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                      {car.name}
                    </h1>
                  </div>
                </div>

                {/* Price Display */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <p className="text-white/60 text-xs font-bold uppercase tracking-[2px] mb-2">
                      Daily Rate
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">${car.price}</span>
                      <span className="text-white/40 text-sm font-bold">/day</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Fields */}
              <div className="space-y-4">
                <div className="group p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl border border-emerald-100/50 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                    </div>
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[2px]">
                      Pickup Location
                    </p>
                  </div>
                  <p className="text-base font-black text-slate-900 pl-14">
                    Dhaka International University
                  </p>
                </div>

                <div className="group p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border border-blue-100/50 hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-[2px]">
                      Date Range
                    </p>
                  </div>
                  <p className="text-base font-black text-slate-900 pl-14">
                    Select Booking Dates
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Link href={`/checkout?id=${car.id}`}>
                  <button className="relative w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-6 rounded-3xl font-black text-base hover:shadow-2xl hover:scale-105 transition-all overflow-hidden group/btn uppercase tracking-[3px]">
                    <span className="relative z-10">Reserve Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </button>
                </Link>

                {/* Contact Card */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-3xl flex items-center gap-5 border border-amber-100/50 shadow-lg">
                  <div className="bg-white p-4 rounded-2xl shadow-md">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-amber-600 uppercase tracking-[2px] mb-1">
                      Need Help?
                    </p>
                    <p className="text-lg font-black text-slate-900">+880 123 456 789</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-100">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[2px]">
                  Verified & Secure
                </span>
              </div>
            </motion.div>
          </aside>
        </div>

        {/* Reviews Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 bg-white/80 backdrop-blur-xl p-12 rounded-[45px] border border-slate-200/50 shadow-lg"
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                Customer Reviews
              </h3>
            </div>
            <div className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg">
              <Star className="h-4 w-4 text-white fill-white" />
              <span className="text-white font-black text-sm">4.9</span>
              <span className="text-white/80 text-xs font-bold">(13 reviews)</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 rounded-3xl">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 shrink-0 overflow-hidden relative shadow-lg">
                <Image src="/images/Profill.png" alt="Alex" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-black text-slate-900 text-xl uppercase tracking-tight">
                      Alex Stanton
                    </h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mt-1">
                      CEO at Bukalapak
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">
                      21 July 2022
                    </p>
                    <div className="flex text-amber-500 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  "Outstanding service! The {car.name} exceeded all expectations. The vehicle was 
                  immaculate, and the entire booking process was seamless. Highly recommended!"
                </p>
              </div>
            </div>

            <button className="w-full py-5 text-slate-500 font-bold text-sm uppercase tracking-[2px] flex items-center justify-center gap-3 hover:text-amber-500 transition-colors border-t border-slate-100 rounded-2xl hover:bg-slate-50">
              Show All Reviews <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Recommendation Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-24 space-y-10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                <p className="text-xs font-black text-amber-500 uppercase tracking-[3px]">
                  Explore More
                </p>
              </div>
              <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
                Similar <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Vehicles</span>
              </h3>
            </div>
            
            {/* Navigation */}
            <div className="flex gap-3">
              {[ChevronLeft, ChevronRight].map((Icon, i) => (
                <button
                  key={i}
                  onClick={() => 
                    document.getElementById("recommendation-slider")?.scrollBy({ 
                      left: i === 0 ? -380 : 380, 
                      behavior: "smooth" 
                    })
                  }
                  className="p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-lg hover:bg-slate-900 hover:text-white hover:scale-110 transition-all active:scale-95"
                >
                  <Icon className="h-6 w-6" />
                </button>
              ))}
            </div>
          </div>

          {/* Slider */}
          <div
            id="recommendation-slider"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-5 scroll-smooth no-scrollbar"
          >
            {carData.filter((c) => c.id !== car.id).map((item) => (
              <div 
                key={item.id} 
                className="min-w-[395px] snap-start bg-white/80 backdrop-blur-xl p-7 rounded-[35px] border border-slate-200/50  hover:border-amber-500/50 transition-all group/card flex-shrink-0 hover:-translate-y-2 duration-500"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-black text-xl text-slate-900 uppercase tracking-tight leading-tight mb-1">
                      {item.name}
                    </h4>
                    <p className="text-[10px] font-black text-amber-500 uppercase tracking-[2px]">
                      {item.brand}
                    </p>
                  </div>
                  <Heart className="h-5 w-5 text-slate-200 group-hover/card:text-red-500 transition-colors cursor-pointer" />
                </div>

                {/* Image */}
                <div className="relative h-44 w-full mb-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-contain p-6 group-hover/card:scale-110 group-hover/card:rotate-2 transition-all duration-700" 
                  />
                </div>

                {/* Specs */}
                <div className="flex items-center justify-between border-y border-slate-100 py-5 mb-6">
                  {[
                    { icon: Fuel, value: item.type },
                    { icon: Gauge, value: item.trans },
                    { icon: Users, value: `${item.seats}` }
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-2.5 rounded-xl shadow-md">
                        <spec.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-black text-3xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      ${item.price}
                    </p>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider">
                      per day
                    </p>
                  </div>
                  <Link href={`/cars/${item.id}`}>
                    <button className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[2px] hover:from-amber-500 hover:to-orange-500 hover:scale-110 transition-all shadow-lg">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}