import mainSliderData from "../assets/data/mainSlider";
import { createSlice } from "@reduxjs/toolkit";

export const mainSlider=createSlice({
    name:"mainSlider",
    initialState:{
       indexOfShowedSlider:0,
    //    slides:mainSliderData.slides
    },
    reducers:{
        nextIndex:(state)=>{
            state.indexOfShowedSlider=indexOfShowedSlider+1
        },
        prevIndex:(state)=>{
            state.indexOfShowedSlider=indexOfShowedSlider-1
        },
        clickIndex:(state,index)=>{
            if (!index.payload) {
                state.indexOfShowedSlider=indexOfShowedSlider
            }
            state.indexOfShowedSlider=index.payload
        }
    }
})

export const {nextIndex,prevIndex,clickIndex}=mainSlider.actions;
export default mainSlider.reducer;