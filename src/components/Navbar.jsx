import React, { useState } from "react";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { name: "Services", key: "services" },
    { name: "Industries", key: "industries" },
    { name: "International", key: "international" },
    { name: "About", key: "about" },
    { name: "Work" },
    { name: "Careers" },
    { name: "Blog & Resources" },
    { name: "Webinar" },
  ];

  return (
    <>
      {/* ONLY MOBILE PADDING CHANGED */}
      <div className="absolute top-[90px] md:top-[80px] inset-x-0 z-[50] px-5 sm:px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between text-white">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-7 md:h-10 object-contain"
          />

          {/* Desktop logic remains untouched */}
          <div className="hidden md:flex gap-6 items-center">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.key && setActiveMenu(item.key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span
                  className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
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

          <div className="flex items-center gap-4">
            {/* <button className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-bold">
              Get In Touch
              
            </button> */}

            {/* <button className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full transition-all duration-300 ease-in-out hover:rounded-lg">
              Get In Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button> */}

            <button className="group relative hidden md:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full transition-all duration-300 ease-in-out hover:rounded-lg overflow-hidden">
              {/* Text Container */}
              <div className="relative h-[24px] overflow-hidden">
                <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
                  <span className="flex items-center h-[24px]">
                    Get In Touch
                  </span>
                  <span className="flex items-center h-[24px]">
                    Get In Touch
                  </span>
                </div>
              </div>

              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none z-[60]"
            >
              {/* ONLY MOBILE SIZE REDUCED */}
              <div className="w-7 h-[2px] bg-white rounded-full"></div>
              <div className="w-7 h-[2px] bg-white rounded-full"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Render MobileMenu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        menuItems={menuItems}
      />
    </>
  );
};

export default Navbar;
