import mainSliderData from "../assets/data/mainSlider";
import { createSlice } from "@reduxjs/toolkit";

export const mainSlider=createSlice({
    name:"mainSlider",
    initialState:{
       indexOfShowedSlider:0,
       slides:mainSliderData.slides
    },
    reducers:{
        nextIndex:(state)=>{
            state.indexOfShowedSlider=state.indexOfShowedSlider+1
            if (state.indexOfShowedSlider>state.slides.length-1) {
                state.indexOfShowedSlider=0
            }
        },
        prevIndex:(state)=>{
            state.indexOfShowedSlider=state.indexOfShowedSlider-1
            if (state.indexOfShowedSlider<0) {
                state.indexOfShowedSlider=state.slides.length-1
            }
        },
        clickIndex:(state,index)=>{
            console.log(index.payload);
            if (!index.payload && index.payload!==0) {
                
                state.indexOfShowedSlider=state.indexOfShowedSlider
            }else{
              

                state.indexOfShowedSlider=index.payload
            }
        }
    }
})

export const {nextIndex,prevIndex,clickIndex}=mainSlider.actions;
export default mainSlider.reducer;