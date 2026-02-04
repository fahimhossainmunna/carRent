"use client";

import { 
  AlertCircle, 
  Calendar, 
  Car, 
  CheckCircle, 
  Clock, 
  CreditCard, 
  Download, 
  Mail, 
  MapPin, 
  Navigation, 
  Phone, 
  Search, 
  User, 
  X,
  Trash2
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <span 
      className={`px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border flex items-center gap-1.5 w-fit ${STATUS_STYLES[status]}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {status}
    </span>
  );
};

const StatsCard = ({ 
  icon: Icon, 
  value, 
  label, 
  bgColor 
}: { 
  icon: any; 
  value: number | string; 
  label: string; 
  bgColor: string; 
}) => (
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

const EmptyState = () => (
  <div className="bg-white p-12 rounded-2xl border border-gray-100 text-center">
    <div className="bg-gray-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
      <Car className="h-10 w-10 text-gray-400" />
    </div>
    <h3 className="text-xl font-black text-gray-900 mb-2">No Bookings Found</h3>
    <p className="text-gray-500 font-semibold">Try adjusting your filters or search query</p>
  </div>
);

const BookingCard = ({ 
  booking, 
  onClick 
}: { 
  booking: Booking; 
  onClick: () => void; 
}) => (
  <div 
    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all cursor-pointer group"
    onClick={onClick}
  >
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Car Image */}
      <div className="h-32 w-full lg:w-48 bg-gradient-to-br from-amber-50 to-slate-400 rounded-xl relative overflow-hidden flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/20 group-hover:shadow-amber-600/40 transition-shadow">
        <Image 
          src={booking.carImage} 
          alt={booking.carName} 
          fill 
          className="object-contain p-4" 
        />
      </div>

      {/* Booking Info */}
      <div className="flex-1 space-y-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
              {booking.carName}
            </h3>
            <p className="text-sm text-gray-400 font-bold uppercase tracking-wide">
              Order ID: {booking.id}
            </p>
          </div>
          <StatusBadge status={booking.status} />
        </div>

        {/* Trip Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
            <div className="bg-amber-100 p-2 rounded-lg">
              <Navigation className="h-4 w-4 text-amber-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Pick-up</p>
              <p className="text-sm font-black text-gray-900 leading-tight">{booking.pickupLocation}</p>
              <p className="text-xs text-gray-500 font-semibold mt-1 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {booking.pickupDate}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-orange-200 transition-colors">
            <div className="bg-orange-100 p-2 rounded-lg">
              <MapPin className="h-4 w-4 text-orange-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Drop-off</p>
              <p className="text-sm font-black text-gray-900 leading-tight">{booking.dropoffLocation}</p>
              <p className="text-xs text-gray-500 font-semibold mt-1 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {booking.dropoffDate}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-500 font-semibold">Total Price</p>
            <p className="text-3xl font-black bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              ${booking.totalPrice}.00
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-600/30 transition-all active:scale-95">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ===== MAIN COMPONENT =====
export default function MyBookingPage() {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Load bookings
  const loadBookings = () => {
    const staticBookings: Booking[] = [
      {
        id: "BK-9021",
        carName: "Audi R8 Spyder",
        carImage: "/images/cars/audi2.png",
        status: "active",
        pickupDate: "Tuesday, February 10, 2026",
        dropoffDate: "Sunday, February 15, 2026",
        pickupLocation: "Dhaka International University",
        dropoffLocation: "Gulshan, Dhaka",
        totalPrice: 1750,
        bookingDate: "2026-02-04",
        customerName: "Munna Hassan",
        customerPhone: "+880 123 456 789",
        customerEmail: "munna@example.com",
      },
    ];

    const savedBookings = JSON.parse(localStorage.getItem("confirmedBookings") || "[]");
    setBookings([...savedBookings, ...staticBookings]);
  };

  useEffect(() => { loadBookings(); }, []);

  const handleRemoveBooking = (id: string) => {
    const savedBookings = JSON.parse(localStorage.getItem("confirmedBookings") || "[]");
    localStorage.setItem("confirmedBookings", JSON.stringify(savedBookings.filter((b: Booking) => b.id !== id)));
    loadBookings();
    setSelectedBooking(null);
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesStatus = filterStatus === "all" || booking.status === filterStatus;
    const matchesSearch = booking.carName.toLowerCase().includes(searchQuery.toLowerCase()) || booking.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    active: bookings.filter(b => b.status === 'active' || b.status === 'confirmed').length,
    upcoming: bookings.filter(b => b.status === 'upcoming').length,
    completed: bookings.filter(b => b.status === 'completed').length,
    totalSpent: bookings.reduce((sum, b) => sum + b.totalPrice, 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/20 to-gray-50 py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Page Header */}
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
                <button
                  key={status} onClick={() => setFilterStatus(status)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filterStatus === status ? "bg-amber-500 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  {status}
                </button>
              ))}
            </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {filteredBookings.length === 0 ? (
            <EmptyState />
          ) : (
            filteredBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} onClick={() => setSelectedBooking(booking)} />
            ))
          )}
        </div>
      </div>

      {/* --- MODAL FIX --- */}
      {selectedBooking && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 animate-fadeIn">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setSelectedBooking(null)} />
          
          <div className="relative bg-white w-full max-w-3xl rounded-[40px] shadow-2xl animate-scaleIn overflow-hidden">
            {/* Modal Header */}
            <div className="px-10 py-8 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Booking Details</h2>
                <p className="text-[10px] font-black text-amber-500 uppercase tracking-[3px] mt-1">{selectedBooking.id}</p>
              </div>
              <button onClick={() => setSelectedBooking(null)} className="p-3 hover:bg-gray-100 rounded-2xl transition-all group">
                <X className="h-7 w-7 text-gray-400 group-hover:rotate-90 transition-all" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-10 max-h-[65vh] overflow-y-auto no-scrollbar space-y-8">
              
              {/* Car Section */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-50/30 p-8 rounded-[35px] border border-amber-100 flex items-center gap-8 shadow-sm">
                <div className="h-32 w-48 relative bg-white rounded-3xl shadow-md flex items-center justify-center overflow-hidden shrink-0">
                  <Image src={selectedBooking.carImage} alt={selectedBooking.carName} fill className="object-contain p-4" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-3 leading-none">{selectedBooking.carName}</h3>
                  <StatusBadge status={selectedBooking.status} />
                </div>
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-[30px] border border-gray-100 space-y-4">
                  <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-[2px] flex items-center gap-2"><User className="h-4 w-4" /> Customer Info</h4>
                  <div className="space-y-1">
                    <p className="text-lg font-black text-gray-900 uppercase">{selectedBooking.customerName}</p>
                    <p className="text-sm text-gray-500 font-bold">{selectedBooking.customerPhone}</p>
                    <p className="text-sm text-gray-500 font-bold">{selectedBooking.customerEmail}</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-[30px] border border-gray-100 space-y-4">
                  <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-[2px] flex items-center gap-2"><CreditCard className="h-4 w-4" /> Payment Info</h4>
                  <div className="space-y-1">
                    <p className="text-2xl font-black text-gray-900">${selectedBooking.totalPrice}.00</p>
                    <p className="text-xs text-gray-400 font-black uppercase tracking-widest leading-none mt-2">Total Paid via Card</p>
                  </div>
                </div>
              </div>

              {/* Trip Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                <div className="p-6 bg-amber-50/20 rounded-[30px] border border-amber-100/50">
                  <p className="text-[10px] font-black text-amber-500 uppercase tracking-[2px] mb-4 flex items-center gap-2"><Navigation className="h-4 w-4" /> Pick-up</p>
                  <p className="text-base font-black text-gray-900 mb-2">{selectedBooking.pickupLocation}</p>
                  <p className="text-xs font-bold text-gray-500">{selectedBooking.pickupDate}</p>
                </div>
                <div className="p-6 bg-orange-50/20 rounded-[30px] border border-orange-100/50">
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-[2px] mb-4 flex items-center gap-2"><MapPin className="h-4 w-4" /> Drop-off</p>
                  <p className="text-base font-black text-gray-900 mb-2">{selectedBooking.dropoffLocation}</p>
                  <p className="text-xs font-bold text-gray-500">{selectedBooking.dropoffDate}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-10 border-t border-gray-50 flex flex-col sm:flex-row gap-4 bg-white">
              <button className="flex-1 bg-slate-900 text-white py-5 rounded-[22px] font-black uppercase text-xs tracking-[3px] hover:bg-amber-500 hover:text-slate-900 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/10">
                <Download className="h-5 w-5" /> Download Invoice
              </button>
              {(selectedBooking.status === 'confirmed' || selectedBooking.status === 'active') && (
                <button onClick={() => handleRemoveBooking(selectedBooking.id)} className="bg-red-50 text-red-600 px-10 py-5 rounded-[22px] font-black uppercase text-xs tracking-[3px] hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-3">
                  <Trash2 className="h-5 w-5" /> Remove
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}