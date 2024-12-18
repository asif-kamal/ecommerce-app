import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Category from "./components/Section/Category/Category";
import NewProducts from "./components/Section/NewProducts";
import content from "./data/content.json";

function App() {
  return (
    <>
      <HeroSection />
      <NewProducts />
      {content?.category &&
        content?.category.map((item, index) => (
          <Category
            key={item?.title + index}
            {...item}
          />
        ))}
        <Footer content={content?.footer}/>
    </>
  );
}

export default App;
