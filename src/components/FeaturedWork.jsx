import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WORKS = [
  { id: 1, title: "SIXT", img: "/f1-carrental.jpg", year: "[2023-2025]" },
  { id: 2, title: "Dojo-B2B", img: "/f2-dojo.jpg", year: "[2021-2025]" },
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
  },

  { id: 5, title: "JD Sports", img: "/f5-family.jpg", year: "[2025]" },
  {
    id: 6,
    title: "Parkdean Resorts",
    img: "/f6-esterbreaks.jpg",
    year: "[2019-2025]",
  },
  { id: 7, title: "Pooky", img: "/f7-recharchablelight.jpg", year: "[2025]" },

  {
    id: 8,
    title: "Parkdean Resorts",
    img: "/f8-ukholidays.jpg",
    year: "[2019-2025]",
  },

  {
    id: 9,
    title: "Revolution Beauty",
    img: "/f9-beautydupes.jpg",
    year: "[2022-2025]",
  },
  {
    id: 10,
    title: "Loyds Pharmacy",
    img: "/f10-stitest.jpg",
    year: "[2022-2023]",
  },
  {
    id: 11,
    title: "PrettyLittleThing",
    img: "/f11-outfit.jpg",
    year: "[2021-2023]",
  },
];

const FeaturedWork = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Parallax: Right images move significantly faster to create depth
  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "-92%"]);

  // Standard Black Arrow SVG to avoid Emoji rendering issues
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
      {/* Container with margins around the black box */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden p-4 md:p-4 lg:p-8">
        {/* Main Black Box */}
        <div className="relative w-full h-full bg-black rounded-[20px] md:rounded-[25px] overflow-hidden flex flex-col md:flex-row">
          {/* Label: Featured Work */}
          <div className="absolute top-10 left-10 md:top-14 md:left-14 z-[60]">
            <h2 className="text-white text-[20px] md:text-[24px] font-medium font-bold ">
              Featured Work
            </h2>
          </div>

          {/* LEFT COLUMN: Large  Typography */}
          <div className="relative w-full md:w-[45%] h-full z-20 overflow-hidden">
            {/* The Shade: Specifically for the Left Column text only */}
            <div className="absolute top-0 left-0 w-full h-[35vh] bg-gradient-to-b from-black via-black/80 to-transparent z-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-black via-black/80 to-transparent z-30 pointer-events-none" />

            <motion.div
              style={{ y: leftY }}
              className="flex flex-col pt-[45vh] px-10 md:px-10"
            >
              {WORKS.map((work) => (
                <motion.div
                  key={work.id}
                  whileHover={{ x: 20 }}
                  className="group py-2 md:py-2 cursor-pointer border-b border-white/5 last:border-none flex items-start gap-3"
                >
                  <h3 className="text-white text-2xl md:text-4xl lg:text-[70px] font-medium   leading-[0.9] tracking-tighter transition-all duration-500 group-hover:text-[#A7F3D0]">
                    {work.title}
                  </h3>
                  <span className="text-white text-[10px] md:text-[14px] mt-2 lg:mt-5 font-medium">
                    {work.year}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Massive Images */}
          <div className="w-full md:w-[65%] h-full relative z-10 px-4 md:px-2 overflow-hidden">
            <motion.div
              style={{ y: rightY }}
              className="flex flex-col gap-15 md:gap-10 pt-[5vh] pb-[2vh]"
            >
              {WORKS.map((work) => (
                <div
                  key={`img-${work.id}`}
                  className="w-full flex justify-center items-center"
                >
                  {/* Container scale increased to 100% of column minus small padding */}
                  <div className="w-full max-w-[800px] aspect-[16/11] overflow-hidden rounded-[20px] md:rounded-[20px] shadow-2xl ring-1 ring-white/10 bg-neutral-900">
                    <img
                      src={work.img}
                      alt={typeof work.title === "string" ? work.title : "Work"}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* EXPLORE OUR WORK BUTTON - Outside the Black Box */}
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
              {/* Default text - slides UP on hover */}
              <motion.span
                className="flex items-center"
                variants={{
                  initial: { y: 0 },
                  hover: { y: -30 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Explore Our Work <ArrowIcon />
              </motion.span>
              {/* Hover text - slides IN from bottom on hover */}
              <motion.span
                className="absolute flex items-center"
                variants={{
                  initial: { y: 30 },
                  hover: { y: 0 },
                }}
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
