import React from "react";
import SpinIntel from "../assets/spinintelligence1.png";
import Arrow from "../assets/Arrow.png"


const SpinIntelligence = () => {
  return (
    <div className="p-4 md:p-[50px] lg:p-[72px] text-white">
      <div className=" md:grid md:grid-cols-2 items-center md:space-x-24">
        <div className=" md:w-[670px] overflow-hidden">
        <img
          className="flex md:h-[600px] md:w-full"
          src={SpinIntel}
          alt="spin intelligence"
        />
        </div>
        <div className=" space-y-2 pt-4 md:pt-0 md:space-y-8">
          <div className="">
          <p className="text-4xl md:text-start md:text-5xl lg:text-7xl bg-gradient-to-br from-[#63D0FF] to-[#DC81FF] bg-clip-text text-transparent uppercase space-grotesk font-medium ">
            spin <br className=" hidden lg:flex" /> <span classname="">intelligence</span> 
          </p>
          </div>
          <p className="text-base md:text-xl lg:text-2xl font-extralight sfpro ">
            On-chain gaming activities are professionally indexed and analyzed,
            with actionable insights accessible via a Web2 API.
          </p>
          <div className=" flex pt-3 font-extralight sfpro md:pt-6">
              <a
                href="https://github.com/m4-team/spin-sdk/blob/main/guide/2_INTRODUCTION.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center cursor-pointer md:text-lg font-semibold bg-gradient-to-br from-customStart to-customEnd hover:bg-gradient-to-tl hover:scale-95 p-3 lg:p-4 w-52"
              >
                COMING SOON 
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SpinIntelligence;
