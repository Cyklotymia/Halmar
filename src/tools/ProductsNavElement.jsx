import React from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import  { changeProduct } from "../redux/products";
import { resetProducts } from "../redux/products";

function ProductsNavElement({name}) {
const dispatch = useDispatch()
const  {choosedProducts}= useSelector(state => state.products)


const navProductsHandler=()=>{
  dispatch(changeProduct(name))
}
  return (
      <Link className={`products__nav-element ${name===choosedProducts?"active":"unActive"}`} onClick={()=>{navProductsHandler()
      dispatch(resetProducts())}} to={"/"}>{name}</Link>
  )
}

export default ProductsNavElement;
