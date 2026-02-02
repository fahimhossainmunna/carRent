"use client";

import { useState } from "react";
import Link from "next/link";
import { Car, Menu, Search, X, User, Phone, MapPin } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => setIsOpen(!isOpen);


  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Find Cars", href: "/cars" },
    { name: "My Bookings", href: "/bookings" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          
          {/* 1. Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter font-[family-name:var(--font-montserrat)] text-gray-900 uppercase">
              CAR<span className="text-blue-600">RENT</span>
            </span>
          </Link>

          {/* 2. Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-medium text-gray-600">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="hover:text-blue-600 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* 3. Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex p-2 text-gray-500 hover:bg-gray-100 rounded-full transition">
              <Search className="h-5 w-5" />
            </button>

            <div className="h-6 w-[1px] bg-gray-200 mx-2 hidden sm:block"></div>

            <Link 
              href="/login" 
              className="hidden sm:block text-sm font-bold text-gray-700 hover:text-blue-600 transition"
            >
              Log in
            </Link>

            <Link 
              href="/register" 
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black transition shadow-lg active:scale-95"
            >
              Sign Up
            </Link>

            {/* Mobile Menu Icon */}
            <button 
              onClick={toggleSidebar} 
              className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Content */}
      <div className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button onClick={toggleSidebar} className="p-2 bg-gray-100 rounded-full text-gray-900">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-6 mb-10">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={toggleSidebar}
                className="text-xl font-bold text-gray-900 hover:text-blue-600 transition flex items-center justify-between group"
              >
                {item.name}
                <div className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition"></div>
              </Link>
            ))}
          </div>

          <div className="border-t pt-8 mt-auto">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Contact Info</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="font-medium">+880 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;