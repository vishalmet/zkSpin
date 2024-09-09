import React from "react";
import Flow from "../assets/flow.png";

const ZkTech = () => {
  return (
    <div className=" bg-gradient-to-br from-customStart to-customEnd mx-4 md:mx-20 mt-10 md:mt-20 h-full p-4 md:p-16 text-white">
      <div className=" ">
        <div className=" flex-row md:flex md:space-x-32 pt-4 md:pt-10">
          <p className=" uppercase text-4xl md:text-5xl lg:text-7xl font-medium space-grotesk">
            the zkspin <br /> technology
          </p>
          <div className="block md:hidden bg-black p-3 md:p-10 md:px-16 mt-6 md:mt-16 text-center">
            <p className="uppercase text-2xl md:text-5xl  font-semibold bg-gradient-to-br from-customStart to-customEnd bg-clip-text text-transparent">
              Ephemeral ZK-Rollup
            </p>
            <p className=" pb-6">
              The parent chain processes player identity, financial and
              achievement data.
            </p>
            <img src={Flow} alt="" />
          </div>
          <div className=" px-1 pt-3 md:pt-0 md:px-10">
            <p className=" text-xs md:text-2xl">
              As the first project to proposed verifiable gaming in August,
              2023, zkSpin leverages computing technologies developed at MIT and
              Berkeley to deliver the ultimate immersive on-chain gaming
              experience. This transforms gaming into what it ought to be: fun,
              social, open, and uplifting. To make it easier for the game
              developer community to try out this new technology, we make
              developer experience the top priority in our long term roadmap.
            </p>
            <div className=" pt-6 flex-row md:flex space-y-4 md:space-y-0 md:space-x-6">
              <div className="">
                <a className="hover:cursor-pointer p-2 md:p-4 bg-black text-base hover:bg-gray-700 hover:scale-95 font-semibold">
                  LITE PAPER (COMING SOON)
                </a>
              </div>
              <div className="">
                <a
                  href="https://drive.google.com/file/d/1NdPbXSThKu9E3xF-4KHMAUOcZG_mp35s/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:cursor-pointer p-2 md:p-4 bg-black hover:bg-gray-700 hover:scale-95 font-semibold"
                >
                  ZKP PRIMER
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block bg-black p-3 md:p-10 md:px-16 mt-6 md:mt-16 text-center">
          <p className="uppercase text-2xl md:text-5xl  font-semibold bg-gradient-to-br from-customStart to-customEnd bg-clip-text text-transparent">
            Ephemeral ZK-Rollup
          </p>
          <p className=" pb-6">
            The parent chain processes player identity, financial and
            achievement data.
          </p>
          <img src={Flow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ZkTech;
