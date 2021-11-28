import React from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { removeProduct } from "../redux/storeAcc";
import StoreElements from './StoreElements';




function Store() {
    // const dispatch = useDispatch();
    // const { numberOfProducts,choosedFavProducts } = useSelector((state) => state.storeAcc)
    // console.log(numberOfProducts,choosedFavProducts);
    return ( 
        <section className="store">
            <div className="wrapper">
            <h3 className="store__header halmar__header--bold halmar__header">schowek</h3>
            <div className="store__content">
                <StoreElements/>
            </div>

            </div>
        </section>
     );
}

export default Store;