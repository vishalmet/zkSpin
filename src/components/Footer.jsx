import React from "react";
import Logo2 from "../assets/logowhite.png";
import Discord from "../assets/icons/Discord.png";
import Telegram from "../assets/icons/Telegram.png";
import Twitter from "../assets/icons/Twitter.png";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top after navigation
  };

  return (
    <div className="bg-gradient-to-br from-customStart to-customEnd h-full mt-24 p-3">
      <div className="mx-4 md:mx-20 flex justify-between items-center">
        <div className="">
          <img className="w-[115px] h-[30px]" src={Logo2} alt="logo" />
        </div>

              <div className="flex gap-3">
                <a href="https://discord.com/invite/K7cKbUtzPq" target="_blank" rel="noopener noreferrer">
                  <img className="h-[24px] w-[24px]" src={Discord} alt="discord" />
                </a>
                <a href="https://t.me/addlist/NfReKsoSnXE5NzAx" target="_blank" rel="noopener noreferrer">
                  <img className="h-[24px] w-[24px]" src={Telegram} alt="telegram" />
                </a>
                <a
                  href="https://x.com/zkspin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="h-[24px] w-[24px]" src={Twitter} alt="twitter" />
                </a>
              </div>
        </div>
      </div>
  );
};

export default Footer;
