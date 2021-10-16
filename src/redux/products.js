import { createSlice } from "@reduxjs/toolkit";
import productsData from "../assets/data/products.js"

export const products=createSlice({
    name:"products",
    initialState:{
       choosedProducts:"promocje",
       products:productsData
    },
    reducers:{
        changeProduct:(state,name)=>{
           state.choosedProducts=name.payload
        }
    }
})

export const {changeProduct}=products.actions;
export default products.reducer;