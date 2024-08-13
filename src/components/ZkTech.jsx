import React from "react";
import Flow from "../assets/flow.png"

const ZkTech = () => {
  return (
    <div className=" bg-gradient-to-br from-customStart to-customEnd mx-4 md:mx-20 mt-10 md:mt-20 h-full p-4 md:p-16 text-white">
      <div className=" md:flex md:space-x-32 pt-4 md:pt-10">
        <p className=" uppercase text-4xl md:text-5xl lg:text-7xl font-medium space-grotesk">
          the zkspin <br /> technology
        </p>
        <div className=" px-1 pt-2 md:pt-0 md:px-10">
          <p className=" text-xs md:text-2xl">
            As the first project to proposed verifiable gaming in August, 2023,
            zkSpin leverages computing technologies developed at MIT and
            Berkeley to deliver the ultimate immersive on-chain gaming
            experience. This transforms gaming into what it ought to be: fun,
            social, open, and uplifting. To make it easier for the game
            developer community to try out this new technology, we make
            developer experience the top priority in our long term roadmap.
          </p>
          <div className=" pt-6 md:space-x-6">
            <button className=" p-2 md:p-4 bg-black text-base hover:bg-gray-700 hover:scale-95 font-semibold"> LIVE PAPER (COMING SOON)</button>
            <button className=" mt-2 md:mt-0 p-2 md:p-4 bg-black hover:bg-gray-700 hover:scale-95 font-semibold"> ZKP PRIMER</button>
          </div>
        </div>
      </div>
      <div className=" pt-4 md:pt-16">
        <img src={Flow} alt="" />
      </div>
    </div>
  );
};

export default ZkTech;
