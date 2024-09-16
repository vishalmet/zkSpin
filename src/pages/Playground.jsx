import React from "react";
import Game2 from "../assets/game2.png";
import Game3 from "../assets/game3.png";
import Game4 from "../assets/game4.png";
import Footer from "../components/Footer";

const SpinPlayground = () => {
  return (
    <div className="gradient-container overflow-x-hidden min-h-screen text-white epilogue">
      <div className=" pt-8 mx-4 md:mx-20">
        <p className=" text-4xl md:text-5xl lg:text-7xl space-grotesk text-center font-medium bg-gradient-to-b from-[#63D0FF] to-[#DC81FF] bg-clip-text text-transparent">
          PLAYGROUND
        </p>
        <p className=" text-center">Super Lightweight Retro Spin Games 🚀</p>
        <div className=" pt-10 md:grid md:grid-cols-3">
          <a href="https://www.catsvsdogs.xyz/" target="_blank" className=" cursor-pointer">
            <img
              className=" h-[350px] transition-transform duration-500 transform hover:scale-90 hover:border-2 hover:border-white hover:shadow-white hover:shadow-2xl hover:rotate-6 w-full md:h-[463px] md:w-[426px]"
              src={Game2}
              alt="cats vs. dogs"
            />
            <p className=" text-2xl md:text-4xl font-medium pt-3 md:pt-6">
              Cats vs. Dogs
            </p>
            <p className="text-base">
              Collect and breed digital cats with CryptoKitties, the world’s
              most successful blockchain game.
            </p>
          </a>
          <div className="pt-6 md:pt-0">
            <img
              className=" h-[400px] transition-transform duration-500 transform hover:scale-90 hover:border-2 hover:border-white hover:shadow-white hover:shadow-2xl hover:rotate-6 w-full md:h-[600px] md:w-[426px]"
              src={Game3}
              alt="cats vs. dogs"
            />
            <p className=" text-2xl md:text-4xl font-medium pt-3 md:pt-6">
              Cats vs. Dogs
            </p>
            <p className="text-base">
              Collect and breed digital cats with CryptoKitties, the world’s
              most successful blockchain game.
            </p>
          </div>
          <div className=" pt-6 md:pt-0">
            <img
              className=" h-[350px] transition-transform duration-500 transform hover:scale-90 hover:border-2 hover:border-white hover:shadow-white hover:shadow-2xl hover:rotate-6 w-full md:h-[463px] md:w-[426px]"
              src={Game4}
              alt="cats vs. dogs"
            />
            <p className=" text-2xl md:text-4xl font-medium pt-3 md:pt-6">
              Cats vs. Dogs
            </p>
            <p className=" text-base">
              Collect and breed digital cats with CryptoKitties, the world’s
              most successful blockchain game.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpinPlayground;
