import React from "react";

import CSX from "../assets/partners/csx.png";
import Rings from "../assets/partners/rings.png";
import Doc from "../assets/partners/doc.png";
import BGA from "../assets/partners/bga.png";
import ABGA from "../assets/partners/abga.png";
import Certik from "../assets/partners/certik.png";
import Delphinus from "../assets/partners/delphinuslabs.png";
import CircleTri from "../assets/partners/circletri.png";
import Neural from "../assets/partners/neural.png";
import Artela from "../assets/partners/artela.png";

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
