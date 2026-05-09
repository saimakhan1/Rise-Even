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
