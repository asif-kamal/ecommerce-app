import SectionHeading from "./SectionHeading/SectionHeading";
import Card from "../Card/Card";
import favicon from "../../assets/icon/electronics_icon.png";
import { responsive } from "../../utils/Section.constants";
import Carousel from "react-multi-carousel";
import "./NewProducts.css"

const items = [
  {
    id: 1,
    title: "Item",
    imagePath: favicon,
  },
  {
    id: 2,
    title: "Item",
    imagePath: favicon,
  },
  {
    id: 3,
    title: "Item",
    imagePath: favicon,
  },
  {
    id: 4,
    title: "Item",
    imagePath: favicon,
  },
  {
    id: 5,
    title: "Item",
    imagePath: favicon,
  }
];

const NewProducts = () => {
    return (
      <>
      <SectionHeading title={'New Arrivals'}/>
      <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={false}
          showDots={false}
          infinite={false}
          partialVisible={false}
          itemClass={'react-slider-custom-item'}
          className='px-8'
        >
          {items && items?.map((item,index)=> <Card key={item?.title + index} title={item.title} imagePath={item.imagePath} description={""} actionArrow={true}/>)}
  
        </Carousel>
      </>
    )
  }

export default NewProducts;
