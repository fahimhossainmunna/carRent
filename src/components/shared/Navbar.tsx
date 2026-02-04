"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Car,
  Menu,
  Search,
  X,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isUserMenuOpen && !target.closest(".user-menu-container")) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isUserMenuOpen]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Find Cars", href: "/cars" },
    { name: "My Bookings", href: "/bookings" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/98 backdrop-blur-xl py-3"
            : "bg-white/95 backdrop-blur-xl py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo Section - Premium Redesign */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0 relative"
          >
            <div className="relative">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full group-hover:bg-amber-500/40 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-amber-500/30">
                <Car className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <span
                className={`text-2xl font-black tracking-tighter uppercase transition-colors block leading-none ${
                  scrolled ? "text-white" : "text-slate-900"
                }`}
              >
                CAR<span className="text-amber-500">RENT</span>
              </span>
              <span className="text-[8px] font-bold text-amber-500 uppercase tracking-[2px] block mt-0.5">
                Premium Mobility
              </span>
            </div>
          </Link>

          {/* Desktop Menu & Search Logic */}
          <div className="hidden lg:flex items-center gap-12 font-bold">
            <AnimatePresence mode="wait">
              {!isSearchOpen ? (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-10"
                >
                  {menuItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-[11px] font-black uppercase tracking-[3px] transition-all hover:text-amber-500 relative group ${
                        scrolled ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {item.name}
                      {/* Animated underline */}
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                      {/* Dot indicator */}
                      <span className="absolute -top-1 -right-1 w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </Link>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="search-box"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "450px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex items-center"
                >
                  <div className="relative w-full">
                    <input
                      type="text"
                      autoFocus
                      placeholder="Search for luxury cars..."
                      className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2 outline-none text-sm font-medium transition-all ${
                        scrolled
                          ? "bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-amber-500"
                          : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:bg-white focus:border-amber-500"
                      }`}
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Actions - Premium Redesign */}
          <div className="flex items-center gap-4">
            {/* Search Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-3 rounded-2xl border-2 transition-all duration-300 ${
                scrolled
                  ? "bg-white/5 border-white/10 text-white hover:bg-amber-500 hover:border-amber-500"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-amber-500 hover:text-white hover:border-amber-500"
              }`}
            >
              {isSearchOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </motion.button>

            {/* User Menu Dropdown */}
            <div className="hidden sm:block relative user-menu-container">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className={`p-3 rounded-2xl border-2 transition-all duration-300 ${
                  scrolled
                    ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <User className="h-5 w-5" />
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      <Link
                        href="/login"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-amber-50 transition-colors duration-300">
                          <User className="h-4 w-4 text-slate-600 group-hover:text-amber-500 transition-colors duration-300" />
                        </div>
                        <span className="text-sm font-bold group-hover:text-amber-500 transition-colors duration-300">
                          Log In
                        </span>
                      </Link>

                      <Link
                        href="/register"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 transition-all duration-300 mt-1 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-amber-50 transition-colors duration-300">
                          <User className="h-4 w-4 text-slate-600 group-hover:text-amber-500 transition-colors duration-300" />
                        </div>
                        <span className="text-sm font-bold group-hover:text-amber-500 transition-colors duration-300">
                          Sign Up
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Icon */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className={`lg:hidden p-3 rounded-2xl border-2 transition-all duration-300 ${
                scrolled
                  ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
                  : "bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE DRAWER SECTION - PREMIUM REDESIGN --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-lg z-[110] lg:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[340px] bg-gradient-to-br from-white to-slate-50 z-[120] shadow-2xl p-8 lg:hidden flex flex-col overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-12 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2.5 rounded-xl shadow-lg shadow-amber-500/30">
                    <Car className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xl font-black tracking-tighter uppercase text-slate-900 block leading-none">
                      CAR<span className="text-amber-500">RENT</span>
                    </span>
                    <span className="text-[8px] font-bold text-amber-500 uppercase tracking-[2px] block mt-0.5">
                      Premium Mobility
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 bg-slate-100 rounded-xl text-slate-900 hover:bg-amber-500 hover:text-white transition-all"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-3 mb-auto">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between group p-4 rounded-2xl hover:bg-white transition-all duration-300 border border-transparent hover:border-amber-100 hover:shadow-lg hover:shadow-amber-100/50"
                    >
                      <span className="text-sm font-black uppercase tracking-[2px] text-slate-700 group-hover:text-amber-500 transition-colors">
                        {item.name}
                      </span>
                      <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-amber-500 transform group-hover:translate-x-2 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3 mb-8 p-5 bg-slate-100 rounded-2xl"
              >
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[2px] mb-3">
                  Contact Us
                </h4>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Phone className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium">+880 1234-567890</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium">
                    support@carrent.com
                  </span>
                </div>
              </motion.div>

              {/* Mobile Footer Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3 pt-6 border-t border-slate-200"
              >
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-4 text-xs font-black uppercase tracking-[2px] text-slate-900 bg-white border-2 border-slate-200 rounded-2xl hover:border-amber-500 hover:text-amber-500 transition-all"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-4 text-xs font-black uppercase tracking-[2px] text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl hover:from-amber-600 hover:to-amber-700 transition-all"
                >
                  Sign Up Free
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
