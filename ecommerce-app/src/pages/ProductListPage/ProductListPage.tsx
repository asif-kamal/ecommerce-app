import React, { useMemo } from "react";
import FilterIcon from "../../components/Common/FilterIcon";
import content from "../../data/content.json";
import Categories from "../../components/Filters/Categories";
import PriceFilter from "../../components/Filters/PriceFilter";
import ColorsFilter from "../../components/Filters/ColorsFilter";
import SizeFilter from "../../components/Filters/SizeFilter";

const categories = content?.categories;

const ProductListPage = ({ categoryType }: { categoryType: string }) => {
  const categoryContent = useMemo(() => {
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
            <Categories
              types={(categoryContent?.types ?? []).map((type) => ({
                code: "code" in type ? type.code : type.id.toString(),
                name: type.name,
              }))}
            />
            <hr></hr>
          </div>
          <PriceFilter />
          <hr></hr>
          {/* Colors */}
          <ColorsFilter colors={categoryContent?.meta_data?.colors ?? []}/>
          <hr></hr>
          {/* Sizes */}
          <SizeFilter sizes={categoryContent?.meta_data?.sizes ?? []} />
        </div>
        <div className="p-[15px]">
          <p className="text-black text-lg">{categoryContent?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
