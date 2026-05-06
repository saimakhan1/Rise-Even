import React from "react";

const MegaMenu = ({ type }) => {
  const images = {
    services: "/src/assets/images/service.jpg",
    international: "/src/assets/images/international.jpg",
    about: "/src/assets/images/about.jpg",
  };

  return (
    <div className="bg-white text-black rounded-2xl p-8 shadow-xl flex gap-8 w-fit">
      {/* SERVICES (3 COLUMNS) */}
      {type === "services" && (
        <>
          {/* COLUMN 1 */}
          <div className="text-sm space-y-2 min-w-[180px]">
            <p className="font-semibold text-base mb-2">Core Services</p>
            <p>Search and Growth Strategy</p>
            <p>Onsite SEO</p>
            <p>B@B Marketing</p>
          </div>

          {/* COLUMN 2 */}
          <div className="text-sm space-y-2 min-w-[180px]">
            <p>Digital PR</p>
            <p>Social Media and Campaigns</p>
            <p>Data Insights</p>
            <p>Social SEO/Search</p>
          </div>

          {/* COLUMN 3 (IMAGE + BUTTON) */}
          <div className="relative w-[220px] h-[150px]">
            <img
              src={images[type]}
              alt={type}
              className="w-full h-full object-cover rounded-xl"
            />

            <button className="absolute bottom-3 right-3 bg-black text-white px-3 py-2 text-xs rounded-md flex items-center gap-1 hover:-translate-y-1 transition-all duration-300">
              View all services
              <span className="text-[14px] leading-none">↗</span>
            </button>
          </div>
        </>
      )}

      {/* INTERNATIONAL (2 COLUMNS) */}
      {type === "international" && (
        <>
          {/* COLUMN 1 */}
          <div className="text-sm space-y-2 min-w-[200px]">
            <p>US Digital PR</p>
            <p>Spain Digital PR</p>
            <p>Germany Digital PR</p>
            <p>Netherland Digital PR</p>
          </div>

          {/* COLUMN 2 (IMAGE) */}
          <div className="w-[220px] h-[150px]">
            <img
              src={images[type]}
              alt={type}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </>
      )}

      {/* ABOUT (2 COLUMNS) */}
      {type === "about" && (
        <>
          {/* COLUMN 1 */}
          <div className="text-sm space-y-2 min-w-[200px]">
            <p>About Us</p>
            <p>Meet the Risers</p>
            <p>Culture</p>
            <p>Testimonials</p>
          </div>

          {/* COLUMN 2 (IMAGE) */}
          <div className="w-[220px] h-[150px]">
            <img
              src={images[type]}
              alt={type}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MegaMenu;
