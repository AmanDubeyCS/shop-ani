import React from "react";
import FilterSystem from "../Components/ProductFilter/FilterSystem";
import Card from "../Components/Card/Card";

const Menspage = () => {
  return (
    <section>
      <div className="container relative">
        <div className="flex w-full h-[30dvh] justify-center items-center rounded-md shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
          <div>
            <h1 className="text-xl font-bold">Men's Were</h1>
          </div>
        </div>
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
