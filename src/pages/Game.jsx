import React, { useEffect } from "react";
import Game1 from "../assets/game2.png";
import Game2 from "../assets/snake.jpg";
import Game3 from "../assets/game4.png";
import Footer from "../components/Footer";

const Games = () => {
  
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gradient-container overflow-x-hidden min-h-screen text-white space-grotesk">
      <div className='pt-28 px-4 md:px-[50px] lg:px-[72x] pb-4 md:pb-[30px] lg:pb-[40px]'>
        <p className=' text-4xl md:text-5xl lg:text-7xl space-grotesk text-center font-medium bg-gradient-to-b from-[#63D0FF] to-[#DC81FF] bg-clip-text text-transparent'>GAMES</p>
        <div className=" pt-10 md:grid md:grid-cols-3">
          <a href="https://www.catsvsdogs.xyz/" target="_blank" rel="noopener noreferrer" className=" cursor-pointer">
          <div className="w-full md:w-[426px] overflow-hidden">
            <img
              className=" h-[350px] transition-transform duration-500 transform hover:scale-110 w-full md:h-[463px] md:w-[426px]"
              src={Game1}
              alt="cats vs. dogs"
            />
            </div>
            <p className=" text-2xl md:text-4xl font-medium pt-3 md:pt-6">
              Cats vs. Dogs
            </p>
            <p className="text-base sfpro">
              Collect and breed digital cats with CryptoKitties, the world’s
              most successful blockchain game.
            </p>
          </a>

          <div className="pt-6 md:pt-0">
          <a href="https://66d96b10a7edd4de9770d922--sprightly-swan-309149.netlify.app/" target="_blank" rel="noopener noreferrer" className=" cursor-pointer">
            <div className="w-full md:w-[426px] overflow-hidden">
            <img
              className=" h-[400px] transition-transform duration-500 transform hover:scale-110 w-full md:h-[600px] md:w-[426px]"
              src={Game2}
              alt="Snake Game"
            />
            </div>
            <p className=" text-2xl md:text-4xl font-medium pt-3 md:pt-6">
              Serpent Chase
            </p>
            <p className="text-base sfpro">
              Hunt, collect, and breed unique serpents in Serpent Chase, the ultimate blockchain game. Compete, grow your collection, and unlock rare serpents to reign supreme.
            </p>
            </a>
          </div>

          <div className=" pt-6 md:pt-0">
            <div className="w-full md:w-[426px] overflow-hidden">
            <img
              className=" h-[350px] transition-transform duration-500 transform hover:scale-110 w-full md:h-[463px] md:w-[426px]"
              src={Game3}
              alt="Coming Soon"
            />
            </div>
            <p className=" text-2xl md:text-4xl font-medium pt-3 md:pt-6">
              COMING SOON
            </p>
          </div>
        </div>
    </div>
      <Footer />
    </div>
  );
};

export default Games;
