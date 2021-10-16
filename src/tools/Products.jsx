import React from "react";
import ProductsElements from "./ProductsElements";
import ProductsNavElement from "./ProductsNavElement";

function Products() {
  return (
    <section className="products">
      <div className="products__nav">
        <ProductsNavElement onClick={()=>{console.log('object');}} name={"promocje"} />
        <ProductsNavElement name={"nowości"} />
        <ProductsNavElement name={"wyprzedaż"} />
      </div>
      <ProductsElements />
    </section>
  );
}

export default Products;
