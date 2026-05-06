import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WORKS = [
  { id: 1, title: "SIXT", img: "/f1-carrental.jpg" },
  { id: 2, title: "Dojo-B2B", img: "/f2-dojo.jpg" },
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
  },

  { id: 5, title: "JD Sports", img: "/f5-family.jpg" },
  { id: 6, title: "Parkdean Resorts", img: "/f6-esterbreaks.jpg" },
  { id: 7, title: "Pooky", img: "/f7-recharchablelight.jpg" },

  { id: 8, title: "Parkdean Resorts", img: "/f8-ukholidays.jpg" },

  { id: 9, title: "Revolution Beauty", img: "/f9-beautydupes.jpg" },
  { id: 10, title: "Loyds Pharmacy", img: "/f10-stitest.jpg" },
  { id: 11, title: "PrettyLittleThing", img: "/f11-outfit.jpg" },
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

  return (
    <section ref={targetRef} className="relative h-[990vh] bg-[#f2f1ef]">
      {/* Container with margins around the black box */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden p-4 md:p-4 lg:p-8">
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
                  className="group py-2 md:py-2 cursor-pointer border-b border-white/5 last:border-none"
                >
                  <h3 className="text-white text-2xl md:text-4xl lg:text-[80px] font-medium   leading-[0.9] tracking-tighter transition-all duration-500 group-hover:text-[#A7F3D0]">
                    {work.title}
                  </h3>
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
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
