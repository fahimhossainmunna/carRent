"use client";

import { 
  AlertCircle, Calendar, Car, CheckCircle, Clock, CreditCard, 
  Download, Mail, MapPin, Navigation, Phone, Search, User, X, Trash2, 
  ArrowRight, TrendingUp
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  active: "bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 shadow-lg shadow-green-500/30",
  completed: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-lg shadow-blue-500/30",
  cancelled: "bg-gradient-to-r from-red-500 to-rose-500 text-white border-0 shadow-lg shadow-red-500/30",
  upcoming: "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg shadow-amber-500/30",
  confirmed: "bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 shadow-lg shadow-green-500/30",
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
    <span className={`px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-[2px] flex items-center gap-2 w-fit ${STATUS_STYLES[status]}`}>
      <Icon className="h-4 w-4" />
      {status}
    </span>
  );
};

const StatsCard = ({ icon: Icon, value, label, gradient, iconColor }: any) => (
  <div className="relative overflow-hidden bg-white p-6 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer">
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${gradient}`} />
    <div className="relative z-10 flex items-start justify-between">
      <div>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-[2px] mb-2">{label}</p>
        <p className="text-4xl font-black text-slate-900 group-hover:text-white transition-colors">{value}</p>
      </div>
      <div className={`${iconColor} p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
        <Icon className="h-7 w-7 text-white" />
      </div>
    </div>
    <div className="relative mt-4 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-white/80 transition-colors">
      <TrendingUp className="h-3.5 w-3.5" />
      <span>View Details</span>
    </div>
  </div>
);

