// // import React, { useRef } from "react";
// // import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// // const ReadyToRise = () => {
// //   const containerRef = useRef(null);
// //   const text = "Ready to Rise at Seven?";
// //   const letters = Array.from(text);

// //   // Use a height that provides a smooth scroll experience
// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start end", "end start"],
// //   });

// //   // Spring for that "snappy" high-end agency feel
// //   const smoothProgress = useSpring(scrollYProgress, {
// //     stiffness: 100,
// //     damping: 30,
// //     restDelta: 0.001,
// //   });

// //   // PARENT MOVEMENT: The entire block slides across the screen
// //   const xMovement = useTransform(smoothProgress, [0, 1], ["100vw", "-150vw"]);

// //   return (
// //     <section
// //       ref={containerRef}
// //       // Section height is kept tight to prevent extra white space below
// //       className="relative h-[120vh] bg-[#f2f1ef] overflow-hidden"
// //     >
// //       <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
// //         <motion.h2
// //           style={{ x: xMovement }}
// //           // text size and tracking matched exactly to your readycode.jpg screenshot
// //           className="flex whitespace-nowrap text-[14vw] font-medium tracking-tight leading-tight text-black select-none shrink-0"
// //         >
// //           {letters.map((char, i) => {
// //             // INDIVIDUAL LETTER DROP: Each letter drops at a different time
// //             // We use a small window of the scroll progress for each letter
// //             const startDrop = i * 0.01;
// //             const endDrop = 0.2 + i * 0.01;

// //             const y = useTransform(
// //               smoothProgress,
// //               [startDrop, endDrop],
// //               ["-100vh", "0vh"],
// //             );

// //             const opacity = useTransform(
// //               smoothProgress,
// //               [startDrop, startDrop + 0.05],
// //               [0, 1],
// //             );

// //             return (
// //               <motion.div
// //                 key={i}
// //                 aria-hidden="true"
// //                 style={{
// //                   y,
// //                   opacity,
// //                   position: "relative",
// //                   display: "inline-block",
// //                 }}
// //               >
// //                 {/* Handling spaces correctly to maintain sentence structure */}
// //                 {char === " " ? "\u00A0" : char}
// //               </motion.div>
// //             );
// //           })}
// //         </motion.h2>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ReadyToRise;

// import React, { useRef, useState, useEffect } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// const ReadyToRise = () => {
//   const containerRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const text = "Ready to Rise at Seven?";
//   const letters = Array.from(text);

//   // Check for mobile to adjust travel distance
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   // Desktop travel: 100vw to -150vw
//   // Mobile travel: 80vw to -350vw (Adjusted for faster movement in tighter vertical space)
//   const xMovement = useTransform(
//     smoothProgress,
//     [0, 1],
//     isMobile ? ["80vw", "-350vw"] : ["100vw", "-150vw"],
//   );

//   return (
//     <section
//       ref={containerRef}
//       /* MOBILE: h-[70vh] (Much tighter top/bottom)
//          DESKTOP: h-[120vh] (Untouched)
//       */
//       className="relative h-[70vh] md:h-[120vh] bg-[#f2f1ef] overflow-hidden"
//     >
//       {/* MOBILE: h-[70vh] container to match section
//           DESKTOP: h-screen (Untouched)
//       */}
//       <div className="sticky top-0 flex h-[70vh] md:h-screen w-full items-center overflow-hidden">
//         <motion.h2
//           style={{ x: xMovement }}
//           /* Responsive text sizes: 20vw for mobile, 14vw for desktop */
//           className="flex whitespace-nowrap text-[20vw] md:text-[14vw] font-medium tracking-tight leading-tight text-black select-none shrink-0"
//         >
//           {letters.map((char, i) => {
//             const startDrop = i * 0.01;
//             const endDrop = 0.2 + i * 0.01;

//             const y = useTransform(
//               smoothProgress,
//               [startDrop, endDrop],
//               /* Drop height adjusted for mobile to prevent starting "too far up" */
//               isMobile ? ["-40vh", "0vh"] : ["-100vh", "0vh"],
//             );

//             const opacity = useTransform(
//               smoothProgress,
//               [startDrop, startDrop + 0.05],
//               [0, 1],
//             );

//             return (
//               <motion.div
//                 key={i}
//                 aria-hidden="true"
//                 style={{
//                   y,
//                   opacity,
//                   position: "relative",
//                   display: "inline-block",
//                 }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.div>
//             );
//           })}
//         </motion.h2>
//       </div>
//     </section>
//   );
// };

// export default ReadyToRise;

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ReadyToRise = () => {
  const containerRef = useRef(null);
  const text = "Ready to Rise at Seven?";
  const letters = Array.from(text);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const xMovement = useTransform(smoothProgress, [0, 1], ["100vw", "-150vw"]);

  return (
    <section
      ref={containerRef}
      /* ADDED: 'hidden' to hide on mobile 
         ADDED: 'md:block' to show on desktop (768px and up)
      */
      className="hidden md:block relative h-[120vh] bg-[#f2f1ef] overflow-hidden"
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <motion.h2
          style={{ x: xMovement }}
          className="flex whitespace-nowrap text-[14vw] font-medium tracking-tight leading-tight text-black select-none shrink-0"
        >
          {letters.map((char, i) => {
            const startDrop = i * 0.01;
            const endDrop = 0.2 + i * 0.01;

            const y = useTransform(
              smoothProgress,
              [startDrop, endDrop],
              ["-100vh", "0vh"],
            );

            const opacity = useTransform(
              smoothProgress,
              [startDrop, startDrop + 0.05],
              [0, 1],
            );

            return (
              <motion.div
                key={i}
                aria-hidden="true"
                style={{
                  y,
                  opacity,
                  position: "relative",
                  display: "inline-block",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.div>
            );
          })}
        </motion.h2>
      </div>
    </section>
  );
};

export default ReadyToRise;
