import React from "react";
import FilterSystem from "../Components/ProductFilter/FilterSystem";
import Card from "../Components/Card/Card";
import FilterBar from "../Components/ProductFilter/FilterBar";

const HomeProducts = ({title, data}) => {

  return (
    <section>
      <div className="container relative">
        <div className="flex w-full h-[30dvh] justify-center items-center rounded-md border">
          <div>
            <h1 className="text-xl text-black font-bold">{title}'s Section</h1>
          </div>
        </div>
        {/* <FilterBar /> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 pt-5">
          {data.map((item, index) => {
            if(title === "Men" || title === "Women" ){
              if(item.Gender === title || item.Gender === "Unisex"){
                return(<Card list={item} key={item.id}/>)
              }
            }
            else if(title === "Kids"){
              if(item.Gender === title){
                return(<Card list={item} key={item.id}/>)
              }
            }
          })}
        </div>
        <div className="hidden">
          <FilterSystem />
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;


