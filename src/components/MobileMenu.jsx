// import React, { useState, useEffect } from "react";

// const MobileMenu = ({ isOpen, onClose, menuItems }) => {
//   const [openAccordion, setOpenAccordion] = useState(null);

//   // Prevent background scroll when menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const submenuContent = {
//     services: [
//       "Search & Growth Strategy",
//       "Onsite SEO",
//       "Content Experience",
//       "B2B Marketing",
//       "Digital PR",
//     ],
//     international: ["US Digital PR", "Germany SEO", "Spain Content"],
//     about: ["Our Culture", "The Risers", "Sustainability"],
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black flex flex-col"
//       style={{
//         zIndex: 9999999 /* Extremely high z-index */,
//         height: "100vh",
//         width: "100vw",
//         position: "fixed",
//         top: 0,
//         left: 0,
//       }}
//     >
//       {/* 1. Header with Close Button */}
//       <div className="flex justify-between items-center px-10 py-12">
//         <img src="/logo.png" alt="Logo" className="h-7 w-auto" />

//         {/* CROSS BUTTON - Forced Visibility */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             onClose();
//           }}
//           className="flex items-center justify-center border border-white/40 rounded-full"
//           style={{
//             width: "48px",
//             height: "48px",
//             minWidth: "48px",
//             minHeight: "48px",
//           }}
//         >
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M18 6L6 18M6 6L18 18"
//               stroke="white"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* 2. Scrollable Menu Items */}
//       <div className="flex-1 overflow-y-auto px-10 pb-20">
//         {menuItems.map((item) => (
//           <div key={item.name} className="border-b border-white/10">
//             <div
//               className="flex justify-between items-center py-8 cursor-pointer"
//               onClick={() =>
//                 item.key &&
//                 setOpenAccordion(openAccordion === item.key ? null : item.key)
//               }
//             >
//               <h2 className="text-white text-4xl font-medium tracking-tighter uppercase">
//                 {item.name}
//               </h2>

//               {/* TOGGLING CIRCLE ARROW */}
//               {item.key && (
//                 <div
//                   className={`flex items-center justify-center rounded-full border border-white/20 transition-all duration-300 ${
//                     openAccordion === item.key ? "bg-white" : "bg-transparent"
//                   }`}
//                   style={{ width: "44px", height: "44px", minWidth: "44px" }}
//                 >
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{
//                       transform:
//                         openAccordion === item.key
//                           ? "rotate(180deg)"
//                           : "rotate(0deg)",
//                       transition: "transform 0.3s ease",
//                     }}
//                   >
//                     <path
//                       d="M6 9L12 15L18 9"
//                       stroke={openAccordion === item.key ? "black" : "white"}
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               )}
//             </div>

//             {/* SUBMENU DISPLAY */}
//             {openAccordion === item.key && submenuContent[item.key] && (
//               <div className="pb-8 pl-1 flex flex-col gap-6 transition-all">
//                 {submenuContent[item.key].map((sub) => (
//                   <p key={sub} className="text-gray-400 text-2xl font-normal">
//                     {sub}
//                   </p>
//                 ))}
//                 <div className="pt-4 border-t border-white/5">
//                   <p className="text-white text-2xl font-medium">View all ↗</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* 3. Footer Button */}
//       <div className="px-10 py-10 bg-black">
//         <button className="w-full bg-white text-black py-6 rounded-full text-2xl font-bold flex justify-center items-center gap-3 active:scale-95 transition-transform">
//           Get In Touch
//           <span className="text-3xl leading-none">↗</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;

import React, { useState, useEffect } from "react";

const MobileMenu = ({ isOpen, onClose, menuItems }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const submenuContent = {
    services: [
      "Search & Growth Strategy",
      "Onsite SEO",
      "Content Experience",
      "B2B Marketing",
      "Digital PR",
    ],

    international: ["US Digital PR", "Germany SEO", "Spain Content"],

    about: ["Our Culture", "The Risers", "Sustainability"],
  };

  return (
    <div
      className="fixed inset-0 bg-black flex flex-col md:hidden"
      style={{
        zIndex: 9999999,
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center px-5 sm:px-6 py-6 sm:py-8">
        <img src="/logo.png" alt="Logo" className="h-6 sm:h-7 w-auto" />

        {/* CLOSE BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="flex items-center justify-center border border-white/40 rounded-full"
          style={{
            width: "42px",
            height: "42px",
            minWidth: "42px",
            minHeight: "42px",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* MENU ITEMS */}
      <div className="flex-1 overflow-y-auto px-5 sm:px-6 pb-10">
        {menuItems.map((item) => (
          <div key={item.name}>
            <div
              className="flex justify-between items-start gap-3 py-2 cursor-pointer"
              onClick={() =>
                item.key &&
                setOpenAccordion(openAccordion === item.key ? null : item.key)
              }
            >
              {/* RESPONSIVE TEXT */}
              <h2 className="text-white text-[clamp(34px,8vw,58px)] leading-[0.9] font-medium tracking-tighter">
                {item.name}
              </h2>

              {/* ARROW */}
              {item.key && (
                <div
                  className={`flex items-center justify-center rounded-full border border-white/20 transition-all duration-300 mt-2 ${
                    openAccordion === item.key ? "bg-white" : "bg-transparent"
                  }`}
                  style={{
                    width: "38px",
                    height: "38px",
                    minWidth: "38px",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform:
                        openAccordion === item.key
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke={openAccordion === item.key ? "black" : "white"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* SUBMENU */}
            {openAccordion === item.key && submenuContent[item.key] && (
              <div className="pb-5 pt-2 pl-1 flex flex-col gap-3 transition-all">
                {submenuContent[item.key].map((sub) => (
                  <p
                    key={sub}
                    className="text-gray-400 text-sm sm:text-base font-normal"
                  >
                    {sub}
                  </p>
                ))}

                <div className="pt-2 border-t border-white/5">
                  <p className="text-white text-sm sm:text-base font-medium">
                    View all ↗
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FOOTER BUTTON */}
      <div className="px-5 sm:px-6 py-5 bg-black">
        <button className="w-full bg-white text-black py-4 rounded-full text-base sm:text-lg font-bold flex justify-center items-center gap-2 active:scale-95 transition-transform">
          Get In Touch
          <span className="text-xl leading-none">↗</span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
