import React from "react";

const TopBar = () => {
  return (
    <div className="w-full flex justify-center px-3 sm:px-4 mt-3 mb-3 h-[44px] sm:h-[50px]">
      <div
        className="group relative w-full max-w-[1600px] 
                   bg-[#C7F2E3] rounded-full 
                   py-2 px-3 sm:px-6
                   overflow-hidden cursor-pointer"
      >
        <div className="relative h-5 flex items-center justify-center overflow-hidden">
          {/* DEFAULT TEXT */}
          <div
            className="absolute flex items-center justify-center gap-1 sm:gap-2
                       transition-transform duration-300 
                       group-hover:-translate-y-full
                       w-full px-2"
          >
            <span className="text-[12px] sm:text-base">🚨</span>

            <span
              className="font-medium 
                         text-[11px] xs:text-[12px] sm:text-[14px]
                         whitespace-nowrap"
            >
              The Category Leaderboard- Live Now
            </span>

            <span
              className="font-medium 
                         text-[11px] xs:text-[12px] sm:text-[14px]
                         whitespace-nowrap hidden xs:block"
            >
              Download the report
            </span>
          </div>

          {/* HOVER TEXT */}
          <div
            className="absolute flex items-center justify-center gap-1 sm:gap-2
                       translate-y-full 
                       transition-transform duration-300 
                       group-hover:translate-y-0
                       w-full px-2"
          >
            <span className="text-[12px] sm:text-base">🚨</span>

            <span
              className="font-medium 
                         text-[11px] xs:text-[12px] sm:text-[14px]
                         whitespace-nowrap"
            >
              The Category Leaderboard- Live Now
            </span>

            <span
              className="underline underline-offset-4 font-medium
                         text-[11px] xs:text-[12px] sm:text-[14px]
                         whitespace-nowrap hidden xs:block"
            >
              Download the report
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
