// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const WORKS = [
//   { id: 1, title: "SIXT", img: "/f1-carrental.jpg", year: "[2023-2025]" },
//   { id: 2, title: "Dojo-B2B", img: "/f2-dojo.jpg", year: "[2021-2025]" },
//   {
//     id: 3,
//     title: (
//       <>
//         Magnet
//         <br />
//         Trade-B2B
//       </>
//     ),
//     img: "/f3-magnet.jpg",
//     year: "[2023-2024]",
//   },
//   {
//     id: 4,
//     title: (
//       <>
//         Leading E Sim <br />
//         Brand Globally
//       </>
//     ),
//     img: "/f4-esims.jpg",
//     year: "[2023-2025]",
//   },

//   { id: 5, title: "JD Sports", img: "/f5-family.jpg", year: "[2025]" },
//   {
//     id: 6,
//     title: "Parkdean Resorts",
//     img: "/f6-esterbreaks.jpg",
//     year: "[2019-2025]",
//   },
//   { id: 7, title: "Pooky", img: "/f7-recharchablelight.jpg", year: "[2025]" },

//   {
//     id: 8,
//     title: "Parkdean Resorts",
//     img: "/f8-ukholidays.jpg",
//     year: "[2019-2025]",
//   },

//   {
//     id: 9,
//     title: "Revolution Beauty",
//     img: "/f9-beautydupes.jpg",
//     year: "[2022-2025]",
//   },
//   {
//     id: 10,
//     title: "Loyds Pharmacy",
//     img: "/f10-stitest.jpg",
//     year: "[2022-2023]",
//   },
//   {
//     id: 11,
//     title: "PrettyLittleThing",
//     img: "/f11-outfit.jpg",
//     year: "[2021-2023]",
//   },
// ];

// const FeaturedWork = () => {
//   const targetRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start start", "end end"],
//   });

//   // Parallax: Right images move significantly faster to create depth
//   const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
//   const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "-92%"]);

//   // Standard Black Arrow SVG to avoid Emoji rendering issues
//   const ArrowIcon = () => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       style={{ marginLeft: "8px", display: "inline-block" }}
//     >
//       <line x1="7" y1="17" x2="17" y2="7"></line>
//       <polyline points="7 7 17 7 17 17"></polyline>
//     </svg>
//   );

//   return (
//     <section ref={targetRef} className="relative h-[990vh] bg-[#f2f1ef]">
//       {/* Container with margins around the black box */}
//       <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden p-4 md:p-4 lg:p-8">
//         {/* Main Black Box */}
//         <div className="relative w-full h-full bg-black rounded-[20px] md:rounded-[25px] overflow-hidden flex flex-col md:flex-row">
//           {/* Label: Featured Work */}
//           <div className="absolute top-10 left-10 md:top-14 md:left-14 z-[60]">
//             <h2 className="text-white text-[20px] md:text-[24px] font-medium font-bold ">
//               Featured Work
//             </h2>
//           </div>

//           {/* LEFT COLUMN: Large  Typography */}
//           <div className="relative w-full md:w-[45%] h-full z-20 overflow-hidden">
//             {/* The Shade: Specifically for the Left Column text only */}
//             <div className="absolute top-0 left-0 w-full h-[35vh] bg-gradient-to-b from-black via-black/80 to-transparent z-30 pointer-events-none" />
//             <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-black via-black/80 to-transparent z-30 pointer-events-none" />

