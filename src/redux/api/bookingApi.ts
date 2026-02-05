
import { baseApi } from "./baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyBookings: builder.query({
      query: () => "/bookings/my-bookings", 
      providesTags: ["Booking"],
    }),
    removeBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const { useGetMyBookingsQuery, useRemoveBookingMutation } = bookingApi;