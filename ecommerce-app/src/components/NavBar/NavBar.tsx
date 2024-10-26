import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center py-6 px-16 justify-between gap-40">
      {/* Logo aligned to the top left */}
      <div>
      <a className="text-3xl text-black gap-8" href="/">ecommercews</a>
      </div>
      {/* Nav items aligned to the top right and displayed right-to-left */}
      <div className="flex flex-wrap items-center gap-10 flex-1">
        <ul className="flex">
          <a href="/" className="text-lg font-normal text-black">
            Shop
          </a>
          <a href="/about" className="text-lg font-normal text-black">
            About
          </a>
          <a href="/contact" className="text-lg font-normal text-black">
            Contact
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
