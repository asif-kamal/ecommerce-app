import ArrowIcon from "../Common/ArrowIcon";

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
    <div className='flex  flex-col p-6'>
        <img className={`h-[${height? height:'220px'}] max-h-[${height? height:'220px'}] w-[${width? width:'200px'}] max-w-[${width? width:'220px'}]
         border rounded-lg hover:scale-105 cursor-pointer`} width={width??"200px"} height={height?? "220px"} src={imagePath} alt='Jeans'/>
         <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
          <p className='text-[16px] p-1'>{title}</p>
          {description && <p className='text-[12px] px-1 text-gray-600'>{description}</p>}
          </div>
          {actionArrow && <span className='cursor-pointer pr-2 items-center'><ArrowIcon /></span>}
        </div>
    </div>
  );
};

export default Card;