// ===== MAIN COMPONENT =====
export default function MyBookingPage() {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="font-black text-slate-900 uppercase tracking-[4px] text-sm">Loading Your Bookings</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #fff 50%, #fef3c7 100%)" }}>
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto max-w-7xl px-6 py-16 relative z-10">
        
        {/* Premium Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-6 backdrop-blur-xl"
            style={{ 
              background: "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.05) 100%)", 
              border: "1px solid rgba(245,158,11,0.2)",
              boxShadow: "0 4px 20px rgba(245,158,11,0.1)"
            }}>
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[3px] text-amber-600">Personal Dashboard</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="text-6xl font-black text-slate-900 tracking-tight leading-none mb-2">
                My <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Bookings</span>
              </h1>
              <p className="text-slate-500 text-lg font-medium">Manage your luxury vehicle reservations</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-200/50 shadow-xl flex items-center gap-5">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-4 rounded-2xl shadow-lg">
                <Calendar className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-[2px]">Total Fleet</p>
                <p className="text-3xl font-black text-slate-900">{bookings.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard 
            icon={Car} 
            value={stats.active} 
            label="Active Rentals" 
            gradient="bg-gradient-to-br from-emerald-500/20 to-green-500/20"
            iconColor="bg-gradient-to-br from-emerald-500 to-green-600"
          />
          <StatsCard 
            icon={Clock} 
            value={stats.upcoming} 
            label="Upcoming" 
            gradient="bg-gradient-to-br from-amber-500/20 to-orange-500/20"
            iconColor="bg-gradient-to-br from-amber-500 to-orange-600"
          />
          <StatsCard 
            icon={CheckCircle} 
            value={stats.completed} 
            label="Completed" 
            gradient="bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
            iconColor="bg-gradient-to-br from-blue-500 to-cyan-600"
          />
          <StatsCard 
            icon={CreditCard} 
            value={`$${stats.totalSpent}`} 
            label="Total Invested" 
            gradient="bg-gradient-to-br from-slate-500/20 to-gray-500/20"
            iconColor="bg-gradient-to-br from-slate-700 to-slate-900"
          />
        </div>

        {/* Premium Controls */}
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-200/50 shadow-xl mb-10">
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            {/* Search */}
            <div className="w-full lg:flex-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-20 transition-opacity duration-500" />
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-amber-500 transition-colors" />
                <input
                  type="text" 
                  placeholder="Search vehicles, booking ID..."
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-5 py-4 bg-slate-50/50 rounded-2xl outline-none border-2 border-transparent focus:border-amber-500/50 focus:bg-white transition-all text-sm font-semibold text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>
            
            {/* Filters */}
            <div className="flex gap-2.5 flex-wrap">
              {FILTER_OPTIONS.map((status) => (
                <button 
                  key={status} 
                  onClick={() => setFilterStatus(status)}
                  className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-[2px] transition-all duration-300 ${
                    filterStatus === status 
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 scale-105" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Bookings List */}
        {filteredBookings.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-xl p-20 rounded-3xl border-2 border-dashed border-slate-200 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-slate-400" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">No Bookings Found</h3>
            <p className="text-slate-500 text-sm">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredBookings.map((booking: Booking) => (
              <div 
                key={booking.id} 
                onClick={() => setSelectedBooking(booking)} 
                className="group bg-white/80 backdrop-blur-xl p-7 rounded-3xl border border-slate-200/50 shadow-lg hover:shadow-2xl hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  {/* Car Image */}
                  <div className="relative h-40 w-full lg:w-64 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl overflow-hidden shadow-lg shrink-0 group-hover:shadow-xl transition-all">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent z-10" />
                    <Image src={booking.carImage} alt={booking.carName} fill className="object-contain p-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-700" />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 space-y-5 w-full">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-amber-600 transition-colors">
                          {booking.carName}
                        </h3>
                        <p className="text-xs text-slate-500 font-bold">Booking ID: {booking.id}</p>
                      </div>
                      <StatusBadge status={booking.status} />
                    </div>
                    
                    {/* Location Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-100/50 group-hover:shadow-md transition-all">
                        <div className="bg-white p-2.5 rounded-xl shadow-sm">
                          <Navigation className="h-5 w-5 text-emerald-600"/>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-emerald-600 uppercase tracking-wider mb-0.5">Pick-up</p>
                          <p className="text-sm font-black text-slate-900">{booking.pickupLocation}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100/50 group-hover:shadow-md transition-all">
                        <div className="bg-white p-2.5 rounded-xl shadow-sm">
                          <MapPin className="h-5 w-5 text-orange-600"/>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-orange-600 uppercase tracking-wider mb-0.5">Drop-off</p>
                          <p className="text-sm font-black text-slate-900">{booking.dropoffLocation}</p>
                        </div>
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                      <div>
                        <p className="text-xs text-slate-500 font-bold mb-1">Total Investment</p>
                        <p className="text-3xl font-black bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                          ${booking.totalPrice}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold text-amber-600 group-hover:gap-3 transition-all">
                        <span>View Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Premium Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl" onClick={() => setSelectedBooking(null)} />
          
          <div className="relative bg-white w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden animate-fade-in">
            {/* Header */}
            <div className="px-10 py-7 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-slate-50 to-white sticky top-0 z-10">
              <div>
                <p className="text-xs font-black text-amber-500 uppercase tracking-[3px] mb-1">Booking Reference</p>
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">#{selectedBooking.id}</h2>
              </div>
              <button 
                onClick={() => setSelectedBooking(null)} 
                className="p-3 hover:bg-slate-100 rounded-2xl transition-all group"
              >
                <X className="h-7 w-7 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-10 max-h-[70vh] overflow-y-auto space-y-8">
              {/* Car Showcase */}
              <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 p-8 rounded-3xl border border-amber-100/50 shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="h-48 w-full md:w-80 relative bg-white rounded-3xl shadow-xl flex items-center justify-center shrink-0 overflow-hidden">
                    <Image src={selectedBooking.carImage} alt={selectedBooking.carName} fill className="object-contain p-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-black text-slate-900 uppercase mb-4 tracking-tight">{selectedBooking.carName}</h3>
                    <StatusBadge status={selectedBooking.status} />
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-black text-slate-500 uppercase tracking-wider mb-1">Booking Date</p>
                        <p className="text-sm font-bold text-slate-900">{selectedBooking.bookingDate}</p>
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-500 uppercase tracking-wider mb-1">Total Price</p>
                        <p className="text-2xl font-black bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                          ${selectedBooking.totalPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Journey Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl border border-emerald-100/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white p-3 rounded-2xl shadow-sm">
                      <Navigation className="h-6 w-6 text-emerald-600" />
                    </div>
                    <p className="text-xs font-black text-emerald-600 uppercase tracking-[2px]">Pick-up Location</p>
                  </div>
                  <p className="text-lg font-black text-slate-900">{selectedBooking.pickupLocation}</p>
                  <p className="text-sm text-slate-600 font-semibold mt-2">{selectedBooking.pickupDate}</p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl border border-orange-100/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white p-3 rounded-2xl shadow-sm">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <p className="text-xs font-black text-orange-600 uppercase tracking-[2px]">Drop-off Location</p>
                  </div>
                  <p className="text-lg font-black text-slate-900">{selectedBooking.dropoffLocation}</p>
                  <p className="text-sm text-slate-600 font-semibold mt-2">{selectedBooking.dropoffDate}</p>
                </div>
              </div>

              {/* Customer Info */}
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-[3px] mb-5">Customer Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-slate-400" />
                    <div>
                      <p className="text-xs text-slate-500 font-bold">Name</p>
                      <p className="text-sm font-black text-slate-900">{selectedBooking.customerName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-slate-400" />
                    <div>
                      <p className="text-xs text-slate-500 font-bold">Phone</p>
                      <p className="text-sm font-black text-slate-900">{selectedBooking.customerPhone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <div>
                      <p className="text-xs text-slate-500 font-bold">Email</p>
                      <p className="text-sm font-black text-slate-900 truncate">{selectedBooking.customerEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-8 border-t border-slate-100 bg-gradient-to-r from-slate-50 to-white flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-slate-900 to-slate-800 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[3px] flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105 transition-all">
                <Download className="h-5 w-5" /> Download Invoice
              </button>
              {(selectedBooking.status === 'confirmed' || selectedBooking.status === 'active') && (
                <button 
                  onClick={() => handleRemove(selectedBooking.id)} 
                  className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[3px] flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105 transition-all"
                >
                  <Trash2 className="h-5 w-5" /> Cancel Booking
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}