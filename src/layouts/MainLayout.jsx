import React from "react";
import { motion } from "framer-motion";

// Import your components
import Agencies from "../components/Agencies";
import ChasingConsumers from "../components/ChasingConsumers";
import FeaturedWork from "../components/FeaturedWork";
import Footer from "../components/Footer";
import GlobalTeam from "../components/GlobalTeam";
import Hero from "../components/Hero";
import LegacySection from "../components/LegacySection";
import Navbar from "../components/Navbar";
import ReadyToRise from "../components/ReadyToRise";
import Services from "../components/Services";
import TopBar from "../components/TopBar";
import WhatsNew from "../components/WhatsNew";

function MainLayout() {
  return (
    <>
      {/* 1. The Teal Reveal Layer */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.19, 1, 0.22, 1], // Custom "Expo" easing for a premium feel
        }}
        className="fixed inset-0 z-[9999] bg-[#99f6e4]" // Tailwind teal-200
      />

      {/* 2. The Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts lower and invisible
        animate={{ opacity: 1, y: 0 }} // Slides up to original position
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: "easeOut",
        }}
        className="relative"
      >
        <TopBar />
        <Navbar />
        <Hero />
        <Agencies />
        <GlobalTeam />
        <FeaturedWork />
        <Services />
        <ChasingConsumers />
        <LegacySection />
        <WhatsNew />
        <ReadyToRise />
        <Footer />
      </motion.div>
    </>
  );
}

export default MainLayout;
