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
    transitionRight:0,
    transitionLeft:1,
   click:"right"
  },
  reducers: {
    moveRight: (state) => {
      state.click="right"
     state.activeIndex = state.activeIndex + state.changeIndexBy;
      state.activeIndex =state.activeIndex > state.slides.length - 1 ? 0 : state.activeIndex;
      state.transitionRight=1
      
    },
    updateSlidesRight:(state)=>{
      state.click="right"
    
      state.activeIndex=0
      state.transitionRight=0
      const itemToPush = state.slides[0];
      state.slides = [...state.slides, itemToPush];

      const newSlides=[...state.slides]
      newSlides.shift()
      state.slides=newSlides
     
  
    },
    moveLeft: (state) => {
     
      state.click="left"
      state.activeIndex = state.activeIndex - state.changeIndexBy;
      state.transitionLeft=1
      state.activeIndex =0;

    },
    updateSlidesLeft:(state)=>{
      state.click="left"
      
      state.transitionLeft=0
      const itemToPop = state.slides[state.slides.length-1];
      state.slides = [itemToPop,...state.slides];

      const newSlides=[...state.slides]
      newSlides.pop()
      state.activeIndex=1
    
      state.slides=newSlides
     
  
    },
    resetIndex:(state)=>{
      state.activeIndex=0
    }
  },
});

export const { moveRight, moveLeft,resetIndex,updateSlidesRight,updateSlidesLeft } = productSliderRedux.actions;
export default productSliderRedux.reducer;
