import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: ["Work", "About", "Culture", "Meet The Risers"],
    },
    {
      title: "Testimonials",
      links: ["Blog", "Webinars", "Careers"],
    },
    {
      title: "Sheffield",
      links: ["Manchester", "London", "New York", "Contact"],
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, path: "#" },
    { icon: <FaTwitter />, path: "#" },
    { icon: <FaLinkedinIn />, path: "#" },
    { icon: <FaYoutube />, path: "#" },
    { icon: <FaTiktok />, path: "#" },
    { icon: <FaInstagram />, path: "#" },
  ];

  return (
    <footer className="w-full mx-2 rounded-xl  bg-black px-4 md:px-8 py-10 font-sans selection:bg-[#99f6e4] selection:text-black">
      {/* Outer Container with Rounded Border */}
      <div className=" mx-auto border border-white/20 rounded-[40px] p-10 md:p-16 overflow-hidden">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-y-0 pb-20">
          {/* Left Section: Newsletter & Social */}
          <div className="col-span-12 lg:col-span-5 space-y-10">
            <h2 className="text-3xl font-medium tracking-tight text-white">
              Stay updated with Rise news
            </h2>

            <div className="relative max-w-[450px]">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-[#1a1a1a] border-none rounded-full py-5 px-8 text-lg outline-none text-white placeholder:text-gray-500 focus:ring-1 focus:ring-[#99f6e4] transition-all"
              />
              <motion.button
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#99f6e4] text-black w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:bg-white"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </motion.button>
            </div>

            {/* Social Icons: Compact padding ensures they stay in one line */}
            <div className="flex flex-wrap items-center gap-2">
              {socialIcons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.path}
                  className="group inline-flex items-center justify-center gap-x-1.5 bg-white text-black rounded-full px-3 py-2 transition-all duration-300 hover:rounded-xl"
                >
                  <span className="text-black text-lg flex items-center">
                    {item.icon}
                  </span>
                  {/* Vector SVG Arrow: Guaranteed Black, No Background */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right Section: Link Columns */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-3 gap-4">
            {footerLinks.map((col, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start gap-y-4 border-l border-white/10 pl-6"
              >
                <div className="h-7 overflow-hidden">
                  <RollingLink text={col.title} isTitle={true} />
                </div>
                <ul className="space-y-2">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx} className="overflow-hidden">
                      <RollingLink text={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Huge Bottom Logo */}
        <div className="relative border-t border-white/10 pt-12 flex flex-col items-start">
          <div className="relative inline-flex items-end">
            <h1 className="text-[15vw] font-bold leading-[0.75] tracking-[-0.06em] text-white whitespace-nowrap">
              Rise at Seve
              {/* Mirrored N Glyph */}
              <span className="relative inline-block w-[13.5vw] h-[12vw] translate-y-[1.2vw] ml-[-0.5vw]">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full fill-none stroke-white"
                  strokeWidth="12"
                >
                  <path
                    d="M15 15 L15 85 M15 15 L85 85"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </h1>

            {/* Trademark (R) at the Shoulder */}
            <span className="mb-[8vw] ml-2 flex-shrink-0 flex items-center justify-center w-[3.5vw] h-[3.5vw] border-[0.2vw] border-white rounded-full text-[1.8vw] font-bold text-white">
              R
            </span>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-[11px] text-white/60 mt-16 tracking-[0.15em] uppercase gap-y-4 lg:gap-y-0">
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start">
            <span>© 2026 Rise at Seven Ltd</span>
            <span className="opacity-30">•</span>
            <span>Company 11955187</span>
            <span className="opacity-30">•</span>
            <span>VAT GB 322402945</span>
            <span className="opacity-30">•</span>
            <span>Privacy Policy</span>
          </div>
          <div className="font-semibold tracking-normal lowercase opacity-80">
            Website MadeByShape
          </div>
        </div>
      </div>
    </footer>
  );
};

const RollingLink = ({ text, isTitle = false }) => {
  return (
    <motion.a
      href="#"
      className="block relative cursor-pointer"
      initial="initial"
      whileHover="hovered"
    >
      <div className={`relative ${isTitle ? "h-7" : "h-6"} overflow-hidden`}>
        <motion.span
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`block ${isTitle ? "text-xl font-bold text-white" : "text-lg font-medium text-white/70"}`}
        >
          {text}
        </motion.span>
        <motion.span
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`block absolute top-0 left-0 ${isTitle ? "text-xl font-bold" : "text-lg font-medium"} text-[#99f6e4]`}
        >
          {text}
        </motion.span>
      </div>
    </motion.a>
  );
};

export default Footer;
