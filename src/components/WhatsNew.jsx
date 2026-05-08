import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsNew = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile to disable hover logic cleanly
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const articles = [
    {
      id: 1,
      // tag: "News",
      image: "/new1.jpg",
      author: "Ray Saddiq",
      readTime: "3 mins",
      title: "Rise at Seven Appoints Hollie Lovell as Senior Operation Lead",
    },
    {
      id: 2,
      // tag: "Food/Hospitality/Drink",
      image: "/new2.jpg",
      author: "Ray Saddiq",
      readTime: "2 mins",
      title:
        "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
    },
    {
      id: 3,
      tag: "News",
      image: "/new3.jpg",
      author: "Carrie Rose",
      readTime: "2 mins",
      title: "Ryan McNamara Is Now Rise at Seven’s Global Director",
    },
  ];

  const handleMouseMove = (e) => {
    if (!isMobile) setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Button Component to avoid repeating styles
  const ExploreButton = ({ className }) => (
    <button
      className={`
        group flex items-center justify-center gap-2 bg-white text-black px-6 py-4 md:py-2.5 
        transition-all duration-500 ease-in-out border border-black/5
        rounded-[40px] hover:rounded-md whitespace-nowrap ${className}
      `}
    >
      <span className="text-lg font-semibold">Explore More Thoughts</span>
      <span className="text-lg transition-transform duration-300 ">
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
  );

  return (
    <section
      className="w-full bg-[#f2f1ef] py-10 md:py-12 px-5 md:px-12 font-sans overflow-hidden cursor-default"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Circular Arrow Cursor - Desktop Only */}
      <AnimatePresence>
        {!isMobile && hoveredIndex !== null && (
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
      <div className="flex justify-between items-end border-b border-black/10 pb-8 mb-10">
        <div className="flex items-center flex-wrap gap-x-3">
          <h1 className="text-7xl md:text-8xl font-medium tracking-tight">
            What's
          </h1>
          <div className="w-16 h-12 md:w-28 md:h-24 rounded-xl md:rounded-2xl overflow-hidden bg-black mt-2">
            <img
              src="/whatsnew.jpg"
              alt="Context"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-7xl md:text-8xl font-medium tracking-tight">
            New
          </h1>
        </div>

        {/* Desktop Button: Visible beside title on MD screens and up */}
        <ExploreButton className="hidden md:flex mb-2" />
      </div>

      {/* Article Grid - Desktop: Grid | Mobile: Horizontal Scroll */}
      <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-6">
        {articles.map((item, index) => (
          <div
            key={item.id}
            className="min-w-[85vw] md:min-w-0 snap-center group cursor-none"
            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden mb-6 bg-gray-200">
              <motion.img
                src={item.image}
                alt={item.title}
                animate={{
                  filter:
                    !isMobile && hoveredIndex === index
                      ? "blur(8px)"
                      : "blur(0px)",
                  scale: !isMobile && hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 md:left-8">
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-[11px] md:text-xs font-semibold uppercase tracking-wider mb-3 opacity-70">
              <div className="flex items-center gap-2 bg-white/50 md:bg-transparent px-2 py-1 md:p-0 rounded-full">
                <div className="w-5 h-5 rounded-full bg-gray-400 overflow-hidden">
                  <div className="w-full h-full bg-slate-300" />
                </div>
                <span>{item.author}</span>
              </div>
              <div className="flex items-center gap-1.5 border-l border-black/10 pl-4">
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
            <h3 className="text-3xl md:text-3xl font-medium leading-[1.1] tracking-tight">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Progress Bar (Mobile only indicator) */}
      <div className="md:hidden w-full h-[2px] bg-black/10 mb-8 relative">
        <div className="absolute top-0 left-0 w-2/3 h-full bg-black"></div>
      </div>

      {/* Mobile-only Button: Original position maintained */}
      <ExploreButton className="w-full md:hidden" />

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default WhatsNew;
