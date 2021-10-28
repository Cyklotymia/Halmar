import { createSlice } from "@reduxjs/toolkit";
import blogsData from "../assets/data/blogs.js";

export const blogs = createSlice({
  name: "blogs",
  initialState: {
    choosedBlogs: "wszystkie",
    blogs: blogsData,
    length: blogsData[0].list.length +blogsData[1].list.length + blogsData[2].list.length,
    maxIndexOfProducts:1,
    numberOfVisibleElements:2,
  },
  reducers: {
    changeBlogs: (state, name) => {
      state.choosedBlogs = name.payload;
      switch (name.payload) {
        case "wszystkie":
          state.length = blogsData[0].list.length +blogsData[1].list.length + blogsData[2].list.length;
          break;
        case "aktualności":
          state.length = blogsData[1].list.length;
          break;
        case "porady":
          state.length = blogsData[2].list.length;
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
        state.maxIndexOfProducts=4
    }
  },
});

export const { changeBlogs,arrowHandler,resetBlogs } = blogs.actions;
export default blogs.reducer;
