import { createSlice } from "@reduxjs/toolkit";
import pinsSlider from "../assets/data/pinsSlider";

export const pinsSliderData = createSlice({
  name: "pinsSliderData",
  initialState: {
    data: pinsSlider.sliders,
    indexOfSlider: 0,
  },
  reducers: {
    changeIndex: (state, name) => {
      switch (name.payload) {
        case "inscrease":
          state.indexOfSlider = state.indexOfSlider + 1;
          state.indexOfSlider=state.indexOfSlider>state.data.length-1?state.data.length-1:state.indexOfSlider
          break;
        case "decrease":
          state.indexOfSlider = state.indexOfSlider - 1;
          state.indexOfSlider=state.indexOfSlider<0?0:state.indexOfSlider
          break;
        default:
          break;
      }
    },
  },
});

export const{changeIndex}=pinsSliderData.actions
export default pinsSliderData.reducer;
