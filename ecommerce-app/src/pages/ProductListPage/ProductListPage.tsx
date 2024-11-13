import React, { useMemo } from "react";
import FilterIcon from "../../components/Common/FilterIcon";
import content from "../../data/content.json";

const categories = content?.categories;

interface Category {
  code: string;
  description: string;
  // Add other properties as needed
}

const ProductListPage = ({ categoryType }: { categoryType: string }) => {
  const categoryContent: Category | undefined = useMemo(() => {
    return categories?.find((category) => category.code === categoryType);
  }, [categoryType]);

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
        <div className="p-[15px]">
          <p className="text-black text-lg">{categoryContent?.description}</p>
          {/* Products */}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
