import HeroImg from "../../assets/img/radek-grzybowski-unsplash.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative flex items-center bg-cover bg-center text-left h-screen w-full"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0"></div>
      <main className="px-10 lg:px-24 z-10">
        <div className="text-left">
          <h2 className="text-2xl text-white text-outline">Computers</h2>
        </div>
        <p className="mt-3 text-white text-outline sm:mt-5 sm:max-w-xl text-6xl">
          Deals for the Holidays
        </p>
        <p className="mt-3 text-white text-outline sm:mt-5 sm:max-w-xl text-2xl">
          Feature-Rich / Intuitive / Powerful
        </p>
        <button className="border rounded mt-6 border-gray-400 hover:bg-blue-950 text-white bg-black w-44 h-12">
          Shop Now
        </button>
      </main>
    </div>
  );
};

export default HeroSection;
