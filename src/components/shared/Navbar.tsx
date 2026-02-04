"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // FIX: next/navigation bad diye next/link kora holo
import { Car, Menu, Search, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <nav className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
      scrolled 
        ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl py-3" 
        : "bg-white/90 backdrop-blur-md border-b border-gray-100 py-5"
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="bg-amber-500 p-2.5 rounded-2xl group-hover:rotate-12 transition-all shadow-lg">
            <Car className="h-6 w-6 text-slate-900" />
          </div>
          <span className={`text-2xl font-black tracking-tighter uppercase transition-colors ${
            scrolled ? "text-white" : "text-slate-900"
          }`}>
            CAR<span className="text-amber-500">RENT</span>
          </span>
        </Link>

        {/* Desktop Menu & Search Logic */}
        <div className="hidden lg:flex items-center gap-10 font-bold">
          <AnimatePresence mode="wait">
            {!isSearchOpen ? (
              <motion.div 
                key="menu"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-10"
              >
                {menuItems.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className={`text-[11px] uppercase tracking-[3px] transition-all hover:text-amber-500 relative group ${
                      scrolled ? "text-gray-300" : "text-slate-600"
                    }`}
                  >
                    {item.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
                  </Link>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="search-box"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "400px", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="relative flex items-center"
              >
                <input 
                  type="text"
                  autoFocus
                  placeholder="Search for cars..."
                  className={`w-full pl-12 pr-4 py-2.5 rounded-xl border-none outline-none text-sm transition-all ${
                    scrolled ? "bg-white/10 text-white placeholder:text-gray-400" : "bg-gray-100 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
                <Search className="absolute left-4 h-4 w-4 text-amber-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`p-2.5 rounded-xl border transition-all ${
              scrolled 
                ? "bg-white/5 border-white/10 text-white hover:bg-amber-500" 
                : "bg-gray-100 border-gray-200 text-slate-600 hover:bg-amber-500 hover:text-white"
            }`}
          >
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
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

          <button onClick={() => setIsOpen(true)} className="lg:hidden p-2.5 rounded-xl border border-gray-200 text-slate-900">
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;