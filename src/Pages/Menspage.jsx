import React from "react";
import FilterSystem from "../Components/ProductFilter/FilterSystem";
import Card from "../Components/Card/Card";
import FilterBar from "../Components/ProductFilter/FilterBar";

const Menspage = () => {
  return (
    <section>
      <div className="container relative">
        <div className="flex w-full h-[30dvh] justify-center items-center rounded-md border">
          <div>
            <h1 className="text-xl text-black font-bold">Men's Were</h1>
          </div>
        </div>
        <FilterBar />
        <div className="flex flex-wrap justify-start pt-5">
            <Card />
            <Card />
            <Card /> 
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /><Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div className="hidden">
          <FilterSystem />
        </div>
      </div>
    </section>
  );
};

export default Menspage;
