import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import FilterIcon from "../../components/Common/FilterIcon";

const ProductListPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="w-[30%] p-[20px] border rounded-lg m-[20px]">
          {/* filters */}
          <div className="flex justify-between">
            <p className="text-lg">Filters</p>
            <FilterIcon />
          </div>
        </div>
        <div className="p-[40px]">
          <p>Hello</p>
          {/* Products */}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
