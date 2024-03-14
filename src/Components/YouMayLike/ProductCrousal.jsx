import React, { useContext, useState } from "react";
import Card from "../Card/Card";
import ProductDetails from "../ProductDetails/ProductDetails";
// import { ProductContext } from "../../Context/ProductContext";

const ProductCrousal = ({title, data}) => {

  const [productDetails, setProductDetails] = useState()
  // const { List } = useContext(ProductContext) 

  // console.log(List)
  return (
    <section className="pt-16">
      <div className="container flex flex-col  py-8 pb-3 rounded-md">
        <div className="">
          <h1 className="text-2xl font-semibold my-8 border-b-2 ">{title}</h1>
        </div>
        <div className="w-full flex flex-wrap">
          {data.map((item, i) => {
             if(i<10){return(<Card list={item} productInfo={product=>setProductDetails(product)}/>)}
              
          })}
          
        </div>
      </div>
      {productDetails && <ProductDetails product={productDetails}/>}
    </section>
  );
};
export default ProductCrousal;
