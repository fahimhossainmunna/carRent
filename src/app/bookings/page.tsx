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
      <div className="h-32 w-full lg:w-48 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl relative overflow-hidden flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/20 group-hover:shadow-amber-600/40 transition-shadow">
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
                {new Date(booking.pickupDate).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
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
                {new Date(booking.dropoffDate).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
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

  // Load bookings from localStorage
  const loadBookings = () => {
    const staticBookings: Booking[] = [
      {
        id: "BK-2026-001",
        carName: "Audi R8 Spyder",
        carImage: "/images/cars/audi2.png",
        status: "active",
        pickupDate: "2026-02-10",
        dropoffDate: "2026-02-15",
        pickupLocation: "Dhaka International University",
        dropoffLocation: "Gulshan, Dhaka",
        totalPrice: 450,
        bookingDate: "2026-02-04",
        customerName: "Munna Hassan",
        customerPhone: "+880 123 456 789",
        customerEmail: "munna@example.com",
      },
    ];

    const savedBookings = JSON.parse(localStorage.getItem("confirmedBookings") || "[]");
    setBookings([...savedBookings, ...staticBookings]);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  // Remove booking
  const handleRemoveBooking = (id: string) => {
    const savedBookings = JSON.parse(localStorage.getItem("confirmedBookings") || "[]");
    const updatedBookings = savedBookings.filter((b: Booking) => b.id !== id);
    
    localStorage.setItem("confirmedBookings", JSON.stringify(updatedBookings));
    loadBookings();
    setSelectedBooking(null);
  };

  // Filter bookings
  const filteredBookings = bookings.filter((booking) => {
    const matchesStatus = filterStatus === "all" || booking.status === filterStatus;
    const matchesSearch =
      booking.carName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Calculate stats
  const activeCount = bookings.filter(b => b.status === 'active' || b.status === 'confirmed').length;
  const upcomingCount = bookings.filter(b => b.status === 'upcoming').length;
  const completedCount = bookings.filter(b => b.status === 'completed').length;
  const totalSpent = bookings.reduce((sum, b) => sum + b.totalPrice, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/20 to-gray-50 py-10">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-amber-600 bg-clip-text text-transparent">
            My Bookings
          </h1>
          <p className="text-gray-500 font-semibold text-lg">
            Manage and track all your car rental bookings
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard 
            icon={Car} 
            value={activeCount} 
            label="Active" 
            bgColor="bg-green-100 text-green-600" 
          />
          <StatsCard 
            icon={Clock} 
            value={upcomingCount} 
            label="Upcoming" 
            bgColor="bg-amber-100 text-amber-600" 
          />
          <StatsCard 
            icon={CheckCircle} 
            value={completedCount} 
            label="Completed" 
            bgColor="bg-blue-100 text-blue-600" 
          />
          <StatsCard 
            icon={CreditCard} 
            value={`$${totalSpent}`} 
            label="Total Spent" 
            bgColor="bg-gray-100 text-gray-600" 
          />
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full md:w-96 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by car name or booking ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl outline-none border-2 border-transparent focus:border-amber-500 focus:bg-white transition-all text-sm font-semibold placeholder:text-gray-400"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap justify-center md:justify-end">
              {FILTER_OPTIONS.map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                    filterStatus === status
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <EmptyState />
          ) : (
            filteredBookings.map((booking) => (
              <BookingCard 
                key={booking.id} 
                booking={booking} 
                onClick={() => setSelectedBooking(booking)} 
              />
            ))
          )}
        </div>
      </div>

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div 
            className="absolute inset-0 bg-gray-900/70 backdrop-blur-md" 
            onClick={() => setSelectedBooking(null)}
          />
          
          <div className="relative bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 animate-scaleIn">
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-6 pb-6 border-b border-gray-100">
              <div>
                <h2 className="text-3xl font-black bg-gradient-to-r from-gray-900 to-amber-600 bg-clip-text text-transparent mb-1">
                  Booking Details
                </h2>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">
                  {selectedBooking.id}
                </p>
              </div>
              <button
                onClick={() => setSelectedBooking(null)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-all group"
              >
                <X className="h-6 w-6 text-gray-500 group-hover:text-red-600 group-hover:rotate-90 transition-all" />
              </button>
            </div>

            {/* Car Section */}
            <div className="mb-6 p-5 bg-gradient-to-br from-amber-50 to-amber-50/30 rounded-2xl border border-amber-200">
              <div className="flex items-center gap-5">
                <div className="h-24 w-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl relative overflow-hidden flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/30">
                  <Image 
                    src={selectedBooking.carImage} 
                    alt={selectedBooking.carName} 
                    fill 
                    className="object-contain p-3" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {selectedBooking.carName}
                  </h3>
                  <StatusBadge status={selectedBooking.status} />
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="space-y-4 mb-6">
              {/* Customer Info */}
              <div className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-amber-600" />
                  Customer Information
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-bold text-gray-900">{selectedBooking.customerName}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-semibold text-gray-600">{selectedBooking.customerPhone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-semibold text-gray-600">{selectedBooking.customerEmail}</span>
                  </div>
                </div>
              </div>

              {/* Trip Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-amber-600" />
                    Pick-up
                  </p>
                  <p className="text-sm font-black text-gray-900 mb-2">{selectedBooking.pickupLocation}</p>
                  <p className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(selectedBooking.pickupDate).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    Drop-off
                  </p>
                  <p className="text-sm font-black text-gray-900 mb-2">{selectedBooking.dropoffLocation}</p>
                  <p className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(selectedBooking.dropoffDate).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="p-5 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
                <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-green-600" />
                  Payment Summary
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-semibold">Booking Date</span>
                    <span className="text-sm font-bold text-gray-900">
                      {new Date(selectedBooking.bookingDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-green-200 flex justify-between items-center">
                    <span className="text-lg font-black text-gray-900">Total Amount</span>
                    <span className="text-2xl font-black bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                      ${selectedBooking.totalPrice}.00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-black hover:shadow-xl hover:shadow-amber-600/40 transition-all flex items-center justify-center gap-2 active:scale-95">
                <Download className="h-5 w-5" />
                Download Invoice
              </button>
              
              {(selectedBooking.status === 'confirmed' || selectedBooking.status === 'active') && (
                <button
                  onClick={() => handleRemoveBooking(selectedBooking.id)}
                  className="px-6 py-4 bg-red-100 text-red-600 rounded-xl font-black hover:bg-red-200 hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Trash2 className="h-5 w-5" />
                  Remove Booking
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}