//             <motion.div
//               style={{ y: leftY }}
//               className="flex flex-col pt-[45vh] px-10 md:px-10"
//             >
//               {WORKS.map((work) => (
//                 <motion.div
//                   key={work.id}
//                   whileHover={{ x: 20 }}
//                   className="group py-2 md:py-2 cursor-pointer border-b border-white/5 last:border-none flex items-start gap-3"
//                 >
//                   <h3 className="text-white text-2xl md:text-4xl lg:text-[70px] font-medium   leading-[0.9] tracking-tighter transition-all duration-500 group-hover:text-[#A7F3D0]">
//                     {work.title}
//                   </h3>
//                   <span className="text-white text-[10px] md:text-[14px] mt-2 lg:mt-5 font-medium">
//                     {work.year}
//                   </span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* RIGHT COLUMN: Massive Images */}
//           <div className="w-full md:w-[65%] h-full relative z-10 px-4 md:px-2 overflow-hidden">
//             <motion.div
//               style={{ y: rightY }}
//               className="flex flex-col gap-15 md:gap-10 pt-[5vh] pb-[2vh]"
//             >
//               {WORKS.map((work) => (
//                 <div
//                   key={`img-${work.id}`}
//                   className="w-full flex justify-center items-center"
//                 >
//                   {/* Container scale increased to 100% of column minus small padding */}
//                   <div className="w-full max-w-[800px] aspect-[16/11] overflow-hidden rounded-[20px] md:rounded-[20px] shadow-2xl ring-1 ring-white/10 bg-neutral-900">
//                     <img
//                       src={work.img}
//                       alt={typeof work.title === "string" ? work.title : "Work"}
//                       className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* EXPLORE OUR WORK BUTTON - Outside the Black Box */}
//         <div className="mt-6 md:mt-8">
//           <motion.button
//             initial="initial"
//             whileHover="hover"
//             className="group relative flex items-center justify-center bg-white text-black text-[14px] md:text-[16px] font-bold px-10 py-4 overflow-hidden shadow-sm"
//             variants={{
//               initial: { borderRadius: "100px" },
//               hover: { borderRadius: "12px" },
//             }}
//             transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <div className="relative h-6 flex flex-col items-center justify-center overflow-hidden">
//               {/* Default text - slides UP on hover */}
//               <motion.span
//                 className="flex items-center"
//                 variants={{
//                   initial: { y: 0 },
//                   hover: { y: -30 },
//                 }}
//                 transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 Explore Our Work <ArrowIcon />
//               </motion.span>
//               {/* Hover text - slides IN from bottom on hover */}
//               <motion.span
//                 className="absolute flex items-center"
//                 variants={{
//                   initial: { y: 30 },
//                   hover: { y: 0 },
//                 }}
//                 transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 Explore Our Work <ArrowIcon />
//               </motion.span>
//             </div>
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedWork;

// hover try

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const WORKS = [
  {
    id: 1,
    title: "SIXT",
    img: "/f1-carrental.jpg",
    year: "[2023-2025]",
    hoverColor: "#ff5f3d",
    hoverText: "A premium car rental experience.",
    badgeColor: "#A7F3D0",
  },
  {
    id: 2,
    title: "Dojo-B2B",
    img: "/f2-dojo.jpg",
    year: "[2021-2025]",
    hoverColor: "#3bffb4",
    hoverText: "Payment solutions for better business.",
    badgeColor: "#A7F3D0", // Changed from #000 to Teal
  },
  {
    id: 3,
    title: (
      <>
        Magnet
        <br />
        Trade-B2B
      </>
    ),
    img: "/f3-magnet.jpg",
    year: "[2023-2024]",
    hoverColor: "#ffc84f",
    hoverText: "Kitchens designed for trade.",
    badgeColor: "#A7F3D0", // Changed from #000 to Teal
  },
  {
    id: 4,
    title: (
      <>
        Leading E Sim <br />
        Brand Globally
      </>
    ),
    img: "/f4-esims.jpg",
    year: "[2023-2025]",
    hoverColor: "#4f9dff",
    hoverText: "Travel connected with global E-Sims.",
    badgeColor: "#A7F3D0",
  },
  {
    id: 5,
    title: "JD Sports",
    img: "/f5-family.jpg",
    year: "[2025]",
    hoverColor: "#1a49e0",
    hoverText: "The undisputed king of trainers.",
    badgeColor: "#A7F3D0",
  },
  {
    id: 6,
    title: "Parkdean Resorts",
    img: "/f6-esterbreaks.jpg",
    year: "[2019-2025]",
    hoverColor: "#ff4f81",
    hoverText: "Creating amazing memories.",
    badgeColor: "#A7F3D0",
  },
  {
    id: 7,
    title: "Pooky",
    img: "/f7-recharchablelight.jpg",
    year: "[2025]",
    hoverColor: "#ff593b",
    hoverText: "Beautiful lights for beautiful homes.",
    badgeColor: "#A7F3D0",
  },
  {
    id: 8,
    title: "Parkdean Resorts",
    img: "/f8-ukholidays.jpg",
    year: "[2019-2025]",
    hoverColor: "#ff4f81",
    hoverText: "UK's largest holiday park operator.",
    badgeColor: "#A7F3D0",
  },
  {
    id: 9,
    title: "Revolution Beauty",
    img: "/f9-beautydupes.jpg",
    year: "[2022-2025]",
    hoverColor: "#00e0ff",
    hoverText: "Makeup Revolution. Accessible Beauty.",
    badgeColor: "#A7F3D0", // Changed from #000 to Teal
  },
  {
    id: 10,
    title: "Loyds Pharmacy",
    img: "/f10-stitest.jpg",
    year: "[2022-2023]",
    hoverColor: "#3bff4f",
    hoverText: "Healthcare for life.",
    badgeColor: "#A7F3D0", // Changed from #000 to Teal
  },
  {
    id: 11,
    title: "PrettyLittleThing",
    img: "/f11-outfit.jpg",
    year: "[2021-2023]",
    hoverColor: "#ff4f81",
    hoverText: "Fashion. Beauty. Lifestyle.",
    badgeColor: "#A7F3D0",
  },
];

