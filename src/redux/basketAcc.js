import { createSlice } from "@reduxjs/toolkit";

export const basketAcc = createSlice({
  name: "basketAcc",
  initialState: {
    numberOfProducts: 0,
    basketProducts: [],
  },
  reducers: {
    addProduct: (state, name) => {
      state.basketProducts = [...state.basketProducts, name.payload];
      state.basketProducts = Array.from(new Set(state.basketProducts));

      state.numberOfProducts = state.basketProducts.length;
    },
    
  },
});

export const { addProduct } = basketAcc.actions;
export default basketAcc.reducer;
