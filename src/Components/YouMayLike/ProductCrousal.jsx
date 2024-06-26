import React, { useState } from "react";
import Card from "../Card/Card";
import ProductDetails from "../ProductDetails/ProductDetails";
import { IconChevronRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const ProductCrousal = ({ title, data }) => {
  const [productDetails, setProductDetails] = useState();
  return (
    <section className="mt-6">
      <div className="container flex flex-col pb-3 rounded-md border bg-white px-4 mt-4">
        <div className="">
          <h1 className="text-xl sm:text-2xl font-semibold items-center flex justify-between my-8 border-b-2 ">
            {title}{" "}
            <Link to={'/category/T-shirt'}>
            <span className="text-sm flex items-center text-blue-500 cursor-pointer">
              View More <IconChevronRight stroke={1} size={20} />
            </span></Link>
          </h1>
        </div>
        <div className="w-full hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4">
          {data.map((item, i) => {
            if (i < 10) {
              return (
                <Card
                  key={item.id || i}
                  list={item}
                  productInfo={(product) => setProductDetails(product)}
                />
              );
            }
          })}
        </div>
        <div className="w-full grid sm:hidden grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4">
          {data.map((item, i) => {
            if (i < 4) {
              return (
                <Card
                  key={item.id || i}
                  list={item}
                  productInfo={(product) => setProductDetails(product)}
                />
              );
            }
          })}
        </div>
      </div>
      {productDetails && <ProductDetails product={productDetails} />}
    </section>
  );
};
export default ProductCrousal;
