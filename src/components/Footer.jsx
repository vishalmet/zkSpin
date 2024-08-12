import React from "react";
import Logo2 from "../assets/logowhite.png";
import Discord from "../assets/icons/Discord.png"
import Telegram from "../assets/icons/Telegram.png"
import Twitter from "../assets/icons/Twitter.png"

const Footer = () => {
  return (
    <div className=" bg-gradient-to-br from-customStart to-customEnd h-[337px] mt-24">
      <div className="mx-20 py-20 flex">
        <div className=" flex-1">
          <img className=" w-[155px] h-[40px]" src={Logo2} alt="" />
        </div>
        <div className="pt-2 flex space-x-32">
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
  );
};

export default Footer;
