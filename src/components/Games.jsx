import React from 'react'
import Game2 from "../assets/game2.png"
import Game3 from "../assets/game3.png"
import Game4 from "../assets/game4.png"

const Games = () => {
  return (
    <div className='pt-16 mx-20'>
        <p className=' text-7xl space-grotesk text-center font-medium bg-gradient-to-b from-customStart to-customEnd bg-clip-text text-transparent'>GAMES</p>
        <div className=" pt-10 grid grid-cols-3">
          <div className="">
            <img className=' h-[463px] w-[426px]' src={Game2} alt="cats vs. dogs" />
            <p className=' text-4xl font-medium pt-6'>Cats vs. Dogs</p>
            <p>Collect and breed digital cats with CryptoKitties, the world’s most successful blockchain game.</p>
          </div>
          <div className="">
            <img className=' h-[600px] w-[426px]' src={Game3} alt="cats vs. dogs" />
            <p className=' text-4xl font-medium pt-6'>Cats vs. Dogs</p>
            <p>Collect and breed digital cats with CryptoKitties, the world’s most successful blockchain game.</p>
          </div>
          <div className="">
            <img className=' h-[463px] w-[426px]' src={Game4} alt="cats vs. dogs" />
            <p className=' text-4xl font-medium pt-6'>Cats vs. Dogs</p>
            <p>Collect and breed digital cats with CryptoKitties, the world’s most successful blockchain game.</p>
          </div>
        </div>
    </div>
  )
}

export default Games