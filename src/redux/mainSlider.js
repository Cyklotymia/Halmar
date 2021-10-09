import mainSliderData from "../assets/data/mainSlider";
import { createSlice } from "@reduxjs/toolkit";

export const mainSlider=createSlice({
    name:"mainSlider",
    initialState:{
       indexOfShowedSlider:0,
       slides:mainSliderData.slides
    },
    reducers:{
        
    }
})

export const {indexOfShowedSlider,slides}=mainSlider.actions;
export default mainSlider.reducer;