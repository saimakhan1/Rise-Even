import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-teal-200"
    >
      {/* Optional: Add a logo or spinner here */}
    </motion.div>
  );
};

export default Preloader;
