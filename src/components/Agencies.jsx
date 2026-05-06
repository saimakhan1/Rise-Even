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
    { src: "/brand-logos/axa.jpg", alt: "AXA" },
    { src: "/brand-logos/hubspot.jpg", alt: "HubSpot" },
  ];

  return (
    <div className="w-full bg-[#f2f1ef] py-28 overflow-hidden ">
      <div className="max-w-[1600px] mx-auto px-4 flex items-center">
        {/* Label (no gap after this) */}
        <div className="bg-white whitespace-nowrap text-gray-800 px-4 py-2">
          The agency behind
        </div>

        {/* Slider */}
        <div className="relative flex-1 overflow-hidden">
          {/* Blur edges overlay */}
          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#eceeef] to-transparent backdrop-blur-sm"></div>
            <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#eceeef] to-transparent backdrop-blur-sm"></div>
          </div>

          {/* Moving track */}
          <div className="flex w-max gap-[200px] items-center animate-scroll-slide">
            {/* First set */}
            {logos.map((logo, i) => (
              <img
                key={`a-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain"
              />
            ))}

            {/* Duplicate set */}
            {logos.map((logo, i) => (
              <img
                key={`b-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll-slide {
            animation: scroll 70s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Agencies;
