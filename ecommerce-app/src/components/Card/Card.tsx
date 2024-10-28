
interface CardsProps {
  imagePath: string;
  title: string;
}

const Cards = ({ imagePath, title }: CardsProps) => {
  return (
    <div className="flex items-center flex-col p-8">
      <img
        className="h-[240px] w-[200px] bg-cover bg-center border rounded hover:scale-105 cursor-pointer"
        src={imagePath}
        alt="electronics"
      />
      <p className="text-[16px] pt-[5px]">{title}</p>
    </div>
  );
};

export default Cards;
