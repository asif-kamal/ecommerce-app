interface CardProps {
  imagePath: string;
  title: string;
  description: string;
  actionArrow: boolean;
  height: string;
  width: string;
}

const Card = ({
  imagePath,
  title,
  description,
  actionArrow,
  height,
  width,
}: CardProps) => {
  return (
    <div className="flex items-start flex-col pl-12">
      <img
        className={`h-[${height ? height : "240px"}] w-[${width ? width : "240px"}] bg-cover bg-center border rounded hover:scale-105 cursor-pointer`}
        src={imagePath}
        alt="electronics"
      />
      <div className="w-full">
        <div className="flex flex-col text-left p-5">
          <p className="text-[16px] p-0">{title}</p>
          {description && <p className="text-[14px] p-0 text-gray-500">{description}</p>}
        </div>
        {actionArrow && <div className="text-left px-2">→</div>}
      </div>
    </div>
  );
};

export default Card;