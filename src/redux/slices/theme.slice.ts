// libs
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

export const ThemeSlice = createSlice({
  name: "theme-slice",
  initialState,
  reducers: {
    toggleTheme: () => {},
  },
});

export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
