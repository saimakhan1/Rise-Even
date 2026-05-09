import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const GlobalTeam = () => {
  return (
    <section className="bg-[#f2f1ef] min-h-[600px] w-full px-6 md:px-12 py-16 md:py-20 font-sans flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-12">
      {/* HEADING BLOCK: 
         order-1 on mobile (comes first)
         md:order-2 on desktop (moves to the right)
      */}
      <div className="flex flex-col items-start text-left w-full md:w-auto order-1 md:order-2">
        <div className="relative mb-8 md:mb-10">
          <h1 className="text-5xl sm:text-6xl md:text-[100px] leading-[0.9] font-bold text-black tracking-tighter">
            Driving Demand & <br className="hidden sm:block" />
            Discovery
            <div className="inline-block ml-2 md:ml-4 align-middle">
              <img
                src="/discovery.jpg"
                alt="Discovery"
                className="w-12 h-16 md:w-20 md:h-24 rounded-xl md:rounded-2xl object-cover shadow-sm"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/80x100?text=Img";
                }}
              />
            </div>
          </h1>
        </div>

        {/* BUTTONS BLOCK (DESKTOP): 
           Shown on desktop underneath the heading. 
           Hidden on mobile so we can place them at the very bottom.
        */}
        <div className="hidden md:flex items-center gap-4">
          <AnimatedButton text="Our Story" variant="white" />
          <AnimatedButton text="Our Services" variant="ghost" />
        </div>
      </div>

      {/* DESCRIPTION BLOCK: 
         order-2 on mobile (comes after heading)
         md:order-1 on desktop (moves to the left)
      */}
      <div className="max-w-full md:max-w-md order-2 md:order-1">
        <h2 className="text-[22px] md:text-[28px] leading-tight font-medium text-black tracking-tight">
          A global team of search-first content marketers engineering semantic
          relevancy & category signals for both the internet and people
        </h2>

        {/* BUTTONS BLOCK (MOBILE): 
           Hidden on desktop.
           On mobile, this appears under the description.
        */}
        <div className="flex flex-col gap-3 mt-8 md:hidden">
          <AnimatedButton text="Our Story" variant="white" />
          <AnimatedButton text="Our Services" variant="ghost" />
        </div>
      </div>
    </section>
  );
};

// Reusable Animated Button Component
const AnimatedButton = ({ text, variant }) => {
  const isWhite = variant === "white";

  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className={`
        group relative px-8 py-4 transition-all duration-300 ease-in-out w-full md:w-auto
        ${isWhite ? "bg-white text-black rounded-full hover:rounded-2xl shadow-sm" : "bg-transparent text-black"}
      `}
    >
      <div className="relative h-6 overflow-hidden flex flex-col items-center md:items-start">
        <motion.span
          variants={{
            initial: { y: 0 },
            hover: { y: "-100%" },
          }}
          transition={{ duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="flex items-center gap-2 whitespace-nowrap font-medium"
        >
          {text} <ArrowUpRight size={18} />
        </motion.span>

        <motion.span
          variants={{
            initial: { y: "100%" },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="absolute inset-0 flex items-center justify-center md:justify-start gap-2 whitespace-nowrap font-medium"
        >
          {text} <ArrowUpRight size={18} />
        </motion.span>
      </div>
    </motion.button>
  );
};

export default GlobalTeam;
