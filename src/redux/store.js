import { configureStore } from "@reduxjs/toolkit";
import activeNavReducer from "./activeNav";
import activeHamburgerReducer from "./activeHamburger";
import accountrReducer from "./account";

export default configureStore({
    reducer:{
        activeNav:activeNavReducer,
        activeHamburger:activeHamburgerReducer,
        account:accountrReducer
    }
})