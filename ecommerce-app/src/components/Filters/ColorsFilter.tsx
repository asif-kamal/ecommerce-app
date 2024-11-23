import React, { useCallback, useState } from "react";

type ColorKey =
  | "Purple"
  | "Black"
  | "White"
  | "Gray"
  | "Blue"
  | "Red"
  | "Orange"
  | "Navy"
  | "Grey"
  | "Yellow"
  | "Pink"
  | "Green";
const colorSelector: { [key in ColorKey]: string } = {
  Purple: "#8434E1",
  Black: "#252525",
  White: "#FFFFFF",
  Gray: "#808080",
  Blue: "#0000FF",
  Red: "#FF0000",
  Orange: "#FFA500",
  Navy: "#000080",
  Grey: "#808080",
  Yellow: "#FFFF00",
  Pink: "#FFC0CB",
  Green: "#008000",
};

interface ColorsFilterProps {
  colors: string[];
}

const ColorsFilter: React.FC<ColorsFilterProps> = ({ colors }) => {
  const [appliedColors, setAppliedColors] = useState<ColorKey[]>([]);
  const onClickDiv = useCallback((item: ColorKey) => {
    console.log("item", item);
    if (appliedColors.indexOf(item) > -1) {
      appliedColors.splice(appliedColors.indexOf(item), 1);
    } else {
      setAppliedColors([...appliedColors, item]);
    }
  }, []);

  return (
    <div className="flex flex-col mb-4">
      <p className="text-[16px] text-black mt-5">Colors</p>
      <div className="flex flex-wrap p-4">
        {(colors as ColorKey[])?.map((item: ColorKey) => {
          return (
            <div key={item} className="flex flex-col mr-2">
              <div
                className="w-8 h-8 border rounded-xl mr-4 cursor-pointer hover:outline-2 hover:scale-105"
                onClick={() => onClickDiv(item)}
                style={{ background: `${colorSelector[item]}` }}
              ></div>
              <p
                className="text-sm text-gray-400 mb-2"
                style={{
                  color: `${appliedColors?.includes(item) ? "black" : ""}`,
                }}
              >
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorsFilter;
