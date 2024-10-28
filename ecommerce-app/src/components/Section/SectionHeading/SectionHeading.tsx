import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="flex flex-wrap px-10 my-5 items-center gap-2">
      <div className="border rounded border-1 bg-black w-2 h-10"></div>
      <p className="text-2xl">{title}</p>
    </div>
  );
};
export default SectionHeading;
