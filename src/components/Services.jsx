import React, { useState } from "react";
// Change the path below to point to your actual image in the src folder
import MyImage from "../assets/images/my-profile.jpg";

const services = [
  {
    id: 1,
    name: "Digital PR",
    image: "/digitalPr2.jpg",
  },
  {
    id: 2,
    name: "Organic Social & Content",
    image: "/organicSocial.jpg",
  },
  {
    id: 3,
    name: "Search & Growth Strategy",
    image: "/searchGrowth.jpg",
  },
  {
    id: 4,
    name: "Content Experience",
    image: "/contentExperience2.jpg",
  },
  {
    id: 5,
    name: "Data & Insights",
    image: "/dataNinsights.jpg",
  },
  {
    id: 6,
    name: "Onsite SEO",
    image: "/onsiteseo2.jpg",
  },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const BlackArrow = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-black"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );

  return (
    <section className="bg-[#f2f1ef] py-16 md:py-20 px-6 md:px-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-gray-400 pb-10 mb-2">
        <h1 className="text-6xl md:text-8xl font-medium tracking-tight flex flex-wrap items-center gap-3 md:gap-4 leading-[0.9]">
          Our
          <span className="inline-block w-16 h-16 md:w-30 md:h-30 rounded-xl overflow-hidden">
            <img
              src={MyImage}
              alt="My Profile"
              className="w-full h-full object-cover"
            />
          </span>
          Services
        </h1>

        {/* Desktop Button: Hidden on mobile */}
        <button className="hidden md:block group relative h-12 w-52 overflow-hidden bg-white text-black transition-all duration-500 ease-in-out rounded-[40px] hover:rounded-xl shadow-sm border border-gray-100">
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <div className="relative h-6 overflow-hidden">
              <span className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                <span className="flex items-center gap-2 h-6 text-sm font-semibold">
                  View All Services <BlackArrow />
                </span>
                <span className="flex items-center gap-2 h-6 text-sm font-semibold">
                  View All Services <BlackArrow />
                </span>
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Services Grid: Single col on mobile, 2 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
        {services.map((service) => (
          <div
            key={service.id}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="relative group cursor-pointer border-b border-gray-400 py-6 md:py-10 overflow-hidden transition-all duration-300"
          >
            {/* Desktop-only Hover Background */}
            <div
              className="hidden md:block absolute inset-0 z-0 transition-all duration-500 ease-out rounded-full scale-[0.98] opacity-0 group-hover:opacity-100 group-hover:scale-100 mx-2 my-1"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="relative z-10 flex items-center px-0 md:px-8">
              {/* Mobile Thumbnail (visible on mobile only per image) */}
              <div className="md:hidden w-16 h-16 rounded-xl overflow-hidden mr-4 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Desktop Hover Arrow */}
              <div className="hidden md:flex w-0 opacity-0 -ml-4 transition-all duration-500 ease-in-out group-hover:w-12 group-hover:opacity-100 group-hover:mr-4 group-hover:ml-0 items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-10 h-10 text-white"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>

              <h2
                className={`text-[28px] md:text-5xl font-medium transition-colors duration-300 leading-tight ${hoveredId === service.id ? "md:text-white" : "text-black"}`}
              >
                {service.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile-only Bottom Button */}
      <div className="mt-10 md:hidden flex justify-center">
        <button className="w-full h-14 bg-white text-black text-sm font-semibold rounded-full shadow-sm border border-gray-100 flex items-center justify-center gap-2">
          View All Services
          <BlackArrow />
        </button>
      </div>
    </section>
  );
};

export default Services;
