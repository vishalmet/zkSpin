import React from "react";
import SpinIntel from "../assets/spinintelligence.png";

const SpinIntelligence = () => {
  return (
    <div className="md:mx-20 pt-10 md:pt-24 text-white">
      <div className=" md:flex items-center">
        <img
          className="flex md:h-[700px] md:w-[820px] transition-transform duration-500 transform hover:scale-90 hover:border-2 hover:border-white hover:shadow-white hover:shadow-2xl hover:rotate-6"
          src={SpinIntel}
          alt="spin intelligence"
        />
        <div className="md:mx-32 space-y-2 mx-4 pt-4 md:pt-0 md:space-y-6">
          <p className="text-4xl text-center md:text-start md:text-5xl lg:text-7xl  uppercase space-grotesk font-medium bg-gradient-to-br from-customStart to-customEnd bg-clip-text text-transparent">
            spin intelligence
          </p>
          <p className="">
            On-chain gaming activities are professionally indexed and analyzed,
            with actionable insights accessible via a Web2 API.
          </p>
          <div className="flex justify-start ">
            <button className=" text-black font-semibold hover:scale-95 bg-white uppercase p-2 md:p-4 hover:bg-slate-200">
              coming soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinIntelligence;
