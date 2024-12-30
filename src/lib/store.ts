// libs
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// slices
import ThemeReducer from "@/redux/slices/theme.slice";

const rootReducer = combineReducers({ ThemeReducer });

export const Store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
