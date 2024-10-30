import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Card from "../../Card/Card";

interface CategoryProps {
  title: string;
  data: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

const Category: React.FC<CategoryProps> = ({ title, data }) => {
  return (
    <>
      <SectionHeading title={title} />
      <div className="flex px-8">
        {data &&
          data?.map((item, index) => {
            return (
              <Card
                key={index}
                title={item?.title}
                description={item?.description}
                imagePath={item?.image}
                height={"280px"}
                width={""}
                actionArrow={true}
              />
            );
          })}
      </div>
    </>
  );
};

export default Category;
