import React from "react";
import Flow from "../assets/flow.png"

const ZkTech = () => {
  return (
    <div className=" bg-gradient-to-br from-customStart to-customEnd mx-20 mt-20 h-full p-16 text-white">
      <div className=" flex space-x-32 pt-10">
        <p className=" uppercase text-7xl font-medium space-grotesk">
          the zkspin <br /> technology
        </p>
        <div className=" px-10">
          <p className=" text-2xl">
            As the first project to proposed verifiable gaming in August, 2023,
            zkSpin leverages computing technologies developed at MIT and
            Berkeley to deliver the ultimate immersive on-chain gaming
            experience. This transforms gaming into what it ought to be: fun,
            social, open, and uplifting. To make it easier for the game
            developer community to try out this new technology, we make
            developer experience the top priority in our long term roadmap.
          </p>
          <div className=" pt-6 space-x-6">
            <button className=" p-4 bg-black hover:bg-gray-700 font-semibold"> LIVE PAPER (COMING SOON)</button>
            <button className=" p-4 bg-black hover:bg-gray-700 font-semibold"> ZKP PRIMER</button>
          </div>
        </div>
      </div>
      <div className=" pt-16">
        <img src={Flow} alt="" />
      </div>
    </div>
  );
};

export default ZkTech;
