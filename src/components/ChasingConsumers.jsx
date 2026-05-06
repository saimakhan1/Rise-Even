import React from "react";

const ChasingConsumers = () => {
  // Update these paths to match your local folder structure (e.g., /src/assets/consumer-1.jpg)
  const imageOne = "/consumer.jpg";
  const imageTwo = "/consumer2.jpg";

  return (
    <section className="relative w-full overflow-hidden bg-[#f2f1ef] py-20 border-y border-gray-100">
      {/* Smooth Marquee Animation */}
      <style>
        {`
          @keyframes marquee-infinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee-infinite {
            animation: marquee-infinite 25s linear infinite;
          }
        `}
      </style>

      <div className="flex whitespace-nowrap animate-marquee-infinite">
        {/* We repeat the content to create the infinite loop effect */}
        <MarqueeGroup img1={imageOne} img2={imageTwo} />
        <MarqueeGroup img1={imageOne} img2={imageTwo} />
      </div>
    </section>
  );
};

const MarqueeGroup = ({ img1, img2 }) => (
  <div className="flex items-baseline gap-12 px-6">
    {/* Text Layer */}
    <h2 className="text-[16rem] font-bold tracking-tighter text-black leading-none">
      Chasing Consumers
    </h2>

    {/* Square Image Box 1 with Rounded Corners */}
    <div className="relative inline-block w-[200px] aspect-square overflow-hidden bg-gray-100 self-baseline rounded-2xl">
      <img
        src={img1}
        alt="Consumer Graphic"
        className="w-full h-full object-cover"
        // Optional fallback:
        // onError={(e) => { e.target.src = 'https://via.placeholder.com/120'; }}
      />
    </div>

    {/* Text Layer */}
    <h2 className="text-[16rem] font-bold tracking-tighter text-black leading-none">
      Not Algorithms
    </h2>

    {/* Square Image Box 2 with Rounded Corners */}
    <div className="relative inline-block w-[200px] aspect-square overflow-hidden bg-gray-100 self-baseline rounded-2xl">
      <img
        src={img2}
        alt="Algorithm Graphic"
        className="w-full h-full object-cover"
        // Optional fallback:
        // onError={(e) => { e.target.src = 'https://via.placeholder.com/120'; }}
      />
    </div>
  </div>
);

export default ChasingConsumers;
