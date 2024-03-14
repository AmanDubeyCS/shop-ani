import React from "react";
import FilterSystem from "../Components/ProductFilter/FilterSystem";
import Card from "../Components/Card/Card";
import FilterBar from "../Components/ProductFilter/FilterBar";

const HomeProducts = ({title, data}) => {
  const menAndWomen = data.map((item) => item).filter((item) => (item.Gender === title || item.Gender === "Unisex"))
  const kids = data.map((item) => item).filter((item) => item.Gender === "Kids")

  // console.log(kids)
  // console.log(menAndWomen)

  return (
    <section>
      <div className="container relative">
        <div className="flex w-full h-[30dvh] justify-center items-center rounded-md border">
          <div>
            <h1 className="text-xl text-black font-bold">{title}'s Section</h1>
          </div>
        </div>
        {title === "Men" || "Women" ? <FilterBar data={menAndWomen}/> : <FilterBar data={kids}/>}
        <div className="flex flex-wrap justify-start pt-5">
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
            {/* <Card list={data}/> */}
        </div>
        <div className="hidden">
          <FilterSystem />
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
