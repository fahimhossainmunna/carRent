"use client";

import {
  Fuel,
  Gauge,
  Phone,
  Search,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";

const carData = [
  // --- AUDI ---
  {
    id: 1,
    name: "Audi R8 Spyder",
    brand: "Audi",
    price: 350,
    image: "/images/cars/audi2.png",
    type: "Octane",
    trans: "Auto",
    seats: 2,
  },
  {
    id: 2,
    name: "Audi RS7 Sportback",
    brand: "Audi",
    price: 280,
    image: "/images/cars/audi1.png",
    type: "Petrol",
    trans: "Auto",
    seats: 5,
  },
  {
    id: 3,
    name: "Audi A8 L Luxury",
    brand: "Audi",
    price: 220,
    image: "/images/cars/audi3.png",
    type: "Diesel",
    trans: "Auto",
    seats: 5,
  },
  {
    id: 4,
    name: "Audi A4 Sedan",
    brand: "Audi",
    price: 150,
    image: "/images/cars/audi4.png",
    type: "Petrol",
    trans: "Auto",
    seats: 5,
  },
  {
    id: 5,
    name: "Audi S3 Sportback",
    brand: "Audi",
    price: 180,
    image: "/images/cars/audi5.png",
    type: "Petrol",
    trans: "Auto",
    seats: 5,
  },
  {
    id: 6,
    name: "Audi R8 Coupe",
    brand: "Audi",
    price: 340,
    image: "/images/cars/audi6.png",
    type: "Octane",
    trans: "Auto",
    seats: 2,
  },
  {
    id: 7,
    name: "Audi Q7 Quattro",
    brand: "Audi",
    price: 260,
    image: "/images/cars/audi7.png",
    type: "Diesel",
    trans: "Auto",
    seats: 7,
  },

  // --- BMW ---
  {
    id: 8,
    name: "BMW i8 Hybrid",
    brand: "BMW",
    price: 400,
    image: "/images/cars/bmw1.png",
    type: "Hybrid",
    trans: "Auto",
    seats: 2,
  },
  {
    id: 9,
    name: "BMW X6 M-Sport",
    brand: "BMW",
    price: 320,
    image: "/images/cars/bmw2.png",
    type: "Petrol",
    trans: "Auto",
    seats: 5,
  },
  {
    id: 10,
    name: "BMW M3 Performance",
    brand: "BMW",
    price: 250,
    image: "/images/cars/bmw3.png",
    type: "Octane",
    trans: "Auto",
    seats: 5,
  },
  {
    id: 11,
    name: "BMW M4 Competition",
    brand: "BMW",
    price: 270,
    image: "/images/cars/bmw4.png",
    type: "Octane",
    trans: "Auto",
    seats: 4,
  },

  // --- FERRARI ---
  {
    id: 12,
    name: "Ferrari 488 GTB",
    brand: "Ferrari",
    price: 550,
    image: "/images/cars/ferrari1.png",
    type: "Octane",
    trans: "Auto",
    seats: 2,
  },
  {
    id: 13,
    name: "Ferrari Roma",
    brand: "Ferrari",
    price: 480,
    image: "/images/cars/ferrari2.png",
    type: "Petrol",
    trans: "Auto",
    seats: 2,
  },
  {
    id: 14,
    name: "Ferrari SF90 Stradale",
    brand: "Ferrari",
    price: 650,
    image: "/images/cars/ferrari3.png",
    type: "Hybrid",
    trans: "Auto",
    seats: 2,
  },
  {
    id: 15,
    name: "Ferrari F8 Tributo",
    brand: "Ferrari",
    price: 580,
    image: "/images/cars/ferrari4.png",
    type: "Octane",
    trans: "Auto",
    seats: 2,
  },
  {
    id: 16,
    name: "Ferrari LaFerrari",
    brand: "Ferrari",
    price: 900,
    image: "/images/cars/ferrari5.png",
    type: "Hybrid",
    trans: "Auto",
    seats: 2,
  },
  {
    id: 17,
    name: "Ferrari 488 Spider",
    brand: "Ferrari",
    price: 600,
    image: "/images/cars/ferrari6.png",
    type: "Octane",
    trans: "Auto",
    seats: 2,
  },

  // --- FORD ---
  {
    id: 18,
    name: "Ford Raptor F-150",
    brand: "Ford",
    price: 250,
    image: "/images/cars/ford1.png",
    type: "Diesel",
    trans: "Auto",
    seats: 5,
  },
  {
    id: 19,
    name: "Ford Mustang Shadow",
    brand: "Ford",
    price: 200,
    image: "/images/cars/ford2.png",
    type: "Octane",
    trans: "Manual",
    seats: 4,
  },
  {
    id: 20,
    name: "Ford Explorer",
    brand: "Ford",
    price: 180,
    image: "/images/cars/ford3.png",
    type: "Petrol",
    trans: "Auto",
    seats: 7,
  },
  {
    id: 21,
    name: "Ford Mustang GT",
    brand: "Ford",
    price: 220,
    image: "/images/cars/ford4.png",
    type: "Octane",
    trans: "Auto",
    seats: 4,
  },
  {
    id: 22,
    name: "Ford Mustang Shelby",
    brand: "Ford",
    price: 300,
    image: "/images/cars/ford5.png",
    type: "Octane",
    trans: "Manual",
    seats: 2,
  },
  {
    id: 23,
    name: "Ford Ranger Raptor",
    brand: "Ford",
    price: 230,
    image: "/images/cars/ford6.png",
    type: "Diesel",
    trans: "Auto",
    seats: 5,
  },

  // --- HONDA ---
  {
    id: 24,
    name: "Honda Civic Sedan",
    brand: "Honda",
    price: 100,
    image: "/images/cars/honda1.png",
    type: "Petrol",
    trans: "Auto",
    seats: 5,
  },
  {
    id: 25,
    name: "Honda Accord V6",
    brand: "Honda",
    price: 120,
    image: "/images/cars/honda2.png",
    type: "Petrol",
    trans: "Auto",
    seats: 5,
  },
  {
    id: 26,
    name: "Honda Civic Turbo",
    brand: "Honda",
    price: 110,
    image: "/images/cars/honda3.png",
    type: "Octane",
    trans: "Auto",
    seats: 5,
  },
  {
    id: 27,
    name: "Honda Civic Type R",
    brand: "Honda",
    price: 160,
    image: "/images/cars/honda4.png",
    type: "Octane",
    trans: "Manual",
    seats: 4,
  },
  {
    id: 28,
    name: "Honda HR-V SUV",
    brand: "Honda",
    price: 130,
    image: "/images/cars/honda5.png",
    type: "Petrol",
    trans: "Auto",
    seats: 5,
  },

  // --- LAMBORGHINI ---
  {
    id: 29,
    name: "Lamborghini Centenario",
    brand: "Lamborghini",
    price: 850,
    image: "/images/cars/Lamborghini1.png",
    type: "Octane",
    trans: "Auto",
    seats: 2,
  },
  {
    id: 30,
    name: "Lamborghini Aventador",
    brand: "Lamborghini",
    price: 750,
    image: "/images/cars/Lamborghini2.png",
    type: "Octane",
    trans: "Auto",
    seats: 2,
  },
  {
    id: 31,
    name: "Lamborghini Huracan",
    brand: "Lamborghini",
    price: 700,
    image: "/images/cars/Lamborghini3.png",
    type: "Octane",
    trans: "Auto",
    seats: 2,
  },

  // --- MERCEDES ---
  {
    id: 32,
    name: "Mercedes V-Class",
    brand: "Mercedes",
    price: 200,
    image: "/images/cars/Mercedes1.png",
    type: "Diesel",
    trans: "Auto",
    seats: 8,
  },
  {
    id: 33,
    name: "Mercedes G-Wagon G63",
    brand: "Mercedes",
    price: 500,
    image: "/images/cars/Mercedes2.png",
    type: "Diesel",
    trans: "Auto",
    seats: 5,
  },
  {
    id: 34,
    name: "Mercedes AMG GT Silver",
    brand: "Mercedes",
    price: 450,
    image: "/images/cars/Mercedes3.png",
    type: "Octane",
    trans: "Auto",
    seats: 2,
  },
  {
    id: 35,
    name: "Mercedes AMG GT Dark",
    brand: "Mercedes",
    price: 460,
    image: "/images/cars/Mercedes4.png",
    type: "Octane",
    trans: "Auto",
    seats: 2,
  },
  {
    id: 36,
    name: "Mercedes GLE Coupe",
    brand: "Mercedes",
    price: 300,
    image: "/images/cars/Mercedes5.png",
    type: "Petrol",
    trans: "Auto",
    seats: 5,
  },

  // --- TOYOTA ---
  {
    id: 37,
    name: "Toyota Land Cruiser V8",
    brand: "Toyota",
    price: 250,
    image: "/images/cars/toyota1.png",
    type: "Diesel",
    trans: "Auto",
    seats: 7,
  },
  {
    id: 38,
    name: "Toyota Hilux Rocco",
    brand: "Toyota",
    price: 150,
    image: "/images/cars/toyota2.png",
    type: "Diesel",
    trans: "Manual",
    seats: 5,
  },
  {
    id: 39,
    name: "Toyota C-HR Hybrid",
    brand: "Toyota",
    price: 130,
    image: "/images/cars/toyota3.png",
    type: "Hybrid",
    trans: "Auto",
    seats: 5,
  },
  {
    id: 40,
    name: "Toyota Alphard Executive",
    brand: "Toyota",
    price: 220,
    image: "/images/cars/toyota4.png",
    type: "Petrol",
    trans: "Auto",
    seats: 7,
  },
];

const CarsListingContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );
  const [selectedBrand, setSelectedBrand] = useState(
    searchParams.get("brand") || "",
  );
  const [selectedBody, setSelectedBody] = useState("");
  const [selectedTrans, setSelectedTrans] = useState("");
  const [priceRange, setPriceRange] = useState(
    Number(searchParams.get("price")) || 1000,
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedBrand) params.set("brand", selectedBrand);
    if (searchTerm) params.set("search", searchTerm);
    if (priceRange < 1000) params.set("price", priceRange.toString());
    router.push(`/cars?${params.toString()}`, { scroll: false });
  }, [selectedBrand, searchTerm, priceRange, router]);

  const filteredCars = carData.filter((car) => {
    const matchesSearch = car.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === "" || car.brand === selectedBrand;
    const matchesPrice = car.price <= priceRange;
    return matchesSearch && matchesBrand && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filter */}

          <aside className="w-full lg:w-[320px] shrink-0">
            <div className="bg-white p-7 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-200/40 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {/* Filter Header*/}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5 text-blue-600" />{" "}
                  Filters
                </h2>
                <button
                  onClick={() => {
                    setSelectedBrand("");
                    setSelectedTrans("");
                    setSelectedBody("");
                    setSearchTerm("");
                    setPriceRange(1000);
                  }}
                  className="text-[10px] hover:scale-105 duration-300 font-bold text-blue-600 uppercase tracking-widest"
                >
                  Reset All
                </button>
              </div>

              {/* 1. Brand Selection List */}
              <div className="space-y-4 mb-10">
                <p className="text-[11px] font-black uppercase tracking-[2px] text-gray-400">
                  Select Brand
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {[
                    "Toyota",
                    "BMW",
                    "Audi",
                    "Ford",
                    "Ferrari",
                    "Honda",
                    "Lamborghini",
                    "Mercedes",
                  ].map((brand) => (
                    <label
                      key={brand}
                      className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                        selectedBrand === brand
                          ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200"
                          : "bg-white border-gray-100 text-gray-600 hover:border-blue-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="brand"
                          className="hidden"
                          checked={selectedBrand === brand}
                          onChange={() => setSelectedBrand(brand)}
                        />
                        <span className="font-bold text-sm leading-none">
                          {brand}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* 2. Transmission Filter */}
              <div className="space-y-4 mb-10 border-t border-gray-50 pt-8">
                <p className="text-[11px] font-black uppercase tracking-[2px] text-gray-400">
                  Transmission
                </p>
                <div className="flex gap-2">
                  {["Auto", "Manual"].map((t) => (
                    <button
                      key={t}
                      onClick={() =>
                        setSelectedTrans(selectedTrans === t ? "" : t)
                      }
                      className={`flex-1 py-3 text-xs font-bold rounded-xl border transition-all ${
                        selectedTrans === t
                          ? "bg-gray-900 border-gray-900 text-white shadow-md"
                          : "bg-white border-gray-100 text-gray-500 hover:border-blue-200"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Body Type Filter */}
              <div className="space-y-4 mb-10 border-t border-gray-50 pt-8">
                <p className="text-[11px] font-black uppercase tracking-[2px] text-gray-400">
                  Body Type
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {["SUV", "Sedan", "Coupe", "Luxury"].map((type) => (
                    <button
                      key={type}
                      onClick={() =>
                        setSelectedBody(selectedBody === type ? "" : type)
                      }
                      className={`py-3 text-[10px] font-black uppercase rounded-xl border transition-all ${
                        selectedBody === type
                          ? "bg-blue-600 border-blue-600 text-white shadow-md"
                          : "bg-white border-gray-100 text-gray-500 hover:border-blue-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Price Slider */}
              <div className="space-y-6 mb-10 border-t border-gray-50 pt-8">
                <div className="flex justify-between items-end">
                  <p className="text-[11px] font-black uppercase tracking-[2px] text-gray-400">
                    Max Price
                  </p>
                  <span className="text-2xl font-black text-blue-600">
                    ${priceRange}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* 5. Support Section */}
              <div className="bg-gray-50 rounded-[24px] p-5 border border-gray-100 flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Need Help?
                  </p>
                  <p className="text-sm font-black text-gray-900">
                    +880 123 456
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Car Grid Content */}
          <div className="flex-1 space-y-10">
            <div className="relative group max-w-2xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for models..."
                className="w-full pl-16 pr-6 py-5 rounded-[24px] border-none bg-white outline-none ring-1 ring-gray-100 focus:ring-2 focus:ring-blue-600 shadow-sm text-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="group bg-white p-5 rounded-[40px] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative h-60 w-full bg-slate-50 rounded-[32px] overflow-hidden mb-6">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-contain p-8 hover:scale-110 transition duration-700 ease-out"
                    />
                  </div>
                  <div className="px-3">
                    <h3 className="text-2xl font-black text-gray-900 mb-2">
                      {car.name}
                    </h3>
                    <div className="flex items-center gap-5 mt-4 text-gray-400 text-[10px] font-bold uppercase border-b border-gray-50 pb-6 mb-6">
                      <span className="flex items-center gap-1.5">
                        <Fuel className="h-3.5 w-3.5 text-blue-500" />{" "}
                        {car.type}
                      </span>
                      <span className="flex items-center gap-1.5 border-x px-5">
                        <Gauge className="h-3.5 w-3.5 text-blue-500" />{" "}
                        {car.trans}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-blue-500" />{" "}
                        {car.seats} Seats
                      </span>
                    </div>
                    {/* Car Card Loop-er bhetore nicher part-ta replace koro */}
<div className="flex justify-between items-center mt-6">
  <div className="flex flex-col">
    <p className="text-[#3563E9] font-bold text-2xl tracking-tight">
      ${car.price}
      <span className="text-[#90A3BF] text-sm font-medium">/day</span>
    </p>
  </div>

  {/* Next.js Link Wrapper */}
  <Link href={`/cars/${car.id}`} className="inline-block">
    <button className="bg-[#3563E9] text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-blue-200">
      Details
    </button>
  </Link>
</div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-32 bg-white rounded-[40px] border border-dashed border-gray-200">
                <Search className="h-12 w-12 text-gray-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">
                  No Premium Cars Found
                </h3>
                <p className="text-gray-400 text-sm">
                  Try changing your filters.
                </p>
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
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center font-black text-blue-600 animate-pulse">
          PREPARING FLEET...
        </div>
      }
    >
      <CarsListingContent />
    </Suspense>
  );
}
