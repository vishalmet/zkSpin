import React from "react";
import Roadmap from "../assets/roadmap.png";
import Timeline from "../assets/timeline.png";

const RoadMap = () => {
  return (
    <div className=" p-4 md:p-[50px] lg:p-[72px] text-white">
      <p className="text-4xl md:text-5xl lg:text-7xl uppercase space-grotesk text-center font-medium bg-gradient-to-b from-customStart to-customEnd bg-clip-text text-transparent">
        roadmap
      </p>
      <img className="hidden lg:flex pt-6 md:pt-16" src={Roadmap} alt="" />
      <div className=" lg:hidden">
        <div className="">
          <p className="pl-16 pt-10 relative">Q2 2024</p>
          <img className=" " src={Timeline} alt="" />
          <div className="pl-16">
            <li>Single Player SDK</li>
            <li>Demo Game</li>
            <li>Community Building</li>
            <li>Spin Score</li>
          </div>
        </div>
        <div className="">
          <p className="pl-16 pt-10 relative">Q3 2024</p>
          <img className=" " src={Timeline} alt="" />
          <div className="pl-16">
            <li>Multiplayer SDK</li>
            <li>Demo Game</li>
            <li>Spin Playground</li>
            <li>Spin Fast Prover Network</li>
          </div>
        </div>
        <div className="">
          <p className="pl-16 pt-10 relative">Q4 2024</p>
          <img className=" " src={Timeline} alt="" />
          <div className="pl-16">
            <li>MMOG Demo Game</li>
            <li>Spin Hack Net</li>
          </div>
        </div>
        <div className="">
          <p className="pl-16 pt-10 relative">Q1 2025</p>
          <img className=" " src={Timeline} alt="" />
          <div className="pl-16">
            <li>TGE and Listing</li>
            <li>Community Rewards</li>
            <li>Grant Program</li>
          </div>
        </div>
        <div className="">
          <p className="pl-16 pt-10 relative">Q2 2025</p>
          <img className=" " src={Timeline} alt="" />
          <div className="pl-16">
            <li>AAA Partnership</li>
            <li>AI Integration</li>
            <li>Spin Intelligence</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
