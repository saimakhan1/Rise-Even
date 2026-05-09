import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CARDS = [
  {
    id: 1,
    title: "Pioneers",
    description:
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
    mission:
      "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    img: "/pioneers.jpg",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Award Winning",
    description:
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    img: "/awardWinning.jpg",
    bgColor: "bg-[#A7F3D0]",
    textColor: "text-black",
  },
  {
    id: 3,
    title: "Speed",
    description:
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms.",
    extra:
      "We've created a service which takes ideas to result within 60 minutes.",
    img: "/speed.jpg",
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

const LegacySection = () => {
  const containerRef = useRef(null);
  const mobileScrollRef = useRef(null);

  // Desktop Scroll Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mobile Scroll Logic
  const { scrollXProgress } = useScroll({
    container: mobileScrollRef,
  });

  return (
    <div
      ref={containerRef}
      className="relative h-auto md:h-[350vh] bg-[#f0f0f0]"
    >
      {/* MOBILE VERSION */}
      <div className="md:hidden w-full pt-10 pb-24">
        <h2 className="text-center text-base font-medium text-gray-900 mb-6">
          Legacy In The Making
        </h2>

        {/* Horizontal Scroll Container */}
        <div
          ref={mobileScrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-5 px-6"
        >
          {CARDS.map((card) => (
            <div
              key={`mob-${card.id}`}
              className={`snap-center shrink-0 w-[88vw] min-h-[550px] ${card.bgColor} ${card.textColor} rounded-[32px] p-6 flex flex-col shadow-xl overflow-hidden`}
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 flex-shrink-0">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow text-center items-center">
                <h3 className="text-4xl font-medium tracking-tighter mb-4 leading-none">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-snug font-medium opacity-90 mb-4 px-2">
                  {card.description}
                </p>
                {(card.mission || card.extra) && (
                  <p className="text-[15px] font-medium leading-snug border-t border-current/20 pt-4 px-2">
                    {card.mission || card.extra}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* PERSISTENT INDICATOR: Fixed dark line lower down */}
        <div className="px-12 mt-14">
          <div className="relative w-full h-[4px] bg-gray-300 rounded-full">
            <motion.div
              className="absolute top-0 left-0 h-full bg-black rounded-full"
              style={{
                scaleX: scrollXProgress,
                transformOrigin: "0%",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION (UNTOUCHED) */}
      <div className="hidden md:flex sticky top-0 h-screen w-full flex-col items-center overflow-hidden">
        <h2 className="mt-8 mb-2 text-base md:text-xl font-medium text-gray-900 tracking-tight z-[100]">
          Legacy In The Making
        </h2>

        <div className="relative w-full flex-1 flex items-center justify-center">
          {CARDS.map((card, index) => {
            const start = index * 0.25;
            const end = start + 0.4;
            const isLastCard = index === CARDS.length - 1;

            const y = useTransform(
              scrollYProgress,
              [start, end],
              ["0vh", "-120vh"],
            );
            const rotate = useTransform(
              scrollYProgress,
              [start, end],
              [0, -20],
            );
            const scale = useTransform(
              scrollYProgress,
              [start - 0.2, start],
              [0.96, 1],
            );

            return (
              <motion.div
                key={card.id}
                style={{
                  y: isLastCard ? "0vh" : y,
                  rotate: isLastCard ? 0 : rotate,
                  scale: index === 0 ? 1 : scale,
                  zIndex: CARDS.length - index,
                }}
                className={`absolute w-[65%] max-w-[650px] h-[80vh] rounded-[28px] shadow-2xl p-10 flex flex-col items-center text-center justify-center border-none ${card.bgColor} ${card.textColor}`}
              >
                <div className="mb-8 overflow-hidden rounded-2xl w-52 h-72">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-6xl font-medium mb-6 tracking-tighter">
                  {card.title}
                </h3>
                <p className="text-xl leading-snug mb-6 opacity-90 max-w-2xl font-medium">
                  {card.description}
                </p>
                {(card.mission || card.extra) && (
                  <p className="text-xl max-w-2xl pt-4">
                    {card.mission || card.extra}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LegacySection;
