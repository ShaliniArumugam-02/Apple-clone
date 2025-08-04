import React from "react";
import { FaApple } from "react-icons/fa";
import ProductMobile from './ProductMobile/ProductMobile';
import ProductTablet from "./ProductTablet/ProductTablet";
import ProductLaptop from "./ProductLaptop/ProductLaptop";

function Product() {
  return (
    <>
    <div><ProductMobile/>
    <ProductTablet/>
    <ProductLaptop/>
    
    </div>
   
    </>
  );
}

export default Product;
