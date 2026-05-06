// // import React from "react";

// // const MegaMenu = ({ type }) => {
// //   const images = {
// //     services: "/service.jpg",
// //     international: "/international.jpg",
// //     about: "/about.jpg",
// //   };

// //   return (
// //     <div className="bg-white text-black rounded-2xl p-8 shadow-xl flex gap-8 w-fit">
// //       {/* SERVICES (3 COLUMNS) */}
// //       {type === "services" && (
// //         <>
// //           {/* COLUMN 1 */}
// //           <div className="text-sm space-y-2 min-w-[180px]">
// //             <p className="font-semibold text-base mb-2">Core Services</p>
// //             <p>Search and Growth Strategy</p>
// //             <p>Onsite SEO</p>
// //             <p>B2B Marketing</p>
// //           </div>

// //           {/* COLUMN 2 */}
// //           <div className="text-sm space-y-2 min-w-[180px]">
// //             <p>Digital PR</p>
// //             <p>Social Media and Campaigns</p>
// //             <p>Data Insights</p>
// //             <p>Social SEO/Search</p>
// //           </div>

// //           {/* COLUMN 3 (IMAGE + BUTTON) */}
// //           <div className="relative w-[220px] h-[150px]">
// //             <img
// //               src={images[type]}
// //               alt={type}
// //               className="w-full h-full object-cover rounded-xl"
// //             />

// //             <button className="absolute bottom-3 right-3 bg-black text-white px-3 py-2 text-xs rounded-md flex items-center gap-1 hover:-translate-y-1 transition-all duration-300">
// //               View all services
// //               <span className="text-[14px] leading-none">↗</span>
// //             </button>
// //           </div>
// //         </>
// //       )}

// //       {/* INTERNATIONAL (2 COLUMNS) */}
// //       {type === "international" && (
// //         <>
// //           {/* COLUMN 1 */}
// //           <div className="text-sm space-y-2 min-w-[200px]">
// //             <p>US Digital PR</p>
// //             <p>Spain Digital PR</p>
// //             <p>Germany Digital PR</p>
// //             <p>Netherland Digital PR</p>
// //           </div>

// //           {/* COLUMN 2 (IMAGE) */}
// //           <div className="w-[220px] h-[150px]">
// //             <img
// //               src={images[type]}
// //               alt={type}
// //               className="w-full h-full object-cover rounded-xl"
// //             />
// //           </div>
// //         </>
// //       )}

// //       {/* ABOUT (2 COLUMNS) */}
// //       {type === "about" && (
// //         <>
// //           {/* COLUMN 1 */}
// //           <div className="text-sm space-y-2 min-w-[200px]">
// //             <p>About Us</p>
// //             <p>Meet the Risers</p>
// //             <p>Culture</p>
// //             <p>Testimonials</p>
// //           </div>

// //           {/* COLUMN 2 (IMAGE) */}
// //           <div className="w-[220px] h-[150px]">
// //             <img
// //               src={images[type]}
// //               alt={type}
// //               className="w-full h-full object-cover rounded-xl"
// //             />
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default MegaMenu;
// import React, { useState } from "react";

