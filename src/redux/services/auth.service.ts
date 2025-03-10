// libs
import { createApi } from "@reduxjs/toolkit/query/react";
// configs
import { API_METHODS, Endpoints } from "@/constants/api-config";
import { BaseQuery } from "@/utils/fetchBaseQuery";
// types
import type { ILoginQuery, ILoginResponse } from "@/types/auth.types";

export const AuthService = createApi({
    reducerPath: "auth-service",
    baseQuery: BaseQuery,
    endpoints: (build) => ({
        login: build.mutation<ILoginResponse, ILoginQuery>({
            query: (body) => ({
                url: Endpoints.auth.login,
                method: API_METHODS.POST,
                body,
            }),
        }),
        currentUser: build.query({
            query: () => ({
                url: Endpoints.auth.currentUser,
                method: API_METHODS.GET,
            }),
        }),
    }),
});

export const { useLoginMutation, useCurrentUserQuery } = AuthService;
