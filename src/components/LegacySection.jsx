// // import React, { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";

// // const CARDS = [
// //   {
// //     id: 1,
// //     title: "Pioneers",
// //     description:
// //       "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
// //     mission:
// //       "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
// //     img: "/pioneers.jpg",
// //     bgColor: "bg-black",
// //     textColor: "text-white",
// //   },
// //   {
// //     id: 2,
// //     title: "Award Winning",
// //     description:
// //       "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
// //     img: "/awardWinning.jpg",
// //     bgColor: "bg-[#A7F3D0]",
// //     textColor: "text-black",
// //   },
// //   {
// //     id: 3,
// //     title: "Speed",
// //     description:
// //       "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms.",
// //     extra:
// //       "We've created a service which takes ideas to result within 60 minutes.",
// //     img: "/speed.jpg",
// //     bgColor: "bg-white",
// //     textColor: "text-black",
// //   },
// // ];

// // const LegacySection = () => {
// //   const containerRef = useRef(null);

// //   // Total scroll distance
// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end end"],
// //   });

// //   return (
// //     <div ref={containerRef} className="relative h-[400vh] bg-[#f0f0f0]">
// //       {/* 1. Sticky Container: This stays locked on screen.
// //           2. Headline is right at the top (mt-10) with no extra space.
// //       */}
// //       <div className="sticky top-0 h-screen w-full flex flex-col items-center overflow-hidden">
// //         {/* Fixed Headline */}
// //         <h2 className="mt-10 mb-4 text-sm md:text-lg font-medium text-gray-900 tracking-tight z-[100]">
// //           Legacy In The Making
// //         </h2>

// //         {/* Card Stack Area */}
// //         <div className="relative w-full flex-1 flex items-center justify-center">
// //           {CARDS.map((card, index) => {
// //             // We calculate the movement for each card
// //             // Card 1 starts at index 0, Card 2 at 1, etc.
// //             const start = index * 0.25;
// //             const end = start + 0.25;

// //             // Logic: The card stays in center, then as we scroll past its 'end' point,
// //             // it flies UP and rotates slightly to reveal the card below it.
// //             const y = useTransform(
// //               scrollYProgress,
// //               [start, end],
// //               ["0%", "-120%"],
// //             );
// //             const rotate = useTransform(
// //               scrollYProgress,
// //               [start, end],
// //               [0, -15],
// //             );

// //             return (
// //               <motion.div
// //                 key={card.id}
// //                 style={{
// //                   // If it's the last card (Speed), it doesn't need to fly away
// //                   y: index === CARDS.length - 1 ? 0 : y,
// //                   rotate: index === CARDS.length - 1 ? 0 : rotate,
// //                   zIndex: CARDS.length - index, // Pioneers (index 0) has highest Z-Index
// //                 }}
// //                 className={`absolute w-[90%] max-w-[550px] aspect-square rounded-[40px] shadow-2xl p-10 flex flex-col items-center text-center justify-center border-none ${card.bgColor} ${card.textColor}`}
// //               >
// //                 {/* Image */}
// //                 <div className="mb-6 overflow-hidden rounded-2xl w-40 h-40 md:w-56 md:h-56">
// //                   <img
// //                     src={card.img}
// //                     alt={card.title}
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>

// //                 {/* Text Content */}
// //                 <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
// //                   {card.title}
// //                 </h3>

// //                 <p className="text-xs md:text-sm leading-relaxed mb-4 opacity-90">
// //                   {card.description}
// //                 </p>

