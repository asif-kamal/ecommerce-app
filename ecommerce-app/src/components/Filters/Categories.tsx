import React from "react";

interface CategoryType {
  code: string;
}

interface CategoriesProps {
  types: CategoryType[];
}

const Categories: React.FC<CategoriesProps> = ({ types }) => {
  return (
    <div>
      {types?.map((type) => {
        return (
          <div className="flex" key={type.code}>
            <input
              type="checkbox"
              name={type?.code}
              className="border rounded-lg w-4 h-4 accent-black text-black"
            />
            <label htmlFor={type?.code}></label>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
