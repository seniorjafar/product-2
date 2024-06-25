import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({
        url: "/products/search",
        params,
      }),
      providesTags: ["Product"],
    }),
    // Get request
    getDetailProducts: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),
    // Post request
    createProduct: build.mutation({
      query: (body) => ({
        url: "products/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetDetailProductsQuery,
  useCreateProductMutation,
} = productApi;
