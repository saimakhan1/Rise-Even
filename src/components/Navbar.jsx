import React, { useState } from "react";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  let timeoutId;

  const menuItems = [
    { name: "Services", key: "services" },
    { name: "International", key: "international" },
    { name: "About", key: "about" },
    { name: "Work" },
    { name: "Careers" },
    { name: "Blog" },
    { name: "Webinar" },
  ];

  const handleEnter = (key) => {
    clearTimeout(timeoutId);
    setActiveMenu(key);
  };

  const handleLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveMenu(null);
    }, 150); // 🔥 small delay fixes flicker
  };

  return (
    <div className="absolute top-[80px] left-6 w-full z-50 px-6 py-4 max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between text-white">
        <h1 className="text-xl font-semibold">Rise at Seven®</h1>

        <div className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.key && handleEnter(item.key)}
              onMouseLeave={handleLeave}
            >
              <span
                className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300
                  ${
                    activeMenu === item.key
                      ? "bg-white text-black"
                      : "hover:bg-white hover:text-black"
                  }`}
              >
                {item.name} {item.key && "+"}
              </span>

              {activeMenu === item.key && (
                <div className="absolute left-0 top-full pt-2">
                  <MegaMenu type={item.key} />
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-full text-sm">
          Get In Touch →
        </button>
      </div>
    </div>
  );
};

export default Navbar;
