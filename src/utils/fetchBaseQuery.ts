// libs
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next/client";
// configs
import { BASE_URL } from "@/constants/api-config";
import { COOKIES } from "@/constants/cookies-config";

const getBaseQuery = () =>
    fetchBaseQuery({
        baseUrl: BASE_URL,
        headers: {
            ...(COOKIES.accessToken && {
                Authorization: `Bearer ${getCookie(COOKIES.accessToken)}`,
            }),
        },
        credentials: "include",
    });

export const BaseQuery = getBaseQuery();
