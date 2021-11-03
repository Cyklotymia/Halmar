import { createSlice } from "@reduxjs/toolkit";
import blogsData from "../assets/data/blogs.js";

export const blogs = createSlice({
  name: "blogs",
  initialState: {
    choosedBlogs: "wszystkie",
    blogs: blogsData,
    length:  blogsData[3].list.length,
    maxIndexOfProducts:1,
    numberOfVisibleElements:2,
  },
  reducers: {
    changeBlogs: (state, name) => {
      state.choosedBlogs = name.payload;
      switch (name.payload) {
        case "nowości":
          state.length = blogsData[1].list.length;
          console.log(state.length);
          break;
        case "aktualności":
          state.length = blogsData[0].list.length;
          console.log(state.length);

          break;
        case "porady":
          state.length = blogsData[2].list.length;
          console.log(state.length);

          break;
          case "wszystkie":
          state.length = blogsData[3].list.length;
          console.log(state.length);

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
    resetBlogs:(state)=>{
        state.maxIndexOfProducts=1
    }
  },
});

export const { changeBlogs,arrowHandler,resetBlogs } = blogs.actions;
export default blogs.reducer;
