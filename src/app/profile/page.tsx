"use client";

import { useState, useEffect } from "react";
import { 
  User, Mail, Phone, MapPin, Camera, ShieldCheck, 
  Settings, LogOut, Car, CreditCard, ChevronRight, Save
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [bookingsCount, setBookingsCount] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("confirmedBookings") || "[]");
    setBookingsCount(saved.length + 1);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F7F9] pt-32 pb-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- Sidebar Menu --- */}
          <aside className="w-full lg:w-[320px] space-y-6">
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-2xl shadow-slate-200/50 text-center">
              <div className="relative w-28 h-28 mx-auto mb-6 group">
                <div className="relative w-full h-full rounded-[30px] overflow-hidden border-4 border-amber-500 shadow-xl shadow-amber-500/20">
                  <Image src="/images/Profill.png" alt="Munna" fill className="object-cover" />
                </div>
                <button className="absolute -bottom-2 -right-2 bg-slate-900 text-white p-2.5 rounded-xl border-4 border-white hover:bg-amber-500 transition-all shadow-lg">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Munna Hassan</h2>
              <p className="text-[10px] font-black text-amber-500 uppercase tracking-[3px] mt-1">Premium Member</p>
            </div>

            <div className="bg-white p-4 rounded-[40px] border border-gray-100 shadow-xl shadow-slate-200/50 space-y-2">
              {[
                { id: "profile", label: "My Profile", icon: User },
                { id: "bookings", label: "Booking History", icon: Car, link: "/bookings" },
                { id: "payment", label: "Payment Info", icon: CreditCard },
                { id: "settings", label: "Account Settings", icon: Settings },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => item.link ? window.location.href = item.link : setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between p-5 rounded-[25px] font-black text-[11px] uppercase tracking-widest transition-all ${
                    activeTab === item.id 
                    ? "bg-slate-900 text-white shadow-xl" 
                    : "bg-transparent text-slate-500 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className={`h-5 w-5 ${activeTab === item.id ? "text-amber-500" : "text-slate-400"}`} />
                    {item.label}
                  </div>
                  <ChevronRight className="h-4 w-4 opacity-30" />
                </button>
              ))}
              <button className="w-full flex items-center gap-4 p-5 rounded-[25px] font-black text-[11px] uppercase tracking-widest text-red-500 hover:bg-red-50 transition-all">
                <LogOut className="h-5 w-5" /> Logout
              </button>
            </div>
          </aside>

          {/* --- Main Content Area --- */}
          <main className="flex-1">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-[50px] border border-gray-100 shadow-2xl shadow-slate-200/50 min-h-[600px]"
            >
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-50">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Account <span className="text-amber-500">Information</span></h3>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">Manage your personal details</p>
                </div>
                <button className="bg-amber-50 text-amber-600 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-amber-500 hover:text-white transition-all">
                  <Save className="h-4 w-4" /> Save Changes
                </button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-[#F6F7F9] p-6 rounded-[30px] border border-gray-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-2">Total Bookings</p>
                  <p className="text-3xl font-black text-slate-900">{bookingsCount}</p>
                </div>
                <div className="bg-[#F6F7F9] p-6 rounded-[30px] border border-gray-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-2">Membership Status</p>
                  <p className="text-lg font-black text-amber-500 uppercase tracking-tight">Elite Tier</p>
                </div>
                <div className="bg-[#F6F7F9] p-6 rounded-[30px] border border-gray-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-2">Account Security</p>
                  <div className="flex items-center gap-2 text-green-600 font-black uppercase text-sm">
                    <ShieldCheck className="h-4 w-4" /> Verified
                  </div>
                </div>
              </div>

              {/* Profile Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] ml-2">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-amber-500 transition-colors" />
                    <input type="text" defaultValue="Munna Hassan" className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-2xl outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all text-sm font-bold" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] ml-2">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-amber-500 transition-colors" />
                    <input type="email" defaultValue="munna@example.com" className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-2xl outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all text-sm font-bold" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] ml-2">Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-amber-500 transition-colors" />
                    <input type="tel" defaultValue="+880 123 456 789" className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-2xl outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all text-sm font-bold" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] ml-2">Location</label>
                  <div className="relative group">
                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-amber-500 transition-colors" />
                    <input type="text" defaultValue="Dhaka, Bangladesh" className="w-full pl-14 pr-6 py-4 bg-gray-50 rounded-2xl outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all text-sm font-bold" />
                  </div>
                </div>
              </div>

              {/* Safety Badge Footer */}
              <div className="mt-16 p-8 bg-slate-900 rounded-[35px] text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="flex items-center gap-6 relative z-10">
                  <div className="bg-amber-500 p-4 rounded-2xl shadow-xl shadow-amber-500/20">
                    <ShieldCheck className="h-8 w-8 text-slate-900" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight leading-none mb-1">Your Privacy Matters</h4>
                    <p className="text-slate-400 text-xs font-medium">All your personal data is encrypted and secure.</p>
                  </div>
                </div>
                <button className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[2px] transition-all border border-white/10 relative z-10">
                  Privacy Settings
                </button>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}