import React from "react";
import FilterIcon from "../../components/Common/FilterIcon";

const ProductListPage = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[30%] p-[20px] border rounded-lg m-[20px]">
          {/* filters */}
          <div className="flex justify-between">
            <p className="text-[16px] text-gray-600">Filter</p>
            <FilterIcon />
          </div>
          <div>
            <p className="text-[16px] text-black mt-5">Categories</p>
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
