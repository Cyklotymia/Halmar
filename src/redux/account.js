import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
      isUserLogged:false,
      warningLogged:false,
 
  },
  reducers: {
    userLogged: (state,loginObj) => {
     
     if (loginObj.payload.login === "login" && loginObj.payload.pass === "haslo") {
         state.isUserLogged=true
         state.warningLogged=false
     }else{
        state.warningLogged=true
     }
    },
   
  },
});

export const {userLogged} = accountSlice.actions;
export default accountSlice.reducer;
