// libs
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// configs
import { BASE_URL } from "@/constants/api-config";

export const BaseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
});
