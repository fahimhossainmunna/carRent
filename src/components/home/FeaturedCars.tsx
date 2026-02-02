"use client";

import Image from "next/image";
import Link from "next/link";
import { Gauge, Fuel, Users, ArrowRight } from "lucide-react";

const FeaturedCars = () => {
  const cars = [
  {
    id: 1,
    name: "Toyota Land Cruiser",
    price: 150,
    image: "/images/cars/toyota1.png", //
    type: "Petrol",
    transmission: "Automatic",
    seats: 7,
  },
  {
    id: 2,
    name: "BMW M4 Competition",
    price: 250,
    image: "/images/cars/bmw1.png", //
    type: "Octane",
    transmission: "Automatic",
    seats: 4,
  },
  {
    id: 3,
    name: "Audi RS7 Sportback",
    price: 220,
    image: "/images/cars/audi1.png", //
    type: "Petrol",
    transmission: "Automatic",
    seats: 5,
  },
  {
    id: 4,
    name: "BMW Z4 Roadster",
    price: 200,
    image: "/images/cars/bmw2.png", //
    type: "Octane",
    transmission: "Automatic",
    seats: 2,
  },
  {
    id: 5,
    name: "Toyota Prado TX",
    price: 130,
    image: "/images/cars/toyota2.png", //
    type: "Diesel",
    transmission: "Automatic",
    seats: 7,
  },
  {
    id: 6,
    name: "Audi Q7 Luxury",
    price: 180,
    image: "/images/cars/adui2.png", 
    type: "Hybrid",
    transmission: "Automatic",
    seats: 7,
  },
];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em]">
              Our Fleet
            </h2>
            <h3 className="text-4xl md:text-5xl font-black font-[family-name:var(--font-montserrat)] text-gray-900">
              Explore Our <span className="text-blue-600">Featured</span> Cars
            </h3>
          </div>
          <Link href="/cars" className="text-blue-600 font-bold flex items-center gap-2 hover:scale-110 transition-all duration-300">
            View All Vehicles <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="group bg-white border border-gray-100 rounded-3xl p-4 hover:shadow-2xl hover:shadow-blue-100 transition duration-500">
              {/* Car Image Container */}
              <div className="relative w-full h-[220px] bg-gray-50 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain p-4 hover:scale-110 transition duration-500"
                />
              </div>

              {/* Car Details */}
              <div className="px-2 space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-montserrat)]">{car.name}</h4>
                  <div className="text-right">
                    <span className="text-blue-600 text-xl font-black">${car.price}</span>
                    <span className="text-gray-400 text-sm font-medium"> / day</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 border-y border-gray-50 py-4">
                  <div className="flex flex-col items-center gap-1">
                    <Fuel className="h-5 w-5 text-gray-400" />
                    <span className="text-xs font-bold text-gray-500">{car.type}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 border-x border-gray-50">
                    <Gauge className="h-5 w-5 text-gray-400" />
                    <span className="text-xs font-bold text-gray-500">{car.transmission}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span className="text-xs font-bold text-gray-500">{car.seats} Seats</span>
                  </div>
                </div>

                <Link 
                  href={`/cars/${car.id}`}
                  className="block w-full text-center bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg shadow-gray-200 active:scale-95"
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