interface CardProps {
  imagePath: string;
  title: string;
  description: string;
  actionArrow: boolean
}

const Card = ({ imagePath, title, description, actionArrow }: CardProps) => {
  return (
    <div className="flex items-center flex-col p-8">
      <img
        className="h-[240px] w-[200px] bg-cover bg-center border rounded hover:scale-105 cursor-pointer"
        src={imagePath}
        alt="electronics"
      />
      <div className="flex justify-between">
        <div className="flex flex-col p-5">
          <p className="text-[16px] p-2">{title}</p>
          {description && <p className="text-[14px]">{description}</p>}
        </div>
        {actionArrow && <div></div>}
      </div>
    </div>
  );
};

export default Card;
