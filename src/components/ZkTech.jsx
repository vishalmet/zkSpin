import React from "react";
import FlowWebP from "../assets/flow.webp";
import FlowFallback from "../assets/flow.png"; // Fallback PNG if necessary

const ZkTech = () => {
  return (
    <div className="bg-gradient-to-br from-customStart to-customEnd mt-10 md:mt-20 h-full p-4 pb-8 md:p-24 text-white">
      <div className="">
        <div className="flex-row md:flex md:space-x-32">
          <p className="uppercase text-4xl md:text-5xl lg:text-7xl font-medium space-grotesk">
            the zkspin <br /> technology
          </p>

          {/* Mobile section */}
          <div className="block md:hidden bg-black p-3 md:p-10 md:px-16 mt-6 md:mt-16 text-center">
            <p className="uppercase text-2xl md:text-5xl font-semibold bg-gradient-to-br from-customStart to-customEnd bg-clip-text text-transparent">
              Ephemeral ZK-Rollup
            </p>
            <p className="pb-6 text-sm">
              The parent chain processes player identity, financial and
              achievement data.
            </p>
            <picture>
              <source srcSet={FlowWebP} type="image/webp" />
              <source srcSet={FlowFallback} type="image/png" />
              <img
                loading="lazy"
                src={FlowWebP}
                alt="Ephemeral ZK-Rollup"
                className="w-full h-auto object-cover"
              />
            </picture>
          </div>

          {/* Main content */}
          <div className="px-1 pt-3 md:pt-0 md:px-10">
            <p className="text-xs md:text-2xl">
              As the first project to propose verifiable gaming in August 2023,
              zkSpin leverages computing technologies developed at MIT and
              Berkeley to deliver the ultimate immersive on-chain gaming
              experience. This transforms gaming into what it ought to be: fun,
              social, open, and uplifting. To make it easier for the game
              developer community to try out this new technology, we make
              developer experience the top priority in our long-term roadmap.
            </p>
            <div className="pt-6 flex-row md:flex space-y-8 md:space-y-0 md:space-x-6">
              <div>
                <a className="hover:cursor-pointer p-4 bg-black text-sm md:text-base hover:bg-gray-700 hover:scale-95 font-semibold">
                  LITE PAPER (COMING SOON)
                </a>
              </div>
              <div>
                <a
                  href="https://drive.google.com/file/d/1NdPbXSThKu9E3xF-4KHMAUOcZG_mp35s/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:cursor-pointer p-4 bg-black text-sm md:text-base hover:bg-gray-700 hover:scale-95 font-semibold"
                >
                  ZKP PRIMER
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop section */}
        <div className="hidden md:block bg-black p-3 md:p-10 md:px-16 mt-6 md:mt-16 text-center">
          <p className="uppercase text-2xl md:text-5xl font-semibold bg-gradient-to-br from-customStart to-customEnd bg-clip-text text-transparent">
            Ephemeral ZK-Rollup
          </p>
          <p className="pb-6">
            The parent chain processes player identity, financial and
            achievement data.
          </p>
          <picture>
            <source srcSet={FlowWebP} type="image/webp" />
            <source srcSet={FlowFallback} type="image/png" />
            <img
              src={FlowWebP}
              alt="Ephemeral ZK-Rollup"
              className="w-full h-auto object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ZkTech;
