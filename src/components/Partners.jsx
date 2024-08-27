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
          <img
            className="md:w-[150px] md:h-[60px] flex justify-center mx-auto hover:scale-105"
            src={CSX}
            alt="A16Z"
          />
          <img
            className=" md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
            src={Scroll}
            alt="SCROLL"
          />
          <img
            className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
            src={ABGA}
            alt="ABGA"
          />
          <img
            className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
            src={Certik}
            alt="CERTIK"
          />
        </div>
        <div className=" md:flex justify-center space-x-6 items-center">
          <img
            className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
            src={Cysic}
            alt="CYSIC"
          />
          <img
            className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
            src={Koyamaki}
            alt="KOYAMAKI"
          />
          <img
            className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
            src={Delphinus}
            alt="DELPHINUS"
          />
          <img
            className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
            src={Lita}
            alt="LITA"
          />
          <img
            className="md:w-[240px] md:h-[110px] flex justify-center mx-auto hover:scale-105"
            src={BGA}
            alt="BGA"
          />
        </div>
      </div>
      {/* mobile */}
      <div className=" grid grid-cols-2 items-center md:hidden">
        <img
          className=" h-[50px] w-[127px] flex justify-center mx-auto hover:scale-105"
          src={CSX}
          alt="A16Z"
        />
        <img
          className=" h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
          src={Scroll}
          alt="SCROLL"
        />
        <img
          className=" h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
          src={ABGA}
          alt="ABGA"
        />
        <img
          className="h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
          src={Certik}
          alt="CERTIK"
        />
        <img
          className=" h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
          src={Cysic}
          alt="CYSIC"
        />
        <img
          className=" h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
          src={Koyamaki}
          alt="KOYAMAKI"
        />
        <img
          className="h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
          src={Delphinus}
          alt="DELPHINUS"
        />
        <img
          className="h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
          src={Lita}
          alt="LITA"
        />
      </div>
        <img
          className="h-[100px] w-[167px] flex justify-center mx-auto hover:scale-105"
          src={BGA}
          alt="BGA"
        />
    </div>
  );
};

export default Partners;
