import HeroImg from "../../assets/img/radek-grzybowski-unsplash.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative flex items-center bg-cover text-start bg-center h-screen w-full"
      style={{ backgroundImage: `url(${HeroImg})` }}
    ></div>
  );
};

export default HeroSection;
