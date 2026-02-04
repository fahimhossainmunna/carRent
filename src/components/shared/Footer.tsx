"use client";

import Link from "next/link";
import { Car, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0A0F1E] via-[#0F172A] to-[#1A1F35] pt-12 pb-6 overflow-hidden relative">
      {/* Premium Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-10">
          
          {/* Brand & Vision - Premium Edition */}
          <div className="w-full lg:w-auto lg:max-w-md space-y-5 mx-auto lg:mx-0 text-center lg:text-left">
            <div className="flex items-center gap-3 group justify-center lg:justify-start">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-2xl group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-amber-500/20 relative">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm"></div>
                <Car className="h-6 w-6 text-slate-900 relative z-10" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                  CAR<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">RENT</span>
                </h2>
                <p className="text-[10px] text-amber-500/60 font-bold tracking-[4px] uppercase mt-0.5">Premium Service</p>
              </div>
            </div>
            
            <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              Experience unparalleled luxury and sophistication with our premium fleet. 
              <span className="text-amber-500/80 font-semibold"> Your journey, elevated.</span>
            </p>

            {/* Premium Contact Cards */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4 text-slate-300 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:border-amber-500/30 transition-all group">
                <div className="bg-amber-500/10 p-2 rounded-lg group-hover:bg-amber-500/20 transition-all">
                  <Phone className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">24/7 Support</p>
                  <span className="font-bold text-sm text-white">+880 123 456 789</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:border-amber-500/30 transition-all group">
                <div className="bg-amber-500/10 p-2 rounded-lg group-hover:bg-amber-500/20 transition-all">
                  <Mail className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">Email Us</p>
                  <span className="font-bold text-sm text-white">support@carrent.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Navigation Grid */}
          <div className="w-full lg:w-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mx-auto lg:mx-0">
            <div className="space-y-5 text-center md:text-left">
              <h4 className="font-black text-white text-xs uppercase tracking-[4px] relative inline-block">
                Company
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></div>
              </h4>
              <ul className="text-slate-400 space-y-2.5 text-sm font-semibold">
                <li className="hover:text-amber-500 cursor-pointer transition-all hover:translate-x-1 flex items-center gap-2 group justify-center md:justify-start">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  About Us
                </li>
                <li className="hover:text-amber-500 cursor-pointer transition-all hover:translate-x-1 flex items-center gap-2 group justify-center md:justify-start">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  Our Fleet
                </li>
                <li className="hover:text-amber-500 cursor-pointer transition-all hover:translate-x-1 flex items-center gap-2 group justify-center md:justify-start">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  Partnerships
                </li>
                <li className="hover:text-amber-500 cursor-pointer transition-all hover:translate-x-1 flex items-center gap-2 group justify-center md:justify-start">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  Careers
                </li>
              </ul>
            </div>

            <div className="space-y-5 text-center md:text-left">
              <h4 className="font-black text-white text-xs uppercase tracking-[4px] relative inline-block">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></div>
              </h4>
              <ul className="text-slate-400 space-y-2.5 text-sm font-semibold">
                <li className="hover:text-amber-500 cursor-pointer transition-all hover:translate-x-1 flex items-center gap-2 group justify-center md:justify-start">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  Daily Rental
                </li>
                <li className="hover:text-amber-500 cursor-pointer transition-all hover:translate-x-1 flex items-center gap-2 group justify-center md:justify-start">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  Long Term
                </li>
                <li className="hover:text-amber-500 cursor-pointer transition-all hover:translate-x-1 flex items-center gap-2 group justify-center md:justify-start">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  Chauffeur
                </li>
                <li className="hover:text-amber-500 cursor-pointer transition-all hover:translate-x-1 flex items-center gap-2 group justify-center md:justify-start">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  Corporate
                </li>
              </ul>
            </div>

            <div className="space-y-5 col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
              <h4 className="font-black text-white text-xs uppercase tracking-[4px] relative inline-block">
                Connect
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></div>
              </h4>
              
              {/* Premium Social Icons */}
              <div className="flex gap-3 justify-center md:justify-start flex-wrap">
                {[
                  { Icon: Facebook, color: "hover:bg-blue-600" },
                  { Icon: Instagram, color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600" },
                  { Icon: Twitter, color: "hover:bg-sky-500" },
                  { Icon: Youtube, color: "hover:bg-red-600" }
                ].map(({ Icon, color }, i) => (
                  <button 
                    key={i} 
                    className={`h-11 w-11 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-slate-400 ${color} hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg group relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Icon className="h-4 w-4 relative z-10" />
                  </button>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-3 w-full max-w-xs">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-2.5 flex items-center gap-2 hover:border-amber-500/30 transition-all">
                  <Mail className="h-4 w-4 text-amber-500 ml-1" />
                  <input 
                    type="email" 
                    placeholder="Subscribe newsletter" 
                    className="bg-transparent border-none outline-none text-white text-xs placeholder:text-slate-500 flex-1"
                  />
                  <button className="bg-gradient-to-r from-amber-500 to-amber-600 px-2.5 py-1.5 rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                    <ArrowRight className="h-3 w-3 text-slate-900" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-amber-500/20 to-transparent px-8 py-0.5 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Bar - Premium */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[2px]">
              ©2026 <span className="text-white font-black">CARRENT</span> 
              <span className="text-slate-600 mx-2">•</span>
              <span className="text-slate-400">All Rights Reserved</span>
            </p>
            <div className="h-1 w-1 rounded-full bg-amber-500/40 hidden md:block"></div>
            <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[2px]">
              Crafted with <span className="text-amber-500">♥</span> by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 font-black">Munna</span>
            </p>
          </div>
          
          <div className="flex gap-6 text-slate-500 font-bold text-[10px] uppercase tracking-[2px]">
            <span className="hover:text-amber-500 cursor-pointer transition-colors relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </span>
            <span className="hover:text-amber-500 cursor-pointer transition-colors relative group">
              Terms
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-6 pt-4 border-t border-white/5 flex justify-center items-center gap-6 flex-wrap opacity-40 hover:opacity-60 transition-opacity">
          <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest">Secure Payment</div>
          <div className="h-1 w-1 rounded-full bg-slate-600"></div>
          <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest">24/7 Support</div>
          <div className="h-1 w-1 rounded-full bg-slate-600"></div>
          <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest">10K+ Customers</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;