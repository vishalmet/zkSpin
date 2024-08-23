import React from "react";

import CSX from "../assets/partner/csx.jpg";
import Rings from "../assets/partner/rings.jpg";
import Doc from "../assets/partner/doc.jpg";
import BGA from "../assets/partner/bga.jpg";
import ABGA from "../assets/partner/abga.jpg";
import Certik from "../assets/partner/certik.jpg";
import Delphinus from "../assets/partner/delphinuslabs.jpg";
import CircleTri from "../assets/partner/circletri.jpg";
import Neural from "../assets/partner/neural.jpg";
import Artela from "../assets/partner/artela.jpg";

const TeamUp = () => {
  return (
    <div className="mx-4 md:mx-20 pt-10 md:pt-24">
      <p className="text-4xl md:text-5xl lg:text-7xl uppercase space-grotesk text-center font-medium bg-gradient-to-b from-customStart to-customEnd bg-clip-text text-transparent">
        TEAMED UP WITH <br /> THE BEST
      </p>
      <div className=" bg-gradient-to-tl from-customStart to-customEnd mt-10 md:mt-20 h-full p-4 md:p-16 items-center">
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          <img className=" h-8 md:h-16 flex justify-center mx-auto hover:scale-105" src={CSX} alt="near foundations" />
          <img className=" h-8 md:h-16 flex justify-center mx-auto hover:scale-105" src={Rings} alt="daomaker" />
          <img className=" h-8 md:h-16 flex justify-center mx-auto hover:scale-105" src={Doc} alt="ldcapital" />
          <img className=" h-8 md:h-16 flex justify-center mx-auto hover:scale-105" src={BGA} alt="binatar" />
          <img className=" h-8 md:h-16 flex justify-center mx-auto hover:scale-105" src={ABGA} alt="coinunited" />
          <img className=" h-8 md:h-16 flex justify-center mx-auto hover:scale-105" src={Certik} alt="snapfingers" />
          <img className=" h-8 md:h-16 flex justify-center mx-auto hover:scale-105" src={Delphinus} alt="3commas" />
          <img className=" h-8 md:h-16 flex justify-center mx-auto hover:scale-105" src={CircleTri} alt="mexc" />
          <img className=" h-8 md:h-16 flex justify-center mx-auto hover:scale-105" src={Neural} alt="mexc" />
          <img className=" h-8 md:h-16 flex justify-center mx-auto hover:scale-105" src={Artela} alt="mexc" />
        </div>
      </div>
    </div>
  );
};

export default TeamUp;
