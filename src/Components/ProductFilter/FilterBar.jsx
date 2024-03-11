import React from "react";
import { IconFilter } from "@tabler/icons-react";
import { IconArrowsMoveVertical } from "@tabler/icons-react";
import FilterSystem from "./FilterSystem";
import { useState } from "react";

const FilterBar = () => {
    const [showFilter, setShowFilter] = useState(false);

    const handleClick = () => {
      setShowFilter((prev) => !prev);
    };
  
    const handleClose = () => {
      setShowFilter(false);
    };

  return (
    <div className="h-12 justify-center items-center mt-3 border bg-zinc-100">
      <div className="flex justify-between">
        <div
          className="flex gap-2 text-lg font-normal p-2 cursor-pointer items-center"
          onClick={handleClick}
        >
          <span>FILTER</span>
          <IconFilter stroke={1.5} size={20} />
        </div>
        <div className="flex gap-2 text-lg font-normal p-2 cursor-pointer items-center">
          <span>SORT BY</span> <IconArrowsMoveVertical stroke={1.5} size={20} />
        </div>
      </div>
      <div className={`${showFilter ? "block" : "hidden"}`}>
      <FilterSystem handleClose={handleClose} />
      </div>
    </div>
  );
};

export default FilterBar;
