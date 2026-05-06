// // import React, { useState } from "react";

// // const Hero = () => {
// //   const [bgImage, setBgImage] = useState("/src/assets/images/hero-bg.jpg");

// //   return (
// //     <div
// //       className="relative h-screen flex items-center justify-center text-white text-center max-w-[1600px] rounded-2xl mx-auto"
// //       style={{
// //         backgroundImage: `url(${bgImage})`,
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //       }}
// //     >
// //       {/* OVERLAY */}
// //       <div className="absolute inset-0 bg-black/40"></div>

// //       {/* CONTENT */}
// //       <div className="relative z-10 px-4">
// //         <h1 className="text-5xl md:text-8xl font-bold leading-tight">
// //           We Create <br />
// //           Category{" "}
// //           <span
// //             onMouseEnter={() => setBgImage("/src/assets/images/hover1.jpg")}
// //             onMouseLeave={() => setBgImage("/src/assets/images/hero-bg.jpg")}
// //             className="inline-block cursor-pointer"
// //           >
// //             Leaders
// //           </span>
// //         </h1>

// //         <p className="mt-4 text-lg opacity-80">on every searchable platform</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;

// import React, { useMemo } from "react";

// const Hero = () => {
//   // 🔥 5 images (add your real assets here)
//   const images = useMemo(
//     () => [
//       "/src/assets/images/hero1.jpg",
//       "/src/assets/images/hero2.jpg",
//       "/src/assets/images/hero3.jpg",
//       "/src/assets/images/hero4.jpg",
//       "/src/assets/images/hero5.jpg",
//     ],
//     [],
//   );

//   // 🔥 pick random image on each refresh
//   const randomImage = useMemo(() => {
//     const index = Math.floor(Math.random() * images.length);
//     return images[index];
//   }, [images]);

//   return (
//     <div className="relative h-screen flex items-center justify-center text-white text-center max-w-[1600px] rounded-2xl mx-auto">
//       {/* 🔹 Blurred Background */}
//       <img
//         src={randomImage}
//         alt="background"
//         className="absolute inset-0 w-full h-full object-cover blur-2xl scale-90"
//       />

//       {/* dark overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* 🔹 LEFT BOTTOM TEXT */}
//       <div className="absolute bottom-8 left-8 max-w-[320px] text-white text-sm opacity-30 leading-relaxed">
//         Organic media planners creating, distributing & optimising <br />
//         search-first content for SEO, Social, PR, Ai and LLM search
//       </div>

//       {/* 🔹 RIGHT BOTTOM TEXT */}
//       <div className="absolute bottom-8 right-8 max-w-[220px] text-white text-sm opacity-80 text-right leading-relaxed">
//         4 Global Offices serving <br />
//         UK, USA (New York) & EU
//       </div>
//       {/* common image at center */}
//       <div>
//         <img
//           src="/src/assets/images/commonImage.png"
//           alt="center"
//           className="w-[420px] h-[320px] md:w-[150px] md:h-[150px] object-cover rounded-full border-4 border-white/30 shadow-lg"
//         />
//       </div>
//       {/* We Create*/}
//       <div className="relative flex items-center gap-6 text-white">
//         <h1 className="text-5xl md:text-7xl font-bold">We Create</h1>
//         <br />
//       </div>

//       {/* 🔥 MAIN HERO CONTENT */}
//       <div className="relative z-10 flex items-center gap-6 text-white">
//         {/* CATEGORY */}
//         <h1 className="text-5xl md:text-7xl font-bold">Category</h1>

//         {/* 🔳 CENTER IMAGE BOX */}
//         <div
//           className="w-[180px] h-[180px] md:w-[220px] md:h-[220px]
//                         rounded-2xl overflow-hidden shadow-2xl border border-white/20"
//         >
//           <img
//             src={randomImage}
//             alt="hero box"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* LEADERS */}
//         <h1 className="text-5xl md:text-7xl font-bold">Leaders</h1>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useMemo } from "react";

const Hero = () => {
  // 🔥 5 images (add your real assets here)
  const images = useMemo(
    () => [
      "/hero1.jpg",
      "/hero2.jpg",
      "/hero3.jpg",
      "/hero4.jpg",
      "/hero5.jpg",
    ],
    [],
  );

  // 🔥 pick random image on each refresh
  const randomImage = useMemo(() => {
    const index = Math.floor(Math.random() * images.length);
    return images[index];
  }, [images]);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-white text-center max-w-[1600px] rounded-3xl mx-auto overflow-hidden">
      {/* 🔹 Background Layer */}
      <img
        src={randomImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 -z-20"
      />
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* 🔹 TOP: Common Award Image */}
      <div className="mb-8">
        <img
          src="/src/assets/images/commonImage.png"
          alt="awards"
          className="w-[300px] md:w-[450px] object-contain"
        />
      </div>

      {/* 🔹 CENTER: MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Row 1: We Create */}
        <h1 className="text-5xl md:text-8xl font-bold  tracking-tight">
          We Create
        </h1>

        {/* Row 2: Category [Image] Leaders */}
        <div className="flex items-center gap-4 md:gap-8">
          <h1 className="text-5xl md:text-8xl font-bold  tracking-tight">
            Category
          </h1>

          {/* 🔳 CENTER IMAGE BOX */}
          <div className="w-[60px] h-[60px] md:w-[140px] md:h-[140px] rounded-[2rem] overflow-hidden border-2 border-white/30 shadow-2xl">
            <img
              src={randomImage}
              alt="hero box"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-8xl font-extrabold  tracking-tight">
            Leaders
          </h1>
        </div>

        {/*Row 3*/}
        <div>
          <h1 className="text-2xl md:text-4xl   tracking-tight">
            on every searchable platform
          </h1>
        </div>
      </div>

      {/* 🔹 BOTTOM LEFT TEXT */}
      <div className="absolute bottom-12 left-12 max-w-[500px] text-white text-lg md:text-xl  text-left leading-tight">
        Organic media planners creating, distributing & optimising search-first
        content for SEO & AI.
      </div>

      {/* 🔹 BOTTOM RIGHT TEXT */}
      <div className="absolute bottom-12 right-12 max-w-[300px] text-white text-lg md:text-xl  text-right leading-tight">
        4 Global Offices serving <br />
        UK, USA (New York) & EU
      </div>
    </div>
  );
};

export default Hero;
