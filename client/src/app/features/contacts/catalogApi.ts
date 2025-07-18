import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../models/product";
import { baseQueryWithErrorHandling } from "../../api/baseApi";

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5001/api' }),
  baseQuery: baseQueryWithErrorHandling, // from baseApi.ts
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => ({ url: "products" })
    }),
    fetchProductDetails: builder.query<Product, string>({
      query: (productId) => `products/${productId}`
    })
  })
});

export const { useFetchProductDetailsQuery, useFetchProductsQuery } = catalogApi;