import { configureStore } from "@reduxjs/toolkit";
import activeNavReducer from "./activeNav";

export default configureStore({
    reducer:{
        activeNav:activeNavReducer,
    }
})