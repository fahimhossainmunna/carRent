"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { carData } from "@/data/cars"; 
import { ShieldCheck, Star, CreditCard, CheckCircle2, ChevronDown, Lock, Calendar, MapPin, User, Phone, Home } from "lucide-react";
import Image from "next/image";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false); 
  
  const carId = searchParams.get("id");
  const car = carData.find((item) => item.id === Number(carId)) || carData[0];

  const handleConfirmBooking = () => {
    const newBooking = {
    
      id: `BK-${Math.floor(Math.random() * 90000) + 10000}`,
      carName: car.name,
      carImage: car.image,
      status: "confirmed", 
      pickupDate: new Date().toISOString().split('T')[0], 
      dropoffDate: "2026-02-15",
      pickupLocation: "Dhaka International University",
      dropoffLocation: "Gulshan, Dhaka",
      totalPrice: car.price,
      bookingDate: new Date().toISOString().split('T')[0],
      customerName: "Fahim Hassan Munna",
      customerPhone: "+880 123 456 789",
      customerEmail: "munna@example.com"
    };

    const existingBookings = JSON.parse(localStorage.getItem("confirmedBookings") || "[]");
    localStorage.setItem("confirmedBookings", JSON.stringify([newBooking, ...existingBookings]));
    
    setIsSuccess(true);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 mb-24">
        
        {/* --- Left Side: Booking Forms --- */}
        <div className="flex-1 space-y-6">
          
          {/* 1. Billing Info */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                  <User className="h-5 w-5 text-amber-500" />
                  Billing Info
                </h2>
                <p className="text-sm text-gray-400 font-semibold mt-1">Please enter your billing information</p>
              </div>
              <div className="px-4 py-2 bg-amber-50 rounded-full">
                <span className="text-xs text-amber-600 font-black">Step 1 of 4</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-400" />
                  Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full p-4 bg-gray-50 rounded-xl outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all text-sm font-semibold placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  Phone Number
                </label>
                <input 
                  type="text" 
                  placeholder="Your phone number" 
                  className="w-full p-4 bg-gray-50 rounded-xl outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all text-sm font-semibold placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Home className="h-4 w-4 text-gray-400" />
                  Address
                </label>
                <input 
                  type="text" 
                  placeholder="Your address" 
                  className="w-full p-4 bg-gray-50 rounded-xl outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all text-sm font-semibold placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* 2. Rental Info */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-amber-500" />
                  Rental Info
                </h2>
                <p className="text-sm text-gray-400 font-semibold mt-1">Please select your rental date</p>
              </div>
              <div className="px-4 py-2 bg-amber-50 rounded-full">
                <span className="text-xs text-amber-600 font-black">Step 2 of 4</span>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-3 w-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-md shadow-amber-500/30"></div>
                <span className="font-black text-sm text-gray-900">Pick-Up</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    Location
                  </label>
                  <select className="w-full p-4 bg-gray-50 rounded-xl text-sm font-semibold outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all cursor-pointer">
                    <option>Dhaka International University</option>
                    <option>Gulshan, Dhaka</option>
                    <option>Banani, Dhaka</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full p-4 bg-gray-50 rounded-xl text-sm font-semibold outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
              
              {/* Drop-Off Section */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-500/30"></div>
                  <span className="font-black text-sm text-gray-900">Drop-Off</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      Location
                    </label>
                    <select className="w-full p-4 bg-gray-50 rounded-xl text-sm font-semibold outline-none border-2 border-transparent focus:border-orange-500 focus:bg-white transition-all cursor-pointer">
                      <option>Dhaka International University</option>
                      <option>Gulshan, Dhaka</option>
                      <option>Banani, Dhaka</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full p-4 bg-gray-50 rounded-xl text-sm font-semibold outline-none border-2 border-transparent focus:border-orange-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Payment Method */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-amber-500" />
                  Payment Method
                </h2>
                <p className="text-sm text-gray-400 font-semibold mt-1">Please enter your payment method</p>
              </div>
              <div className="px-4 py-2 bg-amber-50 rounded-full">
                <span className="text-xs text-amber-600 font-black">Step 3 of 4</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="p-5 bg-gradient-to-r from-amber-50 to-amber-50/50 rounded-xl flex justify-between items-center border-2 border-amber-500 cursor-pointer hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-4 border-amber-600 bg-white shadow-sm"></div>
                  <span className="font-black text-gray-900">Credit Card</span>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <CreditCard className="h-5 w-5 text-amber-600" />
                </div>
              </div>
              
              <div className="p-5 bg-gray-50 rounded-xl flex justify-between items-center border-2 border-transparent cursor-pointer hover:border-gray-300 transition-all group opacity-50">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-gray-300 bg-white"></div>
                  <span className="font-black text-gray-600">PayPal</span>
                </div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Coming Soon</div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Card Number</label>
                <input 
                  type="text" 
                  placeholder="1234 5678 9012 3456" 
                  className="w-full p-4 bg-gray-50 rounded-xl outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all text-sm font-semibold placeholder:text-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Expiry Date</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    className="w-full p-4 bg-gray-50 rounded-xl outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all text-sm font-semibold placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">CVV</label>
                  <input 
                    type="text" 
                    placeholder="123" 
                    className="w-full p-4 bg-gray-50 rounded-xl outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all text-sm font-semibold placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4. Confirmation */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl transition-shadow space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-amber-500" />
                Confirmation
              </h2>
              <div className="px-4 py-2 bg-amber-50 rounded-full">
                <span className="text-xs text-amber-600 font-black">Step 4 of 4</span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-amber-50 to-amber-50/30 rounded-xl border border-amber-100 hover:shadow-md transition-all cursor-pointer">
              <input type="checkbox" className="mt-1 h-5 w-5 accent-amber-600 cursor-pointer" />
              <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                I agree with our <span className="text-amber-600 font-bold">terms and conditions</span> and <span className="text-amber-600 font-bold">privacy policy</span>.
              </p>
            </div>
            
            {/* Rent Now Button - Logic added here */}
            <button 
              onClick={handleConfirmBooking}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-5 rounded-xl font-black text-lg shadow-xl shadow-amber-600/30 hover:shadow-2xl hover:shadow-amber-600/40 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Lock className="h-5 w-5" />
              Rent Now - Secure Payment
            </button>
            
            <div className="pt-6 border-t border-gray-100 space-y-3 bg-gradient-to-br from-green-50/50 to-transparent p-5 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-black text-gray-900">Your Data is 100% Secure</h4>
              </div>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                We use advanced encryption and security measures to protect your personal and payment information.
              </p>
            </div>
          </div>
        </div>

        {/* --- Right Side: Rental Summary --- */}
        <aside className="w-full lg:w-[480px]">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 space-y-6 sticky top-10">
            <h2 className="text-xl font-black text-gray-900">Rental Summary</h2>
            
            <div className="flex items-center gap-5 p-5 bg-gradient-to-br from-amber-50 to-amber-50/30 rounded-2xl border border-amber-100">
              <div className="h-24 w-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl relative overflow-hidden flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/30">
                <Image src={car.image} alt={car.name} fill className="object-contain p-3" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 uppercase leading-tight">{car.name}</h3>
                <div className="flex text-amber-400 gap-1 mt-2">
                  {[...Array(4)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  <span className="text-xs text-gray-400 font-bold ml-1">440+ Reviews</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6 space-y-4 font-semibold text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-gray-900 font-bold">${car.price}.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Tax (0%)</span>
                <span className="text-gray-900 font-bold">$0.00</span>
              </div>
              <div className="flex justify-between items-center text-green-600">
                <span>Discount</span>
                <span className="font-bold">-$0.00</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-amber-50/30 p-4 rounded-xl flex justify-between items-center border border-amber-200 group hover:shadow-md transition-all">
              <input 
                type="text"
                placeholder="Enter promo code"
                className="bg-transparent outline-none text-gray-700 font-semibold text-sm placeholder:text-gray-400 flex-1"
              />
              <button className="text-amber-600 font-black text-sm hover:text-amber-700 transition px-4 py-2 bg-white rounded-lg shadow-sm">
                Apply
              </button>
            </div>

            <div className="flex justify-between items-end border-t border-gray-100 pt-6 bg-gradient-to-br from-amber-50/50 to-transparent p-5 rounded-xl">
              <div>
                <h4 className="text-lg font-black text-gray-900">Total Rental Price</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Overall price includes rental discount</p>
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">${car.price}.00</span>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                Secure
              </div>
              <div className="h-1 w-1 rounded-full bg-gray-300"></div>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
                <Lock className="h-4 w-4 text-amber-600" />
                Encrypted
              </div>
              <div className="h-1 w-1 rounded-full bg-gray-300"></div>
              <div className="text-xs text-gray-500 font-bold">SSL Protected</div>
            </div>
          </div>
        </aside>
      </div>

      {/* --- SUCCESS MODAL POPUP --- */}
      {isSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setIsSuccess(false)}></div>
          <div className="relative bg-white p-8 md:p-12 rounded-[45px] shadow-2xl max-w-md w-full text-center space-y-6 animate-scaleIn border border-gray-100">
            <div className="mx-auto bg-amber-50 h-24 w-24 rounded-[30px] flex items-center justify-center shadow-lg shadow-amber-200/50">
              <CheckCircle2 className="h-12 w-12 text-amber-600 animate-bounce" />
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Booking Confirmed!</h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                Your reservation for <span className="text-amber-600 font-black">{car.name}</span> has been successfully confirmed. 
                <span className="block mt-2 text-sm">Have a safe and enjoyable journey! 🚗</span>
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <button 
                onClick={() => router.push('/')}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-amber-500 hover:text-slate-900 transition-all shadow-xl active:scale-95"
              >
                Back to Home
              </button>

              <button 
                onClick={() => router.push('/bookings')}
                className="w-full bg-gray-100 text-slate-900 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-200 transition-all active:scale-95"
              >
                View My Bookings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/20 to-gray-50 pt-10 pb-1">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <Suspense fallback={
          <div className="text-center py-20">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent"></div>
            <p className="mt-4 font-black text-amber-600">Loading Checkout...</p>
          </div>
        }>
          <CheckoutContent />
        </Suspense>
      </div>
    </div>
  );
}