import { createSlice } from "@reduxjs/toolkit";

export const activeHamburgerSlice = createSlice({
  name: "activeHamburger",
  initialState: {
    isActiveHamburger: false,
    isActiveRooms: false,
    isActiveCategories: false,
  },
  reducers: {
    activeHamburger: (state, action) => {
      if (action.payload === "toggle") {
        state.isActiveHamburger = !state.isActiveHamburger;
      } else {
        state.isActiveHamburger = action.payload;
      }
    },
    activeCategories: (state, action) => {
      state.isActiveCategories = action.payload;
    },
    activeRooms: (state, action) => {
   
      state.isActiveRooms = action.payload;
    },
  },
});

export const {activeHamburger,activeCategories,activeRooms} = activeHamburgerSlice.actions;
export default activeHamburgerSlice.reducer;
