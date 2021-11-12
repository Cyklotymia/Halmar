import { createSlice } from "@reduxjs/toolkit";


export const storeAcc = createSlice({
  name: "storeAcc",
  initialState: {
    numberOfProducts:0,
    choosedFavProducts:[],
  },
  reducers: {

    addProduct:(state,name)=>{
        
        state.choosedFavProducts=[...state.choosedFavProducts,name.payload]
        console.log(state.choosedFavProducts);
        state.numberOfProducts=state.choosedFavProducts.length
        
    }
  },
});

export const { addProduct} = storeAcc.actions;
export default storeAcc.reducer;
