import React from "react";

import CSX from "../assets/partners/csx.png";
import Rings from "../assets/partners/rings.png";
import Doc from "../assets/partners/scroll.png";
import BGA from "../assets/partners/bga.png";
import ABGA from "../assets/partners/abga.png";
import Certik from "../assets/partners/certik.png";
import Delphinus from "../assets/partners/delphinuslab.png";
import CircleTri from "../assets/partners/circletri.png";
import Neural from "../assets/partners/neural.png";
import Artela from "../assets/partners/artela.png";

const Partners = () => {
  return (
    <div className="mx-4 md:mx-20 pt-10 md:pt-24">
      <p className="text-4xl md:text-5xl lg:text-7xl uppercase space-grotesk text-center font-medium bg-gradient-to-b from-customStart to-customEnd bg-clip-text text-transparent">
        TEAMED UP WITH <br /> THE BEST
      </p>
      <div className=" h-full py-10 p-4 md:p-16 items-center">
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          <img className=" h-10 md:h-16 flex justify-center mx-auto hover:scale-105" src={CSX} alt="CSX" />
          <img className=" h-12 md:h-16 flex justify-center mx-auto hover:scale-105" src={Rings} alt="RINGS" />
          <img className=" h-16 md:h-20 flex justify-center mx-auto hover:scale-105" src={Doc} alt="SCROLL" />
          <img className=" h-16 md:h-20 flex justify-center mx-auto hover:scale-105" src={BGA} alt="BGA" />
          <img className=" h-6 md:h-12 flex justify-center mx-auto hover:scale-105" src={ABGA} alt="ABGA" />
          <img className=" h-12 md:h-16 flex justify-center mx-auto hover:scale-105" src={Certik} alt="CERTIK" />
          <img className=" h-10 md:h-14 flex justify-center mx-auto hover:scale-105" src={Delphinus} alt="DELPHINUS" />
          <img className=" h-12 md:h-16 flex justify-center mx-auto hover:scale-105" src={CircleTri} alt="CIRCLETRI" />
          <img className=" h-12 md:h-16 flex justify-center mx-auto hover:scale-105" src={Neural} alt="NEURAL" />
          <img className=" h-6 md:h-12 flex justify-center mx-auto hover:scale-105" src={Artela} alt="ARTELA" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
