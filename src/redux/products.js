import { createSlice } from "@reduxjs/toolkit";
import productsData from "../assets/data/products.js";

export const products = createSlice({
  name: "products",
  initialState: {
    choosedProducts: "promocje",
    products: productsData,
    length: productsData[0].items.length,
    maxIndexOfProducts:4,
    numberOfVisibleElements:5,
  },
  reducers: {
    changeProduct: (state, name) => {
      state.choosedProducts = name.payload;
      switch (name.payload) {
        case "promocje":
          state.length = productsData[0].items.length;
          break;
        case "nowości":
          state.length = productsData[1].items.length;
          break;
        case "wyprzedaż":
          state.length = productsData[2].items.length;
          break;

        default:
          break;
      }
    },
    arrowHandler:(state,name)=>{
        if(name.payload==="right"){
          state.maxIndexOfProducts=state.maxIndexOfProducts+state.numberOfVisibleElements  
        } else{
            state.maxIndexOfProducts=state.maxIndexOfProducts-state.numberOfVisibleElements

        }
            
    },
    resetProducts:(state)=>{
        state.maxIndexOfProducts=4
    }
  },
});

export const { changeProduct,arrowHandler,resetProducts } = products.actions;
export default products.reducer;