const FeaturedWork = () => {
  const targetRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "-92%"]);

  const handleMouseMove = (e, containerRect) => {
    setMousePos({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
    });
  };

  const ArrowIcon = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginLeft: "8px", display: "inline-block" }}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );

  return (
    <section ref={targetRef} className="relative h-[990vh] bg-[#f2f1ef]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden p-4 md:p-4 lg:p-8">
        <div className="relative w-full h-full bg-black rounded-[20px] md:rounded-[25px] overflow-hidden flex flex-col md:flex-row">
          <div className="absolute top-10 left-10 md:top-14 md:left-14 z-[60]">
            <h2 className="text-white text-[20px] md:text-[24px] font-medium font-bold ">
              Featured Work
            </h2>
          </div>

          <div className="relative w-full md:w-[45%] h-full z-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[35vh] bg-gradient-to-b from-black via-black/80 to-transparent z-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-black via-black/80 to-transparent z-30 pointer-events-none" />

            <motion.div
              style={{ y: leftY }}
              className="flex flex-col pt-[45vh] px-10 md:px-10"
            >
              {WORKS.map((work) => (
                <motion.div
                  key={work.id}
                  onMouseEnter={() => setHoveredId(work.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  whileHover={{ x: 20 }}
                  className="group py-2 md:py-2 cursor-pointer border-b border-white/5 last:border-none flex items-start gap-3"
                >
                  <h3 className="text-white text-2xl md:text-4xl lg:text-[70px] font-medium leading-[0.9] tracking-tighter transition-all duration-500 group-hover:text-[#A7F3D0]">
                    {work.title}
                  </h3>
                  <span className="text-white text-[10px] md:text-[14px] mt-2 lg:mt-5 font-medium">
                    {work.year}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="w-full md:w-[65%] h-full relative z-10 px-4 md:px-2 overflow-hidden">
            <motion.div
              style={{ y: rightY }}
              className="flex flex-col gap-15 md:gap-10 pt-[5vh] pb-[2vh]"
            >
              {WORKS.map((work) => (
                <div
                  key={`img-${work.id}`}
                  className="w-full flex justify-center items-center"
                  onMouseEnter={() => setHoveredId(work.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onMouseMove={(e) =>
                    handleMouseMove(e, e.currentTarget.getBoundingClientRect())
                  }
                >
                  <div className="relative w-full max-w-[800px] aspect-[16/11] overflow-hidden rounded-[20px] md:rounded-[20px] shadow-2xl ring-1 ring-white/10 bg-neutral-900 group cursor-none">
                    <img
                      src={work.img}
                      alt={typeof work.title === "string" ? work.title : "Work"}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />

                    <AnimatePresence>
                      {hoveredId === work.id && (
                        <motion.div
                          className="absolute inset-0 z-30 flex flex-col items-start justify-start p-8 md:p-12 text-left"
                          initial={{ clipPath: "circle(0% at 50% 100%)" }}
                          animate={{ clipPath: "circle(150% at 50% 100%)" }}
                          exit={{ clipPath: "circle(0% at 50% 100%)" }}
                          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                          style={{ backgroundColor: work.hoverColor }}
                        >
                          <motion.div
                            className="pointer-events-none fixed z-[100] flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg"
                            style={{
                              backgroundColor: work.badgeColor,
                              left: mousePos.x,
                              top: mousePos.y,
                              translateX: "-50%",
                              translateY: "-50%",
                              position: "absolute",
                              color: "#000000", // Always black arrow for visibility
                            }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <svg
                              width="40%"
                              height="40%"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="7" y1="17" x2="17" y2="7"></line>
                              <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                          </motion.div>

                          <motion.h4
                            className="text-black text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {work.hoverText}
                          </motion.h4>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-6 md:mt-8">
          <motion.button
            initial="initial"
            whileHover="hover"
            className="group relative flex items-center justify-center bg-white text-black text-[14px] md:text-[16px] font-bold px-10 py-4 overflow-hidden shadow-sm"
            variants={{
              initial: { borderRadius: "100px" },
              hover: { borderRadius: "12px" },
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-6 flex flex-col items-center justify-center overflow-hidden">
              <motion.span
                className="flex items-center"
                variants={{ initial: { y: 0 }, hover: { y: -30 } }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Explore Our Work <ArrowIcon />
              </motion.span>
              <motion.span
                className="absolute flex items-center"
                variants={{ initial: { y: 30 }, hover: { y: 0 } }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Explore Our Work <ArrowIcon />
              </motion.span>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
