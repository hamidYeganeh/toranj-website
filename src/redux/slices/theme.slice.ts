// libs
import { ITheme, IThemeMode } from "@/types/theme.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ITheme = {
    mode: IThemeMode.dark,
};

export const ThemeSlice = createSlice({
    name: "theme-slice",
    initialState,
    reducers: {
        toggleThemeMode: (state) => {
            const isLightMode = state.mode === IThemeMode.light;
            if (!!document) {
                if (isLightMode) {
                    state.mode = IThemeMode.dark;
                    // document.body.classList.add("dark");
                } else {
                    state.mode = IThemeMode.light;
                    // document.body.classList.remove("dark");
                }
                document.documentElement.classList.toggle(
                    "dark",
                    isLightMode ||
                        window.matchMedia("(prefers-color-scheme: dark)")
                            .matches,
                );
            }
        },
    },
});

export const { toggleThemeMode } = ThemeSlice.actions;
export default ThemeSlice.reducer;
