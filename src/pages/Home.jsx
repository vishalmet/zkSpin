import React from "react";
import Shapes from "../assets/shapes.png";
import Game1 from "../assets/game1.png";
import LandingRight from "../assets/landing-r.png"
import ZkTech from "../components/ZkTech";
import SpinIntelligence from "../components/SpinIntelligence";
import RoadMap from "../components/RoadMap";
import Footer from "../components/Footer";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <div className="bg-[#141414] text-white epilogue">
      <div className="gradient-container overflow-x-hidden min-h-full pb-4 md:pb-0 md:min-h-screen space-grotesk text-3xl md:text-5xl lg:text-9xl font-medium uppercase">
        <div className=" pt-24 md:pt-32 ml-4 md:ml-[72px] flex justify-between items-center">
          <div className="">
          <p className="  ">Infinitely</p>
          <div className=" flex items-center">
            <img
              className="w-[100px] md:w-[260px] md:h-[84px] mr-4 md:mr-10"
              src={Shapes}
              alt="shapes"
            />
            <p>scalable</p>
          </div>
          <p>
            on-chain game <br /> engine
          </p>
          </div>
          <div className=" ">
            <img className=" h-[160px] md:h-[520px] w-[100px] md:w-[200px]" src={LandingRight} alt="Game" />
          </div>
        </div>

        <div className=" pt-10 md:pt-20 md:flex">
          <img
            className="h-[130px] md:h-[280px] w-full md:w-[800px]"
            src={Game1}
            alt=""
          />
          <div className="  mx-auto">
            <p className=" pt-4 md:pt-0 text-xl mx-4 flex justify-center md:mx-0 md:text-[28px] font-medium">
              Unlimited TPS  •  Gasless  •  Ultra-low Latency
            </p>
            <div className=" flex justify-center pt-3 md:pt-6">
              <a
                href="https://github.com/m4-team/spin-sdk/blob/main/guide/2_INTRODUCTION.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center cursor-pointer text-base md:text-2xl font-semibold bg-gradient-to-br from-customStart to-customEnd hover:bg-gradient-to-tl hover:scale-95 p-3 px-5"
              >
                GET STARTED
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <ZkTech />
      <SpinIntelligence />
      <RoadMap />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
