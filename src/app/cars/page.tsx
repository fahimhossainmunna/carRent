"use client";

import { useState, useEffect, Suspense } from "react"; 
import { useSearchParams, useRouter } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";

const carData = [
  { id: 1, name: "BMW M4 Competition", brand: "BMW", price: 250, image: "/images/cars/bmw1.png" },
  { id: 2, name: "BMW Z4 Roadster", brand: "BMW", price: 200, image: "/images/cars/bmw2.png" },
  { id: 3, name: "Audi RS7 Sportback", brand: "Audi", price: 220, image: "/images/cars/audi1.png" },
  { id: 4, name: "Audi Q7 Luxury", brand: "Audi", price: 180, image: "/images/cars/adui2.png" },
  { id: 5, name: "Toyota Land Cruiser", brand: "Toyota", price: 150, image: "/images/cars/toyota1.png" },
  { id: 6, name: "Toyota Prado TX", brand: "Toyota", price: 130, image: "/images/cars/toyota2.png" },
  { id: 7, name: "Ferrari SF90", brand: "Ferrari", price: 500, image: "/images/cars/ferrari1.png" },
  { id: 8, name: "Ford Mustang GT", brand: "Ford", price: 190, image: "/images/cars/ford1.png" },
];

const CarsListingContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialBrand = searchParams.get("brand") || "";
  const initialSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedBrand) params.set("brand", selectedBrand);
    if (searchTerm) params.set("search", searchTerm);
    
    router.push(`/cars?${params.toString()}`, { scroll: false });
  }, [selectedBrand, searchTerm, router]);

  const filteredCars = carData.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === "" || car.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Filter */}
          <aside className="w-full lg:w-[320px] shrink-0">
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-8">
                <span className="flex items-center gap-2 font-bold text-gray-900">
                  <SlidersHorizontal className="h-5 w-5 text-blue-600" /> Filters
                </span>
                <button 
                  onClick={() => {setSelectedBrand(""); setSearchTerm("");}} 
                  className="text-xs font-bold text-blue-600 hover:underline"
                >Reset</button>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Select Brand</p>
                <div className="grid grid-cols-1 gap-3">
                  {['Toyota', 'BMW', 'Audi', 'Ford', 'Ferrari'].map((brand) => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="brand"
                        checked={selectedBrand === brand}
                        onChange={() => setSelectedBrand(brand)}
                        className="w-5 h-5 border-gray-300 text-blue-600 cursor-pointer" 
                      />
                      <span className={`font-semibold transition ${selectedBrand === brand ? 'text-blue-600' : 'text-gray-600'}`}>
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content Section */}
          <div className="flex-1 space-y-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search premium cars..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 bg-white outline-none focus:border-blue-600 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCars.map((car) => (
                <div key={car.id} className="bg-white p-4 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className="relative h-52 w-full bg-gray-50 rounded-2xl overflow-hidden mb-4">
                    <Image src={car.image} alt={car.name} fill className="object-contain p-6 group-hover:scale-110 transition duration-500" />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)] px-2">{car.name}</h3>
                  <div className="flex justify-between items-center mt-4 px-2">
                    <p className="text-blue-600 font-black text-xl">${car.price} <span className="text-gray-400 text-sm font-medium">/ day</span></p>
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default function CarsListingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold text-blue-600 animate-pulse">Loading Cars...</p>
      </div>
    }>
      <CarsListingContent />
    </Suspense>
  );
}