// libs
import { getCookie, setCookie } from "cookies-next/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// configs
import { COOKIES } from "@/constants/cookies-config";
// types
import type { IAuth, ILoginResponse } from "@/types/auth.types";

const initialState: IAuth = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

export const AuthSlice = createSlice({
    name: "auth-slice",
    initialState,
    reducers: {
        authenticate: (state, { payload }: PayloadAction<ILoginResponse>) => {
            setCookie(COOKIES.accessToken, payload?.accessToken);
            setCookie(COOKIES.refreshToken, payload?.refreshToken);
            state.user = payload;
            state.isAuthenticated = true;
            state.isInitialized = true;
        },
        initialize: (state) => {
            const accessToken = getCookie(COOKIES.accessToken);
            if (!!accessToken) {
                state.isInitialized = true;
                state.isAuthenticated = true;
            } else {
                state.isInitialized = false;
                state.isAuthenticated = false;
                state.user = null;
            }
        },
    },
});

export const { authenticate, initialize } = AuthSlice.actions;
export default AuthSlice.reducer;
