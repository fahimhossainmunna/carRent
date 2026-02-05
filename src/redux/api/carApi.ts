import { baseApi } from "./baseApi";

export const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: () => "/cars",
      providesTags: ["Car"],
    }),
    getSingleCar: builder.query({
      query: (id: string) => `/cars/${id}`,
      providesTags: ["Car"],
    }),
  }),
});

export const { useGetAllCarsQuery, useGetSingleCarQuery } = carApi;