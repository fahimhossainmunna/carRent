"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { carData } from "@/data/cars"; 
import { ShieldCheck, Star, CreditCard, CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false); 
  
  const carId = searchParams.get("id");
  const car = carData.find((item) => item.id === Number(carId)) || carData[0];

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 mb-24">
        
        {/* --- Left Side: Booking Forms --- */}
        <div className="flex-1 space-y-8">
          
          {/* 1. Billing Info */}
          <div className="bg-white p-6 md:p-10 rounded-[20px] shadow-sm border border-gray-50">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-xl font-black text-gray-900">Billing Info</h2>
                <p className="text-sm text-gray-400 font-bold mt-1">Please enter your billing info</p>
              </div>
              <span className="text-sm text-gray-400 font-bold">Step 1 of 4</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-sm font-black text-gray-900">Name</label>
                <input type="text" placeholder="Your name" className="w-full p-4 bg-[#F6F7F9] rounded-xl outline-none border-none text-sm font-bold" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-gray-900">Phone Number</label>
                <input type="text" placeholder="Phone number" className="w-full p-4 bg-[#F6F7F9] rounded-xl outline-none border-none text-sm font-bold" />
              </div>
              <div className="space-y-3 md:col-span-2">
                <label className="text-sm font-black text-gray-900">Address</label>
                <input type="text" placeholder="Address" className="w-full p-4 bg-[#F6F7F9] rounded-xl outline-none border-none text-sm font-bold" />
              </div>
            </div>
          </div>

          {/* 2. Rental Info */}
          <div className="bg-white p-6 md:p-10 rounded-[20px] shadow-sm border border-gray-50">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-xl font-black text-gray-900">Rental Info</h2>
                <p className="text-sm text-gray-400 font-bold mt-1">Please select your rental date</p>
              </div>
              <span className="text-sm text-gray-400 font-bold">Step 2 of 4</span>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-4 w-4 rounded-full border-4 border-blue-600 bg-white"></div>
                <span className="font-black text-sm text-gray-900">Pick - Up</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-black text-gray-900">Location</label>
                  <select className="w-full p-4 bg-[#F6F7F9] rounded-xl text-sm font-bold outline-none border-none">
                    <option>Dhaka International University</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-gray-900">Date</label>
                  <input type="date" className="w-full p-4 bg-[#F6F7F9] rounded-xl text-sm font-bold outline-none border-none" />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Payment Method */}
          <div className="bg-white p-6 md:p-10 rounded-[20px] shadow-sm border border-gray-50">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-xl font-black text-gray-900">Payment Method</h2>
                <p className="text-sm text-gray-400 font-bold mt-1">Please enter your payment method</p>
              </div>
              <span className="text-sm text-gray-400 font-bold">Step 3 of 4</span>
            </div>
            <div className="p-6 bg-[#F6F7F9] rounded-2xl flex justify-between items-center border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full border-4 border-blue-600 bg-white"></div>
                <span className="font-black text-gray-900">Credit Card</span>
              </div>
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
          </div>

          {/* 4. Confirmation */}
          <div className="bg-white p-6 md:p-10 rounded-[20px] shadow-sm border border-gray-50 space-y-6">
            <div className="flex items-start gap-4 p-5 bg-[#F6F7F9] rounded-2xl">
              <input type="checkbox" className="mt-1 h-5 w-5 accent-blue-600 cursor-pointer" />
              <p className="text-sm font-bold text-gray-600 leading-relaxed">I agree with our terms and conditions and privacy policy.</p>
            </div>
            {/* Modal Trigger Button */}
            <button 
              onClick={() => setIsSuccess(true)}
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
            >
              Rent Now
            </button>
            <div className="pt-6 border-t border-gray-50 space-y-4">
              <ShieldCheck className="h-10 w-10 text-blue-600" />
              <h4 className="font-black text-gray-900">All your data are safe</h4>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-[1.5px]">We are using the most advanced security to provide you the best experience</p>
            </div>
          </div>
        </div>

        {/* --- Right Side: Rental Summary --- */}
        <aside className="w-full lg:w-[480px]">
          <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-50 space-y-8 sticky top-10">
            <h2 className="text-xl font-black text-gray-900">Rental Summary</h2>
            <div className="flex items-center gap-6">
              <div className="h-28 w-36 bg-blue-600 rounded-2xl relative overflow-hidden flex items-center justify-center shrink-0">
                <Image src={car.image} alt={car.name} fill className="object-contain p-3" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 uppercase leading-tight">{car.name}</h3>
                <div className="flex text-yellow-400 gap-1 mt-2">
                  {[...Array(4)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  <span className="text-xs text-gray-400 font-bold ml-1">440+ Reviews</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-50 pt-8 space-y-5 font-bold text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400 uppercase tracking-widest">Subtotal</span>
                <span className="text-gray-900">${car.price}.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 uppercase tracking-widest">Tax</span>
                <span className="text-gray-900">$0.00</span>
              </div>
            </div>

            <div className="bg-[#F6F7F9] p-5 rounded-2xl flex justify-between items-center border border-gray-100">
              <span className="text-gray-400 font-bold text-sm">Apply promo code</span>
              <button className="text-gray-900 font-black text-sm hover:text-blue-600 transition">Apply now</button>
            </div>

            <div className="flex justify-between items-end border-t border-gray-50 pt-8">
              <div>
                <h4 className="text-xl font-black text-gray-900">Total Price</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Includes discount</p>
              </div>
              <span className="text-4xl font-black text-gray-900">${car.price}.00</span>
            </div>
          </div>
        </aside>
      </div>

      {/* --- SUCCESS MODAL POPUP --- */}
      {isSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setIsSuccess(false)}></div>
          <div className="relative bg-white p-8 md:p-12 rounded-[40px] shadow-2xl max-w-md w-full text-center space-y-6">
            <div className="mx-auto bg-blue-50 h-20 w-20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-blue-600 animate-pulse" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-gray-900">Congratulations!</h2>
              <p className="text-gray-500 font-medium">Your booking for <span className="text-blue-600 font-bold">{car.name}</span> is confirmed. Have a safe drive!</p>
            </div>
            <button 
              onClick={() => router.push('/')}
              className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black hover:bg-blue-600 transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#F6F7F9] pt-10 pb-1">
      <div className="container mx-auto max-w-7xl px-4 md:px-0">
        <Suspense fallback={<div className="text-center py-20 font-black text-blue-600 animate-pulse">Loading Car Data...</div>}>
          <CheckoutContent />
        </Suspense>
      </div>
    </div>
  );
}