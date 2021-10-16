import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import  { changeProduct } from "../redux/products";

function ProductsNavElement({name}) {
const dispatch = useDispatch()


const navProductsHandler=()=>{
  dispatch(changeProduct(name))
}
  return (
      <Link onClick={()=>{navProductsHandler()}} to={"/"}>{name}</Link>
  )
}

export default ProductsNavElement;
