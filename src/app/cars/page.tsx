"use client";

import {
  Fuel,
  Gauge,
  Phone,
  Search,
  SlidersHorizontal,
  Users,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { carData } from "@/data/cars";

const BRANDS = ["Toyota", "BMW", "Audi", "Ford", "Ferrari", "Honda", "Lamborghini", "Mercedes"];

const CarsListingContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get("brand") || "");
  const [priceRange, setPriceRange] = useState(Number(searchParams.get("price")) || 1000);

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedBrand) params.set("brand", selectedBrand);
    if (searchTerm) params.set("search", searchTerm);
    if (priceRange < 1000) params.set("price", priceRange.toString());
    router.push(`/cars?${params.toString()}`, { scroll: false });
  }, [selectedBrand, searchTerm, priceRange, router]);

  const filteredCars = carData.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === "" || car.brand === selectedBrand;
    const matchesPrice = car.price <= priceRange;
    return matchesSearch && matchesBrand && matchesPrice;
  });

  return (
    <div className="min-h-screen py-16" style={{ background: "#f8f9fa" }}>
      <div className="container mx-auto px-4 md:px-6">

        {/* ── Page Header ── */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4"
            style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.2)" }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#f59e0b" }} />
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#d97706" }}>Our Fleet</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900">
            Browse <span style={{ color: "#f59e0b" }}>Premium</span> Cars
          </h1>
          <p className="mt-2 text-sm text-slate-400 font-medium">Find your perfect luxury ride from our curated collection.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* ════════════ SIDEBAR ════════════ */}
          <aside className="w-full lg:w-[300px] shrink-0">
            <div className="bg-white p-7 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

              {/* header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-base font-black text-slate-900 flex items-center gap-2.5 uppercase tracking-tight">
                  <SlidersHorizontal className="h-4 w-4" style={{ color: "#f59e0b" }} />
                  Filters
                </h2>
                <button
                  onClick={() => { setSelectedBrand(""); setSearchTerm(""); setPriceRange(1000); }}
                  className="text-[10px] font-black uppercase tracking-widest transition-colors hover:text-slate-900"
                  style={{ color: "#d97706" }}>
                  Reset All
                </button>
              </div>

              {/* ── Brand ── */}
              <div className="mb-8">
                <p className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-3">Select Brand</p>
                <div className="flex flex-col gap-2">
                  {BRANDS.map((brand) => {
                    const active = selectedBrand === brand;
                    return (
                      <button key={brand} onClick={() => setSelectedBrand(active ? "" : brand)}
                        className="flex items-center justify-between px-4 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all duration-250 border"
                        style={active
                          ? { background: "#111827", borderColor: "#111827", color: "#fff", boxShadow: "0 4px 12px rgba(17,24,39,0.25)" }
                          : { background: "#f9fafb", borderColor: "transparent", color: "#64748b" }
                        }>
                        {brand}
                        {active && <div className="h-2 w-2 rounded-full" style={{ background: "#f59e0b" }} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── Price ── */}
              <div className="mb-8 pt-6" style={{ borderTop: "1px solid #f1f5f9" }}>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[10px] font-black uppercase tracking-[3px] text-slate-400">Max Price</p>
                  <span className="text-xl font-black text-slate-900">${priceRange}</span>
                </div>

                <style>{`
                  .amber-slider { -webkit-appearance:none; appearance:none; width:100%; height:4px; border-radius:2px; background:#e2e8f0; outline:none; }
                  .amber-slider::-webkit-slider-thumb { -webkit-appearance:none; appearance:none; width:20px; height:20px; border-radius:50%; background:#fff; border:3px solid #f59e0b; cursor:pointer; box-shadow:0 2px 6px rgba(245,158,11,0.35); }
                  .amber-slider::-moz-range-thumb { width:20px; height:20px; border-radius:50%; background:#fff; border:3px solid #f59e0b; cursor:pointer; box-shadow:0 2px 6px rgba(245,158,11,0.35); }
                `}</style>
                <input type="range" min="100" max="1000" step="50" value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full amber-slider cursor-pointer" />
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] font-black text-slate-400">$100</span>
                  <span className="text-[10px] font-black text-slate-400">$1000</span>
                </div>
              </div>

              {/* ── Support ── */}
              <div className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "#111827" }}>
                <div className="p-3 rounded-xl flex items-center justify-center" style={{ background: "#f59e0b" }}>
                  <Phone className="h-4 w-4 text-slate-900" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest leading-none mb-1" style={{ color: "#f59e0b" }}>Support</p>
                  <p className="text-sm font-black text-white leading-none">+880 123 456</p>
                </div>
              </div>
            </div>
          </aside>

          {/* ════════════ MAIN GRID ════════════ */}
          <div className="flex-1 space-y-8">

            {/* search */}
            <div className="relative group w-full max-w-2xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-amber-500 transition-colors duration-300" />
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search premium models..."
                className="w-full pl-16 pr-6 py-5 rounded-2xl bg-white border border-slate-100 outline-none text-slate-900 text-base shadow-sm focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 placeholder-slate-300" />
            </div>

            {/* ── Car Cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {filteredCars.map((car) => (
                <div key={car.id}
                  className="group bg-white rounded-3xl border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/60"
                  style={{ willChange: "transform" }}>

                  {/* image area */}
                  <div className="relative h-60 overflow-hidden" style={{ background: "#f1f5f9" }}>
                    <Image src={car.image} alt={car.name} fill className="object-contain p-8 group-hover:scale-110 transition-transform duration-500 ease-out" />

                    {/* brand badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-sm border border-slate-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{car.brand}</span>
                    </div>

                    {/* price badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-sm border border-slate-100">
                      <span className="text-[11px] font-black text-slate-900">${car.price}<span className="text-slate-400 font-bold">/day</span></span>
                    </div>

                    {/* bottom accent line on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                  </div>

                  {/* content */}
                  <div className="flex flex-col flex-grow p-6">

                    {/* name + stars */}
                    <div className="mb-4">
                      <h3 className="text-xl font-black text-slate-900 leading-tight">{car.name}</h3>
                      <div className="flex items-center gap-0.5 mt-1.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" style={{ color: "#f59e0b" }} />)}
                        <span className="text-[10px] font-black text-slate-400 ml-1.5">5.0</span>
                      </div>
                    </div>

                    {/* specs row */}
                    <div className="grid grid-cols-3 gap-2 py-5 mb-5 mt-auto" style={{ borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,158,11,0.1)" }}>
                          <Fuel className="h-4 w-4" style={{ color: "#f59e0b" }} />
                        </div>
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{car.type}</span>
                      </div>
                      <div className="flex flex-col items-center gap-2" style={{ borderLeft: "1px solid #f1f5f9", borderRight: "1px solid #f1f5f9" }}>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,158,11,0.1)" }}>
                          <Gauge className="h-4 w-4" style={{ color: "#f59e0b" }} />
                        </div>
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{car.trans}</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,158,11,0.1)" }}>
                          <Users className="h-4 w-4" style={{ color: "#f59e0b" }} />
                        </div>
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{car.seats} Seats</span>
                      </div>
                    </div>

                    {/* CTA button */}
                    <Link href={`/cars/${car.id}`}
                      className="block w-full text-center py-3.5 rounded-xl font-black uppercase tracking-[2px] text-xs text-white transition-all duration-300 active:scale-95 mt-auto"
                      style={{ background: "linear-gradient(135deg, #111827, #1f2937)", boxShadow: "0 2px 8px rgba(17,24,39,0.2)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, #f59e0b, #f97316)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 14px rgba(245,158,11,0.35)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, #111827, #1f2937)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 8px rgba(17,24,39,0.2)"; }}>
                      Details View
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Empty State ── */}
            {filteredCars.length === 0 && (
              <div className="text-center py-28 bg-white rounded-3xl border border-dashed border-slate-200">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(245,158,11,0.08)" }}>
                  <Search className="h-7 w-7" style={{ color: "#f59e0b" }} />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">No Cars Found</h3>
                <p className="text-slate-400 text-sm mt-1.5 max-w-xs mx-auto">Adjust your filters to discover more luxury vehicles in our fleet.</p>
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
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#f8f9fa" }}>
        <div className="text-center">
          <div className="text-2xl font-black text-slate-900 uppercase tracking-[4px] animate-pulse">Loading Fleet</div>
          <div className="mt-3 flex justify-center gap-1.5">
            {[0,1,2].map(i => <div key={i} className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#f59e0b", animationDelay: `${i * 0.15}s` }} />)}
          </div>
        </div>
      </div>
    }>
      <CarsListingContent />
    </Suspense>
  );
}