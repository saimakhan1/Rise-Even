import React, { useState } from "react";

const MegaMenu = ({ type }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Configuration for all menu content
  const menuConfig = {
    services: {
      defaultImg: "/service.jpg",
      columns: [
        {
          title: "Core Services",
          items: [
            "Search and Growth Strategy",
            "Onsite SEO",
            "Content Experience",
            "B2B Marketing",
          ],
        },
        {
          title: "", // Empty title for second col
          items: [
            "Digital PR",
            "Social Media and Campaigns",
            "Data Insights",
            "Social SEO/Search",
          ],
        },
      ],
      itemImages: {
        "Search and Growth Strategy": "/searchAndGrowth.jpg",
        "Onsite SEO": "/onsiteSeo.jpg",
        "Content Experience": "/contentExperience.jpg",
        "B2B Marketing": "/b2bMarketing.jpg",
        "Digital PR": "/digitalPR.jpg",
        "Social Media and Campaigns": "/socialMedia.jpg",
        "Data Insights": "/data.jpg",
        "Social SEO/Search": "/socialSeo.jpg",
      },
    },

    industries: {
      defaultImg: "/my-profile.jpg",
      columns: [
        {
          items: ["B2B Marketing"],
        },
      ],
      itemImages: {
        "B2B Marketing": "/my-profile.jpg",
      },
    },
    international: {
      defaultImg: "/international.jpg",
      columns: [
        {
          items: [
            "US Digital PR",
            "Spain Digital PR",
            "Germany Digital PR",
            "Netherland Digital PR",
          ],
        },
      ],
      itemImages: {
        "US Digital PR": "/usDigitalPR.jpg",
        "Spain Digital PR": "/spainDigitalPR.jpg",
        "Germany Digital PR": "/germanyDigitalPR.jpg",
        "Netherland Digital PR": "/netherlandDigitalPR.jpg",
      },
    },
    about: {
      defaultImg: "/about.jpg",
      columns: [
        {
          items: ["About Us", "Meet the Risers", "Culture", "Testimonials"],
        },
      ],
      itemImages: {
        "About Us": "/about.jpg",
        "Meet the Risers": "/searchAndGrowth.jpg",
        Culture: "/culture.jpg",
        Testimonials: "/usDigitalPR.jpg",
      },
    },
  };

  const config = menuConfig[type];

  const getImage = () => {
    if (hoveredItem && config.itemImages[hoveredItem]) {
      return config.itemImages[hoveredItem];
    }
    return config.defaultImg;
  };

  return (
    <div className="bg-white text-black rounded-3xl p-10 shadow-2xl flex gap-12 w-fit border border-gray-100">
      {config.columns.map((col, idx) => (
        <div key={idx} className="flex flex-col min-w-[220px]">
          {col.title && (
            <p className="font-bold text-xl mb-4 text-gray-900">{col.title}</p>
          )}
          <div
            className={`${!col.title ? "mt-11" : ""} flex flex-col space-y-3`}
          >
            {col.items.map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden cursor-pointer h-8" // Fixed height for smooth transition
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Primary Text (Slides Up and Out) */}
                <span className="block text-lg font-medium transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  {item}
                </span>
                {/* Secondary Text (Slides Up and In from Bottom) */}
                <span className="absolute top-0 left-0 block text-lg font-medium  transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Image Section */}
      <div className="relative w-[300px] h-[200px] overflow-hidden rounded-2xl">
        <img
          key={getImage()} // Key helps trigger transition on src change
          src={getImage()}
          alt={type}
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />

        {type === "services" && (
          <button className="absolute bottom-4 right-4 bg-black text-white px-5 py-2.5 text-sm font-medium rounded-xl flex items-center gap-2 hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-lg">
            View all services
            <span className="text-lg leading-none">
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
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
