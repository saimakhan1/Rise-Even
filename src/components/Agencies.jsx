import React from "react";

const Agencies = () => {
  const logos = [
    { src: "/brand-logos/emirates.jpg", alt: "Emirates" },
    { src: "/brand-logos/kroger.jpg", alt: "Kroger" },
    { src: "/brand-logos/sharkninja.jpg", alt: "Shark Ninja" },
    { src: "/brand-logos/capitalone.jpg", alt: "Capital One" },
    { src: "/brand-logos/redbull.jpg", alt: "Red Bull" },
    { src: "/brand-logos/jd.jpg", alt: "JD Sports" },
    { src: "/brand-logos/axa.jpg", alt: "AXA" },
    { src: "/brand-logos/revolution.jpg", alt: "Revolution" },
    { src: "/brand-logos/sixt.jpg", alt: "Sixt" },
    { src: "/brand-logos/hubspot.jpg", alt: "HubSpot" },
  ];

  return (
    <div className="w-full bg-[#f2f1ef] py-12 md:py-28 overflow-hidden ">
      <div className="max-w-[1600px] mx-auto px-4 flex flex-col md:flex-row  gap-8 md:gap-0">
        {/* Label - Responsive font size and centering on mobile */}
        <div className="whitespace-nowrap text-gray-800  md:text-xl font-medium px-4 py-2">
          The agency behind ...
        </div>

        {/* Slider Container */}
        <div className="relative flex-1 w-full overflow-hidden">
          {/* Blur edges overlay - Adjusted width for mobile */}
          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="absolute left-0 top-0 h-full w-16 md:w-40 bg-gradient-to-r from-[#f2f1ef] to-transparent"></div>
            <div className="absolute right-0 top-0 h-full w-16 md:w-40 bg-gradient-to-l from-[#f2f1ef] to-transparent"></div>
          </div>

          {/* Moving track - Responsive gap between logos */}
          <div className="flex w-max gap-12 md:gap-[200px] items-center animate-scroll-slide">
            {/* First set */}
            {logos.map((logo, i) => (
              <img
                key={`a-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-6 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}

            {/* Duplicate set for seamless looping */}
            {logos.map((logo, i) => (
              <img
                key={`b-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-6 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll-slide {
            animation: scroll 40s linear infinite;
          }

          /* Faster scroll on small screens for better UX */
          @media (max-width: 768px) {
            .animate-scroll-slide {
              animation: scroll 20s linear infinite;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Agencies;
