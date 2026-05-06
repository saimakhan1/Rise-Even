import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsNew = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const articles = [
    {
      id: 1,
      tag: "News",
      image: "/new1.jpg",
      author: "Carrie Rose",
      readTime: "2 mins",
      title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    },
    {
      id: 2,
      tag: "Food/Hospitality/Drink",
      image: "/new2.jpg",
      author: "Ray Saddiq",
      readTime: "2 mins",
      title:
        "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category",
    },
    {
      id: 3,
      tag: "Food/Hospitality/Drink",
      image: "/new3.jpg",
      author: "Carrie Rose",
      readTime: "2 mins",
      title:
        "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz",
    },
  ];

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      className="w-full bg-[#f2f1ef] py-12 px-6 md:px-12 font-sans overflow-hidden cursor-default"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Circular Arrow Cursor */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed pointer-events-none z-50 flex items-center justify-center w-24 h-24 bg-[#99f6e4] rounded-full text-black shadow-xl"
            style={{
              left: mousePosition.x - 48,
              top: mousePosition.y - 48,
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <div className="flex justify-between items-center border-b border-black/10 pb-8 mb-12">
        <div className="flex items-center gap-4">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight">
            What's
          </h1>
          <div className="w-20 h-24 md:w-28 md:h-24 rounded-2xl overflow-hidden bg-black mt-2">
            <img
              src="/whatsnew.jpg"
              alt="Context"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight">
            New
          </h1>
        </div>

        <button className="group flex items-center gap-2 border border-black/20 rounded-full px-6 py-2.5 hover:bg-black hover:text-white transition-all duration-300">
          <span className="text-sm font-semibold">Explore More Thoughts</span>
          <span className="text-xs">↗</span>
        </button>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {articles.map((item, index) => (
          <div
            key={item.id}
            className="group cursor-none"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-6 bg-gray-200">
              <motion.img
                src={item.image}
                alt={item.title}
                animate={{
                  filter: hoveredIndex === index ? "blur(8px)" : "blur(0px)",
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
              {/* Tag Overlays */}
              <div className="absolute top-6 left-8">
                <span className="bg-black/20 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider mb-3 opacity-60">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-gray-400 overflow-hidden">
                  {/* Placeholder for Author headshot */}
                  <div className="w-full h-full bg-slate-300" />
                </div>
                <span>{item.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{item.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-medium leading-tight tracking-tight pr-4">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatsNew;
