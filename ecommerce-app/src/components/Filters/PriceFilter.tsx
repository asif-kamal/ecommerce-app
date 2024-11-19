import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css"; // Add this import
import "./PriceFilter.css";

const PriceFilter = () => {
  const [value, setValue] = useState([0, 150]); // Example min/max values

  return (
    <div>
      <p className="text-[16px] text-black mt-5">Price</p>
      <RangeSlider
        className={"custom-range-slider"}
        min={0}
        max={2000}
        value={value}
        onInput={setValue}
      />
      <div className="flex justify-between">
        <div className="border rounded-lg h-8 mt-4 max-w-[50%] w-[40%] flex items-center">
          <p className="pl-4 text-gray-600">$</p>{" "}
          <input
            type="number"
            value={value[0]}
            className="outline-none px-4 text-gray-600"
            min={0}
            max="1999"
            disabled
            placeholder="min"
          />
        </div>
        <div className="border rounded-lg h-8 mt-4 max-w-[50%] w-[40%] flex items-center">
          <p className="pl-4 text-gray-600">$</p>{" "}
          <input
            type="number"
            value={value[1]}
            className="outline-none px-4 text-gray-600"
            min={1}
            max="2000"
            disabled
            placeholder="max"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
