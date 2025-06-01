import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { dark: true },
  reducers: {
    toggleDark: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { toggleDark } = themeSlice.actions;
export default themeSlice.reducer;
