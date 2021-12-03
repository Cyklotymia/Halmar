import { createSlice } from "@reduxjs/toolkit";

export const storeAcc = createSlice({
  name: "storeAcc",
  initialState: {
    numberOfProducts: 0,
    choosedFavProducts: [],
  },
  reducers: {
    addProduct: (state, name) => {
      state.choosedFavProducts = [...state.choosedFavProducts, name.payload];
      state.choosedFavProducts = Array.from(new Set(state.choosedFavProducts));

      state.numberOfProducts = state.choosedFavProducts.length;
    },
    removeProduct: (state, name) => {
     
      state.choosedFavProducts = state.choosedFavProducts.filter((code) => {
        return code !== name.payload;
      });
      state.numberOfProducts = state.choosedFavProducts.length;
    },
  },
});

export const { addProduct, removeProduct } = storeAcc.actions;
export default storeAcc.reducer;
