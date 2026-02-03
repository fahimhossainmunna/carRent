"use client";

import Link from "next/link";
import { Car, Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] pt-16 pb-8 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          
          {/* Brand & Vision */}
          <div className="max-w-xs space-y-5">
            <div className="flex items-center gap-2.5 group">
              <div className="bg-amber-500 p-2 rounded-xl group-hover:rotate-12 transition-all shadow-lg">
                <Car className="h-5 w-5 text-slate-900" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase">
                CAR<span className="text-amber-500">RENT</span>
              </h2>
            </div>
            
            <p className="text-slate-400 font-medium text-sm leading-relaxed">
              Providing the most luxurious and convenient car rental experience in the city.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="h-4 w-4 text-amber-500" />
                <span className="font-bold text-xs uppercase tracking-wider">+880 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-4 w-4 text-amber-500" />
                <span className="font-bold text-xs uppercase tracking-wider">support@carrent.com</span>
              </div>
            </div>
          </div>

          {/* Compact Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="space-y-5">
              <h4 className="font-black text-white text-[10px] uppercase tracking-[3px] opacity-40">About</h4>
              <ul className="text-slate-400 space-y-3 text-[11px] font-bold uppercase tracking-widest">
                <li className="hover:text-amber-500 cursor-pointer transition-colors">How it works</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Featured</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Partnership</li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="font-black text-white text-[10px] uppercase tracking-[3px] opacity-40">Community</h4>
              <ul className="text-slate-400 space-y-3 text-[11px] font-bold uppercase tracking-widest">
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Events</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Podcast</li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="font-black text-white text-[10px] uppercase tracking-[3px] opacity-40">Socials</h4>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                  <button key={i} className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300">
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-black text-[9px] uppercase tracking-[2px]">
            ©2026 <span className="text-white">CARRENT</span>. Developed by <span className="text-amber-500">Munna</span>
          </p>
          <div className="flex gap-8 text-slate-500 font-black text-[9px] uppercase tracking-[2px]">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy & Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms & Condition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;