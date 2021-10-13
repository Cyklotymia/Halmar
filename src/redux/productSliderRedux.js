import productSliderData from "../assets/data/productSlider";
import { createSlice } from "@reduxjs/toolkit";

export const productSliderRedux = createSlice({
  name: "productSliderRedux",
  initialState: {
    mainData: productSliderData,
    slides: productSliderData.slides,
    data: productSliderData.data,
    activeIndex: 0,
    changeIndexBy: productSliderData.type.changesBy,
    transition:0,
  },
  reducers: {
    moveRight: (state) => {

     state.activeIndex = state.activeIndex + state.changeIndexBy;
      state.activeIndex =state.activeIndex > state.slides.length - 1 ? 0 : state.activeIndex;
      state.transition=1
      
    },
    updateSlidesRight:(state)=>{
      const itemToPush = state.slides[0];
      state.slides = [...state.slides, itemToPush];

      const newSlides=[...state.slides]
      newSlides.shift()
      state.slides=newSlides
     
      state.activeIndex=0
      state.transition=0
  
    },
    moveLeft: (state) => {
      state.activeIndex = state.activeIndex - state.changeIndexBy;

      state.activeIndex =
        state.activeIndex < 0 ? state.slides.length - 1 : state.activeIndex;
    },
    resetIndex:(state)=>{
      state.activeIndex=0
    }
  },
});

export const { moveRight, moveLeft,resetIndex,updateSlidesRight } = productSliderRedux.actions;
export default productSliderRedux.reducer;
