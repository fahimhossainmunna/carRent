// 1. Car Type
export interface ICar {
  _id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  isElectric: boolean;
  status: "available" | "unavailable";
  features: string[];
  pricePerHour: number;
  description: string;
  image: string;
  isDeleted?: boolean;
}

// 2. User Type
export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  phone?: string;
  address?: string;
  status?: "active" | "blocked";
}

// 3. Booking Type
export interface IBooking {
  id: string; // Dashboard-e ID show korar jonno
  carId: string;
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

// 4. API Response Type
export interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// 5. Auth State Type
export interface IAuthState {
  user: null | IUser;
  token: null | string;
}
