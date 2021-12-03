import { configureStore } from "@reduxjs/toolkit";
import activeNavReducer from "./activeNav";
import activeHamburgerReducer from "./activeHamburger";
import accountrReducer from "./account";
import mainSlider from "./mainSlider";
import productSliderRedux from "./productSliderRedux";
import products from "./products";
import pinsSliderData from "./pinsSliderData";
import blogsRedux from "./blogsRedux";
import storeAcc from "./storeAcc";
import basketAcc from "./basketAcc";

export default configureStore({
    reducer:{
        activeNav:activeNavReducer,
        activeHamburger:activeHamburgerReducer,
        account:accountrReducer,
        mainSlider,
        productSliderRedux,
        products,
        pinsSliderData,
        blogsRedux,
        storeAcc,
        basketAcc,
    }
})