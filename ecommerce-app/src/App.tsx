import HeroSection from "./components/HeroSection/HeroSection";
import Navigation from "./components/NavBar/NavBar";
import Category from "./components/Section/Category/Category";
import NewProducts from "./components/Section/NewProducts";
import content from "./data/content.json";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <NewProducts />
      {content?.category &&
        content?.category.map((item, index) => (
          <Category
            key={item?.title + index}
            {...item}
          />
        ))}
    </>
  );
}

export default App;
