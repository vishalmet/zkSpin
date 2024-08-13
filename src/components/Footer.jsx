import React from "react";
import Logo2 from "../assets/logowhite.png";
import Discord from "../assets/icons/Discord.png"
import Telegram from "../assets/icons/Telegram.png"
import Twitter from "../assets/icons/Twitter.png"

const Footer = () => {
  return (
    <div className=" bg-gradient-to-br from-customStart to-customEnd h-full mt-24">
      <div className="mx-4 md:mx-20 py-10 md:py-20 md:flex">
        <div className=" flex-1 pb-10 md:pb-0">
          <img className=" w-[155px] h-[40px]" src={Logo2} alt="" />
        </div>
        <div className="pt-2 space-y-4 md:space-y-0 md:flex md:space-x-32">
          <div className=" flex justify-center space-x-16 md:space-x-32">
          <div className="">
            <p className="font-semibold text-xl">SPIN</p>
            <ol>
              <ul href="">Tech</ul>
              <ul href="">Demo Games</ul>
              <ul href="">Playground</ul>
            </ol>
          </div>
          <div className="">
            <p className="font-semibold text-xl">RESOURCES</p>
            <ol>
              <ul href="">Github</ul>
              <ul href="">Docs</ul>
            </ol>
          </div>
          </div>
          <div className=" flex justify-center">
          <div className="">
            <p className="font-semibold text-xl">ABOUT</p>
            <div className=" flex gap-3">
                <img className=" h-[24px] w-[24px]" src={Discord} alt="" />
                <img className=" h-[24px] w-[24px]" src={Telegram} alt="" />
                <img className=" h-[24px] w-[24px]" src={Twitter} alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
