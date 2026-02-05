"use client";

import { 
  AlertCircle, Calendar, Car, CheckCircle, Clock, CreditCard, 
  Download, Mail, MapPin, Navigation, Phone, Search, User, X, Trash2
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
// Redux Hooks for Data Management
import { useGetMyBookingsQuery, useRemoveBookingMutation } from "@/redux/api/bookingApi";

// ===== TYPES =====
interface Booking {
  id: string;
  carName: string;
  carImage: string;
  status: "active" | "completed" | "cancelled" | "upcoming" | "confirmed";
  pickupDate: string;
  dropoffDate: string;
  pickupLocation: string;
  dropoffLocation: string;
  totalPrice: number;
  bookingDate: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
}

// ===== CONSTANTS =====
const FILTER_OPTIONS = ["all", "active", "upcoming", "completed", "cancelled"] as const;

const STATUS_STYLES = {
  active: "bg-green-100 text-green-700 border-green-200",
  completed: "bg-blue-100 text-blue-700 border-blue-200",
  cancelled: "bg-red-100 text-red-700 border-red-200",
  upcoming: "bg-amber-100 text-amber-700 border-amber-200",
  confirmed: "bg-green-100 text-green-700 border-green-200",
} as const;

const STATUS_ICONS = {
  active: CheckCircle,
  completed: CheckCircle,
  cancelled: X,
  upcoming: Clock,
  confirmed: CheckCircle,
} as const;

// ===== COMPONENTS =====
const StatusBadge = ({ status }: { status: Booking["status"] }) => {
  const Icon = STATUS_ICONS[status];
  return (
    <span className={`px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border flex items-center gap-1.5 w-fit ${STATUS_STYLES[status]}`}>
      <Icon className="h-3.5 w-3.5" />
      {status}
    </span>
  );
};

const StatsCard = ({ icon: Icon, value, label, bgColor }: any) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
    <div className="flex items-center gap-3">
      <div className={`${bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-2xl font-black text-gray-900">{value}</p>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{label}</p>
      </div>
    </div>
  </div>
);

// ===== MAIN COMPONENT =====
export default function MyBookingPage() {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // API Hooks for Dynamic Data
  const { data: apiBookings, isLoading, isError } = useGetMyBookingsQuery(undefined);
  const [removeBooking] = useRemoveBookingMutation();

  const handleRemove = async (id: string) => {
    try {
      await removeBooking(id).unwrap();
      setSelectedBooking(null);
    } catch (err) {
      console.error("Failed to remove booking:", err);
    }
  };

  // Filter & Search Logic
  const bookings = apiBookings || [];
  const filteredBookings = bookings.filter((booking: Booking) => {
    const matchesStatus = filterStatus === "all" || booking.status === filterStatus;
    const matchesSearch = booking.carName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         booking.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    active: bookings.filter((b: Booking) => b.status === 'active' || b.status === 'confirmed').length,
    upcoming: bookings.filter((b: Booking) => b.status === 'upcoming').length,
    completed: bookings.filter((b: Booking) => b.status === 'completed').length,
    totalSpent: bookings.reduce((sum: number, b: Booking) => sum + b.totalPrice, 0)
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center font-black text-amber-500 uppercase tracking-widest">Loading Premium Data...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/20 to-gray-50 py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-black text-amber-500 uppercase tracking-[4px] mb-2">User Dashboard</p>
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter uppercase">
              My <span className="text-amber-500">Bookings</span>
            </h1>
          </div>
          <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-2xl"><Calendar className="h-6 w-6 text-amber-600" /></div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Total Bookings</p>
              <p className="text-xl font-black text-gray-900">{bookings.length} Vehicles</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard icon={Car} value={stats.active} label="Active" bgColor="bg-green-100 text-green-600" />
          <StatsCard icon={Clock} value={stats.upcoming} label="Upcoming" bgColor="bg-amber-100 text-amber-600" />
          <StatsCard icon={CheckCircle} value={stats.completed} label="Completed" bgColor="bg-blue-100 text-blue-600" />
          <StatsCard icon={CreditCard} value={`$${stats.totalSpent}`} label="Total Spent" bgColor="bg-gray-100 text-gray-600" />
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-96 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text" placeholder="Search by model or ID..."
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-2xl outline-none border-2 border-transparent focus:border-amber-500 transition-all text-sm font-semibold"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {FILTER_OPTIONS.map((status) => (
              <button key={status} onClick={() => setFilterStatus(status)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filterStatus === status ? "bg-amber-500 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {filteredBookings.map((booking: Booking) => (
            <div key={booking.id} onClick={() => setSelectedBooking(booking)} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all cursor-pointer group">
               <div className="flex flex-col lg:flex-row gap-6">
                  <div className="h-32 w-full lg:w-48 bg-gradient-to-br from-amber-50 to-slate-400 rounded-xl relative overflow-hidden flex items-center justify-center shrink-0 shadow-lg">
                    <Image src={booking.carImage} alt={booking.carName} fill className="object-contain p-4" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-black text-gray-900 uppercase group-hover:text-amber-600 transition-colors">{booking.carName}</h3>
                      <StatusBadge status={booking.status} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"><Navigation className="h-4 w-4 text-amber-500"/> <span className="text-xs font-black text-slate-700">{booking.pickupLocation}</span></div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"><MapPin className="h-4 w-4 text-orange-500"/> <span className="text-xs font-black text-slate-700">{booking.dropoffLocation}</span></div>
                    </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL --- */}
      {selectedBooking && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setSelectedBooking(null)} />
          <div className="relative bg-white w-full max-w-3xl rounded-[40px] shadow-2xl overflow-hidden">
            <div className="px-10 py-8 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Booking Details</h2>
              <button onClick={() => setSelectedBooking(null)} className="p-3 hover:bg-gray-100 rounded-2xl transition-all"><X className="h-7 w-7 text-gray-400" /></button>
            </div>
            <div className="p-10 max-h-[65vh] overflow-y-auto no-scrollbar space-y-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-50/30 p-8 rounded-[35px] border border-amber-100 flex items-center gap-8">
                <div className="h-32 w-48 relative bg-white rounded-3xl shadow-md flex items-center justify-center shrink-0">
                  <Image src={selectedBooking.carImage} alt={selectedBooking.carName} fill className="object-contain p-4" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900 uppercase mb-3">{selectedBooking.carName}</h3>
                  <StatusBadge status={selectedBooking.status} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-5 bg-slate-50 rounded-3xl">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pick-up</p>
                   <p className="text-sm font-black text-slate-900">{selectedBooking.pickupLocation}</p>
                 </div>
                 <div className="p-5 bg-slate-50 rounded-3xl">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Drop-off</p>
                   <p className="text-sm font-black text-slate-900">{selectedBooking.dropoffLocation}</p>
                 </div>
              </div>
            </div>
            <div className="p-10 border-t border-gray-50 flex gap-4 bg-white">
              <button className="flex-1 bg-slate-900 text-white py-5 rounded-[22px] font-black uppercase text-xs tracking-[3px] flex items-center justify-center gap-3"><Download className="h-5 w-5" /> Invoice</button>
              {(selectedBooking.status === 'confirmed' || selectedBooking.status === 'active') && (
                <button onClick={() => handleRemove(selectedBooking.id)} className="bg-red-50 text-red-600 px-10 py-5 rounded-[22px] font-black uppercase text-xs tracking-[3px] flex items-center justify-center gap-3"><Trash2 className="h-5 w-5" /> Remove</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}