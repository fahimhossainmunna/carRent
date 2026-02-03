"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Car, Menu, Search, X, Phone, ChevronRight } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Find Cars", href: "/cars" },
    { name: "My Bookings", href: "/bookings" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <>
      <nav className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        scrolled 
          ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl py-3" 
          : "bg-white/90 backdrop-blur-md border-b border-gray-100 py-5" // Dhokar somoy light theme thakbe
      }`}>
        <div className="container mx-auto flex items-center justify-between px-6">
          
          {/* 1. Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-amber-500 p-2.5 rounded-2xl group-hover:rotate-12 transition-all shadow-lg">
              <Car className="h-6 w-6 text-slate-900" />
            </div>
            <span className={`text-2xl font-black tracking-tighter uppercase transition-colors ${
              scrolled ? "text-white" : "text-slate-900" // Scrolled hole shada, na hole kalo
            }`}>
              CAR<span className="text-amber-500">RENT</span>
            </span>
          </Link>

          {/* 2. Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 font-bold">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`text-[11px] uppercase tracking-[3px] transition-all hover:text-amber-500 relative group ${
                  scrolled ? "text-gray-300" : "text-slate-600" // Menu link ekhon sposto dekha jabe
                }`}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* 3. Actions Section */}
          <div className="flex items-center gap-4">
            <button className={`hidden sm:flex p-2.5 rounded-xl border transition-all ${
              scrolled 
                ? "bg-white/5 border-white/10 text-white hover:bg-amber-500" 
                : "bg-gray-100 border-gray-200 text-slate-600 hover:bg-amber-500 hover:text-white"
            }`}>
              <Search className="h-5 w-5" />
            </button>

            <div className="hidden sm:flex items-center gap-6">
              <Link 
                href="/login" 
                className={`text-[11px] font-black uppercase tracking-[2px] transition-colors ${
                  scrolled ? "text-white" : "text-slate-900"
                } hover:text-amber-500`}
              >
                Log In
              </Link>
              <Link 
                href="/register" 
                className="bg-amber-500 text-slate-900 px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-[2px] hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-amber-500/10"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setIsOpen(true)} 
              className={`lg:hidden p-2.5 rounded-xl border transition-colors ${
                scrolled ? "bg-white/5 border-white/10 text-white" : "bg-gray-100 border-gray-200 text-slate-900"
              }`}
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- Sidebar Content stays the same (Dark Theme) --- */}
      {/* ... (Previous Sidebar code) ... */}
    </>
  );
};

export default Navbar;