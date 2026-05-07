import { motion } from "framer-motion";

const PageReveal = ({ children }) => {
  return (
    <div className="relative bg-teal-200 min-h-screen overflow-hidden">
      <motion.div
        initial={{
          clipPath: "circle(0% at 50% 100%)",
        }}
        animate={{
          clipPath: "circle(150% at 50% 100%)",
        }}
        transition={{
          duration: 1.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="relative z-10 bg-white"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageReveal;
