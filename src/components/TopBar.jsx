import React from "react";

const TopBar = () => {
  return (
    <div className="w-full flex justify-center px-4 mt-3 mb-3 h-[50px]">
      <div
        className="group relative w-full max-w-[1600px] 
                   bg-[#C7F2E3] rounded-full 
                   py-2 px-6 
                   overflow-hidden cursor-pointer"
      >
        <div className="relative h-5 flex items-center justify-center overflow-hidden">
          {/* DEFAULT TEXT */}
          <div
            className="absolute flex items-center gap-2 
                       transition-transform duration-300 
                       group-hover:-translate-y-full"
          >
            <span>🚨</span>
            <span className="font-medium text-[14px]">
              Where are your customers actually searching?
            </span>
            <span className=" font-medium">Download the report</span>
          </div>

          {/* HOVER TEXT */}
          <div
            className="absolute flex items-center gap-2 
                       translate-y-full 
                       transition-transform duration-300 
                       group-hover:translate-y-0"
          >
            <span>🚨</span>
            <span className="font-medium text-[14px]">
              Where are your customers actually searching?
            </span>
            <span className="underline underline-offset-4 font-medium">
              Download the report
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
