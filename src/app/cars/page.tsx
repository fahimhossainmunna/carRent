"use client";

import { Search, SlidersHorizontal, Star, Zap, ShieldCheck, Compass } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import Link from "next/link";
import { useCarFilters } from "@/hooks/useCarFilters";

const BRANDS = ["Toyota", "BMW", "Audi", "Ford", "Ferrari", "Honda", "Lamborghini", "Mercedes"];
const CATEGORIES = [
  { name: "All", icon: <Compass className="h-4 w-4" /> },
  { name: "SUV", icon: <ShieldCheck className="h-4 w-4" /> },
  { name: "Luxury", icon: <Star className="h-4 w-4" /> },
  { name: "Sport", icon: <Zap className="h-4 w-4" /> }
];

const CarsListingContent = () => {
  const {
    searchTerm, setSearchTerm,
    selectedBrand, setSelectedBrand,
    priceRange, setPriceRange,
    filteredCars
  } = useCarFilters();

  const resetFilters = () => {
    setSelectedBrand("");
    setSearchTerm("");
    setPriceRange(1000);
  };

  return (
    <div className="min-h-screen py-12" style={{ background: "#fdfdfe" }}>
      {/* Custom Styles */}
      <style>{`
        .sidebar-scroll::-webkit-scrollbar { width: 0px; background: transparent; }
        .sidebar-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .premium-input::placeholder { color: #cbd5e1; font-weight: 500; }
      `}</style>

      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-amber-200/50 mb-5 shadow-sm"
            style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.05))" }}>
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[3px] text-amber-700">The Royal Collection</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-none mb-3">
            Elite <span className="text-amber-500 italic">Fleet</span>
          </h1>
          <p className="text-slate-400 font-medium text-base max-w-2xl">
            Redefining luxury travel through a curated selection of world-class automotive engineering.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-[320px] shrink-0">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-50 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto sidebar-scroll">
              
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tight">
                  <SlidersHorizontal className="h-5 w-5 text-amber-500" /> Filters
                </h2>
                <button 
                  onClick={resetFilters} 
                  className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-600 transition-all"
                >
                  Clear All
                </button>
              </div>

              {/* Category Chips */}
              <div className="mb-8">
                <p className="text-[10px] font-black uppercase tracking-[3px] text-slate-300 mb-4">Type</p>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.map((cat) => (
                    <button 
                      key={cat.name} 
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 border border-transparent hover:border-amber-200 hover:bg-white transition-all text-[11px] font-black uppercase text-slate-500 hover:text-amber-600"
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Selection */}
              <div className="mb-8">
                <p className="text-[10px] font-black uppercase tracking-[3px] text-slate-300 mb-4">Brand</p>
                <div className="flex flex-col gap-2">
                  {BRANDS.map((brand) => (
                    <button 
                      key={brand} 
                      onClick={() => setSelectedBrand(selectedBrand === brand ? "" : brand)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-black text-xs uppercase border transition-all duration-300 ${
                        selectedBrand === brand 
                        ? 'bg-slate-900 border-slate-900 text-white shadow-lg' 
                        : 'bg-white border-slate-100 text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      {brand}
                      {selectedBrand === brand && (
                        <div className="h-2 w-2 rounded-full bg-amber-500 shadow-sm" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="pt-6 border-t border-slate-50">
                <div className="flex justify-between items-end mb-5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[3px] text-slate-300 mb-1">Price Cap</p>
                    <span className="text-2xl font-black text-slate-900 tracking-tight">${priceRange}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 pb-1">Per Day</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="1000" 
                  step="50" 
                  value={priceRange} 
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full cursor-pointer accent-slate-900 h-1.5 bg-slate-100 rounded-full appearance-none" 
                />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Search Bar */}
            <div className="relative group w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-amber-500 transition-all duration-300" />
              <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Find your next journey..." 
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-md focus:shadow-lg focus:ring-0 outline-none premium-input text-base font-medium transition-all duration-300" 
              />
            </div>

            {/* Cars Grid */}
            {filteredCars.length === 0 ? (
              <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-slate-200">
                <Search className="h-12 w-12 text-slate-200 mx-auto mb-4" />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">No Matches Found</h3>
                <p className="text-slate-400 mt-2 text-sm">Refine your filters to discover our elite collection.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCars.map((car) => (
                  <div 
                    key={car.id} 
                    className="group bg-white rounded-3xl border border-slate-50 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  >
                    {/* Image */}
                    <div className="relative h-64 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                      <Image 
                        src={car.image} 
                        alt={car.name} 
                        fill 
                        className="object-contain p-8 group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-xl shadow-sm border border-white/50">
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-900">
                          {car.brand}
                        </span>
                      </div>
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                          {car.name}
                        </h3>
                        <div className="flex flex-col items-end">
                          <span className="text-xl font-black text-amber-500">${car.price}</span>
                          <span className="text-[9px] font-bold text-slate-300 uppercase">Per Day</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                        ))}
                        <span className="text-[10px] font-black text-slate-400 ml-2 uppercase tracking-wider">
                          Premium
                        </span>
                      </div>

                      <Link 
                        href={`/cars/${car.id}`} 
                        className="relative overflow-hidden group/btn w-full text-center py-4 rounded-xl font-black uppercase tracking-[3px] text-xs text-white bg-slate-900 mt-auto transition-all duration-300 hover:bg-amber-500 hover:shadow-lg"
                      >
                        <span className="relative z-10">Details View</span>
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CarsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
          <span className="font-black text-slate-900 uppercase tracking-[4px] text-xs">Loading Fleet</span>
        </div>
      </div>
    }>
      <CarsListingContent />
    </Suspense>
  );
}