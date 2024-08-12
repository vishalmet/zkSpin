import React from "react";
import Navbar from "../components/Navbar";
import Shapes from "../assets/shapes.png";
import Game1 from "../assets/game1.png";
import ZkTech from "../components/ZkTech";
import Games from "../components/Games";
import SpinPlayground from "../components/SpinPlayground";
import SpinIntelligence from "../components/SpinIntelligence";
import RoadMap from "../components/RoadMap";
import TeamUp from "../components/TeamUp";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" bg-black min-h-screen text-white epilogue">
      <Navbar />
      <div className="space-grotesk max-w-7xl mx-auto text-9xl font-medium uppercase pt-10 px-4 sm:px-6 lg:px-8">
        <p className="  ">Infinitely</p>
        <div className=" flex items-center">
          <img className="w-[240px] h-[84px] mr-10" src={Shapes} alt="shapes" />
          <p>scalable</p>
        </div>
        <p>
          on-chain game <br /> engine
        </p>
      </div>

      <div className=" pt-20 flex">
        <img className="h-[280px] w-[800px]" src={Game1} alt="" />
        <div className="  mx-auto">
          <p className=" text-[28px] font-medium">
            Unlimited TPS  •  Gasless  •  Ultra-low Latency
          </p>
          <div className=" flex justify-center pt-6">
          <button className="flex items-center text-[20px] font-semibold bg-gradient-to-br from-customStart to-customEnd hover:bg-gradient-to-tl hover:scale-95 p-3">
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
          </button>
          </div>
        </div>
      </div>

      <ZkTech />
      <Games />
      <SpinPlayground />
      <SpinIntelligence />
      <RoadMap />
      <TeamUp />
      <Footer />
    </div>
  );
};

export default Home;
