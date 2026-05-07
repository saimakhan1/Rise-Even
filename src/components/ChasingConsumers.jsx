// import React from "react";

// const ChasingConsumers = () => {
//   // Update these paths to match your local folder structure (e.g., /src/assets/consumer-1.jpg)
//   const imageOne = "/consumer.jpg";
//   const imageTwo = "/consumer2.jpg";

//   return (
//     <section className="relative w-full overflow-hidden bg-[#f2f1ef] py-20 border-y border-gray-100">
//       {/* Smooth Marquee Animation */}
//       <style>
//         {`
//           @keyframes marquee-infinite {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-100%); }
//           }
//           .animate-marquee-infinite {
//             animation: marquee-infinite 25s linear infinite;
//           }
//         `}
//       </style>

//       <div className="flex whitespace-nowrap animate-marquee-infinite">
//         {/* We repeat the content to create the infinite loop effect */}
//         <MarqueeGroup img1={imageOne} img2={imageTwo} />
//         <MarqueeGroup img1={imageOne} img2={imageTwo} />
//       </div>
//     </section>
//   );
// };

// const MarqueeGroup = ({ img1, img2 }) => (
//   <div className="flex items-baseline gap-12 px-6">
//     {/* Text Layer */}
//     <h2 className="text-[16rem] font-bold tracking-tighter text-black leading-none">
//       Chasing Consumers
//     </h2>

//     {/* Square Image Box 1 with Rounded Corners */}
//     <div className="relative inline-block w-[200px] aspect-square overflow-hidden bg-gray-100 self-baseline rounded-2xl">
//       <img
//         src={img1}
//         alt="Consumer Graphic"
//         className="w-full h-full object-cover"
//         // Optional fallback:
//         // onError={(e) => { e.target.src = 'https://via.placeholder.com/120'; }}
//       />
//     </div>

//     {/* Text Layer */}
//     <h2 className="text-[16rem] font-bold tracking-tighter text-black leading-none">
//       Not Algorithms
//     </h2>

//     {/* Square Image Box 2 with Rounded Corners */}
//     <div className="relative inline-block w-[200px] aspect-square overflow-hidden bg-gray-100 self-baseline rounded-2xl">
//       <img
//         src={img2}
//         alt="Algorithm Graphic"
//         className="w-full h-full object-cover"
//         // Optional fallback:
//         // onError={(e) => { e.target.src = 'https://via.placeholder.com/120'; }}
//       />
//     </div>
//   </div>
// );

// export default ChasingConsumers;

import React from "react";

const ChasingConsumers = () => {
  const imageOne = "/consumer.jpg";
  const imageTwo = "/consumer2.jpg";

  return (
    <section className="relative w-full overflow-hidden bg-[#f2f1ef] py-10 md:py-20 border-y border-gray-100">
      <style>
        {`
          @keyframes marquee-infinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-infinite {
            display: flex;
            width: max-content;
            animation: marquee-infinite var(--marquee-duration, 12s) linear infinite;
          }
          
          @media (min-width: 768px) {
            .animate-marquee-infinite {
              --marquee-duration: 25s;
            }
          }
        `}
      </style>

      <div className="animate-marquee-infinite">
        {/* We use two identical groups and animate to -50% for a seamless loop */}
        <MarqueeGroup img1={imageOne} img2={imageTwo} />
        <MarqueeGroup img1={imageOne} img2={imageTwo} />
      </div>
    </section>
  );
};

const MarqueeGroup = ({ img1, img2 }) => (
  <div className="flex items-center md:items-baseline flex-nowrap">
    {/* First Phrase Segment */}
    <div className="flex items-center md:items-baseline gap-6 md:gap-12 px-3 md:px-6">
      <h2 className="text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-medium md:font-bold tracking-tighter text-black leading-none whitespace-nowrap">
        Chasing Consumers
      </h2>

      <div className="relative inline-block w-[80px] sm:w-[120px] md:w-[160px] lg:w-[200px] aspect-square overflow-hidden bg-gray-100 flex-shrink-0 rounded-lg md:rounded-2xl">
        <img src={img1} alt="Consumer" className="w-full h-full object-cover" />
      </div>

      <h2 className="text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-medium md:font-bold tracking-tighter text-black leading-none whitespace-nowrap">
        Not Algorithms
      </h2>

      <div className="relative inline-block w-[80px] sm:w-[120px] md:w-[160px] lg:w-[200px] aspect-square overflow-hidden bg-gray-100 flex-shrink-0 rounded-lg md:rounded-2xl">
        <img
          src={img2}
          alt="Algorithm"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

export default ChasingConsumers;