// const MegaMenu = ({ type }) => {
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const images = {
//     services: "/service.jpg",
//     international: "/international.jpg",
//     about: "/about.jpg",
//   };

//   const serviceImages = {
//     "Search and Growth Strategy": "/searchAndGrowth.jpg",
//     "Onsite SEO": "/onsiteSeo.jpg",
//     "B2B Marketing": "/b2bMarketing.jpg",
//     "Digital PR": "/digitalPR.jpg",
//     "Social Media and Campaigns": "/socialMedia.jpg",
//     "Data Insights": "/data.jpg",
//     "Social SEO/Search": "/socialSeo.jpg",
//   };

//   const internationalImages = {
//     "US Digital PR": "/usDigitalPR.jpg",
//     "Spain Digital PR": "/spainDigitalPR.jpg",
//     "Germany Digital PR": "/germanyDigitalPR.jpg",
//     "Netherland Digital PR": "/netherlandDigitalPR.jpg",
//   };

//   const aboutImages = {
//     "About Us": "/searchAndGrowth.jpg",
//     "Meet the Risers": "/international.jpg",
//     Culture: "/culture.jpg",
//     Testimonials: "/usDigitalPR.jpg",
//   };

//   const getImage = () => {
//     if (type === "services" && hoveredItem) return serviceImages[hoveredItem];
//     if (type === "international" && hoveredItem)
//       return internationalImages[hoveredItem];
//     if (type === "about" && hoveredItem) return aboutImages[hoveredItem];

//     return images[type];
//   };

//   // ✅ REAL movement (same text, no duplicate)
//   const itemClass = "overflow-hidden cursor-pointer";

//   const textClass =
//     "inline-block transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1";

//   return (
//     <div className="bg-white text-black rounded-2xl p-8 shadow-xl flex gap-8 w-fit">
//       {/* SERVICES */}
//       {type === "services" && (
//         <>
//           <div className="text-sm space-y-2 min-w-[180px]">
//             <p className="font-semibold text-base mb-2">Core Services</p>

//             {["Search and Growth Strategy", "Onsite SEO", "B2B Marketing"].map(
//               (item) => (
//                 <p
//                   key={item}
//                   className={`${itemClass} group`}
//                   onMouseEnter={() => setHoveredItem(item)}
//                   onMouseLeave={() => setHoveredItem(null)}
//                 >
//                   <span className={textClass}>{item}</span>
//                 </p>
//               ),
//             )}
//           </div>

//           <div className="text-sm space-y-2 min-w-[180px]">
//             {[
//               "Digital PR",
//               "Social Media and Campaigns",
//               "Data Insights",
//               "Social SEO/Search",
//             ].map((item) => (
//               <p
//                 key={item}
//                 className={`${itemClass} group`}
//                 onMouseEnter={() => setHoveredItem(item)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 <span className={textClass}>{item}</span>
//               </p>
//             ))}
//           </div>

//           <div className="relative w-[220px] h-[150px]">
//             <img
//               src={getImage()}
//               alt={type}
//               className="w-full h-full object-cover rounded-xl transition-all duration-300"
//             />

//             <button className="absolute bottom-3 right-3 bg-black text-white px-3 py-2 text-xs rounded-md flex items-center gap-1 hover:-translate-y-1 transition-all duration-300">
//               View all services
//               <span className="text-[14px] leading-none">↗</span>
//             </button>
//           </div>
//         </>
//       )}

//       {/* INTERNATIONAL */}
//       {type === "international" && (
//         <>
//           <div className="text-sm space-y-2 min-w-[200px]">
//             {[
//               "US Digital PR",
//               "Spain Digital PR",
//               "Germany Digital PR",
//               "Netherland Digital PR",
//             ].map((item) => (
//               <p
//                 key={item}
//                 className={`${itemClass} group`}
//                 onMouseEnter={() => setHoveredItem(item)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 <span className={textClass}>{item}</span>
//               </p>
//             ))}
//           </div>

//           <div className="w-[220px] h-[150px]">
//             <img
//               src={getImage()}
//               alt={type}
//               className="w-full h-full object-cover rounded-xl transition-all duration-300"
//             />
//           </div>
//         </>
//       )}

//       {/* ABOUT */}
//       {type === "about" && (
//         <>
//           <div className="text-sm space-y-2 min-w-[200px]">
//             {["About Us", "Meet the Risers", "Culture", "Testimonials"].map(
//               (item) => (
//                 <p
//                   key={item}
//                   className={`${itemClass} group`}
//                   onMouseEnter={() => setHoveredItem(item)}
//                   onMouseLeave={() => setHoveredItem(null)}
//                 >
//                   <span className={textClass}>{item}</span>
//                 </p>
//               ),
//             )}
//           </div>

//           <div className="w-[220px] h-[150px]">
//             <img
//               src={getImage()}
//               alt={type}
//               className="w-full h-full object-cover rounded-xl transition-all duration-300"
//             />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default MegaMenu;

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
            <span className="text-lg leading-none">↗</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
