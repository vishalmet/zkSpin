import React from "react";
import Logo2 from "../assets/logowhite.png";
import Discord from "../assets/icons/Discord.png";
import Telegram from "../assets/icons/Telegram.png";
import Twitter from "../assets/icons/Twitter.png";
import { Link } from "react-router-dom";

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
                <Link to="/">Tech</Link> <br />
                <Link to="/games">Demo Games</Link> <br />
                <Link to="/playground">Playground</Link>
              </ol>
            </div>
            <div className="">
              <p className="font-semibold text-xl">RESOURCES</p>
              <ol>
                <a
                  href="https://github.com/m4-team/spin-sdk/blob/main/guide/2_INTRODUCTION.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  Docs
                </a>
              </ol>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="">
              <p className="font-semibold text-xl">ABOUT</p>
              <div className=" flex gap-3">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    className=" h-[24px] w-[24px]"
                    src={Discord}
                    alt="discord"
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    className=" h-[24px] w-[24px] "
                    src={Telegram}
                    alt="telegram"
                  />
                </a>
                <a
                  href="https://x.com/zkspin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className=" h-[24px] w-[24px]"
                    src={Twitter}
                    alt="twitter"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
