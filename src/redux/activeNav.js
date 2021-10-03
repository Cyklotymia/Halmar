import { createSlice } from "@reduxjs/toolkit";

export const activeNavSlice=createSlice({
    name:"activeNav",
    initialState:{
        isActiveCategories:false,
        isActiveRooms:false,
    },
    reducers:{
        activeCategories:(state)=>{
            state.isActiveCategories=!state.isActiveCategories
            state.isActiveRooms=false
        },
        activeRooms:(state)=>{
            state.isActiveRooms=!state.isActiveRooms
            state.isActiveCategories=false
        },
        disabledNav:(state,shouldIDisabledNav)=>{
            
            if (shouldIDisabledNav.payload) {
                state.isActiveRooms=false
                state.isActiveCategories=false
                
            }else{
                return
            }
        }
    }
})

export const {activeCategories,activeRooms,disabledNav}=activeNavSlice.actions;
export default activeNavSlice.reducer;