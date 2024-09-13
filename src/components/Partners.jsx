import React from "react";

import CSX from "../assets/partner/csx.png";
import Scroll from "../assets/partner/scroll.png";
import ABGA from "../assets/partner/abga.png";
import Certik from "../assets/partner/certik.png";
import Cysic from "../assets/partner/cysic.png";
import Koyamaki from "../assets/partner/koyamaki.png";
import BGA from "../assets/partner/bga.png";
import Delphinus from "../assets/partner/delphinuslab.png";
import Lita from "../assets/partner/lita.png";

const Partners = () => {
  return (
    <div className="mx-4 md:mx-20 pt-10 md:pt-24">
      <p className="text-4xl md:text-5xl lg:text-7xl uppercase space-grotesk text-center font-medium bg-gradient-to-b from-customStart to-customEnd bg-clip-text text-transparent">
        TEAMED UP WITH <br /> THE BEST
      </p>
      <div className="hidden md:block h-full py-10 p-4 md:p-16 items-center">
        <div className=" grid grid-cols-2 md:grid-cols-4 mx-16 items-center">
          <a href="https://a16zcrypto.com/accelerator/" rel="noopener noreferrer" target="_blank">
            <img
              className="md:w-[150px] md:h-[60px] flex justify-center mx-auto hover:scale-105"
              src={CSX}
              alt="A16Z"
            />
          </a>
          <a href="https://scroll.io/" rel="noopener noreferrer" target="_blank">
            <img
              className=" md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
              src={Scroll}
              alt="SCROLL"
            />
          </a>
          <a href="https://www.abga.asia/" rel="noopener noreferrer" target="_blank">
            <img
              className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
              src={ABGA}
              alt="ABGA"
            />
          </a>
          <a href="https://www.certik.com/" rel="noopener noreferrer" target="_blank">
            <img
              className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
              src={Certik}
              alt="CERTIK"
            />
          </a>
        </div>
        <div className=" md:flex justify-center space-x-6 items-center">
          <a href="https://cysic.xyz/" rel="noopener noreferrer" target="_blank">
            <img
              className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
              src={Cysic}
              alt="CYSIC"
            />
          </a>
          <a href="https://koyamaki.io/about.html" rel="noopener noreferrer" target="_blank">
            <img
              className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
              src={Koyamaki}
              alt="KOYAMAKI"
            />
          </a>
          <a href="https://delphinuslab.com/" rel="noopener noreferrer" target="_blank">
            <img
              className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
              src={Delphinus}
              alt="DELPHINUS"
            />
          </a>
          <a href="https://www.lita.foundation/" rel="noopener noreferrer" target="_blank">
            <img
              className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
              src={Lita}
              alt="LITA"
            />
          </a>
          <a href="https://www.blockchaingamealliance.org/" rel="noopener noreferrer" target="_blank">
            <img
              className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
              src={BGA}
              alt="BGA"
            />
          </a>
        </div>
      </div>


      {/* mobile */}
      <div className=" grid grid-cols-2 items-center md:hidden">
        <a href="https://a16zcrypto.com/accelerator/" rel="noopener noreferrer" target="_blank">
          <img
            className=" h-[50px] w-[127px] flex justify-center mx-auto hover:scale-105"
            src={CSX}
            alt="A16Z"
          />
        </a>
        <a href="https://scroll.io/" rel="noopener noreferrer" target="_blank">
          <img
            className=" h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
            src={Scroll}
            alt="SCROLL"
          />
        </a>
        <a href="https://www.abga.asia/" rel="noopener noreferrer" target="_blank">
          <img
            className=" h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
            src={ABGA}
            alt="ABGA"
          />
        </a>
        <a href="https://www.certik.com/" rel="noopener noreferrer" target="_blank">
          <img
            className="h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
            src={Certik}
            alt="CERTIK"
          />
        </a>
        <a href="https://cysic.xyz/" rel="noopener noreferrer" target="_blank">
          <img
            className=" h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
            src={Cysic}
            alt="CYSIC"
          />
        </a>
        <a href="https://koyamaki.io/about.html" rel="noopener noreferrer" target="_blank">
          <img
            className=" h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
            src={Koyamaki}
            alt="KOYAMAKI"
          />
        </a>
        <a href="https://delphinuslab.com/" rel="noopener noreferrer" target="_blank">
          <img
            className="h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
            src={Delphinus}
            alt="DELPHINUS"
          />
        </a>
        <a href="https://www.lita.foundation/" rel="noopener noreferrer" target="_blank">
          <img
            className="h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
            src={Lita}
            alt="LITA"
          />
        </a>
      </div>
      <a href="https://www.blockchaingamealliance.org/" rel="noopener noreferrer" target="_blank">
        <img
          className="h-[100px] md:hidden w-[167px] flex justify-center mx-auto hover:scale-105"
          src={BGA}
          alt="BGA"
        />
        </a>
    </div>
  );
};

export default Partners;
