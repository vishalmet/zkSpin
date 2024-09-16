import React from "react";
import SpinIntel from "../assets/spinintelligence1.png";

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
        <div className=" space-y-2 pt-4 md:pt-0 px-4 md:px-0 md:space-y-10">
          <p className="text-4xl text-center md:text-start md:text-5xl lg:text-7xl bg-gradient-to-br from-customStart to-customEnd bg-clip-text text-transparent uppercase space-grotesk font-medium ">
            spin <br /> <span classname="">intelligence</span> 
          </p>
          <p className="">
            On-chain gaming activities are professionally indexed and analyzed,
            with actionable insights accessible via a Web2 API.
          </p>
          <div className="flex justify-start ">
            <button className="uppercase flex items-center cursor-pointer text-base md:text-xl font-semibold bg-gradient-to-br from-customStart to-customEnd hover:bg-gradient-to-tl hover:scale-95 p-3 px-5">
              coming soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinIntelligence;
