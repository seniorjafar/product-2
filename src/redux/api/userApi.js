import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Post request
    userIsLogin: build.mutation({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useUserIsLoginMutation } = userApi;
