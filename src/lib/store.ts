// libs
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// slices
import ThemeReducer from "@/redux/slices/theme.slice";
// services
import { AuthService } from "@/redux/services/auth.service";

const rootReducer = combineReducers({
    ThemeReducer,
    [AuthService.reducerPath]: AuthService.reducer,
});

export const Store = configureStore({
    reducer: rootReducer,
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(AuthService.middleware),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