// //                 {(card.mission || card.extra) && (
// //                   <p className="text-xs md:text-sm font-semibold">
// //                     {card.mission || card.extra}
// //                   </p>
// //                 )}
// //               </motion.div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LegacySection;

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const CARDS = [
//   {
//     id: 1,
//     title: "Pioneers",
//     description:
//       "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
//     mission:
//       "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
//     img: "/pioneers.jpg",
//     bgColor: "bg-black",
//     textColor: "text-white",
//   },
//   {
//     id: 2,
//     title: "Award Winning",
//     description:
//       "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
//     img: "/awardWinning.jpg",
//     bgColor: "bg-[#A7F3D0]",
//     textColor: "text-black",
//   },
//   {
//     id: 3,
//     title: "Speed",
//     description:
//       "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms.",
//     extra:
//       "We've created a service which takes ideas to result within 60 minutes.",
//     img: "/speed.jpg",
//     bgColor: "bg-white",
//     textColor: "text-black",
//   },
// ];

// const LegacySection = () => {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <div ref={containerRef} className="relative h-[400vh] bg-[#f0f0f0]">
//       {/* Sticky Viewport */}
//       <div className="sticky top-0 h-screen w-full flex flex-col items-center overflow-hidden">
//         {/* Headline - Clean & Tight */}
//         <h2 className="mt-8 mb-2 text-base md:text-xl font-medium text-gray-900 tracking-tight z-[100]">
//           Legacy In The Making
//         </h2>

//         {/* Card Stack Area */}
//         <div className="relative w-full flex-1 flex items-center justify-center">
//           {CARDS.map((card, index) => {
//             // PROGRESSION LOGIC (The "n1-n8" effect)
//             // We create overlapping ranges so the next card starts moving before the previous one is gone.
//             const start = index * 0.2; // Starts sooner
//             const end = start + 0.4; // Moves longer

//             // Fly up animation
//             const y = useTransform(
//               scrollYProgress,
//               [start, end],
//               ["0vh", "-120vh"],
//             );

//             // Rotation animation (starts flat, tilts as it leaves)
//             const rotate = useTransform(
//               scrollYProgress,
//               [start, end],
//               [0, -20],
//             );

//             // Parallax Scale: Card below grows slightly as top card leaves
//             const scale = useTransform(
//               scrollYProgress,
//               [start - 0.2, start],
//               [0.95, 1],
//             );

//             return (
//               <motion.div
//                 key={card.id}
//                 style={{
//                   y: index === CARDS.length - 1 ? 0 : y,
//                   rotate: index === CARDS.length - 1 ? 0 : rotate,
//                   scale: index === 0 ? 1 : scale,
//                   zIndex: CARDS.length - index,
//                 }}
//                 className={`absolute w-[95%] max-w-[850px] h-[75vh] md:h-[80vh] rounded-[48px] shadow-2xl p-8 md:p-20 flex flex-col items-center text-center justify-center border-none ${card.bgColor} ${card.textColor}`}
//               >
//                 {/* Large Image Container */}
//                 <div className="mb-8 overflow-hidden rounded-3xl w-40 h-48 md:w-72 md:h-72">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Massive Typography */}
//                 <h3 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tighter">
//                   {card.title}
//                 </h3>

//                 <p className="text-sm md:text-xl leading-snug mb-6 opacity-90 max-w-2xl font-medium">
//                   {card.description}
//                 </p>

//                 {(card.mission || card.extra) && (
//                   <p className="text-sm md:text-xl font-bold max-w-2xl border-t border-current pt-4 opacity-100">
//                     {card.mission || card.extra}
//                   </p>
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LegacySection;

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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[350vh] bg-[#f0f0f0]">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center overflow-hidden">
        {/* Headline fixed at the top */}
        <h2 className="mt-8 mb-2 text-base md:text-xl font-medium text-gray-900 tracking-tight z-[100]">
          Legacy In The Making
        </h2>

        {/* Card Stack Area */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          {CARDS.map((card, index) => {
            // Overlapping scroll ranges based on n1-n8 sequence
            const start = index * 0.25;
            const end = start + 0.4;

            // First two cards fly away, third card stays put
            const isLastCard = index === CARDS.length - 1;

            // Vertical movement: Cards fly up
            // We ensure the animation doesn't "uncover" the last card fully by limiting scroll range
            const y = useTransform(
              scrollYProgress,
              [start, end],
              ["0vh", "-120vh"],
            );

            // Rotation: Cards tilt as they leave the stack
            const rotate = useTransform(
              scrollYProgress,
              [start, end],
              [0, -20],
            );

            // Reveal Scale: The card underneath grows slightly as the one above leaves
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
                  zIndex: CARDS.length - index, // Pioneers (index 0) stays on top
                }}
                className={`absolute w-[95%] max-w-[850px] h-[75vh] md:h-[80vh] rounded-[48px] shadow-2xl p-8 md:p-20 flex flex-col items-center text-center justify-center border-none ${card.bgColor} ${card.textColor}`}
              >
                {/* Large Image Container */}
                <div className="mb-8 overflow-hidden rounded-3xl w-48 h-48 md:w-72 md:h-72">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Massive Typography */}
                <h3 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tighter">
                  {card.title}
                </h3>

                <p className="text-sm md:text-xl leading-snug mb-6 opacity-90 max-w-2xl font-medium">
                  {card.description}
                </p>

                {(card.mission || card.extra) && (
                  <p className="text-sm md:text-xl font-bold max-w-2xl border-t border-current pt-4">
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
