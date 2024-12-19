interface SizeFilterProps {
  sizes: string[];
}

const SizeFilter = ({ sizes }: SizeFilterProps) => {
  return (
    <div className="flex flex-col mb-4">
      <p className="text-[16px] text-black mt-5">Sizes</p>
      <div className="flex flex-wrap p-4">
        {sizes?.map((item : string) => {
          return (
            <div key={item} className="flex flex-col mr-2">
              <div className="w-[50px] h-8 border text-center mb-4 rounded-lg mr-4 cursor-pointer hover:scale-110 bg-white border-gray-500 text-gray-500">
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SizeFilter;
