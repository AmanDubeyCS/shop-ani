import React from "react";
import { useProductContext } from "../../Context/ProductContext";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";

const Categories = () => {
    const category = useParams()
  const { list } = useProductContext();
  console.log(category)
  console.log(list)
  return (
    <div>
        <div className="container relative">
          <div className="flex w-full h-[30dvh] justify-center items-center rounded-md border bg-white">
            <div>
              <h1 className="text-xl text-black font-bold">{category.category}</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 pt-5 rounded-md bg-white px-4 mt-4">
            {list.map((item, i) => {
              if (item.Collection === category.category) {
                return <Card list={item} key={item.id} />;
              }
              else if( item.Type === category.category){
                return <Card list={item} key={item.id} />;
              }
            })}
          </div>
        </div>
    </div>
  );
};

export default Categories;
